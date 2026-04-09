import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { ReservationService } from '../../core/services/reservation.service';
import { Reservation } from '../../core/models/reservation.model';

@Component({
  selector: 'app-reservation-detail-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-[#0d0d0f] border border-white/10 rounded-[2.5rem] overflow-hidden w-full max-w-lg shadow-2xl animate-in zoom-in duration-300">
      <!-- Header with Gradient -->
      <div class="relative h-32 bg-gradient-to-br from-[#6E2A35] to-[#A72027] p-8">
        <div class="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full"></div>
        <h2 class="text-3xl font-black text-white tracking-tight">Detalle de Reserva</h2>
        <p class="text-white/60 text-sm font-medium uppercase tracking-widest mt-1">#{{ reservation.confirmationCode }}</p>
        
        <button (click)="close()" class="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <div class="p-8 space-y-8">
        <!-- Main Info Grid -->
        <div class="grid grid-cols-2 gap-8">
          <div>
            <p class="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Estado</p>
            <span [ngClass]="statusClass" class="px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider">
              {{ reservation.status }}
            </span>
          </div>
          <div class="text-right">
            <p class="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Total Pagado</p>
            <p class="text-xl font-black text-white">$ {{ reservation.totalPrice | number:'1.0-0' }}</p>
          </div>
        </div>

        <div class="space-y-4">
          <div class="flex items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-2xl">
            <div class="w-10 h-10 rounded-xl bg-red-600/20 flex items-center justify-center text-red-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
            </div>
            <div>
              <p class="text-[10px] text-gray-500 uppercase tracking-widest">Establecimiento</p>
              <p class="text-white font-bold ml-1">{{ reservation.motelName || 'Motel Partner' }}</p>
            </div>
          </div>

          <div class="flex items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-2xl">
            <div class="w-10 h-10 rounded-xl bg-orange-600/20 flex items-center justify-center text-orange-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            </div>
            <div>
              <p class="text-[10px] text-gray-500 uppercase tracking-widest">Check-in / Check-out</p>
              <p class="text-white font-bold ml-1 text-sm">
                {{ reservation.checkInDate | date:'MMM d, h:mm a' }} — {{ reservation.checkOutDate | date:'h:mm a' }}
              </p>
            </div>
          </div>
        </div>

        @if (isOwnerView && reservation.status === 'PAGADO') {
          <div class="pt-4 space-y-4">
            <div class="relative">
              <p class="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2 ml-1">Confirmar Código de Seguridad</p>
              <input 
                type="text" 
                [(ngModel)]="manualCode"
                placeholder="Ingresa el código del cliente"
                class="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-center text-lg font-mono tracking-widest focus:border-red-500 transition-all outline-none"
              >
            </div>
            
            <button 
              [disabled]="manualCode !== reservation.confirmationCode || checkingIn"
              (click)="confirmCheckIn()"
              class="w-full py-4 bg-white text-black font-black rounded-2xl hover:bg-gray-200 active:scale-[0.98] transition-all disabled:opacity-30 flex items-center justify-center gap-2"
            >
              @if (checkingIn) {
                <div class="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                PROCESANDO...
              } @else {
                CONFIRMAR INGRESO
              }
            </button>
          </div>
        }

        @if (checkedIn) {
           <div class="bg-green-500/10 border border-green-500/20 p-4 rounded-2xl flex items-center gap-3">
             <div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-black">
               <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
             </div>
             <p class="text-green-400 font-bold text-sm">El cliente ya se encuentra en las instalaciones.</p>
           </div>
        }
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class ReservationDetailModal implements OnInit {
  reservation: Reservation;
  isOwnerView: boolean = false;
  manualCode: string = '';
  checkingIn: boolean = false;

  constructor(
    private dialogRef: DialogRef<any>,
    @Inject(DIALOG_DATA) public data: { reservation: Reservation; isOwner?: boolean },
    private reservationService: ReservationService
  ) {
    this.reservation = data.reservation;
    this.isOwnerView = !!data.isOwner;
  }

  ngOnInit(): void {}

  get checkedIn(): boolean {
    return (this.reservation.status as any) === 'INGRESO' || this.reservation.status === 'CHECKED_IN';
  }

  get statusClass(): string {
    const s = this.reservation.status;
    if (this.checkedIn) return 'bg-green-500/20 text-green-400 border-green-500/30';
    if (s === 'PAGADO') return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    if (s === 'PENDIENTE') return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    return 'bg-red-500/20 text-red-400 border-red-500/30';
  }

  close() {
    this.dialogRef.close();
  }

  confirmCheckIn() {
    if (!this.reservation.id) return;
    this.checkingIn = true;
    this.reservationService.checkIn(this.reservation.id).subscribe({
      next: (res) => {
        this.reservation = res; // Update local state
        this.checkingIn = false;
        // Close after a small delay
        setTimeout(() => this.dialogRef.close({ success: true }), 1500);
      },
      error: (err) => {
        console.error('Check-in error', err);
        this.checkingIn = false;
        alert('Error al confirmar el ingreso.');
      }
    });
  }
}
