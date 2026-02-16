import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ForgotService {

  private baseUrl = `${environment.apiUrl}/auth/reset-password`;

  constructor(private http: HttpClient) {}

  requestReset(email: string): Observable<any> {
    return this.http.post(this.baseUrl, { email });
  }

  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.http.post(this.baseUrl, {
      token,
      newPassword
    });
  }
}
