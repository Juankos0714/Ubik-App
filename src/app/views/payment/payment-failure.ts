import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment-failure',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <div class="text-red-500 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-gray-800 mb-2">Pago Fallido</h1>
        <p class="text-gray-600 mb-6">Hubo un problema al procesar tu pago. No te preocupes, no se ha realizado ningún cargo.</p>
        <div class="flex flex-col gap-3">
          <button routerLink="/explore" class="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
            Intentar de Nuevo
          </button>
          <button routerLink="/" class="text-gray-500 hover:underline">
            Ir al Inicio
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .bg-primary { background-color: #e91e63; }
  `]
})
export class PaymentFailureComponent {}
