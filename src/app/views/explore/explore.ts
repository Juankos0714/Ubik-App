import { Component, OnInit, inject, ViewChild } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { forkJoin } from 'rxjs';

import { RoomService } from '../../core/services/room.service';
import { MotelService } from '../../core/services/motel.service';
import { ServiceService } from '../../core/services/services.service';

import { Room } from '../../core/models/room.model';
import { Motel } from '../../core/models/motel.model';
import { Service } from '../../core/models/services.model';

import { FilterModal, Filters } from '../../components/filter-modal/filter-modal';
import { Button01 } from '../../components/button-01/button-01';
import { Button02 } from '../../components/button-02/button-02';
import { Card3, Card3Informacion } from '../../components/card-3/card-3';
import { Map as MapComponent, MapPoint } from '../../components/map/map';
import { LoadingCard3 } from '../../components/loading-card-3/loading-card-3';
import { SearchService } from '../../core/services/search.service';
import { PaymentModal } from '../../components/payment-modal/payment-modal';

/**
 * Normaliza un string para comparación robusta:
 * minúsculas, sin tildes, sin puntos, trim.
 * Ej: "Bogotá D.C." → "bogota dc"
 */
function normalize(str: string): string {
  return (str ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\./g, '')
    .trim();
}

@Component({
  selector: 'app-explore',
  standalone: true,
  templateUrl: './explore.html',
  imports: [CommonModule, Button01, Button02, Card3, MapComponent, LoadingCard3, RouterLink],
})
export class Explore implements OnInit {

  private roomService = inject(RoomService);
  private motelService = inject(MotelService);
  private serviceService = inject(ServiceService);
  private dialog = inject(Dialog);
  private searchService = inject(SearchService);
  private router = inject(Router);

  /** Referencia al mapa mobile para forzar invalidateSize al abrir */
  @ViewChild('mobileMap') mobileMapRef?: MapComponent;

  allCards: Card3Informacion[] = [];
  cards: Card3Informacion[] = [];
  points: MapPoint[] = [];
  services: Service[] = [];

  loading = false;
  error = false;

  roomTypes: string[] = [];
  cities: string[] = [];

  activePoint: MapPoint | null = null;
  skeletonItems = Array.from({ length: 5 });
  searchInputValue = '';

  // ── Mobile map state ────────────────────────────────────────────────────
  mobileMapOpen = false;
  mobileMapCard: Card3Informacion | null = null;
  mobileMapPoints: MapPoint[] = [];
  mobileActivePoint: MapPoint | null = null;

  currentFilters: Filters = {
    priceMin: null,
    priceMax: null,
    roomTypes: [],
    cities: [],
    department: null,
    onlyAvailable: true,
    serviceIds: [],
    sortBy: null,
    showType: 'all',
  };

  ngOnInit(): void {
    this.loadInitialData();
  }

