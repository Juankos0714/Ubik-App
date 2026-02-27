import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  Motel,
  CreateMotelRequest,
} from '../../views/Forms/register/establecimiento/types/register-establishment.types';

@Injectable({ providedIn: 'root' })
export class MotelRegisterService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  createMotel(payload: CreateMotelRequest): Observable<Motel> {
    return this.http.post<Motel>(this.apiUrl + '/motels', payload);
  }

  updateMotel(id: number, payload: Partial<CreateMotelRequest>): Observable<Motel> {
    return this.http.put<Motel>(this.apiUrl + '/motels/' + id, payload);
  }

  getMyMotels(): Observable<Motel[]> {
    return this.http.get<Motel[]>(this.apiUrl + '/auth/motels/my-motels');
  }

  getMotelById(id: number): Observable<Motel> {
    return this.http.get<Motel>(this.apiUrl + '/motels/' + id);
  }

  deleteMotel(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/motels/' + id);
  }
}