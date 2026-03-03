import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Room } from '../models/room.model';
import type { Service } from '../../views/Forms/create-room/types/create-room.type';
import type { RoomCreatePayload } from '../../views/Forms/create-room/types/create-room.type';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private API_URL: string;
  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    this.API_URL = environment.apiUrl;
    this.isBrowser = isPlatformBrowser(platformId);
  }

  createRoom(payload: RoomCreatePayload): Observable<Room> {
    if (!this.isBrowser) return EMPTY as Observable<Room>;
    return this.http.post<Room>(`${this.API_URL}/rooms`, payload);
  }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.API_URL}/rooms`);
  }

  getRoomById(id: number): Observable<Room> { 
    return this.http.get<Room>(`${this.API_URL}/rooms/${id}`);
  }

  getRoomsByMotel(motelId: number): Observable<Room[]> {
    if (!this.isBrowser) return EMPTY as Observable<Room[]>;
    return this.http.get<Room[]>(this.API_URL + '/motels/' + motelId + '/rooms');
  }

  updateRoom(id: number, formData: FormData): Observable<Room> {
    if (!this.isBrowser) return EMPTY as Observable<Room>;
    return this.http.put<Room>(this.API_URL + '/rooms/' + id, formData);
  }

  deleteRoom(id: number): Observable<void> {
    if (!this.isBrowser) return EMPTY as Observable<void>;
    return this.http.delete<void>(this.API_URL + '/rooms/' + id);
  }

  getAllServices(): Observable<Service[]> {
    if (!this.isBrowser) return EMPTY as Observable<Service[]>;
    return this.http.get<Service[]>(`${this.API_URL}/services`);
  }

}