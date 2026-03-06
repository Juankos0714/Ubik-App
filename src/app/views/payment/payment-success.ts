import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <div class="text-green-500 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-gray-800 mb-2">¡Pago Exitoso!</h1>
        <p class="text-gray-600 mb-6">Tu reserva ha sido confirmada correctamente. ¡Gracias por confiar en Ubik!</p>
        <button routerLink="/" class="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
          Volver al Inicio
        </button>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .bg-primary { background-color: #e91e63; } /* Ajustar al color de la app */
  `]
})
export class PaymentSuccessComponent {}
