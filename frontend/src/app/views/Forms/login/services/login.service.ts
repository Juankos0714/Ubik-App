import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';
import {
  LoginFormData,
  AuthResult,
  ValidationError,
  OAuthProvider,
} from '../types/login.types';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly apiUrl = environment.apiUrl;
  private readonly TOKEN_KEY = 'auth_token';

  constructor(private http: HttpClient) {}

  // ✅ VALIDACIÓN DE FORMULARIO
  validateForm(data: Partial<LoginFormData>): ValidationError[] {
    const errors: ValidationError[] = [];

    if (!data.username?.trim()) {
      errors.push({ field: 'username', message: 'El usuario es obligatorio' });
    }

    if (!data.password?.trim()) {
      errors.push({ field: 'password', message: 'La contraseña es obligatoria' });
    }

    return errors;
  }

login(data: LoginFormData, rememberMe: boolean): Observable<string> {
  console.log('🚀 LOGIN SERVICE EJECUTADO', data, rememberMe);

  return this.http.post(
    `${this.apiUrl}/auth/login`,
    data,
    { responseType: 'text' } 
  ).pipe(
    tap((token: string) => {
      console.log('🔥 TOKEN RECIBIDO:', token);

      // Guardar siempre en localStorage para persistencia
      localStorage.setItem(this.TOKEN_KEY, token);
      sessionStorage.setItem(this.TOKEN_KEY, token);

    }),
    catchError((error) =>
      throwError(() => ({
        success: false,
        message: 'Error al iniciar sesión',
      }))
    )
  );
}

  // ⚠️ OAUTH (MOCK SOLO PARA UI)
  loginWithOAuth(provider: OAuthProvider): Observable<AuthResult> {
    return of({
      success: true,
      message: 'Login exitoso (mock)',
      token: `mock-oauth-token-${provider}-${Date.now()}`,
      userId: '123',
      redirectUrl: '/home',
    }).pipe(delay(500));
  }

  

  getAuthToken(): string | null {
    return (
      localStorage.getItem(this.TOKEN_KEY) ||
      sessionStorage.getItem(this.TOKEN_KEY)
    );
  }

  clearAuthToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getAuthToken();
  }

  // ⚠️ RESET PASSWORD (MOCK)
  requestPasswordReset(
    email: string
  ): Observable<{ success: boolean; message: string }> {
    if (!email) {
      return throwError(() => ({
        success: false,
        message: 'El correo es obligatorio',
      }));
    }

    return of({
      success: true,
      message: 'Se ha enviado un correo de recuperación',
    }).pipe(delay(500));
  }
}