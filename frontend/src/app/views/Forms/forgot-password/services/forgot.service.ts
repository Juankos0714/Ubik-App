import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ForgotService {

  private baseUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  // STEP 1 → Enviar email
  requestReset(email: string): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/reset-password-request?email=${email}`,
      {}
    );
  }

  // STEP 2 → Cambiar contraseña
  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/reset-password`, {
      token,
      newPassword
    });
  }
}
