import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Motel } from '../models/motel.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MotelService {

  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);
  private baseUrl = `${environment.apiUrl}/motels`;

  // btener TODOS los moteles (para Explore)

  getMotels(): Observable<Motel[]> {
    if (!isPlatformBrowser(this.platformId)) {
      return EMPTY;
    }
    return this.http.get<Motel[]>(this.baseUrl);
  }

  // Obtener perfil del motel logueado
   
  getProfile(): Observable<Motel> {
    if (!isPlatformBrowser(this.platformId)) {
      return EMPTY;
    }
    return this.http.get<Motel>(`${this.baseUrl}/profile`);
  }

  // Actualizar perfil del motel

  updateProfile(data: Partial<Motel>): Observable<Motel> {
    return this.http.put<Motel>(`${this.baseUrl}/profile`, data);
  }
}