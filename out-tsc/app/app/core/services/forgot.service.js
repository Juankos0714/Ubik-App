import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ForgotService {
    http;
    baseUrl = `${environment.apiUrl}/auth`;
    constructor(http) {
        this.http = http;
    }
    requestReset(email) {
        return this.http.post(`${this.baseUrl}/reset-password-request?email=${encodeURIComponent(email)}`, null, { responseType: 'text' });
    }
    resetPassword(token, newPassword) {
        return this.http.post(`${this.baseUrl}/reset-password`, { token, newPassword }, { responseType: 'text' });
    }
    static ɵfac = function ForgotService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ForgotService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ForgotService, factory: ForgotService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ForgotService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
