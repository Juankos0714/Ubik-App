import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StreakResponse, DiscountResponse, AdminUserStreakResponse, AdminStreakStatsResponse, OverrideStreakRequest } from '../models/streak.model';

@Injectable({
  providedIn: 'root'
})
export class StreakService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/streaks`;

  // ... métodos existentes ...
  /**
   * Obtiene la racha del usuario autenticado.
   */
  getMyStreak(): Observable<StreakResponse> {
    return this.http.get<StreakResponse>(`${this.apiUrl}/me`);
  }

  /**
   * Obtiene la racha de un usuario específico (solo ADMIN o el propio usuario).
   */
  getStreakByUserId(userId: number): Observable<StreakResponse> {
    return this.http.get<StreakResponse>(`${this.apiUrl}/${userId}`);
  }

  /**
   * Calcula el descuento aplicable para un precio dado basado en la racha.
   */
  calculateDiscount(userId: number, price: number): Observable<DiscountResponse> {
    return this.http.get<DiscountResponse>(`${this.apiUrl}/${userId}/discount`, {
      params: { price: price.toString() }
    });
  }

  /**
   * Calcula el descuento para el usuario actual.
   */
  calculateMyDiscount(price: number): Observable<DiscountResponse> {
     return this.http.get<DiscountResponse>(`${this.apiUrl}/discount/me`, {
        params: { price: price.toString() }
     });
  }

  // ─── Métodos de Administración ──────────────────────────────────────────────

  /**
   * Obtiene estadísticas de racha para todos los usuarios.
   */
  getAdminStreakStats(): Observable<AdminStreakStatsResponse> {
    return this.http.get<AdminStreakStatsResponse>(`${this.apiUrl}/admin/stats`);
  }

  /**
   * Obtiene todos los usuarios y sus rachas (admin), opcionalmente filtrados por nivel.
   */
  getAllAdminStreaks(level?: string): Observable<AdminUserStreakResponse[]> {
    const url = level ? `${this.apiUrl}/admin/users` : `${this.apiUrl}/admin/all`;
    return this.http.get<AdminUserStreakResponse[]>(url, {
      params: level ? { level } : {}
    });
  }

  /**
   * Permite al admin forzar un nivel de racha para un usuario.
   */
  overrideUserStreak(userId: number, request: OverrideStreakRequest): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/admin/${userId}/override`, request);
  }
}
