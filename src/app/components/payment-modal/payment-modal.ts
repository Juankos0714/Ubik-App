import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { RoomService, RoomReservation } from '../../core/services/room.service';
import { Room } from '../../core/models/room.model';
import { environment } from '../../../environments/environment';

interface CalendarDay {
  day: number | null;
  date: Date | null;
  isPast: boolean;
}

interface TimeSlot {
  time: string;
  label: string;
  available: boolean;
  reservation?: RoomReservation;
}

interface WeekDay {
  label: string;
  num: number;
  date: Date;
  isPast: boolean;
}

@Component({
  selector: 'app-payment-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment-modal.html',
})
export class PaymentModal implements OnInit {
  room: Room | null = null;
  loading = true;
  error = false;
  reserving = false;
  formTouched = false;

  form!: FormGroup;

  // ── Mobile wizard ────────────────────────────────────────────────────────
  mobileStep = 1;

  // ── Calendario ───────────────────────────────────────────────────────────
  private calYear = new Date().getFullYear();
  private calMonth = new Date().getMonth();

  calendarDays: CalendarDay[] = [];
  selectedDay: CalendarDay | null = null;

  readonly weekDays = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
  readonly dayNames = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];

  // All available time slots
  readonly ALL_SLOTS = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
  ];

  // Time slots with availability status
  entrySlots: TimeSlot[] = [];
  exitSameDaySlots: TimeSlot[] = [];
  exitNextDaySlots: TimeSlot[] = [];

  startTime = '';
  endTime = '';

  // ── Disponibilidad ────────────────────────────────────────────────────────
  checkingAvailability = false;
  availabilityOk: boolean | null = null;
  availabilityMsg = '';
  reservations: RoomReservation[] = [];

  // ── Calendar view mode ────────────────────────────────────────────────────
  calendarView: 'month' | 'week' = 'month';
  private currentWeekStart: Date = this.getWeekStart(new Date());

  // ══════════════════════════════════════════════════════════════════════════
  constructor(
    private dialogRef: DialogRef<any>,
    @Inject(DIALOG_DATA) public data: { id?: number; date?: string; time?: string },
    private roomService: RoomService,
    private fb: FormBuilder,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      document: ['', Validators.required],
      phone: ['', Validators.required],
    });

    this.buildCalendar();
    this.initializeTimeSlots();

    const id = this.data?.id;
    if (!id) {
      this.error = true;
      this.loading = false;
      return;
    }

    this.roomService.getRoomById(id).subscribe({
      next: (room) => {
        this.room = room;
        this.loading = false;

        if (this.data.date) {
          const pre = new Date(this.data.date + 'T00:00:00');
          this.selectedDay = { day: pre.getDate(), date: pre, isPast: false };
          this.calYear = pre.getFullYear();
          this.calMonth = pre.getMonth();
          this.buildCalendar();
          this.loadReservationsForDate(pre);
          this.mobileStep = 2;
        }

        if (this.data.time) {
          this.startTime = this.data.time;
        }
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
    });
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Initialize time slots
  // ══════════════════════════════════════════════════════════════════════════
  private initializeTimeSlots(): void {
    this.entrySlots = this.ALL_SLOTS.map((time) => ({
      time,
      label: time,
      available: true,
    }));

    this.exitSameDaySlots = this.ALL_SLOTS.map((time) => ({
      time,
      label: time,
      available: true,
    }));

    this.exitNextDaySlots = [
      '00:00',
      '01:00',
      '02:00',
      '03:00',
      '04:00',
      '05:00',
      '06:00',
      '07:00',
    ].map((time) => ({
      time,
      label: time,
      available: true,
    }));
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Load reservations for selected date
  // ══════════════════════════════════════════════════════════════════════════
  private loadReservationsForDate(date: Date): void {
    if (!this.room) return;

    const dateStr = date.toISOString().split('T')[0];

    this.roomService.getReservationsForDate(this.room.id, dateStr).subscribe({
      next: (reservations) => {
        this.reservations = reservations.filter(
          (r) => r.status === 'confirmed' || r.status === 'pending',
        );
        this.updateTimeSlotAvailability();
      },
      error: () => {
        // If endpoint doesn't exist yet, continue with all slots available
        this.reservations = [];
      },
    });
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Update time slot availability based on reservations
  // ══════════════════════════════════════════════════════════════════════════
  private updateTimeSlotAvailability(): void {
    // Reset all slots
    this.initializeTimeSlots();

    // Update entry slots - mark slots that overlap with reservations as unavailable
    this.entrySlots = this.entrySlots.map((slot) => {
      const reservation = this.findOverlappingReservation(slot.time, '23:59', false);
      return {
        ...slot,
        available: !reservation,
        reservation: reservation || undefined,
      };
    });

    // Update exit same-day slots
    if (this.startTime) {
      const startIndex = this.ALL_SLOTS.indexOf(this.startTime);
      this.exitSameDaySlots = this.ALL_SLOTS.slice(startIndex + 1).map((time) => {
        const reservation = this.findOverlappingReservation(time, '23:59', false);
        return {
          time,
          label: time,
          available: !reservation,
          reservation: reservation || undefined,
        };
      });
    }

    // Update exit next-day slots (all available for now, logic can be enhanced)
    this.exitNextDaySlots = this.exitNextDaySlots.map((slot) => {
      return {
        ...slot,
        available: true,
      };
    });
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Check if a time overlaps with any reservation
  // ══════════════════════════════════════════════════════════════════════════
  private findOverlappingReservation(
    time: string,
    endLimit: string,
    isNextDay: boolean,
  ): RoomReservation | null {
    const timeHour = parseInt(time.split(':')[0], 10);

    for (const reservation of this.reservations) {
      const resStartHour = parseInt(reservation.start_time.split(':')[0], 10);
      const resEndHour = parseInt(reservation.end_time.split(':')[0], 10);

      // Same day reservation
      if (!isNextDay) {
        if (timeHour >= resStartHour && timeHour < resEndHour) {
          return reservation;
        }
      }
    }

    return null;
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Get unavailable time ranges for display
  // ══════════════════════════════════════════════════════════════════════════
  getUnavailableRanges(): string[] {
    if (this.reservations.length === 0) return [];

    return this.reservations.map((r) => `${r.start_time} - ${r.end_time}`);
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Calendario
  // ══════════════════════════════════════════════════════════════════════════
  private buildCalendar(): void {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const firstDay = new Date(this.calYear, this.calMonth, 1).getDay();
    const daysInMo = new Date(this.calYear, this.calMonth + 1, 0).getDate();
    const days: CalendarDay[] = [];

    for (let i = 0; i < firstDay; i++) days.push({ day: null, date: null, isPast: false });

    for (let d = 1; d <= daysInMo; d++) {
      const date = new Date(this.calYear, this.calMonth, d);
      date.setHours(0, 0, 0, 0);
      days.push({ day: d, date, isPast: date < today });
    }

    this.calendarDays = days;
  }

  get currentMonthLabel(): string {
    return new Date(this.calYear, this.calMonth, 1)
      .toLocaleDateString('es-CO', { month: 'long', year: 'numeric' })
      .replace(/^\w/, (c) => c.toUpperCase());
  }

  prevMonth(): void {
    this.calMonth === 0 ? ((this.calMonth = 11), this.calYear--) : this.calMonth--;
    this.buildCalendar();
  }

  nextMonth(): void {
    this.calMonth === 11 ? ((this.calMonth = 0), this.calYear++) : this.calMonth++;
    this.buildCalendar();
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Week view helpers
  // ══════════════════════════════════════════════════════════════════════════
  private getWeekStart(date: Date): Date {
    const d = new Date(date);
    const day = d.getDay();
    d.setDate(d.getDate() - day);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  get weekDaysView(): WeekDay[] {
    const days: WeekDay[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < 7; i++) {
      const d = new Date(this.currentWeekStart);
      d.setDate(d.getDate() + i);
      days.push({
        label: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'][i],
        num: d.getDate(),
        date: d,
        isPast: d < today,
      });
    }
    return days;
  }

  get weekRangeLabel(): string {
    const start = new Date(this.currentWeekStart);
    const end = new Date(start);
    end.setDate(end.getDate() + 6);
    return `${start.getDate()} - ${end.getDate()} ${end.toLocaleDateString('es-CO', { month: 'short' })}`;
  }

  prevWeek(): void {
    this.currentWeekStart = new Date(this.currentWeekStart);
    this.currentWeekStart.setDate(this.currentWeekStart.getDate() - 7);
    this.buildCalendar();
  }

  nextWeek(): void {
    this.currentWeekStart = new Date(this.currentWeekStart);
    this.currentWeekStart.setDate(this.currentWeekStart.getDate() + 7);
    this.buildCalendar();
  }

  selectWeekDay(day: WeekDay): void {
    if (day.isPast) return;
    this.selectDate({ day: day.num, date: day.date, isPast: day.isPast });
  }

  // ══════════════════════════════════════════════════════════════════════════
  selectDate(day: CalendarDay): void {
    if (!day.date || day.isPast) return;

    this.selectedDay = day;
    this.startTime = '';
    this.endTime = '';
    this.availabilityOk = null;
    this.availabilityMsg = '';

    // Load reservations for this date
    this.loadReservationsForDate(day.date);
  }

  isSelectedDate(day: CalendarDay): boolean {
    return (
      !!this.selectedDay &&
      this.selectedDay.day === day.day &&
      this.selectedDay.date?.getMonth() === this.calMonth &&
      this.selectedDay.date?.getFullYear() === this.calYear
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // End date selection for range (if needed in future)
  // ══════════════════════════════════════════════════════════════════════════
  private _endDate: CalendarDay | null = null;

  get endDate(): CalendarDay | null {
    return this._endDate;
  }

  isEndDate(day: CalendarDay): boolean {
    return (
      !!this._endDate &&
      this._endDate.day === day.day &&
      this._endDate.date?.getMonth() === this.calMonth &&
      this._endDate.date?.getFullYear() === this.calYear
    );
  }

  get selectedDate(): Date | null {
    return this.selectedDay?.date ?? null;
  }

  get selectedDateLabel(): string {
    if (!this.selectedDay?.date) return '';
    return this.selectedDay.date.toLocaleDateString('es-CO', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });
  }

  get nextDayLabel(): string {
    if (!this.selectedDay?.date) return '';
    const next = new Date(this.selectedDay.date);
    next.setDate(next.getDate() + 1);
    return next.toLocaleDateString('es-CO', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    });
  }

  get crossesMidnight(): boolean {
    if (!this.startTime || !this.endTime) return false;
    const startHour = parseInt(this.startTime.split(':')[0], 10);
    const endHour = parseInt(this.endTime.split(':')[0], 10);
    return endHour <= startHour;
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Horario + verificación de disponibilidad
  // ══════════════════════════════════════════════════════════════════════════
  selectStartTime(slot: TimeSlot): void {
    // Check if slot is available
    if (!slot.available) return;

    this.startTime = slot.time;
    this.endTime = '';
    this.availabilityOk = null;
    this.availabilityMsg = '';

    // Update exit slots availability
    this.updateExitSlotsAvailability();
  }

  private updateExitSlotsAvailability(): void {
    if (!this.startTime) return;

    const startIndex = this.ALL_SLOTS.indexOf(this.startTime);

    // Same day exit slots
    this.exitSameDaySlots = this.ALL_SLOTS.slice(startIndex + 1).map((time) => {
      const reservation = this.findOverlappingReservation(time, '23:59', false);
      return {
        time,
        label: time,
        available: !reservation,
        reservation: reservation || undefined,
      };
    });
  }

  /**
   * Al elegir la hora de SALIDA → verificar disponibilidad inmediatamente.
   */
  selectEndTime(slot: TimeSlot, crossesMidnight: boolean = false): void {
    // Check if slot is available
    if (!slot.available) return;

    this.endTime = slot.time;
    this.verifyAvailability();
  }

  private verifyAvailability(): void {
    if (!this.room || !this.selectedDate || !this.startTime || !this.endTime) return;

    this.checkingAvailability = true;
    this.availabilityOk = null;
    this.availabilityMsg = '';

    const date = this.selectedDate.toISOString().split('T')[0];

    this.roomService.checkAvailability(this.room.id, date, this.startTime, this.endTime).subscribe({
      next: (res) => {
        this.availabilityOk = res.available;
        this.availabilityMsg = res.message ?? '';
        this.checkingAvailability = false;

        // En mobile, avanzar automáticamente al paso 3 si está disponible
        if (res.available && this.mobileStep === 2) {
          setTimeout(() => {
            this.mobileStep = 3;
          }, 600);
        }
      },
      error: () => {
        // Si el endpoint no existe aún, asumir disponible para no bloquear el flujo
        this.availabilityOk = true;
        this.checkingAvailability = false;
      },
    });
  }

  get timeSlotsAfter(): string[] {
    if (!this.startTime) return [];
    return this.timeSlots.slice(this.timeSlots.indexOf(this.startTime) + 1);
  }

  get totalHours(): number {
    if (!this.startTime || !this.endTime) return 0;
    const [sh] = this.startTime.split(':').map(Number);
    const [eh] = this.endTime.split(':').map(Number);

    if (this.crossesMidnight) {
      return 24 - sh + eh;
    }
    return eh - sh;
  }

  get totalPrice(): number {
    return (this.room?.price ?? 0) * this.totalHours;
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Validación
  // ══════════════════════════════════════════════════════════════════════════
  get canReserve(): boolean {
    return (
      !!this.selectedDate &&
      !!this.startTime &&
      !!this.endTime &&
      this.totalHours > 0 &&
      this.form.valid
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Reserva → Mercado Pago
  // ══════════════════════════════════════════════════════════════════════════
  reserve(): void {
    this.formTouched = true;
    if (!this.canReserve || !this.room) return;

    this.reserving = true;

    const payload = {
      roomId: this.room.id,
      motelId: this.room.motelId,
      date: this.selectedDate!.toISOString().split('T')[0],
      startTime: this.startTime,
      endTime: this.endTime,
      hours: this.totalHours,
      totalPrice: this.totalPrice,
      fullName: this.form.value.fullName,
      email: this.form.value.email,
      document: this.form.value.document,
      phone: this.form.value.phone,
    };

    this.http
      .post<{ checkoutUrl: string }>(`${environment.apiUrl}/reservations`, payload)
      .subscribe({
        next: (res) => {
          this.reserving = false;
          this.dialogRef.close({ success: true, payload });
          if (res?.checkoutUrl) window.location.href = res.checkoutUrl;
        },
        error: (err) => {
          console.error('Error creando reserva:', err);
          this.reserving = false;
        },
      });
  }

  close(): void {
    this.dialogRef.close();
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Helper getters for template compatibility
  // ══════════════════════════════════════════════════════════════════════════
  get timeSlots(): string[] {
    return this.ALL_SLOTS;
  }

  get monthLabel(): string {
    return this.currentMonthLabel;
  }

  weekDayMark(day: WeekDay): 'start' | 'end' | null {
    if (!this.selectedDay?.date) return null;
    const selStr = this.selectedDay.date.toISOString();
    if (day.date.toISOString() === selStr) return 'start';
    return null;
  }
}
