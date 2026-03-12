import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs';
import * as i0 from "@angular/core";
export class ColombiaService {
    http = inject(HttpClient);
    // JSON cargado UNA vez y cacheado en memoria (shareReplay)
    data$ = this.http
        .get('/assets/data/colombia.json')
        .pipe(shareReplay(1));
    /** Todos los departamentos con sus municipios */
    getAll() {
        return this.data$;
    }
    /** Solo nombres de departamentos */
    getDepartments() {
        return this.data$.pipe(map(deps => deps.map(d => d.name)));
    }
    /** Municipios de un departamento específico */
    getMunicipalities(departmentName) {
        return this.data$.pipe(map(deps => {
            const dep = deps.find(d => d.name === departmentName);
            return dep?.municipalities ?? [];
        }));
    }
    static ɵfac = function ColombiaService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ColombiaService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ColombiaService, factory: ColombiaService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ColombiaService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
