import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';

// ── Servicios ────────────────────────────────────────────────────────────────
import { MotelService } from '../../core/services/motel.service';
import { RoomService }          from '../../core/services/room.service';
import { AuthService }          from '../../core/services/auth.service';
import { ServiceService }       from '../../core/services/services.service';

// ── Modelos ───────────────────────────────────────────────────────────────────
// Usamos el modelo local corregido — no el de register-establishment.types.ts
// que puede tener tipos distintos
import { Motel } from '../../core/models/motel.model';
import { Room }  from '../../core/models/room.model';
import { Service } from '../../core/models/services.model';

// ── Modal de pago ─────────────────────────────────────────────────────────────
import { PaymentModal } from '../../components/payment-modal/payment-modal';
import { Card } from '../../components/card/card';

// ── Tipos auxiliares ──────────────────────────────────────────────────────────
interface CalendarDay {
  day: number | null;
  date: Date | null;
  available: boolean;
  isPast: boolean;
}

interface RoomCalendarState {
  year: number;
  month: number;
  selectedDay: CalendarDay | null;
  selectedTime: string | null;
}

interface MotelEditForm {
  description: string;
  address: string;
  city: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-motel-profile',
  standalone: true,
  templateUrl: './motel-profile.html',
  imports: [CommonModule, FormsModule, Card],
})
export class MotelProfile implements OnInit {

  private route        = inject(ActivatedRoute);
  private motelService = inject(MotelService);
  private roomService  = inject(RoomService);
  private authService  = inject(AuthService);
  private svcService   = inject(ServiceService);
  private dialog       = inject(Dialog);

  motel: Motel | null = null;
  rooms: Room[]       = [];
  services: Service[] = [];
  loading             = false;
  savingMotel         = false;
  filterAvailable: boolean | null = null;

  editMode = false;
  editForm: MotelEditForm = { description: '', address: '', city: '', phoneNumber: '' };

  get isOwner(): boolean { return this.authService.isOwner(); }

  private calendarStates = new Map<number, RoomCalendarState>();

