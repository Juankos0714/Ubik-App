import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';

export interface AlertModalData {
  title: string;
  message: string;
  closeText?: string;
  /** 'warning' | 'info' — controla el color del ícono */
  type?: 'warning' | 'info';
}

@Component({
  selector: 'app-alert-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-zinc-900 border border-white/10 rounded-2xl p-6 w-full max-w-sm mx-auto shadow-2xl font-['DM_Sans',sans-serif]">

      <!-- Ícono -->
      <div class="flex items-center justify-center w-14 h-14 rounded-full mx-auto mb-5"
           [class]="data.type === 'info'
             ? 'bg-blue-500/10 border border-blue-500/20'
             : 'bg-amber-500/10 border border-amber-500/20'">
        @if (data.type === 'info') {
          <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z"/>
          </svg>
        } @else {
          <svg class="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
          </svg>
        }
      </div>

      <h2 class="text-white text-xl font-bold text-center mb-2">{{ data.title }}</h2>
      <p class="text-white/50 text-sm text-center leading-relaxed mb-6">{{ data.message }}</p>

      <button
        (click)="close()"
        class="w-full py-2.5 rounded-xl border border-white/10 text-white/80 text-sm font-medium
               hover:border-white/25 hover:text-white transition-all"
      >
        {{ data.closeText ?? 'Entendido' }}
      </button>
    </div>
  `,
})
export class AlertModal {
  constructor(
    public dialogRef: DialogRef<void>,
    @Inject(DIALOG_DATA) public data: AlertModalData,
  ) {}

  close(): void { this.dialogRef.close(); }
}
