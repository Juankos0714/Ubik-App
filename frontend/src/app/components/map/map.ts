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
  @Input() userPoint?: MapPoint | null = null;
  @Input() active?: MapPoint | null = null;

  private platformId = inject(PLATFORM_ID);
  private map: any;
  private markers: any[] = [];
  private userMarker: any | null = null;

  async ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const L = await import('leaflet');

    // default center
    const center = this.userPoint
      ? [this.userPoint.lat, this.userPoint.lng]
      : this.points[0]
        ? [this.points[0].lat, this.points[0].lng]
        : [4.541141, -75.668121];

    this.map = L.map('map').setView(center as [number, number], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    this.renderMarkers(L);

    // ensure correct rendering after layout
    setTimeout(() => this.map.invalidateSize(), 200);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.map) return;
    import('leaflet').then((L) => {
      this.renderMarkers(L);
      // refresh size in case container changed
      setTimeout(() => this.map.invalidateSize(), 100);
    });
  }

  private async renderMarkers(L: any) {
    // clear existing
    this.markers.forEach((m) => this.map.removeLayer(m));
    this.markers = [];

    // add points (motels) using FontAwesome building icon
    this.points.forEach((p) => {
      const isActive = this.active && p.id && this.active.id === p.id;
      const motelIcon = L.divIcon({
        html: `<i class="fa-solid fa-building ${isActive ? 'marker-active' : ''}"></i>`,
        className: 'motel-div-icon',
        iconSize: [28, 28],
        iconAnchor: [14, 28],
      });

      const marker = L.marker([p.lat, p.lng], { icon: motelIcon })
        .addTo(this.map)
        .bindPopup(p.name);
      marker.on('click', () => {
        marker.openPopup();
      });
      this.markers.push(marker);
    });

    // user marker
    if (this.userMarker) {
      this.map.removeLayer(this.userMarker);
      this.userMarker = null;
    }

    if (this.userPoint) {
      const userIcon = L.divIcon({
        html: `<i class="fa-solid fa-person user-marker-icon"></i>`,
        className: 'user-div-icon',
        iconSize: [28, 28],
        iconAnchor: [14, 28],
      });
      this.userMarker = L.marker([this.userPoint.lat, this.userPoint.lng], { icon: userIcon })
        .addTo(this.map)
        .bindPopup('Tú estás aquí');
    }

    // highlight active
    if (this.active) {
      this.map.setView([this.active.lat, this.active.lng], 15);
    }
  }
}
