import { Component, OnInit } from '@angular/core';
import { Button01 } from '../../components/button-01/button-01';
import { CommonModule } from '@angular/common';
import { CardOffers, CardOff } from "../../components/card-offers/card-offers";
import { CardRoom } from '../../components/card-room/card-room';

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


@Component({
  selector: 'app-perfile-motel',
  standalone: true,
  imports: [Button01, CommonModule, CardOffers, CardRoom],
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

  ofertas: CardOff[] = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/du4tcug9q/image/upload/v1764772908/103-3_ccb4iu.jpg',
      nombre: 'Aniversario especial',
      descripcion: 'Celebra tu aniversario con nosotros y disfruta de una noche inolvidable llena de sorpresas y romanticismo.'
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/du4tcug9q/image/upload/v1764772908/103-3_ccb4iu.jpg',
      nombre: 'Escapada romántica',
      descripcion: 'Disfruta de una escapada romántica con tu pareja en nuestras cómodas habitaciones y servicios exclusivos.'
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/du4tcug9q/image/upload/v1764772908/103-3_ccb4iu.jpg',
      nombre: 'Fin de semana largo',
      descripcion: 'Aprovecha el fin de semana largo para relajarte y desconectar en nuestro motel con tarifas especiales.' 
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