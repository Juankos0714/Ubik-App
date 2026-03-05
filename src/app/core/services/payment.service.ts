import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private readonly API_URL = `${environment.apiUrl}/payments`;
  private readonly RESERVATION_URL = `${environment.apiUrl}/reservations`;

  constructor(private http: HttpClient) {}

  createReservation(roomId: number, motelId: number, totalPrice: number, userId: number, checkInDate: string, checkOutDate: string) {
    return this.http.post<{ id: number }>(this.RESERVATION_URL, {
      roomId,
      motelId,
      totalPrice,
      userId,
      checkInDate,
      checkOutDate
    });
  }

  createPayment(reservationId: number, amount: number, motelId: number) {
    return this.http.post<{ initPoint: string }>(this.API_URL, {
      reservationId,
      amount,
      motelId,
      currency: 'COP'
    });
  }
}
