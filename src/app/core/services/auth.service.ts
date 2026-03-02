import { Injectable, signal, computed, Inject, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isBrowser: boolean;
  private http = inject(HttpClient);

  private _user = signal<any | null>(null);
  private _token = signal<string | null>(null);

  // Opcional pero muy útil para guards/UI
  private _initialized = signal(false);

  user = computed(() => this._user());
  token = computed(() => this._token());
  role = computed(() => this._user()?.roleId ?? null);
  isLogged = computed(() => !!this._token());

  initialized = computed(() => this._initialized());

  isAdmin = computed(() => this.role() === 7392841056473829);
  isOwner = computed(() => this.role() === 3847261094857362);
  isUser  = computed(() => this.role() === 9182736450192837);

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (!this.isBrowser) return;

    // ✅ TOKEN: SOLO localStorage (persistente)
    const rawToken = localStorage.getItem('auth_token');
    const token = rawToken ? this.normalizeToken(rawToken) : null;
    if (token) this._token.set(token);

    // ✅ USER: SOLO sessionStorage (no persistente)
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) this._user.set(JSON.parse(storedUser));
  }

  private normalizeToken(token: string): string {
    return token.replace(/"/g, '').replace(/^Bearer\s+/i, '').trim();
  }

  /**
   * ✅ Llamar al arrancar la app (APP_INITIALIZER / provideAppInitializer)
   * - Si hay token y NO hay user en session → pide /auth/me
   * - Solo borra token si el backend responde 401/403
   */
  async restoreSession(): Promise<void> {
    if (!this.isBrowser) {
      this._initialized.set(true);
      return;
    }

    const rawToken = localStorage.getItem('auth_token');
    const token = rawToken ? this.normalizeToken(rawToken) : null;

    if (!token) {
      this._initialized.set(true);
      return;
    }

    this._token.set(token);

    // Si ya tienes user en sessionStorage, no hace falta pegarle a /me
    if (this._user()) {
      this._initialized.set(true);
      return;
    }

    try {
      // ⚠️ IMPORTANTE:
      // Usa tu base URL real. Si pones '/auth/me' y no tienes proxy/baseUrl,
      // puede intentar pegarle al frontend (localhost) y fallar.
      // Ideal: environment.apiUrl + '/auth/me'
      const me = await firstValueFrom(this.http.get<any>('https://ubik-back.duckdns.org/auth/me'));

      this.setUser(me); // guarda en memoria + sessionStorage
    } catch (err: any) {
      const status = err?.status;

      // ✅ Solo si token inválido / expirado
      if (status === 401 || status === 403) {
        this.logout();
      } else {
        // ❗ No borres token si fue 404/500/CORS/etc
        console.warn('restoreSession: falló /me, pero se mantiene el token', err);
      }
    } finally {
      this._initialized.set(true);
    }
  }

  /* ================= TOKEN (localStorage) ================= */

  setToken(token: string) {
    const normalized = this.normalizeToken(token);
    this._token.set(normalized);

    if (!this.isBrowser) return;

    localStorage.setItem('auth_token', normalized);
    sessionStorage.removeItem('auth_token'); // por si quedó algo viejo
  }

  /* ================= USER (sessionStorage) ================= */

  setUser(user: any) {
    this._user.set(user);

    if (!this.isBrowser) return;

    sessionStorage.setItem('user', JSON.stringify(user));
    localStorage.removeItem('user'); // limpieza de tu versión anterior
  }

  /* ================= LOGOUT ================= */

  logout() {
    this._user.set(null);
    this._token.set(null);

    if (!this.isBrowser) return;

    localStorage.removeItem('auth_token');
    sessionStorage.removeItem('user');

    // limpieza por compatibilidad con versiones anteriores
    sessionStorage.removeItem('auth_token');
    localStorage.removeItem('user');
  }
}