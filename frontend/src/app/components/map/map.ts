import { Component, AfterViewInit, Input, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface MapPoint {
  lat: number;
  lng: number;
  name: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.html',
  styleUrl: './map.css'
})
export class Map implements AfterViewInit {

  @Input() points: MapPoint[] = [];

  private platformId = inject(PLATFORM_ID);
  private map: any;
  private markers: any[] = [];

  async ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const L = await import('leaflet');

    this.map = L.map('map').setView([4.541141246051507, -75.66812120476611], 59);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    this.renderMarkers(L);
  }

  ngOnChanges() {
    if (!this.map) return;
    import('leaflet').then(L => this.renderMarkers(L));
  }

  private renderMarkers(L: any) {
    this.markers.forEach(m => this.map.removeLayer(m));
    this.markers = [];

    this.points.forEach(p => {
      const marker = L.marker([p.lat, p.lng])
        .addTo(this.map)
        .bindPopup(p.name);

      this.markers.push(marker);
    });
  }
}