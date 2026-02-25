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

  async ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.L = await import('leaflet');

    this.map = this.L.map('map');

    delete (this.L.Icon.Default.prototype as any)._getIconUrl;

  this.L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'assets/icons/leaflet/marker-icon-2x.png',
    iconUrl: 'assets/icons/leaflet/marker-icon.png',
    shadowUrl: 'assets/icons/leaflet/marker-shadow.png',
  });

    this.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    this.markerLayer = this.L.layerGroup().addTo(this.map);

    setTimeout(() => this.map.invalidateSize(), 300);

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

  // ======================================
  // 📍 GEOLOCALIZACIÓN CON DEBUG Y ALERTA
  // ======================================
  private async initializeLocation() {
    try {
      const location = await getUserLocation();

      console.log('📍 LAT:', location.latitude);
      console.log('📍 LNG:', location.longitude);
      console.log('🎯 ACCURACY:', location.accuracy, 'metros');

      // ⚠️ Advertencia si precisión es mala
      if (location.accuracy > 1000) {
        console.warn(
          '⚠️ Ubicación poco precisa (posiblemente por IP). ' +
          'Prueba desde móvil o activa GPS para mayor exactitud.'
        );
      }

      this.map.setView([location.latitude, location.longitude], 16);

      // Remover marcador anterior si existe
      if (this.userMarker) {
        this.map.removeLayer(this.userMarker);
      }

      // Remover círculo anterior si existe
      if (this.accuracyCircle) {
        this.map.removeLayer(this.accuracyCircle);
      }

      // 🔵 Marcador usuario
      this.userMarker = this.L.marker([
        location.latitude,
        location.longitude,
      ])
        .addTo(this.map)
        .bindPopup('Tú estás aquí')
        .openPopup();

      // 🔵 Círculo de precisión
      this.accuracyCircle = this.L.circle(
        [location.latitude, location.longitude],
        {
          radius: location.accuracy,
        }
      ).addTo(this.map);

    } catch (error) {
      console.warn('❌ Geolocalización falló:', error);
      this.adjustView();
    }
  }

  // ===============================
  // 🏨 MARCADORES
  // ===============================
  private renderMarkers() {
    if (!this.markerLayer) return;

    this.markerLayer.clearLayers();

    this.points.forEach((p) => {
      const marker = this.L.marker([p.lat, p.lng])
        .bindPopup(p.name);

      this.markerLayer.addLayer(marker);
    });
  }

  // ===============================
  // 🎯 FALLBACK
  // ===============================
  private adjustView() {
    if (!this.points.length) {
      this.map.setView([4.6, -74.1], 6);
      return;
    }

    const bounds = this.L.latLngBounds(
      this.points.map((p) => [p.lat, p.lng])
    );

    this.map.fitBounds(bounds, { padding: [50, 50] });
  }
}