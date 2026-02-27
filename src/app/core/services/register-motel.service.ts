import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  Motel,
  CreateMotelRequest,
} from '../../views/Forms/register/establecimiento/types/register-establishment.types';

@Injectable({ providedIn: 'root' })
export class MotelRegisterService {
  private apiUrl: string;
  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    this.apiUrl = environment.apiUrl;
    this.isBrowser = isPlatformBrowser(platformId);
  }

  createMotel(payload: CreateMotelRequest): Observable<Motel> {
    //Evita SSR para endpoints que requieren auth
    if (!this.isBrowser) return EMPTY as Observable<Motel>;
    return this.http.post<Motel>(this.apiUrl + '/motels', payload);
  }

  updateMotel(id: number, payload: Partial<CreateMotelRequest>): Observable<Motel> {
    if (!this.isBrowser) return EMPTY as Observable<Motel>;
    return this.http.put<Motel>(this.apiUrl + '/motels/' + id, payload);
  }

  getMyMotels(): Observable<Motel[]> {
    if (!this.isBrowser) return EMPTY as Observable<Motel[]>;
    return this.http.get<Motel[]>(this.apiUrl + '/auth/motels/my-motels');
  }

  getMotelById(id: number): Observable<Motel> {
    // (este puede ser público; lo dejo sin bloquear SSR)
    return this.http.get<Motel>(this.apiUrl + '/motels/' + id);
  }

  deleteMotel(id: number): Observable<void> {
    if (!this.isBrowser) return EMPTY as Observable<void>;
    return this.http.delete<void>(this.apiUrl + '/motels/' + id);
  }
}