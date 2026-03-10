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

  constructor(private http: HttpClient) { }

  createReservation(roomId: number, motelId: number, totalPrice: number, userId: number, checkInDate: string, checkOutDate: string) {
    return this.http.post<{ id: number, confirmationCode?: string }>(this.RESERVATION_URL, {
      roomId,
      motelId,
      totalPrice,
      userId,
      checkInDate,
      checkOutDate
    });
  }

  getStripeConfig() {
    return this.http.get<StripeConfig>(`${this.API_URL}/config`);
  }

  createPaymentIntent(reservationId: number, amountCop: number) {
    return this.http.post<CreatePaymentResponse>(`${this.API_URL}/create-intent`, {
      reservationId,
      amountCop
    });
  }
}
