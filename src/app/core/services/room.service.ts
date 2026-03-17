import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Room } from '../models/room.model';

import type { Service, RoomCreatePayload } from '../../views/Forms/create-room/types/create-room.type';

export interface AvailabilityResult {
  available: boolean;
  message?: string;
}

export interface RoomReservation {
  id: number;
  room_id: number;
  start_date: string;
  start_time: string;
  end_time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

@Injectable({ providedIn: 'root' })
export class RoomService {
  private readonly baseUrl = environment.apiUrl;
  private readonly roomsUrl = `${this.baseUrl}/rooms`;

  /**
   * Ajusta esta ruta si tu backend usa otra:
   * - `${baseUrl}/services`
   * - `${baseUrl}/rooms/services`
   * - `${baseUrl}/room-services`
   */
  private readonly servicesUrl = `${this.baseUrl}/services`;

  private readonly isBrowser: boolean;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  private inBrowser<T>(obs: Observable<T>): Observable<T> {
    return this.isBrowser ? obs : (EMPTY as unknown as Observable<T>);
  }

  // ───────────────────────── Rooms ─────────────────────────

  createRoom(payload: RoomCreatePayload): Observable<Room> {
    return this.inBrowser(this.http.post<Room>(this.roomsUrl, payload));
  }

  getRooms(): Observable<Room[]> {
    return this.inBrowser(this.http.get<Room[]>(this.roomsUrl));
  }

  getRoomById(id: number): Observable<Room> {
    return this.inBrowser(this.http.get<Room>(`${this.roomsUrl}/${id}`));
  }

  getRoomsByMotel(motelId: number): Observable<Room[]> {
    return this.inBrowser(this.http.get<Room[]>(`${this.baseUrl}/motels/${motelId}/rooms`));
  }

  updateRoom(id: number, payload: any): Observable<Room> {
    return this.inBrowser(this.http.put<Room>(`${this.roomsUrl}/${id}`, payload));
  }

  // ─────────────────────── Services ────────────────────────

  getAllServices(): Observable<Service[]> {
    return this.inBrowser(this.http.get<Service[]>(this.servicesUrl));
  }

  // ─────────────────── Availability / Reservations ───────────────────

  checkAvailability(
    roomId: number,
    date: string,
    startTime: string,
    endTime: string,
  ): Observable<AvailabilityResult> {
    const params = new HttpParams()
      .set('date', date)
      .set('startTime', startTime)
      .set('endTime', endTime);

    return this.inBrowser(
      this.http.get<AvailabilityResult>(`${this.roomsUrl}/${roomId}/availability`, { params }),
    );
  }

  getReservationsForDate(roomId: number, date: string): Observable<RoomReservation[]> {
    const params = new HttpParams().set('date', date);

    return this.inBrowser(
      this.http.get<RoomReservation[]>(`${this.roomsUrl}/${roomId}/reservations`, { params }),
    );
  }

  subscribeAvailability(roomId: number, email: string): Observable<void> {
    return this.inBrowser(
      this.http.post<void>(`${this.roomsUrl}/${roomId}/notify-available`, { email }),
    );
  }
}