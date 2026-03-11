import { Injectable, signal, computed } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Servicio compartido entre Header y Explore.
 *
 * El Header escribe con set().
 * El Explore lee con state() y llama clear() solo cuando ya procesó los datos.
 *
 * El flag `pending` evita que el estado se limpie antes de que
 * explore haya terminado de cargar sus cards.
 */
export class SearchService {
    _state = signal({ department: '', city: '', query: '' }, ...(ngDevMode ? [{ debugName: "_state" }] : []));
    state = this._state.asReadonly();
    hasPending = computed(() => {
        const s = this._state();
        return !!(s.department || s.city || s.query);
    }, ...(ngDevMode ? [{ debugName: "hasPending" }] : []));
    set(partial) {
        this._state.update(prev => ({ ...prev, ...partial }));
    }
    /** Llamar solo DESPUÉS de haber aplicado el estado a los filtros */
    clear() {
        this._state.set({ department: '', city: '', query: '' });
    }
    static ɵfac = function SearchService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SearchService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
