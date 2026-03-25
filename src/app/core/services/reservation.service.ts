import { Injectable, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY, Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';
import { OwnerDashboardSummary, RoomStatusBoardResponse, Reservation } from '../models/reservation.model';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class ReservationService implements OnDestroy {
  private apiUrl: string;
  private isBrowser: boolean;
  private eventSource: EventSource | null = null;
  private reservationSubject = new Subject<Reservation>();

  // 🔧 Control de reconexión
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  private retryCount = 0;
  private readonly MAX_RETRIES = 5;
  private readonly RETRY_DELAY_MS = 5000;
  private isIntentionallyClosed = false;

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
    return this.http.get<RoomStatusBoardResponse[]>(`${this.apiUrl}/reservations/owner/status-board?motelId=${motelId}`);
  }

  verifyCode(code: string): Observable<Reservation> {
    if (!this.isBrowser) return EMPTY as Observable<Reservation>;
    return this.http.get<Reservation>(`${this.apiUrl}/reservations/confirm-code/${code}`);
  }

  checkIn(id: number): Observable<Reservation> {
    return this.http.patch<Reservation>(`${this.apiUrl}/reservations/${id}/checkin`, {});
  }

  // ✅ SSE con reconexión controlada
  subscribeToReservations(): Observable<Reservation> {
    if (!this.isBrowser) return EMPTY as Observable<Reservation>;

    this.isIntentionallyClosed = false;
    this.retryCount = 0;
    this.connectSSE();

    return this.reservationSubject.asObservable();
  }

  private connectSSE(): void {
    // Cierra la conexión anterior si existe
    this.closeSSE(false);

    const token = this.authService.token();
    if (!token) {
      console.warn('SSE: no hay token disponible');
      return;
    }

    const sseUrl = `${this.apiUrl}/reservations/stream?access_token=${encodeURIComponent(token)}`;
    this.eventSource = new EventSource(sseUrl);

    this.eventSource.onopen = () => {
      console.log('SSE: conexión establecida');
      this.retryCount = 0; // 🔧 Resetea reintentos al conectar exitosamente
    };

    this.eventSource.onmessage = (event) => {
      try {
        const reservation: Reservation = JSON.parse(event.data);
        this.reservationSubject.next(reservation);
      } catch (e) {
        console.error('SSE: error parseando evento', e);
      }
    };

    this.eventSource.onerror = (error) => {
      console.error('SSE error', error);

      // 🔧 CLAVE: cierra inmediatamente para evitar que el browser reconecte solo
      this.closeSSE(false);

      if (this.isIntentionallyClosed) return;

      if (this.retryCount < this.MAX_RETRIES) {
        this.retryCount++;
        console.warn(`SSE: reintentando (${this.retryCount}/${this.MAX_RETRIES}) en ${this.RETRY_DELAY_MS / 1000}s...`);
        this.reconnectTimer = setTimeout(() => this.connectSSE(), this.RETRY_DELAY_MS);
      } else {
        console.error('SSE: máximo de reintentos alcanzado. Verifica el backend o el token.');
        this.reservationSubject.error(new Error('SSE connection failed after max retries'));
        // Recrea el subject para que el observable pueda volver a usarse si el componente lo solicita
        this.reservationSubject = new Subject<Reservation>();
      }
    };
  }

  closeSSE(intentional = true): void {
    if (intentional) {
      this.isIntentionallyClosed = true;
    }

    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }

    if (this.eventSource) {
      this.eventSource.close();
      this.eventSource = null;
    }
  }

  ngOnDestroy(): void {
    this.closeSSE();
  }
}
