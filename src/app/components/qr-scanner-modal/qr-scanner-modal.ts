import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRef } from '@angular/cdk/dialog';

// MOCK para cuando la librería no se puede instalar en el entorno
@Component({
  selector: 'app-qr-scanner-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-[#0d0d0f] border border-white/10 rounded-[2.5rem] overflow-hidden w-full max-w-md shadow-2xl animate-in zoom-in duration-300">
      <!-- Header -->
      <div class="p-6 border-b border-white/5 flex justify-between items-center">
        <div>
          <h2 class="text-xl font-bold text-white">Escanear QR</h2>
          <p class="text-xs text-white/40 uppercase tracking-widest mt-1">Pase de Entrada Ubik</p>
        </div>
        <button (click)="close()" class="text-white/40 hover:text-white transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Scanner Area (Mock) -->
      <div class="relative bg-black aspect-square flex items-center justify-center overflow-hidden">
        
        <div class="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent"></div>

        <!-- Fake Scanner UI -->
        <div class="z-10 flex flex-col items-center gap-4 p-8 text-center text-white">
          <div class="w-20 h-20 bg-red-600/20 rounded-full flex items-center justify-center text-red-500 animate-pulse">
             <i class="fa-solid fa-camera-rotate text-3xl"></i>
          </div>
          <h3 class="text-lg font-bold">Módulo de Cámara</h3>
          <p class="text-sm text-white/60">
            El escaneo visual requiere la librería @zxing/ngx-scanner. 
            Por favor, usa la verificacion manual mientras se completa la instalacion del hardware.
          </p>
          
          <div class="w-full mt-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
             <p class="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-bold">Entrada Manual Alternativa</p>
             <input #manualInput type="text" placeholder="Ingresa código aquí" class="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-center font-mono tracking-widest text-red-500">
             <button (click)="submitManual(manualInput.value)" class="w-full mt-3 py-3 bg-white text-black font-bold rounded-xl text-xs">USAR CÓDIGO</button>
          </div>
        </div>

        <!-- Overlay Decoration -->
        <div class="absolute inset-0 border-[40px] border-black/60 pointer-events-none"></div>
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div class="w-64 h-64 border-2 border-red-500/20 rounded-3xl relative">
            <!-- Corner Brackets -->
            <div class="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-red-600/40 rounded-tl-lg"></div>
            <div class="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-red-600/40 rounded-tr-lg"></div>
            <div class="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-red-600/40 rounded-bl-lg"></div>
            <div class="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-red-600/40 rounded-br-lg"></div>
          </div>
        </div>
      </div>

      <div class="p-6 bg-white/5 text-center">
        <p class="text-white/40 text-xs tracking-widest uppercase italic">Simulación de escaneo activa</p>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class QRScannerModal implements OnInit {

  constructor(private dialogRef: DialogRef<string>) {}

  ngOnInit(): void {}

  submitManual(value: string) {
    if (!value) return;
    const code = value.startsWith('UBIK-') ? value.replace('UBIK-', '') : value;
    this.dialogRef.close(code);
  }

  close() {
    this.dialogRef.close();
  }
}
