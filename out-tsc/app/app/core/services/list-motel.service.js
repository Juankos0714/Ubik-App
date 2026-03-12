import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';
import { EMPTY } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./auth.service";
export class PropertyUserService {
    http;
    authService;
    baseUrl = `${environment.apiUrl}`;
    isBrowser;
    constructor(http, authService, platformId) {
        this.http = http;
        this.authService = authService;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * Obtiene las propiedades del usuario logueado
     */
    getMyMotels() {
        if (!this.isBrowser)
            return EMPTY;
        return this.http.get(`${this.baseUrl}/auth/motels/my-motels`);
    }
    /**
     * Elimina una propiedad por id
     */
    deleteProperty(id) {
        if (!this.isBrowser)
            return EMPTY;
        return this.http.delete(`${this.baseUrl}/motels/${id}`);
    }
    /**
     * Obtener una propiedad por id (para editar)
     */
    getPropertyById(id) {
        if (!this.isBrowser)
            return EMPTY;
        return this.http.get(`${this.baseUrl}/motels/${id}`);
    }
    /**
     * Crear propiedad
     */
    createProperty(data) {
        if (!this.isBrowser)
            return EMPTY;
        return this.http.post(`${this.baseUrl}`, data);
    }
    /**
     * Actualizar propiedad
     */
    updateProperty(id, data) {
        if (!this.isBrowser)
            return EMPTY;
        return this.http.put(`${this.baseUrl}/${id}`, data);
    }
    static ɵfac = function PropertyUserService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PropertyUserService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(PLATFORM_ID)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PropertyUserService, factory: PropertyUserService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyUserService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }, { type: i2.AuthService }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }], null); })();
