import { Injectable } from '@angular/core';
import { throwError, of } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./auth.service";
export class LoginService {
    http;
    auth;
    apiUrl = environment.apiUrl;
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    /* ======================= */
    validateForm(data) {
        const errors = [];
        if (!data.username?.trim()) {
            errors.push({ field: 'username', message: 'El usuario es obligatorio' });
        }
        if (!data.password?.trim()) {
            errors.push({ field: 'password', message: 'La contraseña es obligatoria' });
        }
        return errors;
    }
    /* ======================= */
    login(data, rememberMe) {
        return this.http.post(`${this.apiUrl}/auth/login`, data, { responseType: 'text' }).pipe(tap((rawToken) => {
            let token = (rawToken ?? '').toString().trim();
            try {
                // Si el backend devuelve un objeto JSON (como {"token": "..."})
                const parsed = JSON.parse(rawToken);
                token = (parsed.token || parsed.access_token || parsed.jwt || rawToken);
            }
            catch (e) {
                // Si no es JSON válido, limpiamos comillas por si acaso
                token = rawToken.replace(/"/g, '').trim();
            }
            //  Normalizar por si viene "Bearer xxx"
            token = token
                .toString()
                .replace(/"/g, '')
                .replace(/^Bearer\s+/i, '')
                .trim();
            // console.log('TOKEN FINAL →', token);
            this.auth.setToken(token);
        }));
    }
    /* ======================= */
    /* PERFIL DEL USUARIO */
    /* ======================= */
    getProfile() {
        return this.http.get(`${this.apiUrl}/user`).pipe(tap((user) => this.auth.setUser(user)), catchError((error) => {
            return throwError(() => error);
        }));
    }
    /* ======================= */
    getAuthToken() {
        return this.auth.token();
    }
    clearAuthToken() {
        this.auth.logout();
    }
    isAuthenticated() {
        return this.auth.isLogged();
    }
    /* ======================= */
    loginWithOAuth(provider) {
        return of({
            success: true,
            message: 'Login exitoso (mock)',
            token: `mock-oauth-token-${provider}-${Date.now()}`,
            userId: '123',
            redirectUrl: '/home',
        }).pipe(delay(500));
    }
    static ɵfac = function LoginService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoginService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.AuthService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.HttpClient }, { type: i2.AuthService }], null); })();
