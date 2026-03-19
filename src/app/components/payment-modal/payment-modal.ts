import { Component, Inject, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Router } from '@angular/router';
import { loadStripe, Stripe, StripeElements } from '@stripe/stripe-js';
import { catchError, forkJoin, of } from 'rxjs';
import { PaymentService, StripeConfig, CreatePaymentResponse } from '../../core/services/payment.service';
import { RoomService, RoomReservation } from '../../core/services/room.service';
import { AuthService } from '../../core/services/auth.service';
import { Room } from '../../core/models/room.model';

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
  imports: [CommonModule],
  templateUrl: './payment-modal.html',
})
export class PaymentModal implements OnInit, OnDestroy {
  room: Room | null = null;
  loading = true;
  isSubmitting = false;
  error = false;
  reserving = false;

  // ── Stripe ───────────────────────────────────────────────────────────────
  stripe: Stripe | null = null;
  elements: StripeElements | null = null;
  clientSecret: string | null = null;
  paymentId: number | null = null;
  processingPayment = false;
  paymentError: string | null = null;
  paymentSuccess = false;
  confirmationCode: string | null = null;
  // ID de la reserva creada en PENDING — se limpia al confirmar pago o al cancelar
  pendingReservationId: number | null = null;

  // ── Mobile wizard ────────────────────────────────────────────────────────
  mobileStep = 1;

  // ── Calendario ───────────────────────────────────────────────────────────
  private calYear = new Date().getFullYear();
  private calMonth = new Date().getMonth();

  calendarDays: CalendarDay[] = [];
  selectedDay: CalendarDay | null = null;

