import { Component } from '@angular/core';

export interface Motel {
  id: number;
  name: string;
  category: string;
  location: string;
  price: number;
  features: string[]; // jacuzzi, sauna, etc.
}

@Component({
  selector: 'app-explore',
  imports: [],
  templateUrl: './explore.html',
  styleUrl: './explore.css',
})
export class Explore {

  motels: Motel[] = [
    {
      id: 1,
      name: 'Oasis',
      category: 'Premium',
      location: 'Bogotá',
      price: 150000,
      features: ['Jacuzzi', 'Parqueadero', 'TV']
    },
    {
      id: 2,
      name: 'Luna Azul',
      category: 'Económico',
      location: 'Medellín',
      price: 80000,
      features: ['Parqueadero']
    }
  ];

  filters = {
    category: '',
    location: '',
    priceMin: 0,
    priceMax: 999999,
    features: [] as string[] // checkboxes
  };

  get filteredMotels(): Motel[] {
  return this.motels.filter(m =>
    (this.filters.category ? m.category === this.filters.category : true) &&
    (this.filters.location ? m.location === this.filters.location : true) &&
    m.price >= this.filters.priceMin &&
    m.price <= this.filters.priceMax &&
    this.filters.features.every(f => m.features.includes(f))
  );
  
  }

  onFeatureChange(event: Event) {
  const input = event.target as HTMLInputElement;
  const value = input.value;

    if (input.checked) {
      this.filters.features.push(value);
    } else {
      this.filters.features = this.filters.features.filter(f => f !== value);
    }
  }

}
