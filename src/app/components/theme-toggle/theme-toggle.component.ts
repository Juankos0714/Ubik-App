import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="onToggle($event)"
      [title]="theme.isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
      class="theme-toggle-btn relative flex items-center justify-center w-9 h-9 rounded-xl border transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      [class.dark-mode]="theme.isDark"
      [class.light-mode]="theme.isLight"
    >
      <!-- Luna (modo oscuro activo → click lleva a claro) -->
      <svg
        *ngIf="theme.isDark"
        class="w-4 h-4 transition-all duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>

      <!-- Sol (modo claro activo → click lleva a oscuro) -->
      <svg
        *ngIf="theme.isLight"
        class="w-4 h-4 transition-all duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M18.364 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
        />
      </svg>
    </button>
  `,
  styles: [`
    .theme-toggle-btn.dark-mode {
      border-color: rgba(255,255,255,0.12);
      background: rgba(255,255,255,0.05);
      color: rgba(255,255,255,0.7);
    }
    .theme-toggle-btn.dark-mode:hover {
      border-color: rgba(255,255,255,0.3);
      color: white;
      background: rgba(255,255,255,0.1);
    }
    .theme-toggle-btn.light-mode {
      border-color: rgba(0,0,0,0.12);
      background: rgba(0,0,0,0.05);
      color: rgba(0,0,0,0.6);
    }
    .theme-toggle-btn.light-mode:hover {
      border-color: rgba(0,0,0,0.25);
      color: rgba(0,0,0,0.9);
      background: rgba(0,0,0,0.08);
    }
  `]
})
export class ThemeToggle {
  readonly theme = inject(ThemeService);

  onToggle(event: MouseEvent): void {
    this.theme.toggleWithAnimation(event);
  }
}
