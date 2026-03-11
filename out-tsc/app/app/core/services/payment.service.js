import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PaymentService {
    http;
    API_URL = `${environment.apiUrl}/payments`;
    RESERVATION_URL = `${environment.apiUrl}/reservations`;
    constructor(http) {
        this.http = http;
    }
    createReservation(roomId, motelId, totalPrice, userId, checkInDate, checkOutDate) {
        return this.http.post(this.RESERVATION_URL, {
            roomId,
            motelId,
            totalPrice,
            userId,
            checkInDate,
            checkOutDate
        });
    }
    getStripeConfig() {
        return this.http.get(`${this.API_URL}/config`);
    }
    createPaymentIntent(reservationId, amountCop) {
        return this.http.post(`${this.API_URL}/create-intent`, {
            reservationId,
            amountCop
        });
    }
    static ɵfac = function PaymentService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaymentService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PaymentService, factory: PaymentService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaymentService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
