import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class RoomService {
    http;
    baseUrl = environment.apiUrl;
    roomsUrl = `${this.baseUrl}/rooms`;
    /**
     * Ajusta esta ruta si tu backend usa otra:
     * - `${baseUrl}/services`
     * - `${baseUrl}/rooms/services`
     * - `${baseUrl}/room-services`
     */
    servicesUrl = `${this.baseUrl}/services`;
    isBrowser;
    constructor(http, platformId) {
        this.http = http;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    inBrowser(obs) {
        return this.isBrowser ? obs : EMPTY;
    }
    // ───────────────────────── Rooms ─────────────────────────
    createRoom(payload) {
        return this.inBrowser(this.http.post(this.roomsUrl, payload));
    }
    getRooms() {
        return this.inBrowser(this.http.get(this.roomsUrl));
    }
    getRoomById(id) {
        return this.inBrowser(this.http.get(`${this.roomsUrl}/${id}`));
    }
    getRoomsByMotel(motelId) {
        // Mantengo el patrón de tu backend: /motels/:motelId/rooms
        return this.inBrowser(this.http.get(`${this.baseUrl}/motels/${motelId}/rooms`));
    }
    // ─────────────────────── Services ────────────────────────
    getAllServices() {
        return this.inBrowser(this.http.get(this.servicesUrl));
    }
    // ─────────────────── Availability / Reservations ───────────────────
    checkAvailability(roomId, date, startTime, endTime) {
        const params = new HttpParams()
            .set('date', date)
            .set('startTime', startTime)
            .set('endTime', endTime);
        return this.inBrowser(this.http.get(`${this.roomsUrl}/${roomId}/availability`, { params }));
    }
    getReservationsForDate(roomId, date) {
        const params = new HttpParams().set('date', date);
        return this.inBrowser(this.http.get(`${this.roomsUrl}/${roomId}/reservations`, { params }));
    }
    subscribeAvailability(roomId, email) {
        return this.inBrowser(this.http.post(`${this.roomsUrl}/${roomId}/notify-available`, { email }));
    }
    static ɵfac = function RoomService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RoomService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(PLATFORM_ID)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RoomService, factory: RoomService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RoomService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }], null); })();
