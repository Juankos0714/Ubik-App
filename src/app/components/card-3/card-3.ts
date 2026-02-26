import { Component, Input } from '@angular/core';
import { CurrencyPipe, NgClass, CommonModule } from '@angular/common';
import { Button01 } from '../button-01/button-01';
import { Button02 } from '../button-02/button-02';

export interface Card3Informacion {
  id: number;
  motelId: number;
  numberHab: string;
  roomType: string;
  descripcion: string;
  image: string;
  location: string;
  adress: string;
  price: number;
  isAvailable: boolean;
  serviceIds: number[];
}

@Component({
  selector: 'app-card-3',
  standalone: true,
  imports: [CommonModule, Button01, Button02, CurrencyPipe, NgClass],
  templateUrl: './card-3.html',
})
export class Card3 {

  @Input({ required: true }) card!: Card3Informacion;

}