import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservationService } from '../../../core/services/reservation.service';
import { MotelService } from '../../../core/services/motel.service';
import { OwnerDashboardSummary, RoomStatusBoardResponse, Reservation } from '../../../core/models/reservation.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-owner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-owner.html',
})
export class DashboardOwner implements OnInit, OnDestroy {
  private reservationService = inject(ReservationService);
  private motelService = inject(MotelService);
  
  // Estados reactivos
  summary = signal<OwnerDashboardSummary | null>(null);
  rooms = signal<RoomStatusBoardResponse[]>([]);
  loading = signal(true);
  motelId = signal<number | null>(null);
  
  // Verificación de código
  verifyCode = signal('');
  verificationResult = signal<Reservation | null>(null);
  verifying = signal(false);

  private sseSubscription: Subscription | null = null;

  ngOnInit() {
    this.loadInitialData();
  }

  ngOnDestroy() {
    this.reservationService.closeSSE();
    if (this.sseSubscription) {
      this.sseSubscription.unsubscribe();
    }
  }

  loadInitialData() {
    this.motelService.getMyMotels().subscribe({
      next: (motels) => {
        if (motels && motels.length > 0) {
          const id = motels[0].id; // Tomamos el primero por ahora
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
    this.reservationService.getDashboardSummary(id).subscribe(data => this.summary.set(data));
    this.reservationService.getRoomStatusBoard(id).subscribe(data => {
      this.rooms.set(data);
      this.loading.set(false);
    });
  }

  setupSSE() {
    this.sseSubscription = this.reservationService.subscribeToReservations().subscribe(() => {
      // Cuando llega un evento SSE, refrescamos los datos
      const id = this.motelId();
      if (id) {
        this.fetchDashboardData(id);
      }
    });
  }

  onVerifyCode() {
    const code = this.verifyCode().trim();
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
      this.verifyCode.set('');
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
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  }
}
