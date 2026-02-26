import { Component, OnInit, inject, signal } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';

import { RoomService } from '../../core/services/room.service';
import { Room } from '../../core/models/room.model';

import { FilterModal, ExploreFilters } from '../../components/filter-modal/filter-modal';

import { Button02 } from '../../components/button-02/button-02';

import { Card3, Card3Informacion } from '../../components/card-3/card-3';
import { Map, MapPoint } from '../../components/map/map';
import { LoadingCard3 } from "../../components/loading-card-3/loading-card-3";

@Component({
  selector: 'app-explore',
  standalone: true,
  templateUrl: './explore.html',
  imports: [CommonModule, Button02, Card3, Map, LoadingCard3],
})
export class Explore implements OnInit {

  private roomService = inject(RoomService);
  private dialog = inject(Dialog);

  allCards: Card3Informacion[] = [];
  cards: Card3Informacion[] = [];
  points: MapPoint[] = [];

  loading = false;
  error = false;

  roomTypes: string[] = [];
  cities: string[] = [];

  query = signal('');
  activePoint: MapPoint | null = null;

  skeletonItems = Array.from({ length: 5 });

  ngOnInit(): void {
    this.loadRooms();
  }

  openModal() {
    const dialogRef = this.dialog.open<ExploreFilters>(FilterModal, {
      data: {
        roomTypes: this.roomTypes,
        cities: this.cities
      }
    });

    dialogRef.closed.subscribe((filters) => {
      if (filters) {
        this.applyFilters(filters);
      }
    });
  }

  applyFilters(filters: ExploreFilters) {
    let result = [...this.allCards];

    if (filters.priceMin !== null) {
      result = result.filter(r => r.price >= filters.priceMin!);
    }

    if (filters.priceMax !== null) {
      result = result.filter(r => r.price <= filters.priceMax!);
    }

    if (filters.roomTypes.length) {
      result = result.filter(r =>
        filters.roomTypes.includes(r.roomType)
      );
    }

    if (filters.cities.length) {
      result = result.filter(r =>
        filters.cities.includes(r.location)
      );
    }

    if (filters.onlyAvailable) {
      result = result.filter(r => r.isAvailable);
    }

    if (filters.serviceIds.length) {
      result = result.filter(room =>
        filters.serviceIds.every(id =>
          room.serviceIds?.includes(id)
        )
      );
    }

    if (filters.sortBy === 'priceAsc') {
      result.sort((a,b) => a.price - b.price);
    }

    if (filters.sortBy === 'priceDesc') {
      result.sort((a,b) => b.price - a.price);
    }

    this.cards = result;
    this.points = this.mapPoints(result);
  }

  onSearchInput(value: string) {
    this.query.set(value);
    const q = value.trim().toLowerCase();

    if (!q) {
      this.cards = [...this.allCards];
      this.points = this.mapPoints(this.cards);
      return;
    }

    const filtered = this.allCards.filter((c) =>
      ( 
        c.motelName +
        c.roomType +
        c.location +
        c.adress +
        c.descripcion
      ).toLowerCase().includes(q)
    );

    this.cards = filtered;
    this.points = this.mapPoints(filtered);
  }

  private mapPoints(cards: Card3Informacion[]): MapPoint[] {
   return cards
    .filter(c => c.lat != null && c.lng != null)
    .map((c) => ({
      lat: c.lat,
      lng: c.lng,
      name: c.motelName,
      id: c.id,
    }));
  }

  loadRooms(): void {
  this.loading = true;

  this.roomService.getRooms().subscribe({
    next: (rooms: Room[]) => {

      this.roomTypes = [...new Set(rooms.map(r => r.roomType))];
      this.cities = [...new Set(rooms.map(r => r.motelCity))];

      this.allCards = rooms.map((room) => ({
        id: room.id,
        motelId: room.motelId,
        motelName: room.motelName,
        numberHab: room.number,
        roomType: room.roomType,
        descripcion: room.description,
        image: room.imageUrls?.[0] ?? './assets/images/ubikLogo.jpg',
        location: room.motelCity,
        adress: room.motelAddress,
        price: room.price,
        isAvailable: room.isAvailable,
        serviceIds: room.serviceIds ?? [],
        lat: room.latitude,
        lng: room.longitude,
      }));

      this.cards = [...this.allCards];
      this.points = this.mapPoints(this.allCards);

      console.log('Points enviados al mapa:', this.points); // 👈 prueba temporal

      this.loading = false;
    },
    error: () => {
      this.error = true;
      this.loading = false;
    },
  });
}
}