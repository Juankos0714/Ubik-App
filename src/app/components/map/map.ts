import {
  Component,
  AfterViewInit,
  Input,
  inject,
  PLATFORM_ID,
  OnChanges,
  SimpleChanges,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { getUserLocation } from './geolocation';

export interface MapPoint {
  lat: number;
  lng: number;
  name: string;
  id?: number;
}

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.html',
  styleUrls: ['./map.css'],
})
export class Map implements AfterViewInit, OnChanges {
  @Input() points: MapPoint[] = [];
  @Input() active: MapPoint | null = null;

  @ViewChild('mapContainer', { static: false })
  mapContainer!: ElementRef<HTMLDivElement>;

  private platformId = inject(PLATFORM_ID);

  private map!: import('leaflet').Map;
  private L!: typeof import('leaflet');
  private markerLayer!: import('leaflet').LayerGroup;
  private userLatLng?: [number, number];

  // 🔥 Iconos personalizados
  private userIcon!: import('leaflet').Icon;
  private motelIcon!: import('leaflet').Icon;

  private readonly MAX_DISTANCE_KM = 2;

  /* =========================
     INIT
  ========================== */

  async ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const leaflet = await import('leaflet');
    this.L = (leaflet as any).default ?? leaflet;

    this.map = this.L.map(this.mapContainer.nativeElement, {
      center: [4.6, -74.1],
      zoom: 13,
    });

    this.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    this.markerLayer = this.L.layerGroup().addTo(this.map);

    // 🔥 Crear iconos personalizados
    this.userIcon = this.L.icon({
      iconUrl: 'assets/icons/leaflet/icon_person.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    this.motelIcon = this.L.icon({
      iconUrl: 'assets/icons/leaflet/icon_motel.png',
      iconSize: [36, 36],
      iconAnchor: [18, 36],
      popupAnchor: [0, -36],
    });

    setTimeout(() => this.map.invalidateSize());

    await this.initializeLocation();
    this.renderMarkers();
  }

  /* =========================
     INPUT CHANGES
  ========================== */

  ngOnChanges(changes: SimpleChanges) {
    if (!this.map) return;

    if (changes['points']) {
      this.renderMarkers();
    }

    if (changes['active'] && this.active) {
      this.map.flyTo([this.active.lat, this.active.lng], 17);
    }
  }

  /* =========================
     USER LOCATION
  ========================== */

  private async initializeLocation() {
    try {
      const location = await getUserLocation();

      this.userLatLng = [location.latitude, location.longitude];

      this.L.marker(this.userLatLng, { icon: this.userIcon })
        .addTo(this.map)
        .bindPopup('Tú estás aquí');

      this.map.setView(this.userLatLng, 14);
    } catch {
      console.warn('No se pudo obtener ubicación');
    }
  }

  /* =========================
     MARKERS
  ========================== */

  private renderMarkers() {
    if (!this.markerLayer) return;

    this.markerLayer.clearLayers();

    let visiblePoints = this.points;

    // 🔥 Filtrar por distancia si hay usuario
    if (this.userLatLng) {
      visiblePoints = this.points.filter(p => {
        const distance = this.getDistanceKm(
          this.userLatLng![0],
          this.userLatLng![1],
          p.lat,
          p.lng
        );
        return distance <= this.MAX_DISTANCE_KM;
      });
    }

    for (const p of visiblePoints) {
      this.L.marker([p.lat, p.lng], { icon: this.motelIcon })
        .bindPopup(p.name)
        .addTo(this.markerLayer);
    }

    this.adjustView(visiblePoints);
  }

  /* =========================
     DISTANCE CALCULATION
     Haversine Formula
  ========================== */

  private getDistanceKm(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number {
    const R = 6371; // radio tierra km
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  private deg2rad(deg: number) {
    return deg * (Math.PI / 180);
  }

  /* =========================
     VIEW ADJUSTMENT
  ========================== */

  private adjustView(points: MapPoint[]) {
    if (!this.map) return;

    const allPoints: [number, number][] = points.map(p => [p.lat, p.lng]);

    if (this.userLatLng) {
      allPoints.push(this.userLatLng);
    }

    if (allPoints.length === 0) return;

    if (allPoints.length === 1) {
      this.map.setView(allPoints[0], 14);
      return;
    }

    const bounds = this.L.latLngBounds(allPoints);
    this.map.fitBounds(bounds, { padding: [50, 50] });
  }
}