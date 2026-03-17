import { Injectable, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY, Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';
import { OwnerDashboardSummary, RoomStatusBoardResponse, Reservation } from '../models/reservation.model';

@Injectable({ providedIn: 'root' })
export class ReservationService {
  private apiUrl: string;
  private isBrowser: boolean;
  private eventSource: EventSource | null = null;
  private reservationSubject = new Subject<Reservation>();

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) platformId: Object,
    private zone: NgZone
  ) {
    this.apiUrl = environment.apiUrl;
    this.isBrowser = isPlatformBrowser(platformId);
  }

  getDashboardSummary(motelId: number): Observable<OwnerDashboardSummary> {
    if (!this.isBrowser) return EMPTY as Observable<OwnerDashboardSummary>;
    return this.http.get<OwnerDashboardSummary>(`${this.apiUrl}/reservations/owner/dashboard?motelId=${motelId}`);
  }

  getRoomStatusBoard(motelId: number): Observable<RoomStatusBoardResponse[]> {
    if (!this.isBrowser) return EMPTY as Observable<RoomStatusBoardResponse[]>;
    return this.http.get<RoomStatusBoardResponse[]>(`${this.apiUrl}/reservations/owner/status-board?motelId=${motelId}`);
  }

  verifyCode(code: string): Observable<Reservation> {
    if (!this.isBrowser) return EMPTY as Observable<Reservation>;
    return this.http.get<Reservation>(`${this.apiUrl}/reservations/confirm-code/${code}`);
  }

  checkIn(id: number): Observable<Reservation> {
    return this.http.patch<Reservation>(`${this.apiUrl}/reservations/${id}/checkin`, {});
  }

  // SSE connection
  subscribeToReservations(): Observable<Reservation> {
    if (!this.isBrowser) return EMPTY as Observable<Reservation>;

    if (this.eventSource) {
      this.eventSource.close();
    }

    // Nota: EventSource nativo no envía headers. Si el backend requiere Bearer token en SSE,
    // se suele pasar por query param o usar una librería. 
    // Por ahora seguimos el plan de usar el endpoint de stream.
    this.eventSource = new EventSource(`${this.apiUrl}/reservations/stream`);

    this.eventSource.onmessage = (event) => {
      this.zone.run(() => {
        try {
          const reservation: Reservation = JSON.parse(event.data);
          this.reservationSubject.next(reservation);
        } catch (e) {
          console.error('Error parsing SSE event', e);
        }
      });
    };

    this.eventSource.onerror = (error) => {
      console.error('SSE error', error);
      // Podríamos implementar reconexión aquí
    };

    return this.reservationSubject.asObservable();
  }

  closeSSE(): void {
    if (this.eventSource) {
      this.eventSource.close();
      this.eventSource = null;
    }
  }
}
