import { Injectable } from '@angular/core';
import { validateEmail, validatePassword, validatePasswordConfirmation, validateRequiredField, collectValidationErrors, } from '../utils/validation.utils';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class RegisterService {
    http;
    REGISTER_URL = `${environment.apiUrl}/auth/register`;
    constructor(http) {
        this.http = http;
    }
    /** VALIDACIÓN SOLO FRONTEND */
    validateClientForm(data) {
        if (!data) {
            return [{ field: 'form', message: 'Datos inválidos' }];
        }
        const validations = [
            {
                field: 'username',
                validator: () => validateRequiredField(data.username || '', 'El nombre de usuario'),
            },
            {
                field: 'email',
                validator: () => validateEmail(data.email || ''),
            },
            {
                field: 'password',
                validator: () => validatePassword(data.password || ''),
            },
            {
                field: 'confirmPassword',
                validator: () => validatePasswordConfirmation(data.password || '', data.comfirmPassword || ''),
            },
        ];
        return collectValidationErrors(validations);
    }
    /** ENVÍO AL BACKEND */
    submitClientRegistration(data) {
        const payload = {
            username: data.username?.trim(),
            email: data.email?.trim(),
            password: data.password,
            comfirmPassword: data.comfirmPassword?.trim(),
            phoneNumber: data.phoneNumber?.trim(),
            anonymous: data.anonymous ?? false,
            roleId: data.roleId ?? 3,
            birthDate: data.birthDate,
            latitude: data.latitude ?? 4.6097,
            longitude: data.longitude ?? -74.0721
        };
        console.log('🚀 REGISTER PAYLOAD', payload);
        return this.http.post(this.REGISTER_URL, payload, { responseType: 'text' });
    }
    static ɵfac = function RegisterService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RegisterService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RegisterService, factory: RegisterService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegisterService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
