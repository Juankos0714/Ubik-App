import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, EMPTY, map } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Room } from '../models/room.model';

import type { Service, RoomCreatePayload } from '../../views/Forms/create-room/types/create-room.type';

export interface AvailabilityResult {
  available: boolean;
  message?: string;
}

export interface RoomReservation {
  id: number;
  roomId?: number;
  room_id?: number;
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
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'pending' | 'confirmed' | 'cancelled';
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

  updateRoom(id: number, payload: any): Observable<Room> {
    return this.inBrowser(this.http.put<Room>(`${this.roomsUrl}/${id}`, payload));
  }

  deleteRoom(id: number): Observable<void> {
    return this.inBrowser(this.http.delete<void>(`${this.roomsUrl}/${id}`));
  }

  // ─────────────────────── Services ────────────────────────

  getAllServices(): Observable<Service[]> {
    return this.inBrowser(this.http.get<Service[]>(this.servicesUrl));
  }

  // ─────────────────── Availability / Reservations ─────────────────────────

  /**
   * Verifica disponibilidad.
   * Endpoint: GET /api/reservations/room/{roomId}/available?checkIn=...&checkOut=...
   * Fechas en hora local Colombia: "2026-03-19T13:00:00"
   * El backend retorna boolean directamente.
   */
  checkAvailability(
    roomId: number,
    checkInDate: string,
    checkOutDate: string,
  ): Observable<AvailabilityResult> {
    const params = new HttpParams()
      .set('checkIn', checkInDate)
      .set('checkOut', checkOutDate);

    return this.inBrowser(
      this.http.get<boolean>(
        `${this.baseUrl}/reservations/room/${roomId}/available`,
        { params }
      ).pipe(
        map((available: boolean) => ({ available }))
      )
    );
  }

  /**
   * Obtiene reservas activas de una habitación y filtra por fecha.
   * Endpoint: GET /api/reservations/room/{roomId}/active
   * Solo retorna PENDING, CONFIRMED, CHECKED_IN (no CANCELLED ni CHECKED_OUT).
   */
  getReservationsForDate(roomId: number, date: string): Observable<RoomReservation[]> {
    return this.inBrowser(
      this.http.get<RoomReservation[]>(
        `${this.baseUrl}/reservations/room/${roomId}/active`
      ).pipe(
        map(reservations => reservations.filter(r => {
          const res = r as any;
          const rawStart: string = res.checkInDate ?? res.startDate ?? res.start_date ?? '';
          const rawEnd: string   = res.checkOutDate ?? res.endDate ?? res.end_date ?? '';
          if (!rawStart) return false;
          // Parsear como hora local (backend guarda en America/Bogota)
          const start    = new Date(rawStart);
          const end      = rawEnd ? new Date(rawEnd) : start;
          const dayStart = new Date(date + 'T00:00:00');
          const dayEnd   = new Date(date + 'T23:59:59');
          // Incluir si la reserva toca este día
          return start <= dayEnd && end >= dayStart;
        }))
      )
    );
  }

  /**
   * Devuelve todas las reservas activas de la habitación (PENDING, CONFIRMED, CHECKED_IN).
   * Usar para validar antes de eliminar.
   */
  getActiveReservations(roomId: number): Observable<RoomReservation[]> {
    return this.inBrowser(
      this.http.get<RoomReservation[]>(`${this.baseUrl}/reservations/room/${roomId}/active`)
    );
  }

  subscribeAvailability(roomId: number, email: string): Observable<void> {
    return this.inBrowser(
      this.http.post<void>(`${this.roomsUrl}/${roomId}/notify-available`, { email }),
    );
  }
}