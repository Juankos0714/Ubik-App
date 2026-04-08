import { Injectable, signal, computed, Inject, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Users } from '../models/users.model';
import { ROLE_IDS } from '../models/roles.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isBrowser: boolean;
  private http = inject(HttpClient);

  private _user = signal<Users | null>(null);
  private _token = signal<string | null>(null);

  private _initialized = signal(false);

  user = computed(() => this._user());
  token = computed(() => this._token());
  role = computed(() => this._user()?.roleId ?? null);
  isLogged = computed(() => !!this._token());
  initialized = computed(() => this._initialized());

  isAdmin = computed(() => Number(this.role()) === ROLE_IDS.ADMIN);
  isOwner = computed(() => Number(this.role()) === ROLE_IDS.OWNER);
  isUser = computed(() => Number(this.role()) === ROLE_IDS.CLIENT);

  // ===================== NUEVO: expiración + timer =====================
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'user';
  private readonly EXPIRES_KEY = 'auth_expires_at';
  private readonly DEFAULT_TTL_MS = 24 * 60 * 60 * 1000; // 24h

  private logoutTimer: ReturnType<typeof setTimeout> | null = null;
  // ====================================================================

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (!this.isBrowser) return;

    this.initializeAuth();

    // Opcional: revalidar al volver a la pestaña
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') this.checkExpiryAndLogoutIfNeeded();
    });
    window.addEventListener('focus', () => this.checkExpiryAndLogoutIfNeeded());

    window.addEventListener('storage', (e) => {
      if (e.key === this.TOKEN_KEY && !e.newValue) this.logout();
      if (e.key === this.EXPIRES_KEY) this.checkExpiryAndLogoutIfNeeded();
    });
  }

  private initializeAuth(isManualRestore = false): boolean {
    if (!this.isBrowser) return false;

    const rawToken = localStorage.getItem(this.TOKEN_KEY);
    const token = rawToken ? this.normalizeToken(rawToken) : null;

    if (token) {
      const expiresAt = this.getExpiresAtFromStorageOrToken(token);
      if (!expiresAt || Date.now() >= expiresAt) {
        this.logout();
        return false;
      } else {
        this._token.set(token);
        this.persistExpiresAt(expiresAt);
        this.scheduleAutoLogout(expiresAt);
        
        const storedUser = localStorage.getItem(this.USER_KEY);
        if (storedUser) this._user.set(JSON.parse(storedUser));
        
        return true;
      }
    }
    return false;
  }

  private normalizeToken(token: string): string {
    return token
      .replace(/"/g, '')
      .replace(/^Bearer\s+/i, '')
      .trim();
  }

  // ===================== NUEVO: helpers expiración =====================

  private getJwtExpMs(token: string): number | null {
    // Si tu token NO es JWT, devuelve null y usamos DEFAULT_TTL_MS
    const parts = token.split('.');
    if (parts.length !== 3) return null;

    try {
      const payload = JSON.parse(this.base64UrlDecode(parts[1]));
      const expSec = payload?.exp;
      if (typeof expSec !== 'number') return null;
      return expSec * 1000;
    } catch {
      return null;
    }
  }

  private base64UrlDecode(input: string): string {
    const pad = '='.repeat((4 - (input.length % 4)) % 4);
    const base64 = (input + pad).replace(/-/g, '+').replace(/_/g, '/');
    return decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
  }

  private getExpiresAtFromStorageOrToken(token: string): number | null {
    const raw = localStorage.getItem(this.EXPIRES_KEY);
    const stored = raw ? Number(raw) : NaN;
    if (!Number.isNaN(stored) && stored > 0) return stored;

    // Si no estaba guardado, intenta leer exp del JWT; si no, usa 24h desde ahora
    const fromJwt = this.getJwtExpMs(token);
    return fromJwt ?? (Date.now() + this.DEFAULT_TTL_MS);
  }

  private persistExpiresAt(expiresAtMs: number) {
    localStorage.setItem(this.EXPIRES_KEY, String(expiresAtMs));
  }

  private scheduleAutoLogout(expiresAtMs: number) {
    if (!this.isBrowser) return;

    if (this.logoutTimer) clearTimeout(this.logoutTimer);

    const remaining = expiresAtMs - Date.now();
    if (remaining <= 0) {
      this.logout();
      return;
    }

    this.logoutTimer = setTimeout(() => this.logout(), remaining);
  }

  private checkExpiryAndLogoutIfNeeded() {
    if (!this.isBrowser) return;
    const token = this._token();
    if (!token) return;

    const expiresAt = this.getExpiresAtFromStorageOrToken(token);
    if (!expiresAt || Date.now() >= expiresAt) this.logout();
  }

  // ====================================================================

  /**
   * ✅ Llamar al arrancar la app (APP_INITIALIZER / provideAppInitializer)
   */
  async restoreSession(): Promise<void> {
    if (!this.isBrowser) {
      this._initialized.set(true);
      return;
    }

    const hasValidToken = this.initializeAuth(true);

    if (!hasValidToken) {
      this._initialized.set(true);
      return;
    }

    if (this._user()) {
      this._initialized.set(true);
      return;
    }

    try {
      const me = await firstValueFrom(this.http.get<any>(`${environment.authUrl}/me`));
      this.setUser(me);
    } catch (err: any) {
      const status = err?.status;
      if (status === 401 || status === 403) {
        this.logout();
      } else {
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

    localStorage.setItem(this.TOKEN_KEY, normalized);
    sessionStorage.removeItem(this.TOKEN_KEY);

    // ✅ NUEVO: guarda expiración (JWT exp si existe, si no 24h fijo)
    const expiresAt = this.getJwtExpMs(normalized) ?? (Date.now() + this.DEFAULT_TTL_MS);
    this.persistExpiresAt(expiresAt);
    this.scheduleAutoLogout(expiresAt);
  }

  /* ================= USER (localStorage como lo tenías) ================= */

  setUser(user: any) {
    if (user && !user.id && (user.userId || user.sub)) {
      user = { ...user, id: user.userId ?? user.sub };
    }
    this._user.set(user);
    if (!this.isBrowser) return;
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  /* ================= LOGOUT ================= */

  logout() {
    this._user.set(null);
    this._token.set(null);

    if (!this.isBrowser) return;

    if (this.logoutTimer) {
      clearTimeout(this.logoutTimer);
      this.logoutTimer = null;
    }

    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.EXPIRES_KEY);
    sessionStorage.removeItem('user'); 
    sessionStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }
}