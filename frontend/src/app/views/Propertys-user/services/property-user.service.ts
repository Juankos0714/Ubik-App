import { inject, Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../../../core/auth.service";
import { PropertyUser } from "../models/property-user.model";

@Injectable({ providedIn: 'root'})
export class PropertyUserService {
      private baseUrl = `${environment.apiUrl}/auth/motels/my-motels`;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  /**
   * Obtiene las propiedades del usuario logueado
   */
  getMyProperties(): Observable<PropertyUser[]> {
    const userId = this.authService.user()?.id;   

    return this.http.get<PropertyUser[]>(`${this.baseUrl}/${userId}`);
  }

  /**
   * Elimina una propiedad por id
   */
  deleteProperty(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  /**
   * Obtener una propiedad por id (para editar)
   */
  getPropertyById(id: number): Observable<PropertyUser> {
    return this.http.get<PropertyUser>(`${this.baseUrl}/property/${id}`);
  }

  /**
   * Crear propiedad
   */
  createProperty(data: FormData | PropertyUser): Observable<PropertyUser> {
    return this.http.post<PropertyUser>(`${this.baseUrl}`, data);
  }

  /**
   * Actualizar propiedad
   */
  updateProperty(id: number, data: FormData | PropertyUser): Observable<PropertyUser> {
    return this.http.put<PropertyUser>(`${this.baseUrl}/${id}`, data);
  }

}