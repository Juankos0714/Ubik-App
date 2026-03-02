import { Component, OnInit, inject, signal } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';

import { RoomService } from '../../core/services/room.service';
import { MotelService } from '../../core/services/motel.service';
import { ServiceService } from '../../core/services/services.service';

import { Room } from '../../core/models/room.model';
import { Motel } from '../../core/models/motel.model';
import { Service } from '../../core/models/services.model';

import { FilterModal, Filters } from '../../components/filter-modal/filter-modal';
import { Button02 } from '../../components/button-02/button-02';
import { Card3, Card3Informacion } from '../../components/card-3/card-3';
import { Map as MapComponent, MapPoint } from '../../components/map/map';
import { LoadingCard3 } from '../../components/loading-card-3/loading-card-3';
import { SearchService } from '../../core/services/search.service';

/**
 * Normaliza un string para comparación robusta:
 * - Minúsculas
 * - Sin tildes ni diacríticos
 * - Sin puntos (para "D.C." → "dc")
 * - Trim
 *
 * Ejemplo: "Bogotá D.C." → "bogota dc"
 *          "antioquia"   → "antioquia"
 */
function normalize(str: string): string {
  return (str ?? '')
    .toLowerCase()
    .normalize('NFD')                        // descompone tildes
    .replace(/[\u0300-\u036f]/g, '')         // elimina los diacríticos
    .replace(/\./g, '')                      // elimina puntos
    .trim();
}

@Component({
  selector: 'app-explore',
  standalone: true,
  templateUrl: './explore.html',
  imports: [CommonModule, Button02, Card3, MapComponent, LoadingCard3],
})
export class Explore implements OnInit {

  private roomService    = inject(RoomService);
  private motelService   = inject(MotelService);
  private serviceService = inject(ServiceService);
  private dialog         = inject(Dialog);
  private searchService  = inject(SearchService);

  allCards: Card3Informacion[] = [];
  cards:    Card3Informacion[] = [];
  points:   MapPoint[]         = [];
  services: Service[]          = [];

  loading = false;
  error   = false;

  roomTypes: string[] = [];
  cities:    string[] = [];

  activePoint:  MapPoint | null = null;
  skeletonItems = Array.from({ length: 5 });
  searchInputValue = '';

  currentFilters: Filters = {
    priceMin:      null,
    priceMax:      null,
    roomTypes:     [],
    cities:        [],
    department:    null,
    onlyAvailable: true,
    serviceIds:    [],
    sortBy:        null,
    showType:      'all',
  };

  ngOnInit(): void {
    this.loadInitialData();
  }

  loadInitialData() {
    this.loading = true;
    this.error   = false;

    forkJoin({
      rooms:    this.roomService.getRooms(),
      motels:   this.motelService.getMotels(),
      services: this.serviceService.getServices(),
    }).subscribe({
      next: ({ rooms, motels, services }) => {

        // Deduplicar servicios por id (fix NG0955)
        this.services = [...new Map((services as Service[]).map(s => [s.id, s])).values()];

        const roomCards: Card3Informacion[] = (rooms as Room[]).map(room => ({
          id:          room.id,
          type:        'room',
          motelId:     room.motelId,
          motelName:   room.motelName,
          numberHab:   room.number,
          roomType:    room.roomType,
          descripcion: room.description,
          image:       room.imageUrls?.[0] ?? './assets/images/ubikLogo.jpg',
          location:    room.motelCity,
          adress:      room.motelAddress,
          price:       room.price,
          isAvailable: room.isAvailable,
          serviceIds:  room.serviceIds ?? [],
          lat:         room.latitude,
          lng:         room.longitude,
        }));

        const motelCards: Card3Informacion[] = (motels as Motel[]).map(motel => ({
          id:          motel.id,
          type:        'motel',
          motelName:   motel.name,
          descripcion: motel.description,
          image:       motel.imagesUrls?.[0] ?? './assets/images/ubikLogo.jpg',
          location:    motel.city,
          adress:      motel.address,
          lat:         motel.latitude,
          lng:         motel.longitude,
        }));

        this.roomTypes = [...new Set((rooms as Room[]).map(r => r.roomType))];
        this.cities    = [...new Set((rooms as Room[]).map(r => r.motelCity))];
        this.allCards  = [...roomCards, ...motelCards];

        // ✅ FIX: leer el estado ANTES de clear(), los datos ya están listos
        this.applyHeaderSearch();

        this.loading = false;
      },
      error: () => {
        this.error   = true;
        this.loading = false;
      }
    });
  }

