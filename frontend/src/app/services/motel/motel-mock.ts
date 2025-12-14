import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/* 🔹 Interfaces (pueden venir de models/) */
export interface InfoPerfile {
  imageBack: string;
  imagePerfile: string;
  nombre: string;
  ubicacion: string;
  description: string;
  address: string;
}

export interface CardHabitacion {
  id: number;
  nombre: string;
  number: number;
  tipo: string;
  servicios: string[];
  descripcion: string;
  imagen: string;
  price: number;
}

export interface CardOff {
  id: number;
  image: string;
  nombre: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root',
})
export class MotelMockService {
  /* 🔹 PERFIL */
  getProfile(): Observable<InfoPerfile> {
    return of({
      imageBack:
        'https://res.cloudinary.com/du4tcug9q/image/upload/v1764684206/Backimage_dlcpin.png',
      imagePerfile:
        'https://res.cloudinary.com/du4tcug9q/image/upload/v1764684201/profileImage_nax8f9.png',
      nombre: 'MOTEL PARADISE',
      ubicacion: 'Armenia, Quindio',
      description:
        'Acogedor y discreto, ideal para escapadas rápidas o momentos de privacidad. ' +
        'Ofrece habitaciones confortables, servicio ágil y tarifas accesibles, todo en un ambiente seguro y tranquilo.',
      address: 'Km 1 via tebaida',
    });
  }

  /* 🔹 OFERTAS */
  getOffers(): Observable<CardOff[]> {
    return of([
      {
        id: 1,
        image:
          'https://res.cloudinary.com/du4tcug9q/image/upload/v1764772908/103-3_ccb4iu.jpg',
        nombre: 'Aniversario especial',
        descripcion:
          'Celebra tu aniversario con nosotros y disfruta de una noche inolvidable llena de sorpresas y romanticismo.',
      },
      {
        id: 2,
        image:
          'https://res.cloudinary.com/du4tcug9q/image/upload/v1764772908/103-3_ccb4iu.jpg',
        nombre: 'Escapada romántica',
        descripcion:
          'Disfruta de una escapada romántica con tu pareja en nuestras cómodas habitaciones y servicios exclusivos.',
      },
      {
        id: 3,
        image:
          'https://res.cloudinary.com/du4tcug9q/image/upload/v1764772908/103-3_ccb4iu.jpg',
        nombre: 'Fin de semana largo',
        descripcion:
          'Aprovecha el fin de semana largo para relajarte y desconectar en nuestro motel con tarifas especiales.',
      },
    ]);
  }

  /* 🔹 HABITACIONES */
  getRooms(): Observable<CardHabitacion[]> {
    return of([
      {
        id: 1,
        nombre: 'Suite Deluxe',
        number: 101,
        tipo: 'Suite',
        servicios: ['Bar', 'Jacuzzi', 'TV'],
        descripcion: 'Una habitación de lujo...',
        imagen:
          'https://res.cloudinary.com/du4tcug9q/image/upload/v1764941479/Habitacion_dyqnb3.png',
        price: 120000,
      },
      {
        id: 2,
        nombre: 'Suite Deluxe',
        number: 102,
        tipo: 'Suite',
        servicios: ['Bar', 'Jacuzzi', 'TV'],
        descripcion:
          'Acogedor y discreto, ideal para escapadas rápidas o momentos de privacidad.',
        imagen:
          'https://res.cloudinary.com/du4tcug9q/image/upload/v1764941479/Habitacion_dyqnb3.png',
        price: 120000,
      },
    ]);
  }
}