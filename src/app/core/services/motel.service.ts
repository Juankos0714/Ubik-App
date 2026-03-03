import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

import { Motel } from '../models/motel.model';
import { environment } from '../../../environments/environment';
import { CreateMotelRequest } from '../../views/Forms/create-motel/types/create-motel.types';

type UploadImageResponse = { url: string };

@Injectable({ providedIn: 'root' })
export class MotelService {
  private apiUrl: string;
  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    this.apiUrl = environment.apiUrl;
    this.isBrowser = isPlatformBrowser(platformId);
  }

  // ────────────────────────────────────────────────────────────────────────────
  // MOTEL CRUD (tu base)
  // ────────────────────────────────────────────────────────────────────────────

  createMotel(payload: CreateMotelRequest): Observable<Motel> {
    if (!this.isBrowser) return EMPTY as Observable<Motel>;
    return this.http.post<Motel>(`${this.apiUrl}/motels`, payload);
  }

  updateMotel(id: number, payload: Partial<CreateMotelRequest>): Observable<Motel> {
    if (!this.isBrowser) return EMPTY as Observable<Motel>;
    return this.http.put<Motel>(`${this.apiUrl}/motels/${id}`, payload);
  }

  getMyMotels(): Observable<Motel[]> {
    if (!this.isBrowser) return EMPTY as Observable<Motel[]>;
    return this.http.get<Motel[]>(`${this.apiUrl}/auth/motels/my-motels`);
  }

  getMotelById(id: number): Observable<Motel> {
    if (!this.isBrowser) return EMPTY as Observable<Motel>;
    return this.http.get<Motel>(`${this.apiUrl}/motels/${id}`);
  }

  deleteMotel(id: number): Observable<void> {
    if (!this.isBrowser) return EMPTY as Observable<void>;
    return this.http.delete<void>(`${this.apiUrl}/motels/${id}`);
  }

  getProfile(): Observable<Motel> {
    if (!this.isBrowser) return EMPTY as Observable<Motel>;
    return this.http.get<Motel>(`${this.apiUrl}/profile`);
  }

  // ────────────────────────────────────────────────────────────────────────────
  // NUEVO CONTRATO: IMÁGENES
  // ────────────────────────────────────────────────────────────────────────────

  /**
   * 🏗 CREAR MOTEL + IMÁGENES (galería) en un paso
   * POST /api/motels/with-images
   * Body: FormData { motelData: JSON string, images: File[] }
   */
  createMotelWithImages(payload: CreateMotelRequest) {
    return this.http.post<Motel>(`${this.apiUrl}/motels/with-images`, payload);
  }

  /**
   * 📤 SUBIR UNA IMAGEN (devuelve URL)
   * POST /api/images/upload?folder=ubik
   * Body: FormData { file }
   */
  uploadImage(file: File, folder: string = 'Ubik'): Observable<UploadImageResponse> {
    if (!this.isBrowser) return EMPTY as Observable<UploadImageResponse>;
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<UploadImageResponse>(`${this.apiUrl}/images/upload?folder=${folder}`, fd);
  }

  /**
   * 🟢 ASOCIAR COMO PERFIL
   * PUT /motels/{id}/images/profile
   * Body: { url }
   */
  setProfileImage(id: number, url: string) {
    return this.http.put<void>(`${this.apiUrl}/motels/${id}/images/profile`, { url });
  }

  /**
   * 🔵 ASOCIAR COMO PORTADA
   * PUT /motels/{id}/images/cover
   * Body: { url }
   */
  setCoverImage(motelId: number, url: string): Observable<Motel> {
    if (!this.isBrowser) return EMPTY as Observable<Motel>;
    return this.http.put<Motel>(`${this.apiUrl}/motels/${motelId}/images/cover`, { url });
  }

  /**
   * 🟣 GALERÍA (recomendado) — un solo paso
   * POST /api/motels/{id}/images
   * Body: FormData { images: File[] }
   */
  addGalleryImages(motelId: number, images: File[]): Observable<{ count: number; urls: string[] }> {
    if (!this.isBrowser) return EMPTY as Observable<{ count: number; urls: string[] }>;
    const fd = new FormData();
    for (const img of images) fd.append('images', img);
    return this.http.post<{ count: number; urls: string[] }>(`${this.apiUrl}/motels/${motelId}/images`, fd);
  }

  /**
   * 🔴 ELIMINAR IMAGEN por ID
   * DELETE /motels/{id}/images/{imageId}
   */
  deleteImageById(motelId: number, imageId: number): Observable<{ ok: true }> {
    if (!this.isBrowser) return EMPTY as Observable<{ ok: true }>;
    return this.http.delete<{ ok: true }>(`${this.apiUrl}/motels/${motelId}/images/${imageId}`);
  }

  /**
   * 🔴 ELIMINAR IMAGEN por URL(s)
   * DELETE /api/motels/{id}/images
   * Body: string[]
   *
   * ⚠️ En Angular HttpClient, para enviar body en DELETE debes usar request(...)
   */
  deleteImagesByUrl(motelId: number, urls: string[]): Observable<{ deleted: number }> {
    if (!this.isBrowser) return EMPTY as Observable<{ deleted: number }>;
    return this.http.request<{ deleted: number }>('DELETE', `${this.apiUrl}/motels/${motelId}/images`, {
      body: urls,
    });
  }
}
