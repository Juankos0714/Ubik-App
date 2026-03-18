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
  roomId?: number;   // campo real del backend — usado para filtrar por habitación
  room_id?: number;  // alias alternativo
  start_date?: string;
  end_date?: string;
  startDate?: string;
  endDate?: string;
  checkInDate?: string;
  checkOutDate?: string;
  start_time?: string;
  end_time?: string;
  startTime?: string;
  endTime?: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'pending' | 'confirmed' | 'cancelled';
}

@Injectable({ providedIn: 'root' })
export class RoomService {
  private readonly baseUrl = environment.apiUrl;
  private readonly roomsUrl = `${this.baseUrl}/rooms`;
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

  // ─────────────────────── Services ────────────────────────

  getAllServices(): Observable<Service[]> {
    return this.inBrowser(this.http.get<Service[]>(this.servicesUrl));
  }

  // ─────────────────── Availability / Reservations ─────────────────────────

  /**
   * Verifica disponibilidad mandando checkInDate/checkOutDate como ISO 8601
   * con offset de zona horaria explícito.
   * Ejemplo: "2026-03-18T17:00:00-05:00" / "2026-03-18T19:00:00-05:00"
   *
   * El backend (motelManagement) espera estos mismos campos que usa
   * createReservation, no date+startTime+endTime por separado.
   */
  checkAvailability(
    roomId: number,
    checkInDate: string,
    checkOutDate: string,
  ): Observable<AvailabilityResult> {
    const params = new HttpParams()
      .set('checkInDate', checkInDate)
      .set('checkOutDate', checkOutDate);

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