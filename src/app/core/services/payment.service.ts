import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export interface StripeConfig {
  publishableKey: string;
}

export interface CreatePaymentResponse {
  paymentId: number;
  clientSecret: string;
}

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private readonly API_URL = `${environment.apiUrl}/payments`;
  private readonly RESERVATION_URL = `${environment.apiUrl}/reservations`;

  constructor(private http: HttpClient) {}

  createReservation(
    roomId: number,
    motelId: number,
    totalPrice: number,
    userId: number,
    checkInDate: string,
    checkOutDate: string,
  ) {
    return this.http.post<{ id: number; confirmationCode?: string }>(this.RESERVATION_URL, {
      roomId,
      checkInDate,
      checkOutDate,
      totalPrice,
    });
  }

  /**
   * Cancela una reserva (PATCH /reservations/{id}/cancel)
   * El backend cambia el estado a CANCELLED pero no la elimina.
   */
  cancelReservation(reservationId: number) {
    return this.http.patch<void>(`${this.RESERVATION_URL}/${reservationId}/cancel`, {});
  }

  /**
   * Elimina físicamente una reserva (DELETE /reservations/{id})
   * Solo funciona si ya está CANCELLED.
   */
  deleteReservation(reservationId: number) {
    return this.http.delete<void>(`${this.RESERVATION_URL}/${reservationId}`);
  }

  getStripeConfig() {
    return this.http.get<StripeConfig>(`${this.API_URL}/config`);
  }

  createPaymentIntent(reservationId: number, amountCop: number) {
    return this.http.post<CreatePaymentResponse>(`${this.API_URL}/create-intent`, {
      reservationId,
      amountCop,
    });
  }
}