  // ── Header search ─────────────────────────────────────────────
  private applyHeaderSearch() {
    const { department, city, query } = this.searchService.state();

    if (!department && !city && !query) {
      this.applyFilters(this.currentFilters);
      return;
    }

    if (query) this.searchInputValue = query;

    const merged: Filters = {
      ...this.currentFilters,
      // ✅ Guardar tal cual — la comparación normalizada ocurre en applyFilters
      cities:     city       ? [city]       : this.currentFilters.cities,
      department: department ? [department] : this.currentFilters.department,
    };

    this.currentFilters = merged;
    this.applyFilters(merged, query);

    // ✅ FIX: limpiar DESPUÉS de aplicar, no antes
    this.searchService.clear();
  }

  // ── Modal de filtros ──────────────────────────────────────────
  openModal() {
    const dialogRef = this.dialog.open<Filters>(FilterModal, {
      data: {
        roomTypes: this.roomTypes,
        cities:    this.cities,
        services:  this.services,
        filters:   this.currentFilters,
      }
    });

    dialogRef.closed.subscribe((filters) => {
      if (filters) {
        this.currentFilters = filters;
        this.applyFilters(filters, this.searchInputValue);
      }
    });
  }

  // ── Filtrado principal ────────────────────────────────────────
  applyFilters(filters: Filters, textQuery = '') {
    let result = [...this.allCards];

    if (filters.showType !== 'all') {
      const t = filters.showType === 'rooms' ? 'room' : 'motel';
      result = result.filter(r => r.type === t);
    }

    if (filters.onlyAvailable) {
      result = result.filter(r => r.type === 'motel' || r.isAvailable === true);
    }

    if (filters.priceMin !== null) {
      result = result.filter(r => r.type === 'motel' || (r.price ?? 0) >= filters.priceMin!);
    }

    if (filters.priceMax !== null) {
      result = result.filter(r => r.type === 'motel' || (r.price ?? 0) <= filters.priceMax!);
    }

    if (filters.roomTypes.length) {
      result = result.filter(r =>
        r.type === 'motel' || (r.roomType && filters.roomTypes.includes(r.roomType))
      );
    }

    // ✅ Filtro ciudad con normalización (sin tildes, sin mayúsculas)
    if (filters.cities.length) {
      const normalizedCities = filters.cities.map(normalize);
      result = result.filter(r =>
        normalizedCities.some(nc =>
          normalize(r.location).includes(nc) || nc.includes(normalize(r.location))
        )
      );
    }

    // ✅ Filtro departamento con normalización robusta
    //    Busca en location Y adress, soporta "bogota", "Bogotá D.C.", "bogota dc"
    if (filters.department?.length) {
      const normalizedDep = normalize(filters.department[0]);
      result = result.filter(r =>
        normalize(r.location).includes(normalizedDep) ||
        normalize(r.adress).includes(normalizedDep)   ||
        normalizedDep.includes(normalize(r.location))
      );
    }

    if (filters.serviceIds.length) {
      result = result.filter(r =>
        r.type === 'motel' ||
        (r.serviceIds && filters.serviceIds.every(id => r.serviceIds!.includes(id)))
      );
    }

    // ✅ Búsqueda de texto libre también normalizada
    if (textQuery.trim()) {
      const q = normalize(textQuery);
      result = result.filter(c =>
        normalize(
          c.motelName        +
          (c.roomType    ?? '') +
          c.location         +
          c.adress           +
          (c.descripcion ?? '')
        ).includes(q)
      );
    }

    if (filters.sortBy === 'priceAsc')  result.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    if (filters.sortBy === 'priceDesc') result.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));

    this.cards  = result;
    this.points = this.mapPoints(result);
  }

  private mapPoints(cards: Card3Informacion[]): MapPoint[] {
    return cards
      .filter(c => c.lat != null && c.lng != null)
      .map(c => ({ lat: c.lat!, lng: c.lng!, name: c.motelName, id: c.id }));
  }

  onSearchInput(value: string) {
    this.searchInputValue = value;

    if (!value.trim()) {
      this.applyFilters(this.currentFilters);
      return;
    }

    this.applyFilters(this.currentFilters, value);
  }
}