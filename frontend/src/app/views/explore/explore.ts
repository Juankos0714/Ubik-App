import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card3, Card3Informacion } from "../../components/card-3/card-3";
import { Button02 } from "../../components/button-02/button-02";
import { Map } from "../../components/map/map";
import { Filter } from '../../components/filter/filter';
import { Dialog } from '@angular/cdk/dialog';
import { RoomService } from '../../core/services/room/room';

interface MotelMapPoint {
  id: number;
  name: string;
  lat: number;
  lng: number;
  adress: string;
}

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule, Card3, Button02, Map],
  templateUrl: './explore.html',
})
export class Explore implements OnInit {

  private dialog = inject(Dialog);
  private roomService = inject(RoomService);

  openModal() {
    this.dialog.open(Filter, {
      data: {
        onChange: (filters: any) => {
          this.applyFilters(filters);
        }
      }
    });
  }

  /** Cards */
  cards: Card3Informacion[] = [];

  /** Datos base del backend */
  roomsRaw: any[] = [];

  /** Puntos que se muestran en el mapa */
  mapPoints: MotelMapPoint[] = [];

  ngOnInit() {
    this.cargarRooms();
  }

  cargarRooms() {
    this.roomService.getRooms().subscribe({
      next: (rooms) => {
        this.roomsRaw = rooms;

        this.cards = rooms
          .filter(r => r.isAvailable)
          .map(room => ({
            id: room.id,
            motelId: room.motelId,
            numberHab: room.number,
            type: room.roomType,
            descripcion: room.description,
            image: room.imageUrls?.[0] || 'assets/images/ubikLogo.jpg',
            title: room.roomType,
            location: room.city ?? 'Bogotá',
            adress: room.address ?? '',
            price: room.price,
            hours: 4
          }));

        // 👉 Al inicio: mapa con todos los moteles cercanos
        this.mapPoints = rooms.map(room => ({
          id: room.id,
          name: room.roomType,
          lat: room.lat ?? 4.6097,
          lng: room.lng ?? -74.0817,
          adress: room.address ?? ''
        }));
      },
      error: (err) => console.error('Error cargando rooms', err)
    });
  }

  applyFilters(filters: any) {
    const filtered = this.roomsRaw.filter(room => {
      if (filters.categoryId && room.categoryId !== filters.categoryId) return false;
      if (filters.locationId && room.locationId !== filters.locationId) return false;
      if (room.price > filters.priceMax) return false;
      if (
        filters.featureIds?.length &&
        !filters.featureIds.every((id: number) =>
          room.features?.some((f: any) => f.id === id)
        )
      ) return false;
      return true;
    });

    this.cards = filtered.map(room => ({
      id: room.id,
      motelId: room.motelId,
      numberHab: room.number,
      type: room.roomType,
      descripcion: room.description,
      image: room.imageUrls?.[0] || 'assets/images/ubikLogo.jpg',
      title: room.roomType,
      location: room.city ?? 'Bogotá',
      adress: room.address ?? '',
      price: room.price,
      hours: 4
    }));

    this.mapPoints = filtered.map(room => ({
      id: room.id,
      name: room.roomType,
      lat: room.lat ?? 4.6097,
      lng: room.lng ?? -74.0817,
      adress: room.address ?? ''
    }));
  }
}