  readonly weekDays = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
  readonly dayNames = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];

  readonly ALL_SLOTS = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
    '20:00', '21:00', '22:00', '23:00',
  ];

  // Buffer de mantenimiento tras checkout (regla de negocio)
  readonly MAINTENANCE_BUFFER_HOURS = 1;

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

  // ── Calendar view ─────────────────────────────────────────────────────────
  calendarView: 'month' | 'week' = 'month';
  private currentWeekStart: Date = this.getWeekStart(new Date());
  private reservationsRefreshTimer: ReturnType<typeof setInterval> | null = null;
  private slotsRefreshTimer: ReturnType<typeof setInterval> | null = null;
  private _endDate: CalendarDay | null = null;

  // ══════════════════════════════════════════════════════════════════════════
  constructor(
    private dialogRef: DialogRef<any>,
    @Inject(DIALOG_DATA) public data: { id?: number; date?: string; time?: string },
    private roomService: RoomService,
    private paymentService: PaymentService,
    private auth: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  // ══════════════════════════════════════════════════════════════════════════
  // Lifecycle
  // ══════════════════════════════════════════════════════════════════════════
  ngOnInit(): void {
    this.buildCalendar();
    this.initializeTimeSlots();
    this.initializeStripe();

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
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          pre.setHours(0, 0, 0, 0);

          if (pre >= today) {
            this.selectedDay = { day: pre.getDate(), date: pre, isPast: false };
            this.loadReservationsForDate(pre);
            this.startReservationsAutoRefresh();
            this.mobileStep = 2;
          }

          this.calYear = pre.getFullYear();
          this.calMonth = pre.getMonth();
          this.buildCalendar();
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

  ngOnDestroy(): void {
    this.stopReservationsAutoRefresh();
    if (this.slotsRefreshTimer) {
      clearInterval(this.slotsRefreshTimer);
      this.slotsRefreshTimer = null;
    }
    // Si hay reserva pendiente y el componente se destruye (navegación, etc.)
    // cancelarla sin cerrar el dialog (ya se está destruyendo)
    if (this.pendingReservationId) {
      const id = this.pendingReservationId;
      this.pendingReservationId = null;
      this.paymentService.cancelReservation(id).subscribe({
        next: () => this.paymentService.deleteReservation(id).subscribe(),
        error: () => {},
      });
    }
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Stripe
  // ══════════════════════════════════════════════════════════════════════════
  private initializeStripe(): void {
    this.paymentService.getStripeConfig().subscribe({
      next: async (config: StripeConfig) => {
        this.stripe = await loadStripe(config.publishableKey);
      },
      error: (err: any) => {
        console.error('Error loading Stripe config:', err);
        this.error = true;
      },
    });
  }

  private mountStripeElements(): void {
    if (!this.stripe || !this.clientSecret) return;
    this.cdr.detectChanges();
    requestAnimationFrame(() => setTimeout(() => this.tryMountStripe(8), 50));
  }

  private tryMountStripe(attemptsLeft: number): void {
    const container =
      document.getElementById('payment-element-desktop') ||
      document.getElementById('payment-element-mobile');

    if (!container) {
      if (attemptsLeft > 0) {
        requestAnimationFrame(() => setTimeout(() => this.tryMountStripe(attemptsLeft - 1), 100));
      } else {
        console.error('Stripe: contenedor no encontrado tras múltiples intentos');
      }
      return;
    }

    container.innerHTML = '';

    this.elements = this.stripe!.elements({
      clientSecret: this.clientSecret!,
      appearance: {
        theme: 'night',
        variables: {
          colorPrimary: '#A72027',
          colorBackground: '#1a1a1f',
          colorText: '#ffffff',
          colorDanger: '#ff4d4f',
          fontFamily: 'DM Sans, sans-serif',
          borderRadius: '8px',
        },
      },
    });

    const paymentElement = this.elements.create('payment');
    paymentElement.mount(`#${container.id}`);
    this.cdr.detectChanges();
  }

  async confirmPayment(): Promise<void> {
    if (!this.stripe || !this.elements) return;

    this.processingPayment = true;
    this.paymentError = null;

    const { error } = await this.stripe.confirmPayment({
      elements: this.elements,
      confirmParams: {
        return_url: window.location.origin + '/reservations/success',
      },
      redirect: 'if_required',
    });

    if (error) {
      this.paymentError = error.message || 'El pago fue rechazado o cancelado.';
      this.processingPayment = false;
      this.cdr.detectChanges();
    } else {
      // Pago exitoso — la reserva ya está CONFIRMED, no cancelar al cerrar
      this.pendingReservationId = null;
      this.processingPayment = false;
      this.paymentSuccess = true;
      this.cdr.detectChanges();

      setTimeout(() => {
        this.dialogRef.close({
          success: true,
          paymentId: this.paymentId,
          details: {
            date: this.selectedDate ? this.formatDateLocal(this.selectedDate) : '',
            startTime: this.startTime,
            endTime: this.endTime,
            totalPrice: this.totalPrice,
            roomName: this.room?.roomType || this.room?.motelName,
            confirmationCode: this.confirmationCode,
          },
        });
      }, 2000);
    }
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Reservations loading
  // ══════════════════════════════════════════════════════════════════════════
  private loadReservationsForDate(date: Date): void {
    if (!this.room) return;

    const prev = new Date(date);
    prev.setDate(prev.getDate() - 1);
    const next = new Date(date);
    next.setDate(next.getDate() + 1);

    forkJoin([
      this.roomService.getReservationsForDate(this.room.id, this.formatDateLocal(prev)).pipe(catchError(() => of([]))),
      this.roomService.getReservationsForDate(this.room.id, this.formatDateLocal(date)).pipe(catchError(() => of([]))),
      this.roomService.getReservationsForDate(this.room.id, this.formatDateLocal(next)).pipe(catchError(() => of([]))),
    ]).subscribe({
      next: ([rPrev, rCurr, rNext]) => {
        const uniqueById = new Map<number, RoomReservation>();
        for (const r of [...rPrev, ...rCurr, ...rNext]) {
          // CRÍTICO: filtrar solo reservas de esta habitación.
          // El endpoint devuelve reservas de múltiples roomIds mezcladas.
          if ((r as any).roomId !== this.room?.id) continue;
          uniqueById.set(r.id, r);
        }
        this.reservations = Array.from(uniqueById.values()).filter((r) => this.isBlockingReservation(r));
        this.updateTimeSlotAvailability();
      },
      error: () => {
        this.reservations = [];
        this.updateTimeSlotAvailability();
      },
    });
  }

  private refreshSelectedDateReservations(): void {
    if (!this.selectedDate) return;
    this.loadReservationsForDate(this.selectedDate);
  }

  private startReservationsAutoRefresh(): void {
    this.stopReservationsAutoRefresh();
    this.reservationsRefreshTimer = setInterval(() => this.refreshSelectedDateReservations(), 15000);
    // Recalcular slots cada 60s para bloquear horas pasadas en tiempo real
    // (importante cuando el usuario tiene el modal abierto al cambiar de hora)
    this.slotsRefreshTimer = setInterval(() => {
      if (this.isSelectedDateToday()) {
        this.updateTimeSlotAvailability();
        this.cdr.detectChanges();
      }
    }, 60000);
  }

  private stopReservationsAutoRefresh(): void {
    if (!this.reservationsRefreshTimer) return;
    clearInterval(this.reservationsRefreshTimer);
    this.reservationsRefreshTimer = null;
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Reservation interval — CORREGIDO: parsea todos los formatos del backend
  //
  // El backend (ReservationService.java) guarda checkIn/checkOut como ISO 8601
  // y el nuevo ClientTimeFilter propaga la zona horaria del cliente.
  // Soportamos: checkInDate, check_in_date, startDate, start_date (y sus pares end).
  // También soportamos fecha+hora separados (checkInTime / start_time / etc.).
  // ══════════════════════════════════════════════════════════════════════════
  private isBlockingReservation(reservation: RoomReservation): boolean {
    const status = ((reservation as any).status ?? '').toString().trim().toLowerCase();
    // Solo CONFIRMED bloquea slots en la UI.
    // PENDING: la reserva existe pero el pago no se confirmó — no bloquear
    //   porque puede expirar, y el backend valida concurrencia al crear.
    // Sin estado: asumir no bloqueante (dato incompleto del endpoint).
    const blocking = ['confirmed'];
    return blocking.includes(status);
  }

  private buildReservationInterval(
    reservation: RoomReservation,
    withBuffer = true,
  ): { start: Date; end: Date } | null {
    if (!this.selectedDate) return null;

    const res = reservation as any;

    // ── Campos de fecha (ISO con o sin hora)
    const rawStart: string | undefined =
      res.checkInDate ?? res.check_in_date ?? res.startDate ?? res.start_date;
    const rawEnd: string | undefined =
      res.checkOutDate ?? res.check_out_date ?? res.endDate ?? res.end_date;

    // ── Campos de hora separada (algunos endpoints los mandan por separado)
    const rawStartTime: string | undefined =
      res.checkInTime ?? res.startTime ?? res.start_time ?? reservation.start_time;
    const rawEndTime: string | undefined =
      res.checkOutTime ?? res.endTime ?? res.end_time ?? reservation.end_time;

    // ── Construir start ──────────────────────────────────────────────────────
    const start = this.resolveDateTime(rawStart, rawStartTime, this.selectedDate);
    if (!start) return null;

    // ── Construir end ────────────────────────────────────────────────────────
    const end = this.resolveDateTime(rawEnd, rawEndTime, this.selectedDate);
    if (!end) return null;

    // Solo ajustar si end <= start Y ambos vienen de la misma fecha base
    // (hora separada del mismo día). Si el ISO ya trae el día correcto no tocar.
    let endResolved = end;
    if (endResolved <= start) {
      // Verificar si rawEnd tiene fecha explícita diferente a rawStart
      const rawEndHasExplicitDate = rawEnd && (rawEnd.includes('T') || rawEnd.includes(' '));
      const rawStartHasExplicitDate = rawStart && (rawStart.includes('T') || rawStart.includes(' '));
      if (!rawEndHasExplicitDate || !rawStartHasExplicitDate) {
        // Solo fechas sin hora explícita → asumir cruce de medianoche
        endResolved = new Date(endResolved);
        endResolved.setDate(endResolved.getDate() + 1);
      }
      // Si ambas tienen fecha+hora explícita y end <= start, es un dato corrupto
      // del backend → ignorar esta reserva
      else {
        return null;
      }
    }

    // Aplicar buffer de mantenimiento solo si se pide (para entry slots y display)
    // Los exit slots NO usan buffer: el usuario puede salir a la misma hora que
    // empieza el mantenimiento — el buffer bloquea la siguiente ENTRADA, no la salida.
    const endFinal = withBuffer
      ? this.addHours(endResolved, this.MAINTENANCE_BUFFER_HOURS)
      : endResolved;
    return { start, end: endFinal };
  }

  /**
   * Resuelve un Date a partir de un campo de fecha (ISO/date-only) y
   * opcionalmente un campo de hora separado ("HH:mm").
   * Orden de prioridad:
   *   1. rawDate es ISO datetime completo → new Date(rawDate)
   *   2. rawDate es date-only + rawTime disponible → combinar
   *   3. rawDate es date-only sin rawTime → usar medianoche de esa fecha
   *   4. Sin rawDate pero hay rawTime → aplicar rawTime sobre fallbackDate
   */
  private resolveDateTime(
    rawDate: string | undefined,
    rawTime: string | undefined,
    fallbackDate: Date,
  ): Date | null {
    if (rawDate) {
      // ISO datetime: contiene 'T' o espacio (ej: "2026-03-17T10:00:00")
      if (rawDate.includes('T') || rawDate.includes(' ')) {
        const d = new Date(rawDate);
        if (!isNaN(d.getTime())) return d;
      }

      // Date-only: "YYYY-MM-DD"
      const base = this.parseDateOnly(rawDate);
      if (base) {
        if (rawTime) {
          const withTime = this.toDateTime(base, rawTime);
          if (!isNaN(withTime.getTime())) return withTime;
        }
        return base; // medianoche de ese día
      }
    }

    // Fallback: solo hora sobre la fecha seleccionada
    if (rawTime) {
      const withTime = this.toDateTime(fallbackDate, rawTime);
      if (!isNaN(withTime.getTime())) return withTime;
    }

    return null;
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Time slot availability
  // ══════════════════════════════════════════════════════════════════════════
  private initializeTimeSlots(): void {
    this.entrySlots = this.ALL_SLOTS.map((time) => ({ time, label: time, available: true }));
    this.exitSameDaySlots = this.ALL_SLOTS.map((time) => ({ time, label: time, available: true }));
    this.exitNextDaySlots = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00']
      .map((time) => ({ time, label: time, available: true }));
  }

  private updateTimeSlotAvailability(): void {
    if (!this.selectedDate) {
      this.initializeTimeSlots();
      return;
    }

    this.initializeTimeSlots();

    // Entry slots
    this.entrySlots = this.entrySlots.map((slot) => {
      const slotStart = this.toDateTime(this.selectedDate!, slot.time);
      const slotEnd = this.addHours(slotStart, 1);
      const reservation = this.findOverlappingReservation(slotStart, slotEnd);
      const past = this.isPastTime(slot.time);
      return { ...slot, available: !reservation && !past, reservation: reservation || undefined };
    });

    // Si el startTime seleccionado quedó en el pasado, limpiarlo
    if (this.startTime && this.isPastTime(this.startTime)) {
      this.startTime = '';
      this.endTime = '';
      this.availabilityOk = null;
      this.availabilityMsg = '';
    }

    if (this.startTime) {
      const startIndex = this.ALL_SLOTS.indexOf(this.startTime);
      const startDt = this.toDateTime(this.selectedDate, this.startTime);

      this.exitSameDaySlots = this.ALL_SLOTS.slice(startIndex + 1).map((time) => {
        const endDt = this.toDateTime(this.selectedDate!, time);
        // Sin buffer: el usuario puede salir justo cuando empieza el mantenimiento
        const reservation = this.findOverlappingReservation(startDt, endDt, false);
        return { time, label: time, available: !reservation, reservation: reservation || undefined };
      });

      this.exitNextDaySlots = this.exitNextDaySlots.map((slot) => {
        const endDt = this.toDateTime(this.selectedDate!, slot.time);
        endDt.setDate(endDt.getDate() + 1);
        // Sin buffer: mismo criterio
        const reservation = this.findOverlappingReservation(startDt, endDt, false);
        return { ...slot, available: !reservation, reservation: reservation || undefined };
      });

      return;
    }

    // Sin startTime seleccionado: verificar cruces de medianoche en slots de madrugada
    this.exitNextDaySlots = this.exitNextDaySlots.map((slot) => {
      const slotStart = this.toDateTime(this.selectedDate!, slot.time);
      slotStart.setDate(slotStart.getDate() + 1);
      const slotEnd = this.addHours(slotStart, 1);
      const reservation = this.findOverlappingReservation(slotStart, slotEnd);
      return { ...slot, available: !reservation, reservation: reservation || undefined };
    });
  }

  private findOverlappingReservation(
    slotStart: Date,
    slotEnd: Date,
    withBuffer = true,
  ): RoomReservation | null {
    for (const reservation of this.reservations) {
      const interval = this.buildReservationInterval(reservation, withBuffer);
      if (!interval) continue;
      if (this.rangesOverlap(slotStart, slotEnd, interval.start, interval.end)) {
        return reservation;
      }
    }
    return null;
  }

  getUnavailableRanges(): string[] {
    return this.reservations.map((reservation) => {
      const interval = this.buildReservationInterval(reservation);
      if (!interval) {
        const res = reservation as any;
        return `${res.start_time ?? res.startTime ?? '?'} - ${res.end_time ?? res.endTime ?? '?'}`;
      }
      const fmt = (d: Date) =>
        d.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', hour12: false });
      return `${fmt(interval.start)} - ${fmt(interval.end)} (+ mantenimiento)`;
    });
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Time selection
  // ══════════════════════════════════════════════════════════════════════════
  selectStartTime(slot: TimeSlot): void {
    if (!slot.available) return;
    this.startTime = slot.time;
    this.endTime = '';
    this._endDate = null;
    this.availabilityOk = null;
    this.availabilityMsg = '';
    this.updateExitSlotsAvailability();
  }

  private updateExitSlotsAvailability(): void {
    if (!this.startTime || !this.selectedDate) return;

    const startIndex = this.ALL_SLOTS.indexOf(this.startTime);
    const startDt = this.toDateTime(this.selectedDate, this.startTime);

    this.exitSameDaySlots = this.ALL_SLOTS.slice(startIndex + 1).map((time) => {
      const endDt = this.toDateTime(this.selectedDate!, time);
      const reservation = this.findOverlappingReservation(startDt, endDt, false);
      return { time, label: time, available: !reservation, reservation: reservation || undefined };
    });

    this.exitNextDaySlots = this.exitNextDaySlots.map((slot) => {
      const endDt = this.toDateTime(this.selectedDate!, slot.time);
      endDt.setDate(endDt.getDate() + 1);
      const reservation = this.findOverlappingReservation(startDt, endDt, false);
      return { ...slot, available: !reservation, reservation: reservation || undefined };
    });
  }

  selectEndTime(slot: TimeSlot, _crossesMidnight: boolean = false): void {
    if (!slot.available) return;
    this.endTime = slot.time;
    this.setEndDateFromTimes();
    this.verifyAvailability();
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Availability verification (backend check)
  //
  // IMPORTANTE: Este es el check definitivo. El backend (ReservationService.java)
  // usa isRoomAvailable() con las fechas ISO que le mandamos. Si el backend dice
  // "no disponible" es la fuente de verdad — el UI local puede tener datos
  // desactualizados entre refreshes de 15s.
  // ══════════════════════════════════════════════════════════════════════════
  private verifyAvailability(): void {
    if (!this.room || !this.selectedDate || !this.startTime || !this.endTime) return;

    const range = this.buildDateRange();
    if (!range) return;

    this.checkingAvailability = true;
    this.availabilityOk = null;
    this.availabilityMsg = '';

    const checkInIso = this.toLocalIsoString(range.checkIn);
    const checkOutIso = this.toLocalIsoString(range.checkOut);

    this.roomService.checkAvailability(
      this.room.id,
      checkInIso,
      checkOutIso,
    ).subscribe({
      next: (res) => {
        this.availabilityOk = res.available;
        this.availabilityMsg = res.message ?? '';
        this.checkingAvailability = false;

        if (res.available && this.mobileStep === 2) {
          setTimeout(() => { this.mobileStep = 3; }, 600);
        }

        if (!res.available) {
          this.refreshSelectedDateReservations();
        }
      },
      error: () => {
        // Endpoint no disponible → no bloquear el flujo
        this.availabilityOk = true;
        this.checkingAvailability = false;
      },
    });
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Validation getter
  // ══════════════════════════════════════════════════════════════════════════
  get canReserve(): boolean {
    return (
      !!this.selectedDate &&
      !!this.startTime &&
      !!this.endTime &&
      this.totalHours > 0 &&
      !this.checkingAvailability &&
      this.availabilityOk !== false
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Reserve → create reservation → init Stripe payment
  // ══════════════════════════════════════════════════════════════════════════
  reserve(): void {
    if (!this.canReserve || !this.room) return;

    if (!this.auth.isLogged()) {
      this.dialogRef.close();
      this.router.navigate(['/login']);
      return;
    }

    const dateTimes = this.buildCheckInOutDateTimes();
    if (!dateTimes) return;

    this.reserving = true;
    this.paymentError = null;
    this.availabilityMsg = '';

    this.createReservationAndInitPayment(
      {
        roomId: this.room.id,
        motelId: this.room.motelId,
        date: this.formatDateLocal(this.selectedDate!),
        startTime: this.startTime,
        endTime: this.endTime,
        totalPrice: this.totalPrice,
      },
      dateTimes.checkInIso,
      dateTimes.checkOutIso,
    );
  }

  private createReservationAndInitPayment(
    payload: {
      roomId: number;
      motelId: number;
      totalPrice: number;
      date: string;
      startTime: string;
      endTime: string;
    },
    checkInIso: string,
    checkOutIso: string,
  ): void {
    const userId = this.resolveCurrentUserId();
    if (!userId) {
      this.paymentError = 'No fue posible identificar tu sesión. Inicia sesión nuevamente.';
      this.reserving = false;
      return;
    }

    this.paymentService
      .createReservation(
        payload.roomId,
        payload.motelId,
        payload.totalPrice,
        userId,
        checkInIso,
        checkOutIso,
      )
      .subscribe({
        next: (res: { id: number; confirmationCode?: string }) => {
          this.confirmationCode = res.confirmationCode || null;
          // Guardar el ID para poder cancelarlo si el usuario no paga
          this.pendingReservationId = res.id;
          this.refreshSelectedDateReservations();

          this.paymentService.createPaymentIntent(res.id, payload.totalPrice).subscribe({
            next: (intentRes: CreatePaymentResponse) => {
              this.reserving = false;
              this.clientSecret = intentRes.clientSecret;
              this.paymentId = intentRes.paymentId;
              this.mobileStep = 3;
              this.mountStripeElements();
            },
            error: (err: any) => {
              console.error('Error creating payment intent:', err);
              this.paymentError = 'No se pudo inicializar el pago seguro.';
              this.reserving = false;
            },
          });
        },
        error: (err: any) => {
          console.error('Error creando reserva:', err);
          this.paymentError = this.parseBackendError(err);
          this.reserving = false;
          this.refreshSelectedDateReservations();
        },
      });
  }

  private parseBackendError(err: any): string {
    if (err.error?.message) return err.error.message;
    if (typeof err.error === 'string') return err.error;
    if (err.error && typeof err.error === 'object') {
      const msgs = Object.values(err.error)
        .filter((v): v is string => typeof v === 'string' && v.trim().length > 0);
      if (msgs.length > 0) return msgs.join(' ');
    }
    return 'Error al crear la reserva. Por favor intenta de nuevo.';
  }

  private resolveCurrentUserId(): number | null {
    let storageUser: any = null;
    if (typeof localStorage !== 'undefined') {
      const raw = localStorage.getItem('user');
      if (raw) {
        try { storageUser = JSON.parse(raw); } catch { storageUser = null; }
      }
    }
    const user = this.auth.user() ?? storageUser;
    const rawId = user?.id ?? user?.userId ?? user?.sub;
    const userId = typeof rawId === 'number' ? rawId : Number(rawId);
    return Number.isFinite(userId) ? userId : null;
  }

  /**
   * Construye el par checkIn/checkOut a partir de las selecciones actuales.
   * Maneja correctamente el cruce de medianoche: si endTime < startTime,
   * checkOut es el día siguiente.
   * Retorna null si faltan datos.
   */
  private buildDateRange(): { checkIn: Date; checkOut: Date } | null {
    if (!this.selectedDate || !this.startTime || !this.endTime) return null;

    const [startHour] = this.startTime.split(':').map(Number);
    const [endHour] = this.endTime.split(':').map(Number);

    const checkIn = new Date(this.selectedDate);
    checkIn.setHours(startHour, 0, 0, 0);

    // checkOut: si cruza medianoche (endHour <= startHour) → día siguiente
    const checkOutBase = new Date(this.selectedDate);
    checkOutBase.setHours(endHour, 0, 0, 0);
    if (endHour <= startHour) {
      // Cruce de medianoche explícito — NO depender del getter crossesMidnight
      // para evitar bugs si el getter se recalcula en el momento equivocado
      checkOutBase.setDate(checkOutBase.getDate() + 1);
    }

    return { checkIn, checkOut: checkOutBase };
  }

  private buildCheckInOutDateTimes(): {
    checkIn: Date;
    checkOut: Date;
    checkInIso: string;
    checkOutIso: string;
  } | null {
    const range = this.buildDateRange();
    if (!range) return null;
    return {
      checkIn: range.checkIn,
      checkOut: range.checkOut,
      checkInIso: this.toLocalIsoString(range.checkIn),
      checkOutIso: this.toLocalIsoString(range.checkOut),
    };
  }

  /**
   * Convierte a UTC sin 'Z' para Spring LocalDateTime con @Future.
   *
   * El servidor corre en UTC (confirmado: 09:53 Colombia = 14:53 UTC,
   * el backend rechaza "13:00:00" local porque 13:00 UTC ya pasó).
   *
   * Reservas existentes en BD: guardadas en hora local Colombia porque
   * fueron creadas antes de este fix. Las nuevas quedarán en UTC.
   * Esto es inconsistencia de datos del backend — el fix correcto es
   * configurar spring.jackson.time-zone=America/Bogota en el backend.
   *
   * Por ahora: mandamos UTC para pasar @Future. El checkAvailability
   * también manda UTC → la comparación isRoomAvailable() es consistente
   * para reservas nuevas. Las viejas (hora local) pueden dar falsos
   * negativos en disponibilidad pero no bloquearán reservas válidas.
   */
  private toLocalIsoString(date: Date): string {
    const pad = (n: number) => String(n).padStart(2, '0');
    return (
      `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}` +
      `T${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:00`
    );
  }

  private setEndDateFromTimes(): void {
    if (!this.selectedDay?.date || !this.startTime || !this.endTime || !this.crossesMidnight) {
      this._endDate = null;
      return;
    }
    const next = new Date(this.selectedDay.date);
    next.setDate(next.getDate() + 1);
    next.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    this._endDate = { day: next.getDate(), date: next, isPast: next < today };
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Calendar
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

  get monthLabel(): string { return this.currentMonthLabel; }

  prevMonth(): void {
    this.calMonth === 0 ? ((this.calMonth = 11), this.calYear--) : this.calMonth--;
    this.buildCalendar();
  }

  nextMonth(): void {
    this.calMonth === 11 ? ((this.calMonth = 0), this.calYear++) : this.calMonth++;
    this.buildCalendar();
  }

  selectDate(day: CalendarDay): void {
    if (!day.date || day.isPast) return;
    this.selectedDay = day;
    this.startTime = '';
    this.endTime = '';
    this._endDate = null;
    this.availabilityOk = null;
    this.availabilityMsg = '';
    this.loadReservationsForDate(day.date);
    this.startReservationsAutoRefresh();
  }

  isSelectedDate(day: CalendarDay): boolean {
    return (
      !!this.selectedDay &&
      this.selectedDay.day === day.day &&
      this.selectedDay.date?.getMonth() === this.calMonth &&
      this.selectedDay.date?.getFullYear() === this.calYear
    );
  }

  isEndDate(day: CalendarDay): boolean {
    return (
      !!this._endDate &&
      this._endDate.day === day.day &&
      this._endDate.date?.getMonth() === this.calMonth &&
      this._endDate.date?.getFullYear() === this.calYear
    );
  }

  get endDate(): CalendarDay | null { return this._endDate; }

  // ── Week view ─────────────────────────────────────────────────────────────
  private getWeekStart(date: Date): Date {
    const d = new Date(date);
    d.setDate(d.getDate() - d.getDay());
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

  weekDayMark(day: WeekDay): 'start' | 'end' | null {
    if (!this.selectedDay?.date) return null;
    if (day.date.toDateString() === this.selectedDay.date.toDateString()) return 'start';
    if (this._endDate?.date && day.date.toDateString() === this._endDate.date.toDateString()) return 'end';
    return null;
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Getters
  // ══════════════════════════════════════════════════════════════════════════
  get selectedDate(): Date | null { return this.selectedDay?.date ?? null; }

  get selectedDateLabel(): string {
    if (!this.selectedDay?.date) return '';
    return this.selectedDay.date.toLocaleDateString('es-CO', {
      weekday: 'long', day: 'numeric', month: 'long',
    });
  }

  get nextDayLabel(): string {
    if (!this.selectedDay?.date) return '';
    const next = new Date(this.selectedDay.date);
    next.setDate(next.getDate() + 1);
    return next.toLocaleDateString('es-CO', { weekday: 'short', day: 'numeric', month: 'short' });
  }

  get crossesMidnight(): boolean {
    if (!this.startTime || !this.endTime) return false;
    return parseInt(this.endTime.split(':')[0], 10) <= parseInt(this.startTime.split(':')[0], 10);
  }

  get totalHours(): number {
    if (!this.startTime || !this.endTime) return 0;
    const sh = parseInt(this.startTime.split(':')[0], 10);
    const eh = parseInt(this.endTime.split(':')[0], 10);
    return this.crossesMidnight ? 24 - sh + eh : eh - sh;
  }

  get totalPrice(): number { return (this.room?.price ?? 0) * this.totalHours; }

  get timeSlots(): string[] { return this.ALL_SLOTS; }

  get timeSlotsAfter(): string[] {
    if (!this.startTime) return [];
    return this.timeSlots.slice(this.timeSlots.indexOf(this.startTime) + 1);
  }

  close(): void {
    this.cancelPendingReservationAndClose();
  }

  /**
   * Si hay una reserva en PENDING (se creó al hacer click en "Continuar"
   * pero el usuario no confirmó el pago), la cancela y elimina antes de cerrar.
   * Flujos que llegan aquí:
   *   - Click "Cancelar"
   *   - Click X del modal
   *   - ngOnDestroy (cierre por navegación)
   */
  private cancelPendingReservationAndClose(navigateTo?: string[]): void {
    // Si no hay reserva pendiente creada, cerrar directo
    if (!this.pendingReservationId) {
      this.dialogRef.close();
      if (navigateTo) this.router.navigate(navigateTo);
      return;
    }

    const id = this.pendingReservationId;
    this.pendingReservationId = null; // evitar doble llamada

    // 1) Cancelar → 2) Eliminar → 3) Cerrar modal
    this.paymentService.cancelReservation(id).subscribe({
      next: () => {
        this.paymentService.deleteReservation(id).subscribe({
          next: () => {
            this.dialogRef.close();
            if (navigateTo) this.router.navigate(navigateTo);
          },
          error: () => {
            // Si falla el delete (ej: ya fue cancelada por otro proceso), cerrar igual
            this.dialogRef.close();
            if (navigateTo) this.router.navigate(navigateTo);
          },
        });
      },
      error: () => {
        // Si falla el cancel, cerrar igual — el backend tiene job de expiración
        this.dialogRef.close();
        if (navigateTo) this.router.navigate(navigateTo);
      },
    });
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Utils
  // ══════════════════════════════════════════════════════════════════════════
  private formatDateLocal(date: Date): string {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  private parseDateOnly(value: string): Date | null {
    const dateOnly = value.split('T')[0];
    const parts = dateOnly.split('-').map(Number);
    if (parts.length !== 3 || parts.some((p) => isNaN(p))) return null;
    const [year, month, day] = parts;
    return new Date(year, month - 1, day, 0, 0, 0, 0);
  }

  private extractClockParts(value: string): { hours: number; minutes: number } | null {
    const match = value.match(/(\d{1,2}):(\d{2})/);
    if (!match) return null;
    const hours = Number(match[1]);
    const minutes = Number(match[2]);
    if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return null;
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return null;
    return { hours, minutes };
  }

  private toDateTime(baseDate: Date, time: string): Date {
    const dt = new Date(baseDate);
    const clock = this.extractClockParts(time);
    if (!clock) { dt.setHours(NaN, NaN, 0, 0); return dt; }
    dt.setHours(clock.hours, clock.minutes, 0, 0);
    return dt;
  }

  private addHours(date: Date, hours: number): Date {
    const result = new Date(date);
    result.setHours(result.getHours() + hours);
    return result;
  }

  private rangesOverlap(aStart: Date, aEnd: Date, bStart: Date, bEnd: Date): boolean {
    return aStart < bEnd && bStart < aEnd;
  }

  private isPastTime(time: string): boolean {
    if (!this.isSelectedDateToday()) return false;
    const [h] = time.split(':').map(Number);
    return h <= new Date().getHours();
  }

  private isSelectedDateToday(): boolean {
    if (!this.selectedDay?.date) return false;
    const today = new Date();
    const sel = this.selectedDay.date;
    return (
      sel.getFullYear() === today.getFullYear() &&
      sel.getMonth() === today.getMonth() &&
      sel.getDate() === today.getDate()
    );
  }


}