import { Component, OnInit } from '@angular/core';
import { Button01 } from '../../components/button-01/button-01';
import { CommonModule } from '@angular/common';
import { CardOffers } from "../../components/card-offers/card-offers";
import { CardRoom } from '../../components/card-room/card-room';
import { ThreeButtons } from '../../components/three-buttons/three-buttons';

interface InfoPerfile {
  imageBack: string;
  imagePerfile: string;
  nombre: string;
  description: string;
  ubicacion: string;
  address: string;
}

interface CardHabitacion {
  id: number;
  nombre: string;
  number: number;    
  tipo: string;
  servicios: string[];
  descripcion: string;
  imagen: string;
  price: number;
}

interface Oferta {
  id: number;
  image: string;
  nombre: string;
}

@Component({
  selector: 'app-perfile-motel',
  standalone: true,
  imports: [Button01, CommonModule, ThreeButtons, CardOffers, CardRoom],
  templateUrl: './motel-profile.html',
  styleUrls: ['./motel-profile.css'],
})
export class MotelProfile implements OnInit {

  profile: InfoPerfile = {
    imageBack: 'https://res.cloudinary.com/du4tcug9q/image/upload/v1764684206/Backimage_dlcpin.png',
    imagePerfile: 'https://res.cloudinary.com/du4tcug9q/image/upload/v1764684201/profileImage_nax8f9.png',
    nombre: 'MOTEL PARADISE',
    ubicacion: 'Armenia, Quindio',
    description:
      'Acogedor y discreto, ideal para escapadas rápidas o momentos de privacidad. ' +
      'Ofrece habitaciones confortables, servicio ágil y tarifas accesibles, todo en un ambiente seguro y tranquilo.',
    address:'Km 1 via tebaida'
  };

  ofertas: Oferta[] = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/du4tcug9q/image/upload/v1764772908/103-3_ccb4iu.jpg',
      nombre: 'Aniversario especial'
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/du4tcug9q/image/upload/v1764772908/103-3_ccb4iu.jpg',
      nombre: 'Escapada romántica'
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/du4tcug9q/image/upload/v1764772908/103-3_ccb4iu.jpg',
      nombre: 'Fin de semana largo'
    }
  ];

  CardHab: CardHabitacion[] = [ 
  {
    id: 1,
    nombre: 'Suite Deluxe',
    number: 101,
    tipo: 'Suite',
    servicios: ['Bar', 'Jacuzzi', 'TV'],
    descripcion: 'Una habitación de lujo...',
    imagen: 'https://res.cloudinary.com/du4tcug9q/image/upload/v1764941479/Habitacion_dyqnb3.png',
    price: 120000
  },
  {
    id: 1,
    nombre: 'Suite Deluxe',
    number: 101,
    tipo: 'Suite',
    servicios: ['Bar', 'Jacuzzi', 'TV'],
    descripcion: 'Acogedor y discreto, ideal para escapadas rápidas o momentos de privacidad. ' +
      'Ofrece habitaciones confortables, servicio ágil y tarifas accesibles, todo en un ambiente seguro y tranquilo.',
    imagen: 'https://res.cloudinary.com/du4tcug9q/image/upload/v1764941479/Habitacion_dyqnb3.png',
    price: 120000
  },
];

  motelesCercanos = [];

  constructor() {}

  ngOnInit(): void {}
}