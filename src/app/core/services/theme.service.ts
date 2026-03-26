import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);

  private readonly STORAGE_KEY = 'ubik_theme';

  /** Tema activo — 'dark' por defecto */
  readonly theme = signal<Theme>(this.loadInitialTheme());

  constructor() {
    // Aplica el tema al <html> cada vez que cambia
    effect(() => {
      const t = this.theme();
      if (!isPlatformBrowser(this.platformId)) return;

      const html = document.documentElement;
      html.setAttribute('data-theme', t);
      html.classList.remove('dark', 'light');
      html.classList.add(t);

      try {
        localStorage.setItem(this.STORAGE_KEY, t);
      } catch {
        // SSR / private browsing
      }
    });
  }

  toggle(): void {
    this.theme.update(current => (current === 'dark' ? 'light' : 'dark'));
  }

  set(theme: Theme): void {
    this.theme.set(theme);
  }

  get isDark(): boolean {
    return this.theme() === 'dark';
  }

  get isLight(): boolean {
    return this.theme() === 'light';
  }

  private loadInitialTheme(): Theme {
    if (!isPlatformBrowser(this.platformId)) return 'dark';

    try {
      const stored = localStorage.getItem(this.STORAGE_KEY) as Theme | null;
      if (stored === 'dark' || stored === 'light') return stored;
    } catch {
      // ignore
    }

    // Preferencia del sistema operativo
    if (window.matchMedia?.('(prefers-color-scheme: light)').matches) {
      return 'light';
    }

    return 'dark';
  }
}
