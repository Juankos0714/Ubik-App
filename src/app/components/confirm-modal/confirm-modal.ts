import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';

export interface ConfirmModalData {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-zinc-900 border border-white/10 rounded-2xl p-6 w-full max-w-sm mx-auto shadow-2xl font-['DM_Sans',sans-serif]">

      <!-- Icono advertencia -->
      <div class="flex items-center justify-center w-14 h-14 rounded-full bg-red-500/10 border border-red-500/20 mx-auto mb-5">
        <svg class="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
        </svg>
      </div>

      <h2 class="text-white text-xl font-bold text-center mb-2">{{ data.title }}</h2>
      <p class="text-white/50 text-sm text-center leading-relaxed mb-6">{{ data.message }}</p>

      <div class="flex gap-3">
        <button
          (click)="cancel()"
          class="flex-1 py-2.5 rounded-xl border border-white/10 text-white/60 text-sm hover:border-white/25 hover:text-white/90 transition-all"
        >
          {{ data.cancelText ?? 'Cancelar' }}
        </button>
        <button
          (click)="confirm()"
          class="flex-1 py-2.5 rounded-xl bg-red-600/80 border border-red-500/40 text-white text-sm font-semibold hover:bg-red-600 transition-all"
        >
          {{ data.confirmText ?? 'Eliminar' }}
        </button>
      </div>
    </div>
  `,
})
export class ConfirmModal {
  constructor(
    public dialogRef: DialogRef<boolean>,
    @Inject(DIALOG_DATA) public data: ConfirmModalData,
  ) {}

  confirm(): void { this.dialogRef.close(true); }
  cancel(): void  { this.dialogRef.close(false); }
}
