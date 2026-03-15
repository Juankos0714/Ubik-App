import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {
  LoginFormData,
  ValidationError,
} from '../../views/Forms/login/types/login.types';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) {}

  /* ======================= */

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

  /* ======================= */

  login(data: LoginFormData, rememberMe: boolean): Observable<string> {
    return this.http.post(`${this.apiUrl}/auth/login`, data, { responseType: 'text' }).pipe(
      tap((rawToken: string) => {
        let token = (rawToken ?? '').toString().trim();

        try {
          // Si el backend devuelve un objeto JSON (como {"token": "..."})
          const parsed = JSON.parse(rawToken);
          token = (parsed.token || parsed.access_token || parsed.jwt || rawToken) as string;
        } catch (e) {
          // Si no es JSON válido, limpiamos comillas por si acaso
          token = rawToken.replace(/"/g, '').trim();
        }

        //  Normalizar por si viene "Bearer xxx"
        token = token
          .toString()
          .replace(/"/g, '')
          .replace(/^Bearer\s+/i, '')
          .trim();

        // console.log('TOKEN FINAL →', token);

        this.auth.setToken(token);
      }),
    );
  }

  /* ======================= */
  /* PERFIL DEL USUARIO */
  /* ======================= */

  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user`).pipe(
      tap((user) => this.auth.setUser(user)),
      catchError((error) => {
        return throwError(() => error);
      }),
    );
  }

  /* ======================= */

  getAuthToken(): string | null {
    return this.auth.token();
  }

  clearAuthToken(): void {
    this.auth.logout();
  }

  isAuthenticated(): boolean {
    return this.auth.isLogged();
  }

  /* ======================= */

  loginWithGoogle(idToken: string): Observable<string> {
    return this.http
      .post(`${this.apiUrl}/auth/oauth/google`, { idToken }, { responseType: 'text' })
      .pipe(
        tap((rawToken: string) => {
          let token = (rawToken ?? '').toString().trim();
          try {
            const parsed = JSON.parse(rawToken);
            token = (parsed.token || parsed.access_token || parsed.jwt || rawToken) as string;
          } catch {
            token = rawToken.replace(/"/g, '').trim();
          }
          token = token.replace(/"/g, '').replace(/^Bearer\s+/i, '').trim();
          this.auth.setToken(token);
        }),
      );
  }
}
