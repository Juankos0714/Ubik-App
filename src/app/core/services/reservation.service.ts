import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY, Subject, map } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';
import { OwnerDashboardSummary, RoomStatusBoardResponse, Reservation } from '../models/reservation.model';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class ReservationService {
  private apiUrl: string;
  private isBrowser: boolean;
  private eventSource: EventSource | null = null;
  private reservationSubject = new Subject<Reservation>();
  private retryCount = 0;
  private readonly MAX_RETRIES = 5;
  private retryTimer: any = null;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) platformId: Object,
    private authService: AuthService
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
    return this.http.get<RoomStatusBoardResponse[]>(`${this.apiUrl}/reservations/owner/status-board?motelId=${motelId}`).pipe(
      map(rooms => rooms.map(room => ({
        ...room,
        currentReservation: room.currentReservation ? {
          ...room.currentReservation,
          reservationStatus: this.mapStatus(room.currentReservation.reservationStatus)
        } : undefined
      })))
    );
  }

  verifyCode(code: string): Observable<Reservation> {
    if (!this.isBrowser) return EMPTY as Observable<Reservation>;
    return this.http.get<Reservation>(`${this.apiUrl}/reservations/confirm-code/${code}`).pipe(
      map(res => this.mapReservation(res))
    );
  }

  checkIn(id: number): Observable<Reservation> {
    return this.http.patch<Reservation>(`${this.apiUrl}/reservations/${id}/checkin`, {}).pipe(
      map(res => this.mapReservation(res))
    );
  }

  getUserReservations(userId: number): Observable<Reservation[]> {
    if (!this.isBrowser) return EMPTY as Observable<Reservation[]>;
    return this.http.get<Reservation[]>(`${this.apiUrl}/reservations/user/${userId}`).pipe(
      map(list => list.map(res => this.mapReservation(res)))
    );
  }

  private mapReservation(res: any): Reservation {
    let status = this.mapStatus(res.status);
    
    // Auto-cancelar si pasó el tiempo y seguía PENDIENTE
    if (status === 'PENDIENTE' && res.checkInDate) {
      const checkIn = new Date(res.checkInDate);
      if (Date.now() > checkIn.getTime()) {
        status = 'CANCELADO';
      }
    }

    return {
      ...res,
      status
    } as Reservation;
  }

  private mapStatus(status: string): any {
    if (!status) return status;
    const s = status.toUpperCase();
    switch (s) {
      case 'PENDING': return 'PENDIENTE';
      case 'CONFIRMED': return 'PAGADO';
      case 'CANCELLED': return 'CANCELADO';
      case 'CHECKED_IN': return 'INGRESO'; // Mapeado a INGRESO por solicitud
      case 'CHECKED_OUT': return 'CHECKED_OUT';
      default: return status;
    }
  }

  // SSE connection
  subscribeToReservations(): Observable<Reservation> {
    if (!this.isBrowser) return EMPTY as Observable<Reservation>;

    if (this.eventSource) {
      this.eventSource.close();
    }

    // SSE nativo no permite enviar headers (Authorization).
    // El gateway ya soporta token por query param (access_token o token).
    const token = this.authService.token();
    if (!token) {
      console.warn('SSE: no hay token disponible, la conexión será rechazada por el gateway');
      return EMPTY as Observable<Reservation>;
    }

    const sseUrl = `${this.apiUrl}/reservations/stream?access_token=${encodeURIComponent(token)}`;
    this.eventSource = new EventSource(sseUrl);

    this.eventSource.onopen = () => {
      // Conexión establecida
    };

    this.eventSource.onmessage = (event) => {
      try {
        const reservation: Reservation = JSON.parse(event.data);
        this.reservationSubject.next(reservation);
      } catch (e) {
        console.error('Error parsing SSE event', e);
      }
    };

    this.eventSource.onerror = (error) => {
      console.error('SSE error', error);
      this.closeSSE();
      if (this.retryCount < this.MAX_RETRIES) {
        this.retryCount++;
        this.retryTimer = setTimeout(() => this.subscribeToReservations(), 3000);
      } else {
        console.error('SSE: Límite de reintentos alcanzado');
      }
    };

    return this.reservationSubject.asObservable();
  }

  closeSSE(): void {
    if (this.retryTimer) {
      clearTimeout(this.retryTimer);
      this.retryTimer = null;
    }
    if (this.eventSource) {
      this.eventSource.close();
      this.eventSource = null;
    }
    this.retryCount = 0;
  }
}