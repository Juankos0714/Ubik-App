import { Component } from '@angular/core';
import { Card3 } from "../../components/card-3/card-3";

/*========= SIMULACION DE MODELOS ============*/

export interface Feature {
  id: number;
  name: string;
  icon: string;
};

export interface Category {
  id: number;
  name: string;
};


export interface Room {
  id: number;
  name: string;
  category: Category;
  price: number;
  features: Feature[];
}

export interface Motel {
  id: number;
  name: string;
  location: string;
  rooms: Room[];
}

/*========= SIMULACION DE TABLAS DE BASES DE DATOS FEATURES Y CATEGOTIAS ===============*/

const FEATURES: Feature[] = [
  { id: 1, name: 'Jacuzzi', icon: 'pi pi-star' },
  { id: 2, name: 'Parqueadero', icon: 'pi pi-car' },
  { id: 3, name: 'TV', icon: 'pi pi-desktop' },
  { id: 4, name: 'Aire acondicionado', icon: 'pi pi-snowflake' }
];

const CATEGORIES: Category[] = [
  { id: 1, name: 'Premium' },
  { id: 2, name: 'Económico' }
];

/**============ Configuracion del component ================ */

@Component({
  selector: 'app-explore',
  imports: [Card3],
  templateUrl: './explore.html',
  styleUrl: './explore.css',
})

export class Explore {

  FEATURES = FEATURES;

/*========= SIMULACION DE TABLAS DE BASES DE DATOS Habitaciones del motel ===============*/

  motels: Motel[] = [

    {
      id: 1,
      name: 'Oasis',
      location: 'Bogotá',
      rooms: [
        {
          id: 1,
          name: 'Suite Jacuzzi',
          category: CATEGORIES[0],
          price: 150000,
          features: [FEATURES[0], FEATURES[1], FEATURES[2]]
        },
        {
          id: 2,
          name: 'Habitación Estándar',
          category: CATEGORIES[1],
          price: 90000,
          features: [FEATURES[1], FEATURES[2]]
        }
      ]
    },
    {
      id: 2,
      name: 'Luna Azul',
      location: 'Medellín',
      rooms: [
        {
          id: 3,
          name: 'Habitación Premium',
          category: CATEGORIES[0],
          price: 130000,
          features: [FEATURES[0], FEATURES[2]]
        },
        {
          id: 4,
          name: 'Habitación Básica',
          category: CATEGORIES[1],
          price: 80000,
          features: [FEATURES[1]]
        }
      ]
    }
  ];

  filters = {
    categoryId: null as number | null,
    location: '',
    priceMin: 0,
    priceMax: 999999,
    featureIds: [] as number[]
  };

  get filteredRooms() {
  return this.motels.flatMap(motel =>
    motel.rooms
      .filter(room =>
        (this.filters.categoryId
          ? room.category.id === this.filters.categoryId
          : true) &&
        room.price >= this.filters.priceMin &&
        room.price <= this.filters.priceMax &&
        this.filters.featureIds.every(id =>
          room.features.some(f => f.id === id)
        )
      )
      .map(room => ({
        motelName: motel.name,
        location: motel.location,
        room
      }))
    );
  }
  onFeatureChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value);

    if (input.checked) {
      this.filters.featureIds.push(value);
    } else {
      this.filters.featureIds =
        this.filters.featureIds.filter(id => id !== value);
    }
  }


}
