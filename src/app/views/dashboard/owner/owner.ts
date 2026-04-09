import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { ConfirmModal } from '../../../components/confirm-modal/confirm-modal';
import { QRScannerModal } from '../../../components/qr-scanner-modal/qr-scanner-modal';
import { ReservationDetailModal } from '../../../components/reservation-detail-modal/reservation-detail-modal';
import { FormsModule } from '@angular/forms';
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
  imports: [CommonModule, FormsModule, PropertyUserComponent],
  templateUrl: './dashboard-owner.html',
})
export class DashboardOwner implements OnInit, OnDestroy {
  private reservationService = inject(ReservationService);
  private motelService = inject(MotelService);
  private usersService = inject(UsersService);
  private paymentService = inject(PaymentService);
  private dialog = inject(Dialog);
  
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
        this.verifying.set(false);
        this.openReservationDetail(res);
        this.verifyCode = '';
      },
      error: (err) => {
        console.error('Invalid code', err);
        this.verifying.set(false);
        this.verificationResult.set(null);
        alert('Código no encontrado o ya procesado');
      }
    });
  }

  openScanner() {
    const dialogRef = this.dialog.open<string>(QRScannerModal, {
      panelClass: ['!rounded-[2.5rem]', 'max-w-md', 'w-full']
    });

    dialogRef.closed.subscribe(code => {
      if (code) {
        this.verifyCode = code;
        this.onVerifyCode();
      }
    });
  }

  openReservationDetail(res: any) {
    // Seguridad: verificar si el dueño actual posee el motel de esta reserva
    const ownedIds = this.motels().map(m => m.id);
    const mId = res.motelId || this.motelId(); // Fallback if partial from board
    const isActuallyMine = !!mId && ownedIds.includes(mId);

    const dialogRef = this.dialog.open(ReservationDetailModal, {
      data: {
        reservation: {
          ...res,
          id: res.id || res.reservationId, // Normalizar id
          status: res.status || res.reservationStatus, // Normalizar status
          motelId: mId
        },
        isOwner: isActuallyMine
      },
      panelClass: ['!rounded-[2.5rem]', 'max-w-lg', 'w-full']
    });


    dialogRef.closed.subscribe((result: any) => {
      if (result?.success) {
        const mid = this.motelId();
        if (mid) this.fetchDashboardData(mid);
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
    const dialogRef = this.dialog.open(ConfirmModal, {
      data: {
        title: 'Cancelar reserva',
        message: '¿Estás seguro de que deseas cancelar esta reserva? Esta acción no se puede deshacer.',
        confirmText: 'Sí, cancelar',
        cancelText: 'Volver',
      },
      panelClass: ['!rounded-2xl'],
    });

    dialogRef.closed.subscribe((confirmed) => {
      if (!confirmed) return;
      this.paymentService.cancelReservation(id).subscribe({
        next: () => {
          const mid = this.motelId();
          if (mid) this.fetchDashboardData(mid);
        },
        error: (err) => console.error('Error cancelando reserva', err)
      });
    });
  }

  deleteReservation(id: number) {
    const dialogRef = this.dialog.open(ConfirmModal, {
      data: {
        title: 'ELIMINAR reserva',
        message: '¿Estás seguro de que deseas ELIMINAR permanentemente esta reserva? (Debe estar cancelada primero). Esta acción es irreversible.',
        confirmText: 'Sí, ELIMINAR',
        cancelText: 'Volver',
      },
      panelClass: ['!rounded-2xl'],
    });

    dialogRef.closed.subscribe((confirmed) => {
      if (!confirmed) return;
      this.paymentService.deleteReservation(id).subscribe({
        next: () => {
          const mid = this.motelId();
          if (mid) this.fetchDashboardData(mid);
        },
        error: (err) => alert('No se pudo eliminar: ' + (err?.error?.message || err?.message))
      });
    });
  }
}
