import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog } from '@angular/cdk/dialog';
import { Button01 } from '../button-01/button-01';
import { PaymentModal } from '../payment-modal/payment-modal';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

export interface Card3Informacion {
  id: number;
  type: 'room' | 'motel';
  motelName: string;
  descripcion: string;
  image: string;
  location: string;
  adress: string;
  lat?: number;
  lng?: number;
  motelId?: number;
  numberHab?: string;
  roomType?: string;
  price?: number;
  isAvailable?: boolean;
  serviceIds?: number[];
}

@Component({
  selector: 'app-card-3',
  standalone: true,
  imports: [CommonModule, Button01, RouterLink],
  templateUrl: './card-3.html',
})
export class Card3 {
  @Input() card!: Card3Informacion;

  @Output() viewLocation = new EventEmitter<{
    lat: number;
    lng: number;
    name: string;
    id: number;
  }>();

  constructor(
    private auth: AuthService,
    private dialog: Dialog,
    private router: Router,
  ) {}

  openPayment(): void {
    if (!this.auth.isLogged()) {
      this.router.navigate(['/login']);
      return;
    }

    const dialogRef = this.dialog.open(PaymentModal, {
      data: { id: this.card.id },
    });

    dialogRef.closed.subscribe((result: any) => {
      if (result?.success) {
        this.router.navigate(['/payment/success'], {
          state: { paymentDetails: result.details },
        });
      }
    });
  }

  onViewLocation(): void {
    if (this.card.lat == null || this.card.lng == null) {
      console.warn('El Motel no ha registrado su ubicacion en el mapa');
      return;
    }
    this.viewLocation.emit({
      lat: this.card.lat,
      lng: this.card.lng,
      name: this.card.roomType ?? this.card.motelName,
      id: this.card.id,
    });
  }
}