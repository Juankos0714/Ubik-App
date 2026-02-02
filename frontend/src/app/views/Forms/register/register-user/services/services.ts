import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { ValidationError } from '../types/register-user.types';
import { RegisterFormData } from '../types/register-user.types';
import { RegisterUserPayload } from '../types/register-user-payload.types';

import {
  validateEmail,
  validatePassword,
  validatePasswordConfirmation,
  validateRequiredField,
  collectValidationErrors,
} from '../utils/validation.utils';

import { environment } from '../../../../../../environments/environment';

export interface RegistrationResult {
  success: boolean;
  message: string;
  userId?: string;
}

@Injectable({ providedIn: 'root' })
export class RegisterService {

  private readonly REGISTER_URL = `${environment.apiUrl}/auth/register`;

  constructor(private http: HttpClient) {}

  /** Validación SOLO frontend */
  validateClientForm(data: Partial<RegisterFormData>): ValidationError[] {
    if (!data) {
      return [{ field: 'form', message: 'Datos inválidos' }];
    }

    const validations = [
      {
        field: 'username',
        validator: () =>
          validateRequiredField(data.username || '', 'El nombre de usuario'),
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
        validator: () =>
          validatePasswordConfirmation(
            data.password || '',
            data.confirmPassword || ''
          ),
      },
    ];

    return collectValidationErrors(validations);
  }

  /** Envío al backend */
    submitClientRegistration(
    data: RegisterFormData
  ): Observable<string> {

    const payload: RegisterUserPayload = {
      username: data.username,
      email: data.email,
      password: data.password,
      anonymous: data.anonymous ?? false,
      roleId: 3,
    };

    console.log('REGISTER PAYLOAD', payload);

    return this.http.post(
      this.REGISTER_URL,
      payload,
      { responseType: 'text' }
    );
  }
}
