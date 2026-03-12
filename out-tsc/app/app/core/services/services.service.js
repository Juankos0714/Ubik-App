import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ServiceService {
    http;
    API_URL = `${environment.apiUrl}/services`;
    constructor(http) {
        this.http = http;
    }
    getServices() {
        return this.http.get(this.API_URL);
    }
    static ɵfac = function ServiceService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ServiceService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ServiceService, factory: ServiceService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ServiceService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
