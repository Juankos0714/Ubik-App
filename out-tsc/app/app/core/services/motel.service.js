import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { EMPTY } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class MotelService {
    http;
    apiUrl;
    isBrowser;
    constructor(http, platformId) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    // ────────────────────────────────────────────────────────────────────────────
    // PÚBLICO — No requiere autenticación
    // ────────────────────────────────────────────────────────────────────────────
    /**
     * Trae TODOS los moteles públicos (para la página Explore).
     * Usa el endpoint público /motels sin requerir token.
     */
    getAllMotels() {
        if (!this.isBrowser)
            return EMPTY;
        return this.http.get(`${this.apiUrl}/motels`);
    }
    getMotelById(id) {
        if (!this.isBrowser)
            return EMPTY;
        return this.http.get(`${this.apiUrl}/motels/${id}`);
    }
    // ────────────────────────────────────────────────────────────────────────────
    // PRIVADO — Requiere autenticación (solo para el dueño)
    // ────────────────────────────────────────────────────────────────────────────
    /**
     * Solo trae los moteles del usuario logueado (dueño).
     * Usar en dashboard/owner, NO en Explore.
     */
    getMyMotels() {
        if (!this.isBrowser)
            return EMPTY;
        return this.http.get(`${this.apiUrl}/auth/motels/my-motels`);
    }
    createMotel(payload) {
        if (!this.isBrowser)
            return EMPTY;
        return this.http.post(`${this.apiUrl}/motels`, payload);
    }
    updateMotel(id, payload) {
        if (!this.isBrowser)
            return EMPTY;
        return this.http.put(`${this.apiUrl}/motels/${id}`, payload);
    }
    deleteMotel(id) {
        if (!this.isBrowser)
            return EMPTY;
        return this.http.delete(`${this.apiUrl}/motels/${id}`);
    }
    getProfile() {
        if (!this.isBrowser)
            return EMPTY;
        return this.http.get(`${this.apiUrl}/profile`);
    }
    // Traer todos los moteles 
    getMotels() {
        if (!this.isBrowser)
            return EMPTY;
        return this.http.get(`${this.apiUrl}/motels`);
    }
    // ────────────────────────────────────────────────────────────────────────────
    // IMÁGENES
    // ────────────────────────────────────────────────────────────────────────────
    createMotelWithImages(payload) {
        return this.http.post(`${this.apiUrl}/motels/with-images`, payload);
    }
    uploadImage(file, folder = 'Ubik') {
        if (!this.isBrowser)
            return EMPTY;
        const fd = new FormData();
        fd.append('file', file);
        return this.http.post(`${this.apiUrl}/images/upload?folder=${folder}`, fd);
    }
    setProfileImage(id, url) {
        return this.http.put(`${this.apiUrl}/motels/${id}/images/profile`, { url });
    }
    setCoverImage(motelId, url) {
        if (!this.isBrowser)
            return EMPTY;
        return this.http.put(`${this.apiUrl}/motels/${motelId}/images/cover`, { url });
    }
    addGalleryImages(motelId, images) {
        if (!this.isBrowser)
            return EMPTY;
        const fd = new FormData();
        for (const img of images)
            fd.append('images', img);
        return this.http.post(`${this.apiUrl}/motels/${motelId}/images`, fd);
    }
    deleteImageById(motelId, imageId) {
        if (!this.isBrowser)
            return EMPTY;
        return this.http.delete(`${this.apiUrl}/motels/${motelId}/images/${imageId}`);
    }
    deleteImagesByUrl(motelId, urls) {
        if (!this.isBrowser)
            return EMPTY;
        return this.http.request('DELETE', `${this.apiUrl}/motels/${motelId}/images`, {
            body: urls,
        });
    }
    static ɵfac = function MotelService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MotelService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(PLATFORM_ID)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MotelService, factory: MotelService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MotelService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }], null); })();
