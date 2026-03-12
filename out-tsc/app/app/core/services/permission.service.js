import { Injectable, computed } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
export class PermissionService {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    // Mapa rol → permisos
    ROLE_PERMISSIONS = {
        7392841056473829: [
            'view_dashboard',
            'edit_users',
            'create_room',
            'delete_room',
            'view_reports',
        ],
        3847261094857362: [
            'view_dashboard',
            'create_room',
            'view_reports',
        ],
        9182736450192837: [], // client
    };
    //  Permisos actuales del usuario
    currentPermissions = computed(() => {
        const roleId = this.authService.role();
        if (!roleId)
            return [];
        return this.ROLE_PERMISSIONS[roleId] ?? [];
    }, ...(ngDevMode ? [{ debugName: "currentPermissions" }] : []));
    //  Método principal
    hasPermission(permission) {
        return this.currentPermissions().includes(permission);
    }
    hasAnyPermission(permissions) {
        return permissions.some(p => this.currentPermissions().includes(p));
    }
    hasAllPermissions(permissions) {
        return permissions.every(p => this.currentPermissions().includes(p));
    }
    static ɵfac = function PermissionService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PermissionService)(i0.ɵɵinject(i1.AuthService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PermissionService, factory: PermissionService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PermissionService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.AuthService }], null); })();