  loadInitialData() {
    this.loading = true;
    this.error = false;

    forkJoin({
      rooms: this.roomService.getRooms(),
      motels: this.motelService.getAllMotels(),   // ✅ endpoint público, sin auth
      services: this.serviceService.getServices(),
    }).subscribe({
      next: ({ rooms, motels, services }) => {

        this.services = [...new Map((services as Service[]).map(s => [s.id, s])).values()];

        const roomCards: Card3Informacion[] = (rooms as Room[]).map(room => ({
          id: room.id,
          type: 'room' as const,
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

        const motelCards: Card3Informacion[] = (motels as Motel[]).map(motel => ({
          id: motel.id,
          type: 'motel' as const,
          motelName: motel.name,
          descripcion: motel.description ?? '',
          // imageUrls es MotelImage[] con campo .url
          image: motel.imageUrls?.find(i => i.role === 'COVER')?.url
            ?? motel.imageUrls?.[0]?.url
            ?? './assets/images/ubikLogo.jpg',
          location: motel.city,
          adress: motel.address,
          // Convertir null → undefined para el filtro del mapa
          lat: motel.latitude ?? undefined,
          lng: motel.longitude ?? undefined,
        }));

        this.roomTypes = [...new Set((rooms as Room[]).map(r => r.roomType))];
        this.cities = [...new Set((rooms as Room[]).map(r => r.motelCity))];
        this.allCards = [...roomCards, ...motelCards];

        this.applyHeaderSearch();

        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  // ── Header search ─────────────────────────────────────────────────────────
  private applyHeaderSearch() {
    const { department, city, query } = this.searchService.state();

    if (!department && !city && !query) {
      this.applyFilters(this.currentFilters);
      return;
    }

    if (query) this.searchInputValue = query;

    const merged: Filters = {
      ...this.currentFilters,
      cities: city ? [city] : this.currentFilters.cities,
      department: department ? [department] : this.currentFilters.department,
    };

    this.currentFilters = merged;
    this.applyFilters(merged, query);

    this.searchService.clear();
  }

  // ── Modal de filtros ──────────────────────────────────────────────────────
  openModal() {
    const dialogRef = this.dialog.open<Filters>(FilterModal, {
      data: {
        roomTypes: this.roomTypes,
        cities: this.cities,
        services: this.services,
        filters: this.currentFilters,
      }
    });

    dialogRef.closed.subscribe((filters) => {
      if (filters) {
        this.currentFilters = filters;
        this.applyFilters(filters, this.searchInputValue);
      }
    });
  }

  // ── Filtrado principal ────────────────────────────────────────────────────
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

    if (filters.cities.length) {
      const normalizedCities = filters.cities.map(normalize);
      result = result.filter(r =>
        normalizedCities.some(nc =>
          normalize(r.location).includes(nc) || nc.includes(normalize(r.location))
        )
      );
    }

    if (filters.department?.length) {
      const normalizedDep = normalize(filters.department[0]);
      result = result.filter(r =>
        normalize(r.location).includes(normalizedDep) ||
        normalize(r.adress).includes(normalizedDep) ||
        normalizedDep.includes(normalize(r.location))
      );
    }

    if (filters.serviceIds.length) {
      result = result.filter(r =>
        r.type === 'motel' ||
        (r.serviceIds && filters.serviceIds.every(id => r.serviceIds!.includes(id)))
      );
    }

    if (textQuery.trim()) {
      const q = normalize(textQuery);
      result = result.filter(c =>
        normalize(
          c.motelName +
          (c.roomType ?? '') +
          c.location +
          c.adress +
          (c.descripcion ?? '')
        ).includes(q)
      );
    }

    if (filters.sortBy === 'priceAsc') result.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    if (filters.sortBy === 'priceDesc') result.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));

    this.cards = result;
    this.points = this.mapPoints(result);
  }

  private mapPoints(cards: Card3Informacion[]): MapPoint[] {
    return cards
      .filter(c => c.lat != null && c.lng != null && c.lat !== 0 && c.lng !== 0)
      .map(c => ({
        lat: c.lat!,
        lng: c.lng!,
        name: c.type === 'room' ? `${c.motelName} — ${c.roomType}` : c.motelName,
        id: c.id,
      }));
  }

  onSearchInput(value: string) {
    this.searchInputValue = value;

    if (!value.trim()) {
      this.applyFilters(this.currentFilters);
      return;
    }

    this.applyFilters(this.currentFilters, value);
  }

  // ── Ver ubicación: desktop vs mobile ─────────────────────────────────────

  onViewLocation(event: { lat: number; lng: number; name: string; id: number }) {
    const card = this.allCards.find(c => c.id === event.id) ?? null;

    const isMobile = window.innerWidth < 1024; // lg breakpoint

    if (isMobile) {
      // Abrir modal de mapa mobile
      this.mobileMapCard = card;
      this.mobileMapPoints = card?.lat != null && card?.lng != null
        ? [{ lat: card.lat!, lng: card.lng!, name: event.name, id: event.id }]
        : [];
      this.mobileActivePoint = this.mobileMapPoints[0] ?? null;
      this.mobileMapOpen = true;

      // Bloquear scroll del body mientras el modal está abierto
      document.body.style.overflow = 'hidden';

      // Forzar recálculo del tamaño del mapa tras render
      setTimeout(() => this.mobileMapRef?.invalidateSize(), 200);

    } else {
      // Desktop: comportamiento original, hacer pan en el mapa de la derecha
      this.activePoint = event;
    }
  }

  closeMobileMap() {
    this.mobileMapOpen = false;
    this.mobileMapCard = null;
    this.mobileActivePoint = null;
    document.body.style.overflow = '';
  }

  openPaymentFromMap() {
    if (!this.mobileMapCard) return;
    const dialogRef = this.dialog.open(PaymentModal, {
      data: { id: this.mobileMapCard.id }
    });
    dialogRef.closed.subscribe((result: any) => {
      if (result?.success) {
        this.router.navigate(['/payment/success'], { state: { paymentDetails: result.details } });
      }
    });
    this.closeMobileMap();
  }
}