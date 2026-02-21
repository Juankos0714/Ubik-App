import { Component, OnInit, inject, signal } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';

import { RoomService } from '../../core/services/room.service';
import { Room } from '../../core/models/room.model';

import { FilterModal } from '../../components/filter-modal/filter-modal';
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

  query = signal('');
  suggestions: Card3Informacion[] = [];
  activePoint: MapPoint | null = null;

  skeletonItems = Array.from({ length: 5 });

  ngOnInit(): void {
    this.loadRooms();
  }

  openModal() {
    this.dialog.open(FilterModal);
  }

  onSearchInput(value: string) {
    this.query.set(value);
    const q = value.trim().toLowerCase();

    if (!q) {
      this.suggestions = [];
      this.cards = [...this.allCards];
      this.points = this.mapPoints(this.allCards);
      return;
    }

    this.suggestions = this.allCards
      .filter((c) => (c.title + ' ' + c.location + ' ' + c.adress).toLowerCase().includes(q))
      .slice(0, 6);

    this.cards = this.allCards.filter((c) =>
      (c.title + ' ' + c.location + ' ' + c.adress).toLowerCase().includes(q),
    );

    this.points = this.mapPoints(this.cards);
  }

  selectSuggestion(s: Card3Informacion) {
    this.activePoint = { lat: (s as any).lat, lng: (s as any).lng, name: s.title, id: s.id };
    this.cards = [s];
    this.points = this.mapPoints([s]);
    this.suggestions = [];
  }

  private mapPoints(cards: Card3Informacion[]): MapPoint[] {
    return cards
      .filter((c) => !!(c as any).lat && !!(c as any).lng)
      .map((c) => ({
        lat: (c as any).lat,
        lng: (c as any).lng,
        name: c.title,
        id: c.id,
      }));
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
          ...(room.lat ? { lat: room.lat } : {}),
          ...(room.lng ? { lng: room.lng } : {}),
        }));

        this.cards = [...this.allCards];
        this.points = this.mapPoints(this.allCards);
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
    });
  }
}