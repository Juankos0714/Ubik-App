import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { AuthService } from './auth.service';
import { Users } from '../models/users.model';
import { Motel } from '../models/motel.model';

@Injectable({ providedIn: 'root' })
export class PropertyUserService {
  private baseUrl = `${environment.apiUrl}`;
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
    if (!this.isBrowser) return EMPTY as Observable<Motel[]>;
    return this.http.get<Motel[]>(`${this.baseUrl}/auth/motels/my-motels`);
  }

  /**
   * Elimina una propiedad por id
   */
  deleteProperty(id: number): Observable<void> {
    if (!this.isBrowser) return EMPTY as Observable<void>;
    return this.http.delete<void>(`${this.baseUrl}/motels/${id}`);
  }


  /**
   * Obtener una propiedad por id (para editar)
   */
  getPropertyById(id: number): Observable<Users> {
    if (!this.isBrowser) return EMPTY as Observable<Users>;
    return this.http.get<Users>(`${this.baseUrl}/motels/${id}`);
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
