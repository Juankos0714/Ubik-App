import { Component, Input } from '@angular/core';
import { Button01 } from '../button-01/button-01';
import { Button02 } from '../button-02/button-02';
import { CurrencyPipe } from '@angular/common';

export interface Card3Informacion {
  id: number;
  motelId: number;
  numberHab: string;
  type: string;
  descripcion: string;
  image: string;
  title: string;
  location: string;
  adress: string;
  price: number;
  hours: number;
  lat?: number;
  lng?: number;
}

@Component({
  selector: 'app-card-3',
  standalone: true,
  imports: [Button01, Button02, CurrencyPipe],
  templateUrl: './card-3.html',
})
export class Card3 {
  @Input() card!: Card3Informacion;

  @Input() services: {
    id: number;
    name: string;
    icon: string;
  }[] = [];
}
//   [motelId]="card.motelId"
//               [numberHab]="card.numberHab"
//               [type]="card.type"
//               [descripcion]="card.descripcion"
//               [image]="card.image"
//               [title]="card.title"
//               [location]="card.location"
//               [adress]="card.adress"
//               [price]="card.price"
//               [hours]="card.hours"
