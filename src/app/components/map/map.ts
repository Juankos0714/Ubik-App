import {
  Component,
  AfterViewInit,
  Input,
  inject,
  PLATFORM_ID,
  OnChanges,
  SimpleChanges,
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
  @Input() active?: MapPoint | null = null;

  private platformId = inject(PLATFORM_ID);

  private map!: any;
  private L!: any;
  private markerLayer!: any;
  private userMarker!: any;
  private accuracyCircle!: any;
  private userLatLng?: [number, number];

  async ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.L = await import('leaflet');

    this.map = this.L.map('map', {
      center: [4.6, -74.1],
      zoom: 6,
    });

    this.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    this.markerLayer = this.L.layerGroup().addTo(this.map);

    setTimeout(() => {
      this.map.invalidateSize();
    }, 500);

    this.renderMarkers();
    this.initializeLocation();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.map) return;

    if (changes['points']) {
      this.renderMarkers();
    }

    if (changes['active'] && this.active) {
      this.map.flyTo([this.active.lat, this.active.lng], 17);
    }
  }

  private async initializeLocation() {
    try {
      const location = await getUserLocation();

      this.userLatLng = [location.latitude, location.longitude];

      this.map.setView(this.userLatLng, 16);

      if (this.userMarker) {
        this.map.removeLayer(this.userMarker);
      }

      if (this.accuracyCircle) {
        this.map.removeLayer(this.accuracyCircle);
      }

      this.userMarker = this.L.marker(this.userLatLng)
        .addTo(this.map)
        .bindPopup('Tú estás aquí');

      this.accuracyCircle = this.L.circle(this.userLatLng, {
        radius: location.accuracy,
      }).addTo(this.map);

      this.adjustView();
    } catch (error) {
      this.adjustView();
    }
  }

  private renderMarkers() {
    if (!this.markerLayer) return;

    this.markerLayer.clearLayers();

    this.points.forEach((p) => {
      const marker = this.L.marker([p.lat, p.lng])
        .bindPopup(p.name);

      this.markerLayer.addLayer(marker);
    });

    this.adjustView();
  }

  private adjustView() {
    const allPoints: [number, number][] = [];

    this.points.forEach((p) => {
      allPoints.push([p.lat, p.lng]);
    });

    if (this.userLatLng) {
      allPoints.push(this.userLatLng);
    }

    if (!allPoints.length) {
      this.map.setView([4.6, -74.1], 6);
      return;
    }

    if (allPoints.length === 1) {
      this.map.setView(allPoints[0], 16);
      return;
    }

    const bounds = this.L.latLngBounds(allPoints);
    this.map.fitBounds(bounds, { padding: [50, 50] });
  }
}