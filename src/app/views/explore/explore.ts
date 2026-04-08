import { ChangeDetectorRef, Component, OnInit, inject, ViewChild } from '@angular/core';
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
import { ColombiaService, Department } from '../../core/services/colombia.service';

import { FilterModal, Filters } from '../../components/filter-modal/filter-modal';
import { Button01 } from '../../components/button-01/button-01';
import { Card3, Card3Informacion } from '../../components/card-3/card-3';
import { Map as MapComponent, MapPoint } from '../../components/map/map';
import { LoadingCard3 } from '../../components/loading-card-3/loading-card-3';
import { SearchService } from '../../core/services/search.service';
import { PaymentModal } from '../../components/payment-modal/payment-modal';


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
  imports: [CommonModule, Button01, Card3, MapComponent, LoadingCard3, RouterLink],
})

export class Explore implements OnInit {

  private roomService = inject(RoomService);
  private motelService = inject(MotelService);
  private serviceService = inject(ServiceService);
  private dialog = inject(Dialog);
  private searchService = inject(SearchService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private colombiaService = inject(ColombiaService);

  /** Referencia al mapa mobile para forzar invalidateSize al abrir */
  @ViewChild('mobileMap') mobileMapRef?: MapComponent;

  allCards: Card3Informacion[] = [];
  cards: Card3Informacion[] = [];
  points: MapPoint[] = [];
  services: Service[] = [];
  colombiaData: Department[] = [];

  loading = false;
  error = false;

  roomTypes: string[] = [];
  cities: string[] = [];

  activePoint: MapPoint | null = null;
  hoverCardId: number | null = null;
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
    showType: 'rooms',
  };

  ngOnInit(): void {
    this.loadInitialData();
  }

  loadInitialData() {
    this.loading = true;
    this.error = false;

    forkJoin({
      rooms: this.roomService.getRooms(),
      motels: this.motelService.getAllMotels(),   
      services: this.serviceService.getServices(),
      colombia: this.colombiaService.getAll(),
    }).subscribe({
      next: ({ rooms, motels, services, colombia }) => {

        this.services = [...new Map((services as Service[]).map(s => [s.id, s])).values()];
        this.colombiaData = colombia;

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

        // Muestra todos temporalmente para poblar el mapa inicial
        this.applyFilters(this.currentFilters);

        // Aplicar filtro de búsqueda del header de forma inmediata tras cargar los datos
        this.applyHeaderSearch();

        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.error = true;
        this.loading = false;
        this.cdr.markForCheck();
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

    if (filters.department?.length && filters.cities.length === 0) {
      const normalizedDep = normalize(filters.department[0]);
      
      const deptDetails = this.colombiaData.find(d => normalize(d.name) === normalizedDep);
      let depCitiesNormalized: string[] = [];
      if(deptDetails) {
        depCitiesNormalized = deptDetails.municipalities.map(normalize);
      }

      result = result.filter(r => {
        const normLoc = normalize(r.location);
        return normLoc.includes(normalizedDep) ||
               normalize(r.adress).includes(normalizedDep) ||
               depCitiesNormalized.some(c => normLoc.includes(c) || c.includes(normLoc));
      });
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
    this.generateChips(filters, textQuery);

    this.mapCenterOverride = null;
    if (result.length === 0 && (filters.cities.length || filters.department?.length)) {
      const q = `${filters.cities[0] || ''} ${filters.department?.[0] || ''} Colombia`.trim();
      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}`)
        .then(res => res.json())
        .then(data => {
          if (data && data.length > 0) {
            const lat = parseFloat(data[0].lat);
            const lon = parseFloat(data[0].lon);
            this.mapCenterOverride = [lat, lon];
            this.cdr.markForCheck();
          }
        })
        .catch(err => console.error('Map geocoding fallback failed:', err));
    }
  }

  activeChips: { id: string; label: string; field: string; value: any }[] = [];
  mapCenterOverride: [number, number] | null = null;

  private generateChips(filters: Filters, query: string) {
    const chips: { id: string; label: string; field: string; value: any }[] = [];

    if (query.trim()) {
      chips.push({ id: `q_${query}`, label: `Búsqueda: ${query}`, field: 'query', value: query });
    }
    if (filters.department && filters.department.length > 0) {
      chips.push({ id: `dep_${filters.department[0]}`, label: `Dep: ${filters.department[0]}`, field: 'department', value: filters.department[0] });
    }
    if (filters.cities.length) {
      filters.cities.forEach(c => chips.push({ id: `city_${c}`, label: `Ciudad: ${c}`, field: 'cities', value: c }));
    }
    if (filters.roomTypes.length) {
      filters.roomTypes.forEach(t => chips.push({ id: `rt_${t}`, label: t, field: 'roomTypes', value: t }));
    }
    if (filters.serviceIds.length) {
      filters.serviceIds.forEach(id => {
        const s = this.services.find(ser => ser.id === id);
        if (s) chips.push({ id: `serv_${id}`, label: s.name, field: 'serviceIds', value: id });
      });
    }
    if (filters.priceMin !== null || filters.priceMax !== null) {
      const min = filters.priceMin ? `$${filters.priceMin.toLocaleString()}` : '$0';
      const max = filters.priceMax ? `$${filters.priceMax.toLocaleString()}` : 'Max';
      chips.push({ id: `price`, label: `${min} - ${max}`, field: 'price', value: null });
    }
    if (filters.onlyAvailable) {
      chips.push({ id: 'available', label: 'Disponibles hoy', field: 'available', value: true });
    }

    this.activeChips = chips;
  }

  removeChip(chip: { id: string; label: string; field: string; value: any }) {
    if (chip.field === 'query') {
      this.searchInputValue = '';
    } else if (chip.field === 'department') {
      this.currentFilters.department = null;
    } else if (chip.field === 'cities') {
      this.currentFilters.cities = this.currentFilters.cities.filter(c => c !== chip.value);
    } else if (chip.field === 'roomTypes') {
      this.currentFilters.roomTypes = this.currentFilters.roomTypes.filter(t => t !== chip.value);
    } else if (chip.field === 'serviceIds') {
      this.currentFilters.serviceIds = this.currentFilters.serviceIds.filter(id => id !== chip.value);
    } else if (chip.field === 'price') {
      this.currentFilters.priceMin = null;
      this.currentFilters.priceMax = null;
    } else if (chip.field === 'available') {
      this.currentFilters.onlyAvailable = false;
    }
    
    this.applyFilters(this.currentFilters, this.searchInputValue);
  }

  private mapPoints(cards: Card3Informacion[]): MapPoint[] {
    return cards
      .filter(c => c.lat != null && c.lng != null && c.lat !== 0 && c.lng !== 0)
      .map(c => ({
        lat: c.lat!,
        lng: c.lng!,
        name: c.type === 'room' ? `${c.motelName} — ${c.roomType}` : c.motelName,
        id: c.id,
        image: c.image
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