import { Injectable, signal, computed, Inject, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class AuthService {
    isBrowser;
    http = inject(HttpClient);
    _user = signal(null, ...(ngDevMode ? [{ debugName: "_user" }] : []));
    _token = signal(null, ...(ngDevMode ? [{ debugName: "_token" }] : []));
    _initialized = signal(false, ...(ngDevMode ? [{ debugName: "_initialized" }] : []));
    user = computed(() => this._user(), ...(ngDevMode ? [{ debugName: "user" }] : []));
    token = computed(() => this._token(), ...(ngDevMode ? [{ debugName: "token" }] : []));
    role = computed(() => this._user()?.roleId ?? null, ...(ngDevMode ? [{ debugName: "role" }] : []));
    isLogged = computed(() => !!this._token(), ...(ngDevMode ? [{ debugName: "isLogged" }] : []));
    initialized = computed(() => this._initialized(), ...(ngDevMode ? [{ debugName: "initialized" }] : []));
    isAdmin = computed(() => this.role() === 7392841056473829, ...(ngDevMode ? [{ debugName: "isAdmin" }] : []));
    isOwner = computed(() => this.role() === 3847261094857362, ...(ngDevMode ? [{ debugName: "isOwner" }] : []));
    isUser = computed(() => this.role() === 9182736450192837, ...(ngDevMode ? [{ debugName: "isUser" }] : []));
    // ===================== NUEVO: expiración + timer =====================
    TOKEN_KEY = 'auth_token';
    USER_KEY = 'user';
    EXPIRES_KEY = 'auth_expires_at';
    DEFAULT_TTL_MS = 24 * 60 * 60 * 1000; // 24h
    logoutTimer = null;
    // ====================================================================
    constructor(platformId) {
        this.isBrowser = isPlatformBrowser(platformId);
        if (!this.isBrowser)
            return;
        const rawToken = localStorage.getItem(this.TOKEN_KEY);
        const token = rawToken ? this.normalizeToken(rawToken) : null;
        // ✅ si hay token, valida expiración antes de setearlo
        if (token) {
            const expiresAt = this.getExpiresAtFromStorageOrToken(token);
            if (!expiresAt || Date.now() >= expiresAt) {
                this.logout();
            }
            else {
                this._token.set(token);
                this.scheduleAutoLogout(expiresAt);
            }
        }
        // ✅ USER (como lo tenías: localStorage)
        const storedUser = localStorage.getItem(this.USER_KEY);
        if (storedUser)
            this._user.set(JSON.parse(storedUser));
        // Opcional: revalidar al volver a la pestaña (por si expiró mientras estaba en background)
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible')
                this.checkExpiryAndLogoutIfNeeded();
        });
        window.addEventListener('focus', () => this.checkExpiryAndLogoutIfNeeded());
        // Opcional: sincroniza logout entre pestañas
        window.addEventListener('storage', (e) => {
            if (e.key === this.TOKEN_KEY && !e.newValue)
                this.logout();
            if (e.key === this.EXPIRES_KEY)
                this.checkExpiryAndLogoutIfNeeded();
        });
    }
    normalizeToken(token) {
        return token
            .replace(/"/g, '')
            .replace(/^Bearer\s+/i, '')
            .trim();
    }
    // ===================== NUEVO: helpers expiración =====================
    getJwtExpMs(token) {
        // Si tu token NO es JWT, devuelve null y usamos DEFAULT_TTL_MS
        const parts = token.split('.');
        if (parts.length !== 3)
            return null;
        try {
            const payload = JSON.parse(this.base64UrlDecode(parts[1]));
            const expSec = payload?.exp;
            if (typeof expSec !== 'number')
                return null;
            return expSec * 1000;
        }
        catch {
            return null;
        }
    }
    base64UrlDecode(input) {
        const pad = '='.repeat((4 - (input.length % 4)) % 4);
        const base64 = (input + pad).replace(/-/g, '+').replace(/_/g, '/');
        return decodeURIComponent(atob(base64)
            .split('')
            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join(''));
    }
    getExpiresAtFromStorageOrToken(token) {
        const raw = localStorage.getItem(this.EXPIRES_KEY);
        const stored = raw ? Number(raw) : NaN;
        if (!Number.isNaN(stored) && stored > 0)
            return stored;
        // Si no estaba guardado, intenta leer exp del JWT; si no, usa 24h desde ahora
        const fromJwt = this.getJwtExpMs(token);
        return fromJwt ?? (Date.now() + this.DEFAULT_TTL_MS);
    }
    persistExpiresAt(expiresAtMs) {
        localStorage.setItem(this.EXPIRES_KEY, String(expiresAtMs));
    }
    scheduleAutoLogout(expiresAtMs) {
        if (!this.isBrowser)
            return;
        if (this.logoutTimer)
            clearTimeout(this.logoutTimer);
        const remaining = expiresAtMs - Date.now();
        if (remaining <= 0) {
            this.logout();
            return;
        }
        this.logoutTimer = setTimeout(() => this.logout(), remaining);
    }
    checkExpiryAndLogoutIfNeeded() {
        if (!this.isBrowser)
            return;
        const token = this._token();
        if (!token)
            return;
        const expiresAt = this.getExpiresAtFromStorageOrToken(token);
        if (!expiresAt || Date.now() >= expiresAt)
            this.logout();
    }
    // ====================================================================
    /**
     * ✅ Llamar al arrancar la app (APP_INITIALIZER / provideAppInitializer)
     */
    async restoreSession() {
        if (!this.isBrowser) {
            this._initialized.set(true);
            return;
        }
        const rawToken = localStorage.getItem(this.TOKEN_KEY);
        const token = rawToken ? this.normalizeToken(rawToken) : null;
        if (!token) {
            this._initialized.set(true);
            return;
        }
        // ✅ valida expiración antes de continuar
        const expiresAt = this.getExpiresAtFromStorageOrToken(token);
        if (!expiresAt || Date.now() >= expiresAt) {
            this.logout();
            this._initialized.set(true);
            return;
        }
        // ✅ set token + programa auto logout
        this._token.set(token);
        this.persistExpiresAt(expiresAt);
        this.scheduleAutoLogout(expiresAt);
        // Si ya tienes user en memoria, no hace falta pegarle a /me
        if (this._user()) {
            this._initialized.set(true);
            return;
        }
        try {
            const me = await firstValueFrom(this.http.get(`${environment.authUrl}/me`));
            this.setUser(me);
        }
        catch (err) {
            const status = err?.status;
            if (status === 401 || status === 403) {
                this.logout();
            }
            else {
                console.warn('restoreSession: falló /me, pero se mantiene el token', err);
            }
        }
        finally {
            this._initialized.set(true);
        }
    }
    /* ================= TOKEN (localStorage) ================= */
    setToken(token) {
        const normalized = this.normalizeToken(token);
        this._token.set(normalized);
        if (!this.isBrowser)
            return;
        localStorage.setItem(this.TOKEN_KEY, normalized);
        sessionStorage.removeItem(this.TOKEN_KEY);
        // ✅ NUEVO: guarda expiración (JWT exp si existe, si no 24h fijo)
        const expiresAt = this.getJwtExpMs(normalized) ?? (Date.now() + this.DEFAULT_TTL_MS);
        this.persistExpiresAt(expiresAt);
        this.scheduleAutoLogout(expiresAt);
    }
    /* ================= USER (localStorage como lo tenías) ================= */
    setUser(user) {
        this._user.set(user);
        if (!this.isBrowser)
            return;
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }
    /* ================= LOGOUT ================= */
    logout() {
        this._user.set(null);
        this._token.set(null);
        if (!this.isBrowser)
            return;
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
    static ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(i0.ɵɵinject(PLATFORM_ID)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }], null); })();