  readonly weekDays  = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
  readonly timeSlots = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];

  // ── Helper: obtiene la URL de una imagen del motel por índice ─────────────
  motelImgUrl(index: number, fallback = './assets/images/ubikLogo.jpg'): string {
    return this.motel?.imageUrls?.[index]?.url ?? fallback;
  }

  // ── Helper: estado de aprobación en español ───────────────────────────────
  get statusLabel(): string {
    const map: Record<string, string> = {
      APPROVED:     'Aprobado',
      PENDING:      'Pendiente',
      UNDER_REVIEW: 'En revisión',
      REJECTED:     'Rechazado',
    };
    return map[this.motel?.approvalStatus ?? ''] ?? '—';
  }

  // ── Helper: clase CSS para el badge de estado ─────────────────────────────
  get statusClass(): string {
    const map: Record<string, string> = {
      APPROVED:     'bg-green-900/40 border-green-600/50 text-green-400',
      PENDING:      'bg-yellow-900/40 border-yellow-600/50 text-yellow-400',
      UNDER_REVIEW: 'bg-yellow-900/40 border-yellow-600/50 text-yellow-400',
      REJECTED:     'bg-red-900/40 border-red-600/50 text-red-400',
    };
    return map[this.motel?.approvalStatus ?? ''] ?? 'bg-white/5 border-white/10 text-white/40';
  }

  ngOnInit(): void {
    const motelId = Number(
      this.route.snapshot.paramMap.get('id') ??
      this.route.snapshot.queryParamMap.get('id')
    );
    if (motelId) {
      this.loadMotel(motelId);
      this.loadRooms(motelId);
    }
    this.loadServices();
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Carga de datos
  // ══════════════════════════════════════════════════════════════════════════
  private loadMotel(id: number): void {
    this.motelService.getMotelById(id).subscribe({
      next: (m: any) => {
        // Cast a nuestro modelo local — la forma del objeto viene del backend
        this.motel = m as Motel;
        this.editForm = {
          description: m.description ?? '',
          address:     m.address     ?? '',
          city:        m.city        ?? '',
          phoneNumber: m.phoneNumber ?? '',
        };
      },
      error: (err) => console.error('Error cargando motel', err),
    });
  }

  private loadRooms(motelId: number): void {
    this.loading = true;
    // Usamos getRooms() público y filtramos por motelId en el cliente,
    // ya que getRoomsByMotel() puede requerir autenticación.
    this.roomService.getRooms().subscribe({
      next: (allRooms) => {
        this.rooms = allRooms.filter(r => r.motelId === motelId);
        const now = new Date();
        this.rooms.forEach((r) =>
          this.calendarStates.set(r.id, {
            year: now.getFullYear(), month: now.getMonth(),
            selectedDay: null, selectedTime: null,
          })
        );
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  private loadServices(): void {
    this.svcService.getServices().subscribe({
      next: (svcs) => { this.services = svcs; },
    });
  }

  getServiceName(id: number): string {
    return this.services.find((s) => s.id === id)?.name ?? `Servicio ${id}`;
  }

  getServiceIcon(id: number): string {
    return this.services.find((s) => s.id === id)?.icon ?? '';
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Filtrado
  // ══════════════════════════════════════════════════════════════════════════
  get filteredRooms(): Room[] {
    if (this.filterAvailable === null) return this.rooms;
    return this.rooms.filter((r) => r.isAvailable === this.filterAvailable);
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Edición (solo owner)
  // ══════════════════════════════════════════════════════════════════════════
  toggleEditMode(): void { this.editMode = !this.editMode; }

  saveMotelInfo(): void {
    if (!this.motel || this.savingMotel) return;
    this.savingMotel = true;

    this.motelService.updateMotel(this.motel.id, {
      description: this.editForm.description,
      address:     this.editForm.address,
      city:        this.editForm.city,
      phoneNumber: this.editForm.phoneNumber,
    } as any).subscribe({
      next: (updated: any) => {
        this.motel       = { ...this.motel!, ...updated } as Motel;
        this.editMode    = false;
        this.savingMotel = false;
      },
      error: (err) => { console.error('Error actualizando motel', err); this.savingMotel = false; },
    });
  }

  cancelEdit(): void {
    if (!this.motel) return;
    this.editForm = {
      description: this.motel.description ?? '',
      address:     this.motel.address,
      city:        this.motel.city,
      phoneNumber: this.motel.phoneNumber ?? '',
    };
    this.editMode = false;
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Calendario
  // ══════════════════════════════════════════════════════════════════════════
  private calState(roomId: number): RoomCalendarState {
    if (!this.calendarStates.has(roomId)) {
      const now = new Date();
      this.calendarStates.set(roomId, {
        year: now.getFullYear(), month: now.getMonth(),
        selectedDay: null, selectedTime: null,
      });
    }
    return this.calendarStates.get(roomId)!;
  }

  getCalendarMonth(roomId: number): string {
    const s = this.calState(roomId);
    return new Date(s.year, s.month, 1)
      .toLocaleDateString('es-CO', { month: 'long', year: 'numeric' })
      .replace(/^\w/, (c) => c.toUpperCase());
  }

  prevMonth(roomId: number): void {
    const s = this.calState(roomId);
    s.month === 0 ? (s.month = 11, s.year--) : s.month--;
    s.selectedDay = null; s.selectedTime = null;
  }

  nextMonth(roomId: number): void {
    const s = this.calState(roomId);
    s.month === 11 ? (s.month = 0, s.year++) : s.month++;
    s.selectedDay = null; s.selectedTime = null;
  }

  getCalendarDays(roomId: number): CalendarDay[] {
    const s     = this.calState(roomId);
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const firstDay    = new Date(s.year, s.month, 1).getDay();
    const daysInMonth = new Date(s.year, s.month + 1, 0).getDate();
    const days: CalendarDay[] = [];

    for (let i = 0; i < firstDay; i++)
      days.push({ day: null, date: null, available: false, isPast: false });

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(s.year, s.month, d); date.setHours(0, 0, 0, 0);
      const isPast    = date < today;
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      days.push({ day: d, date, available: !isPast && !isWeekend, isPast });
    }
    return days;
  }

  selectDay(roomId: number, day: CalendarDay): void {
    const s = this.calState(roomId);
    s.selectedDay = day; s.selectedTime = null;
  }

  selectTime(roomId: number, time: string): void {
    this.calState(roomId).selectedTime = time;
  }

  isSelectedDay(roomId: number, day: CalendarDay): boolean {
    const s = this.calState(roomId);
    return !!s.selectedDay && s.selectedDay.day === day.day && !!day.day;
  }

  getSelectedDay(roomId: number): CalendarDay | null { return this.calState(roomId).selectedDay; }
  getSelectedTime(roomId: number): string | null { return this.calState(roomId).selectedTime; }

  getSelectedDayLabel(roomId: number): string {
    const date = this.calState(roomId).selectedDay?.date;
    if (!date) return '';
    return date.toLocaleDateString('es-CO', { weekday: 'short', day: 'numeric', month: 'short' });
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Reserva
  // ══════════════════════════════════════════════════════════════════════════
  reserveRoom(room: Room): void {
    const s = this.calState(room.id);
    if (!s.selectedDay?.date || !s.selectedTime) return;
    if (!this.authService.isLogged()) return;

    this.dialog.open(PaymentModal, {
      data: {
        id:    room.id,
        date:  s.selectedDay.date.toISOString().split('T')[0],
        time:  s.selectedTime,
      },
      // Mobile: panel inferior full-width sin border-radius propio (el html lo pone)
      // Desktop: centrado con max-width
      panelClass: window.innerWidth < 768
        ? ['!p-0', '!m-0', '!max-w-full', '!w-full', 'fixed', 'bottom-0', 'left-0', 'right-0']
        : ['!rounded-3xl'],
      positionStrategy: undefined,
    });
  }
}