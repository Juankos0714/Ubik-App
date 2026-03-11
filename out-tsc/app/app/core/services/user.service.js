import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, EMPTY, tap, shareReplay } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class UsersService {
    http = inject(HttpClient);
    platformId = inject(PLATFORM_ID);
    baseUrl = `${environment.apiUrl}/user`;
    profileSubject = new BehaviorSubject(null);
    profile$ = this.profileSubject.asObservable();
    loadProfile() {
        if (!isPlatformBrowser(this.platformId))
            return EMPTY;
        return this.http.get(this.baseUrl).pipe(tap(profile => this.profileSubject.next(profile)), shareReplay(1));
    }
    /** Útil si ya tienes datos y no quieres refetch */
    setProfile(profile) {
        this.profileSubject.next(profile);
    }
    updateProfile(dto) {
        if (!isPlatformBrowser(this.platformId))
            return EMPTY;
        return this.http.put(this.baseUrl, dto).pipe(tap(updated => this.profileSubject.next(updated)));
    }
    deleteProfile() {
        if (!isPlatformBrowser(this.platformId))
            return EMPTY;
        return this.http.delete(this.baseUrl);
    }
    clearProfile() {
        this.profileSubject.next(null);
    }
    /** Por si quieres forzar refresh manual */
    refreshProfile() {
        return this.loadProfile();
    }
    static ɵfac = function UsersService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UsersService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UsersService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
