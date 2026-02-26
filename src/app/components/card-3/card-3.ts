import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog } from '@angular/cdk/dialog';
import { Button01 } from '../button-01/button-01';
import { PaymentModal } from '../payment-modal/payment-modal';

export interface Card3Informacion {
  id: number;
  motelId: number;
  motelName: string;
  numberHab: string;
  roomType: string;
  descripcion: string;
  image: string;
  location: string;
  adress: string;
  price: number;
  isAvailable: boolean;
  serviceIds: number[];
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-card-3',
  standalone: true,
  imports: [CommonModule, Button01],
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

  constructor(private dialog: Dialog) {}

  openPayment() {
    this.dialog.open(PaymentModal, {
      data: { id: this.card.id }
    });
  }

  onViewLocation() {
    this.viewLocation.emit({
      lat: this.card.lat,
      lng: this.card.lng,
      name: this.card.roomType,
      id: this.card.id,
    });
  }
}