  import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ReservationService } from '../../../core/services/reservation.service';
import { MotelService } from '../../../core/services/motel.service';
import { OwnerDashboardSummary, RoomStatusBoardResponse, Reservation } from '../../../core/models/reservation.model';
import { Subscription, Subject, forkJoin } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';
import { PropertyUserComponent } from '../../../components/List-motels/property-user.component';
import { Motel } from '../../../core/models/motel.model';
import { UsersService } from '../../../core/services/user.service';
import { PaymentService } from '../../../core/services/payment.service';

@Component({
  selector: 'app-dashboard-owner',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, PropertyUserComponent],
  templateUrl: './dashboard-owner.html',
})
export class DashboardOwner implements OnInit, OnDestroy {
  private reservationService = inject(ReservationService);
  private motelService = inject(MotelService);
  private usersService = inject(UsersService);
  private paymentService = inject(PaymentService);
  
  profile$ = this.usersService.profile$;
  
  // Estados reactivos
  summary = signal<OwnerDashboardSummary | null>(null);
  rooms = signal<RoomStatusBoardResponse[]>([]);
  loading = signal(true);
  motelId = signal<number | null>(null);
  motels = signal<Motel[]>([]);
  
  // Vista activa del panel derecho
  activeView = signal<'properties' | 'rooms' | 'reservations'>('properties');

  // Verificación de código
  verifyCode = '';  // plain string — compatible with [(ngModel)]
  verificationResult = signal<Reservation | null>(null);
  verifying = signal(false);

  private sseSubscription: Subscription | null = null;
  private destroy$ = new Subject<void>();
  private refreshTrigger$ = new Subject<number>();

  ngOnInit() {
    this.refreshTrigger$.pipe(
      switchMap(id => forkJoin({
        summary: this.reservationService.getDashboardSummary(id),
        rooms: this.reservationService.getRoomStatusBoard(id),
      })),
      takeUntil(this.destroy$),
    ).subscribe({
      next: ({ summary, rooms }) => {
        this.summary.set(summary);
        this.rooms.set(rooms);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error refreshing dashboard data', err);
        this.loading.set(false);
      }
    });

    this.loadInitialData();

    // Cargar perfil si aún no está en el BehaviorSubject (sesión restaurada desde localStorage)
    this.usersService.profile$.pipe(takeUntil(this.destroy$)).subscribe(profile => {
      if (!profile) {
        this.usersService.loadProfile().pipe(takeUntil(this.destroy$)).subscribe();
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.reservationService.closeSSE();
    if (this.sseSubscription) {
      this.sseSubscription.unsubscribe();
    }
  }

  loadInitialData() {
    this.motelService.getMyMotels()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (motels) => {
          if (motels && motels.length > 0) {
            // Ordenar por ID para garantizar estabilidad
            const sorted = [...motels].sort((a, b) => a.id - b.id);
            this.motels.set(sorted);
            const id = sorted[0].id;
            this.motelId.set(id);
            this.fetchDashboardData(id);
            this.setupSSE();
          } else {
            this.loading.set(false);
          }
        },
        error: (err) => {
          console.error('Error loading motels', err);
          this.loading.set(false);
        }
      });
  }

  fetchDashboardData(id: number) {
    this.refreshTrigger$.next(id);
  }

  setupSSE() {
  this.sseSubscription = this.reservationService
    .subscribeToReservations()
    .subscribe({
      next: () => {
        const id = this.motelId();
        if (id) this.fetchDashboardData(id);
      },
      error: (err) => {
        console.warn('SSE desconectado definitivamente. Datos estáticos activos.', err);
      }
    });
}

  onVerifyCode() {
    const code = this.verifyCode.trim();
    if (!code) return;

    this.verifying.set(true);
    this.reservationService.verifyCode(code).subscribe({
      next: (res) => {
        this.verificationResult.set(res);
        this.verifying.set(false);
      },
      error: (err) => {
        console.error('Invalid code', err);
        this.verificationResult.set(null);
        this.verifying.set(false);
        alert('Código no encontrado o ya procesado');
      }
    });
  }

  onCheckIn(id: number) {
    this.reservationService.checkIn(id).subscribe(() => {
      this.verificationResult.set(null);
      this.verifyCode = '';
      const mid = this.motelId();
      if (mid) this.fetchDashboardData(mid);
    });
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'AVAILABLE': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'OCCUPIED': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'PENDING_CHECKIN': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'PENDING_CHECKOUT': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'CLEANING': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'CHECKED_OUT': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  }

  cancelReservation(id: number) {
    if (confirm('¿Seguro de cancelar esta reserva?')) {
      this.paymentService.cancelReservation(id).subscribe({
        next: () => {
          const mid = this.motelId();
          if (mid) this.fetchDashboardData(mid);
        },
        error: (err) => console.error('Error cancelando reserva', err)
      });
    }
  }

  deleteReservation(id: number) {
    if (confirm('¿Seguro de ELIMINAR permanentemente esta reserva? (Debe estar cancelada primero)')) {
      this.paymentService.deleteReservation(id).subscribe({
        next: () => {
          const mid = this.motelId();
          if (mid) this.fetchDashboardData(mid);
        },
        error: (err) => alert('No se pudo eliminar: ' + (err?.error?.message || err?.message))
      });
    }
  }
}
