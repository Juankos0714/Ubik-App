import { Component, Input } from '@angular/core';
import { Button01 } from '../button-01/button-01';

export interface CardOff {
  id: number;
  image: string;
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-card-offers',
  standalone: true,
  imports: [Button01],
  templateUrl: './card-offers.html',
  styleUrl: './card-offers.css',
})
export class CardOffers {

  // Ejemplo de oferta
   @Input() cardOferta: CardOff = {
    id: 0,
    image: '',
    nombre: '',
    descripcion:'',
  };

  constructor() {}

}
