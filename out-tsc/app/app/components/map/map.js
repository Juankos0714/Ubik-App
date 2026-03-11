import { Component, Input, inject, PLATFORM_ID, ViewChild, Output, EventEmitter, } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { getUserLocation } from './geolocation';
import * as i0 from "@angular/core";
const _c0 = ["mapContainer"];
export class Map {
    points = [];
    active = null;
    /** Emite cuando el usuario hace click en un marker de motel/habitación */
    markerClicked = new EventEmitter();
    mapContainer;
    platformId = inject(PLATFORM_ID);
    map;
    L;
    markerLayer;
    userLatLng;
    watchId;
    userIcon;
    motelIcon;
    userMarker;
    /** Flag: ya se hizo el zoom inicial al usuario (para no repetirlo) */
    userZoomDone = false;
    /* =========================
       INIT
    ========================== */
    async ngAfterViewInit() {
        if (!isPlatformBrowser(this.platformId))
            return;
        const leaflet = await import('leaflet');
        this.L = leaflet.default ?? leaflet;
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
        this.initializeLocation();
    }
    ngOnDestroy() {
        // Limpiar el watcher de geolocalización al destruir el componente
        if (typeof navigator !== 'undefined' && this.watchId != null) {
            navigator.geolocation.clearWatch(this.watchId);
        }
    }
    /* =========================
       INPUT CHANGES
    ========================== */
    ngOnChanges(changes) {
        if (!this.map)
            return;
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
    }
    /* =========================
       USER LOCATION — TIEMPO REAL
    ========================== */
    async initializeLocation() {
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
        }
        catch {
            console.warn('No se pudo obtener ubicación inicial');
        }
        // Seguimiento en tiempo real — solo actualiza el marker, no hace zoom
        this.watchId = navigator.geolocation.watchPosition((pos) => {
            const newLatLng = [
                pos.coords.latitude,
                pos.coords.longitude,
            ];
            this.userLatLng = newLatLng;
            this.placeUserMarker(newLatLng);
        }, (err) => console.warn('watchPosition error:', err), {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 5000,
        });
    }
    placeUserMarker(latLng) {
        if (!this.map || !this.L)
            return;
        if (this.userMarker) {
            // Mover suavemente el marker existente
            this.userMarker.setLatLng(latLng);
        }
        else {
            this.userMarker = this.L.marker(latLng, { icon: this.userIcon })
                .addTo(this.map)
                .bindPopup('📍 Tú estás aquí');
        }
    }
    /* =========================
       MARKERS
    ========================== */
    renderMarkers() {
        if (!this.markerLayer)
            return;
        this.markerLayer.clearLayers();
        for (const p of this.points) {
            const marker = this.L.marker([p.lat, p.lng], { icon: this.motelIcon })
                .bindPopup(p.name);
            // Emitir evento al hacer click en un marker
            marker.on('click', () => {
                this.markerClicked.emit(p);
            });
            marker.addTo(this.markerLayer);
        }
        this.adjustView();
    }
    /* =========================
       VIEW ADJUSTMENT
    ========================== */
    adjustView() {
        if (!this.map)
            return;
        // Solo usar los puntos de los moteles para el fitBounds inicial
        // El zoom al usuario se hace por separado con delay
        const allPoints = this.points.map(p => [p.lat, p.lng]);
        if (allPoints.length === 0)
            return;
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
    static ɵfac = function Map_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Map)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Map, selectors: [["app-map"]], viewQuery: function Map_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mapContainer = _t.first);
        } }, inputs: { points: "points", active: "active" }, outputs: { markerClicked: "markerClicked" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 0, consts: [["mapContainer", ""], [1, "map-container"]], template: function Map_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElement(0, "div", 1, 0);
        } }, dependencies: [CommonModule], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n#map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Map, [{
        type: Component,
        args: [{ selector: 'app-map', standalone: true, imports: [CommonModule], template: "<!-- <div id=\"map\"></div> -->\n\n<div #mapContainer class=\"map-container\"></div>", styles: [":host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n#map {\n  width: 100%;\n  height: 100%;\n}"] }]
    }], null, { points: [{
            type: Input
        }], active: [{
            type: Input
        }], markerClicked: [{
            type: Output
        }], mapContainer: [{
            type: ViewChild,
            args: ['mapContainer', { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Map, { className: "Map", filePath: "src/app/components/map/map.ts", lineNumber: 31 }); })();
