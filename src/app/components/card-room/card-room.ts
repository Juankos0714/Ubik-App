import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

export interface CardHabitacion {
  id: number;
  nombre: string;
  number: string;
  tipo: string;
  servicios: string[];
  descripcion: string;
  imagen: string;
  price: number;
}

@Component({
  selector: 'app-card-room',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './card-room.html',
})
export class CardRoom {
  @Input() cardHabitacion!: CardHabitacion;
}