import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  PendingMotel,
  MotelApprovalStats,
  ApproveMotelRequest,
  ApproveMotelResponse,
  RejectMotelRequest,
  RejectMotelResponse,
  TodayReservationStats,
  PaymentRecord,
  UserProfile,
} from '../models/admin.model';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private readonly http = inject(HttpClient);

  private readonly adminUrl = `${environment.apiUrl}/admin`;
  private readonly paymentsUrl = `${environment.apiUrl}/payments`;
  private readonly authUrl = `${environment.apiUrl}/auth`;
  private readonly userUrl = `${environment.apiUrl}/user`;

  // ─── Gestión de Moteles ────────────────────────────────────────────────────

  getPendingMotels(): Observable<PendingMotel[]> {
    return this.http.get<PendingMotel[]>(`${this.adminUrl}/motels/pending`);
  }

  getMotelApprovalStats(): Observable<MotelApprovalStats> {
    return this.http.get<MotelApprovalStats>(`${this.adminUrl}/motels/statistics`);
  }

  approveMotel(id: number, body: ApproveMotelRequest): Observable<ApproveMotelResponse> {
    return this.http.post<ApproveMotelResponse>(`${this.adminUrl}/motels/${id}/approve`, body);
  }

  rejectMotel(id: number, body: RejectMotelRequest): Observable<RejectMotelResponse> {
    return this.http.post<RejectMotelResponse>(`${this.adminUrl}/motels/${id}/reject`, body);
  }

  // ─── Estadísticas de Reservas ──────────────────────────────────────────────

  getTodayReservationStats(): Observable<TodayReservationStats> {
    return this.http.get<TodayReservationStats>(`${this.adminUrl}/reservation-stats/today`);
  }

  // ─── Pagos ─────────────────────────────────────────────────────────────────

  getPaymentsByReservation(reservationId: number): Observable<PaymentRecord[]> {
    return this.http.get<PaymentRecord[]>(`${this.paymentsUrl}/reservation/${reservationId}`);
  }

  // ─── Autenticación y Perfiles ──────────────────────────────────────────────

  testAdminAccess(): Observable<string> {
    return this.http.get(`${this.authUrl}/admin/test`, { responseType: 'text' });
  }

  getUserById(id: number): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.userUrl}/${id}`);
  }
}
