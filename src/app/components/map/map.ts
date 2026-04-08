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
  Output,
  EventEmitter,
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { getUserLocation } from './geolocation';

export interface MapPoint {
  lat: number;
  lng: number;
  name: string;
  id?: number;
  image?: string;
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
  @Input() showUserLocation: boolean = true;
  @Input() allowMapClick: boolean = false;
  @Input() hoverId: number | null = null;

  /** Emite cuando el usuario hace click en un marker de motel/habitación */
  @Output() markerClicked = new EventEmitter<MapPoint>();
  @Output() mapClicked = new EventEmitter<{lat: number, lng: number}>();

  @ViewChild('mapContainer', { static: false })
  mapContainer!: ElementRef<HTMLDivElement>;

  private platformId = inject(PLATFORM_ID);

  private map!: import('leaflet').Map;
  private L!: typeof import('leaflet');
  private markerLayer!: import('leaflet').LayerGroup;
  private userLatLng?: [number, number];
  private watchId?: number;

  private userIcon!: import('leaflet').Icon;
  private motelIcon!: import('leaflet').Icon;
  private userMarker?: import('leaflet').Marker;

  /** Flag: ya se hizo el zoom inicial al usuario (para no repetirlo) */
  private userZoomDone = false;
  private markersDict: Record<number, import('leaflet').Marker> = {};

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

    //  Primero pintar los markers que ya hayan llegado
    if (this.points.length) {
      this.renderMarkers();
    }

    //  Luego (en paralelo, sin bloquear) iniciar geolocalización
    if (this.showUserLocation) {
      this.initializeLocation();
    }

    // Emitir clic del mapa si está habilitado
    this.map.on('click', (e: any) => {
      if (this.allowMapClick) {
        this.mapClicked.emit({ lat: e.latlng.lat, lng: e.latlng.lng });
      }
    });
  }

  ngOnDestroy() {
    // Limpiar el watcher de geolocalización al destruir el componente
    if (typeof navigator !== 'undefined' && this.watchId != null) {
      navigator.geolocation.clearWatch(this.watchId);
    }
  }

  @Input() centerOverride: [number, number] | null = null;

  /* =========================
     INPUT CHANGES
  ========================== */

  ngOnChanges(changes: SimpleChanges) {
    if (!this.map) return;

    if (changes['centerOverride'] && this.centerOverride) {
      this.map.flyTo(this.centerOverride, 12, { animate: true, duration: 1.5 });
    }

    if (changes['points']) {
      this.renderMarkers();

      // Si los puntos acaban de llegar y ya tenemos ubicación del usuario
      // pero aún no hicimos zoom → programar el zoom con delay
      const pointsJustArrived = changes['points'].previousValue?.length === 0
                             && this.points.length > 0;

      if (pointsJustArrived && this.userLatLng && !this.userZoomDone) {
        setTimeout(() => {
          if (this.userLatLng && !this.userZoomDone) {
            this.userZoomDone = true;
            this.map.flyTo(this.userLatLng, 14, { animate: true, duration: 1.8 });
          }
        }, 2000);
      }
    }

    if (changes['active'] && this.active) {
      this.map.flyTo([this.active.lat, this.active.lng], 17, {
        animate: true,
        duration: 1.2,
      });
    }

    if (changes['hoverId'] !== undefined && this.map) {
      if (this.hoverId) {
        const marker = this.markersDict[this.hoverId];
        if (marker) {
          marker.openPopup();
        }
      } else {
        this.map.closePopup();
      }
    }
  }

  /* =========================
     USER LOCATION — TIEMPO REAL
  ========================== */

  private async initializeLocation() {
    if (!navigator.geolocation) {
      console.warn('Geolocalización no soportada');
      return;
    }

    // Obtener posición inicial
    try {
      const location = await getUserLocation();
      this.userLatLng = [location.latitude, location.longitude];
      this.placeUserMarker(this.userLatLng);

      //  Solo hacer zoom al usuario si ya hay puntos (moteles) cargados.
      // Si no hay puntos, significa que las habitaciones/moteles no cargaron — no hacemos zoom.
      if (!this.userZoomDone && this.points.length > 0) {
        setTimeout(() => {
          if (this.userLatLng && !this.userZoomDone && this.points.length > 0) {
            this.userZoomDone = true;
            this.map.flyTo(this.userLatLng, 14, {
              animate: true,
              duration: 1.8,
            });
          }
        }, 2000);
      }
    } catch {
      console.warn('No se pudo obtener ubicación inicial');
    }

    // Seguimiento en tiempo real — solo actualiza el marker, no hace zoom
    this.watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const newLatLng: [number, number] = [
          pos.coords.latitude,
          pos.coords.longitude,
        ];
        this.userLatLng = newLatLng;
        this.placeUserMarker(newLatLng);
      },
      (err) => console.warn('watchPosition error:', err),
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 5000,
      }
    );
  }

  private placeUserMarker(latLng: [number, number]) {
    if (!this.map || !this.L) return;

    if (this.userMarker) {
      // Mover suavemente el marker existente
      this.userMarker.setLatLng(latLng);
    } else {
      this.userMarker = this.L.marker(latLng, { icon: this.userIcon })
        .addTo(this.map)
        .bindPopup('📍 Tú estás aquí');
    }
  }

  /* =========================
     MARKERS
  ========================== */

  private renderMarkers() {
    if (!this.markerLayer) return;

    this.markerLayer.clearLayers();

    this.markersDict = {};

    for (const p of this.points) {
      const popupHtml = p.image 
        ? `<div style="text-align:center; min-width: 120px;">
             <img src="${p.image}" style="width:100%; height:80px; object-fit:cover; border-radius:8px; margin-bottom:8px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);"/>
             <b style="color: #333; font-size: 13px; font-family: sans-serif;">${p.name}</b>
           </div>`
        : `<b>${p.name}</b>`;

      const marker = this.L.marker([p.lat, p.lng], { icon: this.motelIcon })
        .bindPopup(popupHtml, { closeButton: false, offset: [0, -20] });

      // Emitir evento al hacer click en un marker
      marker.on('click', () => {
        this.markerClicked.emit(p);
      });

      marker.addTo(this.markerLayer);
      if (p.id) {
        this.markersDict[p.id] = marker;
      }
    }

    this.adjustView();
  }

  /* =========================
     VIEW ADJUSTMENT
  ========================== */

  private adjustView() {
    if (!this.map) return;

    // Solo usar los puntos de los moteles para el fitBounds inicial
    // El zoom al usuario se hace por separado con delay
    const allPoints: [number, number][] = this.points.map(p => [p.lat, p.lng]);

    if (allPoints.length === 0) return;

    if (allPoints.length === 1) {
      this.map.setView(allPoints[0], 14);
      return;
    }

    const bounds = this.L.latLngBounds(allPoints);
    this.map.fitBounds(bounds, { padding: [50, 50] });
  }

  /** Fuerza recálculo del tamaño (útil al mostrar/ocultar el mapa en mobile) */
  invalidateSize() {
    setTimeout(() => this.map?.invalidateSize(), 100);
  }

  /** Refocus the map to the user's location on demand */
  centerUser() {
    if (this.userLatLng && this.map) {
       this.map.flyTo(this.userLatLng, 14, { animate: true, duration: 1.5 });
    }
  }
}