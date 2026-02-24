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

  allCards: (Card3Informacion & { lat?: number; lng?: number })[] = [];
  cards: (Card3Informacion & { lat?: number; lng?: number })[] = [];
  points: MapPoint[] = [];

  loading = false;
  error = false;

  query = signal('');
  suggestions: (Card3Informacion & { lat?: number; lng?: number })[] = [];
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
      .filter((c) =>
        (c.title + ' ' + c.location + ' ' + c.adress)
          .toLowerCase()
          .includes(q)
      )
      .slice(0, 6);

    this.cards = this.allCards.filter((c) =>
      (c.title + ' ' + c.location + ' ' + c.adress)
        .toLowerCase()
        .includes(q)
    );

    this.points = this.mapPoints(this.cards);
  }

  selectSuggestion(s: Card3Informacion & { lat?: number; lng?: number }) {
    if (s.lat && s.lng) {
      this.activePoint = {
        lat: s.lat,
        lng: s.lng,
        name: s.title,
        id: s.id
      };
    }

    this.cards = [s];
    this.points = this.mapPoints([s]);
    this.suggestions = [];
  }

  private mapPoints(
    cards: (Card3Informacion & { lat?: number; lng?: number })[]
  ): MapPoint[] {

    return cards
      .filter((c) => c.lat !== undefined && c.lng !== undefined)
      .map((c) => ({
        lat: c.lat!,
        lng: c.lng!,
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
          motelId: room.motelId,
          numberHab: room.number,
          title: room.roomType,
          descripcion: room.description,
          image: room.imageUrls?.[0] ?? './assets/images/ubikLogo.jpg',
          location: room.motelCity,
          adress: room.motelAddress,
          price: room.price,
          lat: room.latitude,
          lng: room.longitude,
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