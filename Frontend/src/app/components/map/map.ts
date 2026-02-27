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

  private userIcon!: import('leaflet').Icon;
  private motelIcon!: import('leaflet').Icon;

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

    this.userIcon = this.L.icon({
      iconUrl: 'assets/icons/leaflet/icon_person.png',
      iconSize: [25, 32],
      iconAnchor: [18, 36],
      popupAnchor: [0, -32],
    });

    this.motelIcon = this.L.icon({
      iconUrl: 'assets/icons/leaflet/icon_motel.png',
      iconSize: [27, 36],
      iconAnchor: [18, 36],
      popupAnchor: [0, -36],
    });

    setTimeout(() => this.map.invalidateSize());

    await this.initializeLocation();

    // 🔥 Si ya había puntos antes de que el mapa terminara de cargar
    if (this.points.length) {
      this.renderMarkers();
    }
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
    } catch {
      console.warn('No se pudo obtener ubicación');
    }
  }

  private renderMarkers() {
    if (!this.markerLayer) return;

    // Limpiar markers anteriores
    this.markerLayer.clearLayers();

    for (const p of this.points) {
      this.L.marker([p.lat, p.lng], { icon: this.motelIcon })
        .bindPopup(p.name)
        .addTo(this.markerLayer);
    }

    this.adjustView();
  }

  /* =========================
     VIEW ADJUSTMENT
  ========================== */

  private adjustView() {
    if (!this.map) return;

    const allPoints: [number, number][] = this.points.map(p => [p.lat, p.lng]);

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