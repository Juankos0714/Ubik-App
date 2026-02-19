import { Component, OnInit, inject, signal } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';

import { RoomService } from '../../core/services/room.service';
import { Room } from '../../core/models/room.model';

import { FilterModal } from '../../components/filter-modal/filter-modal';
import { Button02 } from '../../components/button-02/button-02';
import { Card3, Card3Informacion } from '../../components/card-3/card-3';
import { Map, MapPoint } from '../../components/map/map';

@Component({
  selector: 'app-explore',
  standalone: true,
  templateUrl: './explore.html',
  imports: [CommonModule, Button02, Card3, Map],
})
export class Explore implements OnInit {
  private roomService = inject(RoomService);
  private dialog = inject(Dialog);

  allCards: Card3Informacion[] = [];
  cards: Card3Informacion[] = [];
  points: MapPoint[] = [];

  loading = false;
  error = false;

  // search
  query = signal('');
  suggestions: Card3Informacion[] = [];
  userPoint: MapPoint | null = null;
  activePoint: MapPoint | null = null;

  ngOnInit(): void {
    this.loadRooms();
    this.getUserLocation();
  }

  openModal() {
    this.dialog.open(FilterModal);
  }

  getUserLocation() {
    if (!('geolocation' in navigator)) return;
    navigator.geolocation.getCurrentPosition((pos) => {
      this.userPoint = { lat: pos.coords.latitude, lng: pos.coords.longitude, name: 'Tú' };
    });
  }

  onSearchInput(value: string) {
    this.query.set(value);
    const q = value.trim().toLowerCase();
    if (!q) {
      this.suggestions = [];
      this.cards = [...this.allCards];
      this.points = this.allCards
        .filter((c) => !!(c as any).lat && !!(c as any).lng)
        .map((c) => ({ lat: (c as any).lat, lng: (c as any).lng, name: c.title, id: c.id }));
      return;
    }

    this.suggestions = this.allCards
      .filter((c) => (c.title + ' ' + c.location + ' ' + c.adress).toLowerCase().includes(q))
      .slice(0, 6);
    this.cards = this.allCards.filter((c) =>
      (c.title + ' ' + c.location + ' ' + c.adress).toLowerCase().includes(q),
    );
    this.points = this.cards
      .filter((c) => !!(c as any).lat && !!(c as any).lng)
      .map((c) => ({ lat: (c as any).lat, lng: (c as any).lng, name: c.title, id: c.id }));
  }

  selectSuggestion(s: Card3Informacion) {
    this.activePoint = { lat: (s as any).lat, lng: (s as any).lng, name: s.title, id: s.id };
    this.cards = [s];
    this.points = [{ lat: (s as any).lat, lng: (s as any).lng, name: s.title, id: s.id }];
    this.suggestions = [];
  }

  loadRooms(): void {
    this.loading = true;

    this.roomService.getRooms().subscribe({
      next: (rooms: Room[]) => {
        this.allCards = rooms.map((room) => ({
          id: room.id,
          motelId: room.motel_id,
          numberHab: room.num_or_name,
          type: room.room_type,
          descripcion: room.description,
          image: room.photos?.[0]?.url ?? './assets/images/ubikLogo.jpg',
          title: room.room_type,
          location: room.city,
          adress: room.address,
          price: room.price,
          hours: room.hours,
          // pass through lat/lng for search/select
          ...(room.lat ? { lat: room.lat } : {}),
          ...(room.lng ? { lng: room.lng } : {}),
        }));

        this.cards = [...this.allCards];
        this.points = this.allCards
          .filter((c) => !!(c as any).lat && !!(c as any).lng)
          .map((c) => ({ lat: (c as any).lat, lng: (c as any).lng, name: c.title, id: c.id }));

        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
    });
  }
}
