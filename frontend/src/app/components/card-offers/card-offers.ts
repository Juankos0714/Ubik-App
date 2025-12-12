import { Component, Input } from '@angular/core';
import { Button01 } from '../button-01/button-01';

interface CardOff {
  image: string;
  nombre: string;
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
    image: '',
    nombre: ''
  };

  constructor() {}

}
