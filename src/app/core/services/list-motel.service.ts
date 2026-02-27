import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { AuthService } from '../middleware/auth.service';
import { Users } from '../models/users.model';
import { Motel } from '../models/motel.model';

@Injectable({ providedIn: 'root' })
export class PropertyUserService {
  private baseUrl = `${environment.apiUrl}/auth/motels/my-motels`;
  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  /**
   * Obtiene las propiedades del usuario logueado
   */
  getMyMotels(): Observable<Motel[]> {
    // ✅ Evita que SSR haga la llamada (sería 401 por no enviar Authorization)
    if (!this.isBrowser) return EMPTY as Observable<Motel[]>;
    return this.http.get<Motel[]>(this.baseUrl);
  }

  /**
   * Elimina una propiedad por id
   */
  deleteProperty(id: number): Observable<void> {
    if (!this.isBrowser) return EMPTY as Observable<void>;
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  /**
   * Obtener una propiedad por id (para editar)
   */
  getPropertyById(id: number): Observable<Users> {
    if (!this.isBrowser) return EMPTY as Observable<Users>;
    return this.http.get<Users>(`${this.baseUrl}/property/${id}`);
  }

  /**
   * Crear propiedad
   */
  createProperty(data: FormData | Users): Observable<Users> {
    if (!this.isBrowser) return EMPTY as Observable<Users>;
    return this.http.post<Users>(`${this.baseUrl}`, data);
  }

  /**
   * Actualizar propiedad
   */
  updateProperty(id: number, data: FormData | Users): Observable<Users> {
    if (!this.isBrowser) return EMPTY as Observable<Users>;
    return this.http.put<Users>(`${this.baseUrl}/${id}`, data);
  }
}