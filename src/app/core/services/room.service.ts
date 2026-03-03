import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Room } from '../models/room.model';

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
  private readonly API_URL = `${environment.apiUrl}/rooms`;

  constructor(private http: HttpClient) {}

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.API_URL);
  }

  getRoomById(id: number): Observable<Room> {
    return this.http.get<Room>(`${this.API_URL}/${id}`);
  }

  getRoomsByMotel(motelId: number): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.API_URL}/motel/${motelId}`);
  }

  /**
   * Verifica si una habitación está disponible en un rango de fecha/hora.
   */
  checkAvailability(
    roomId: number,
    date: string,
    startTime: string,
    endTime: string,
  ): Observable<AvailabilityResult> {
    const params = { date, startTime, endTime };
    return this.http.get<AvailabilityResult>(`${this.API_URL}/${roomId}/availability`, { params });
  }

  /**
   * Obtiene todas las reservas de una habitación para una fecha específica.
   * Útil para mostrar los horarios ocupados en el selector de tiempo.
   */
  getReservationsForDate(roomId: number, date: string): Observable<RoomReservation[]> {
    return this.http.get<RoomReservation[]>(`${this.API_URL}/${roomId}/reservations`, {
      params: { date },
    });
  }

  /**
   * Suscribir email para ser notificado cuando la habitación esté disponible.
   */
  subscribeAvailability(roomId: number, email: string): Observable<void> {
    return this.http.post<void>(`${this.API_URL}/${roomId}/notify-available`, { email });
  }
}
