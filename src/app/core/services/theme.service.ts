import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  
  // Theme state
  private _theme = signal<Theme>('dark');
  public theme = this._theme.asReadonly();

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      // Intenta leer de localStorage primero
      const savedTheme = localStorage.getItem('ubik-theme') as Theme;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        this._theme.set(savedTheme);
      } else {
        // Fallback a preferencias del sistema
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        this._theme.set(prefersLight ? 'light' : 'dark');
      }

      // Efecto para sincronizar la clase con el signal
      effect(() => {
        const currentTheme = this._theme();
        const htmlElement = document.documentElement;
        
        if (currentTheme === 'light') {
          htmlElement.classList.add('light');
        } else {
          htmlElement.classList.remove('light');
        }
        
        localStorage.setItem('ubik-theme', currentTheme);
      });
    }
  }

  toggle() {
    this._theme.update(t => t === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: Theme) {
    this._theme.set(theme);
  }
}
