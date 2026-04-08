import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-payment-success',
  standalone: true,

  imports: [CommonModule, RouterModule, QRCodeComponent],
  
  template: `
    <div class="flex flex-col items-center justify-center py-16 px-4">
      <div class="text-center mb-10">
        <div class="inline-flex items-center justify-center w-24 h-24 bg-green-500/10 text-green-500 rounded-full mb-6 relative border border-green-500/20">
          <div class="absolute inset-0 bg-green-500/5 rounded-full animate-ping"></div>
          <svg class="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
          </svg>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">¡Pago Exitoso!</h1>
        <p class="text-neutral-400 text-lg">Tu reserva ha sido confirmada. Hemos enviado el comprobante a tu correo.</p>
      </div>

      <div class="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <!-- Decoración -->
        <div class="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-bl-full -mr-10 -mt-10 pointer-events-none"></div>

        <div class="flex items-center justify-between border-b border-neutral-800 pb-6 mb-6">
          <h2 class="text-2xl font-bold text-white">
            Resumen de Reserva <span *ngIf="details?.confirmationCode" class="text-primary block sm:inline sm:ml-2 text-xl font-mono">#{{ displayCode }}</span>
          </h2>
          <span class="bg-green-500/10 text-green-500 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider hidden sm:inline-block">Confirmada</span>
        </div>

        <div class="space-y-6">
          <!-- Precio -->
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <span class="text-neutral-400 font-medium">Total pagado</span>
            <span class="text-3xl font-bold text-primary">{{ details ? (details.totalPrice | currency:'COP':'symbol-narrow':'1.0-0') : '—' }}</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Fecha -->
            <div class="bg-neutral-800/40 border border-neutral-800/60 p-5 rounded-xl flex items-start gap-4 transition-colors hover:bg-neutral-800/60">
              <div class="bg-neutral-800 p-2.5 rounded-lg text-primary">
                <i class="fas fa-calendar-alt text-lg"></i>
              </div>
              <div>
                <span class="block text-xs text-neutral-500 uppercase font-bold mb-1 tracking-wider">Fecha</span>
                <span class="text-white font-medium text-lg">{{ details?.date || 'Fecha de hoy' }}</span>
              </div>
            </div>

            <!-- Horario -->
            <div class="bg-neutral-800/40 border border-neutral-800/60 p-5 rounded-xl flex items-start gap-4 transition-colors hover:bg-neutral-800/60">
              <div class="bg-neutral-800 p-2.5 rounded-lg text-primary">
                <i class="fas fa-clock text-lg"></i>
              </div>
              <div>
                <span class="block text-xs text-neutral-500 uppercase font-bold mb-1 tracking-wider">Horario</span>
                <span class="text-white font-medium text-lg">{{ details?.startTime || '--:--' }} a {{ details?.endTime || '--:--' }}</span>
              </div>
            </div>
          </div>
          
          <!-- Habitación -->
          <div *ngIf="details?.roomName" class="bg-neutral-800/40 border border-neutral-800/60 p-5 rounded-xl flex items-start gap-4 transition-colors hover:bg-neutral-800/60 mt-4">
             <div class="bg-neutral-800 p-2.5 rounded-lg text-primary">
                <i class="fas fa-bed text-lg"></i>
              </div>
              <div>
                <span class="block text-xs text-neutral-500 uppercase font-bold mb-1 tracking-wider">Alojamiento</span>
                <span class="text-white font-medium text-lg">{{ details.roomName }}</span>
              </div>
          </div>
        </div>
        
        <!-- Sección Especial QR y Código (Solo si existe) -->
        <div *ngIf="details?.confirmationCode" class="mt-8 border-t border-dashed border-neutral-700 pt-8">
          <div class="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center relative overflow-hidden">
            <!-- Efecto de brillo de fondo -->
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
            
            <h3 class="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-6 inline-flex items-center gap-2">
              <i class="fas fa-ticket-alt"></i> Entrada Express
            </h3>
            
            <div class="flex justify-center mb-6">
              <div class="bg-white p-4 rounded-2xl shadow-[0_0_30px_rgba(167,32,39,0.15)] ring-4 ring-neutral-900 inline-flex justify-center items-center">
                <qrcode [qrdata]="'UBIK-' + displayCode" [width]="160" [errorCorrectionLevel]="'M'"></qrcode>
              </div>
            </div>
            
            <p class="text-neutral-400 text-sm max-w-sm mx-auto mb-4 leading-relaxed">
              Muestra este código QR en la recepción para agilizar tu entrada. 
              <strong class="text-neutral-300 block mt-2 font-medium">¿El motel no cuenta con lector de QR?</strong> 
              Dale el siguiente código al recepcionista:
            </p>
            
            <div class="bg-neutral-900 border border-neutral-700/50 py-4 px-6 rounded-xl inline-block shadow-inner mt-2">
              <span class="text-4xl sm:text-5xl font-mono font-black tracking-widest text-white drop-shadow-md">
                {{ displayCode }}
              </span>
            </div>
          </div>
        </div>

        <div class="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row gap-4">
            <button routerLink="/" class="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] text-center shadow-lg shadow-primary/20">
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class PaymentSuccessComponent {

  details: any = null;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state && navigation.extras.state['paymentDetails']) {
      this.details = navigation.extras.state['paymentDetails'];
    }
  }

  get displayCode(): string {
    if (!this.details?.confirmationCode) return '';
    return this.details.confirmationCode;
  }
}


