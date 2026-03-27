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

  /**
   * Animación tipo DeepWiki/Telegram — círculo que se expande desde el botón.
   * Llama a esto desde el ThemeToggle pasándole el MouseEvent.
   */
  toggleWithAnimation(event?: MouseEvent): void {
    const isBrowser = isPlatformBrowser(this.platformId);

    // Fallback sin animación si no hay soporte o no hay evento
    if (
      !isBrowser ||
      !event ||
      !('startViewTransition' in document) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      this.toggle();
      return;
    }

    const x = event.clientX;
    const y = event.clientY;

    // Radio máximo para que el círculo cubra toda la pantalla
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const isDarkNow = this.theme() === 'dark';

    // Mejora de dinamismo:
    // - Oscuro -> Claro: 400ms (entrada de luz rápida/explosiva)
    // - Claro -> Oscuro: 550ms (transición a sombra más envolvente y suave)
    const duration = isDarkNow ? 400 : 550;
    const easing = 'cubic-bezier(0.76, 0, 0.24, 1)';

    const transition = (document as any).startViewTransition(() => {
      this.theme.update(current => (current === 'dark' ? 'light' : 'dark'));
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: isDarkNow ? clipPath : [...clipPath].reverse(),
          // Suavizado del borde del círculo mediante un blur sutil
          filter: isDarkNow
            ? ['blur(4px)', 'blur(0px)']
            : ['blur(0px)', 'blur(4px)'],
        },
        {
          duration,
          easing,
          pseudoElement: isDarkNow
            ? '::view-transition-new(root)'
            : '::view-transition-old(root)',
        }
      );
    });
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
