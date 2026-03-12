import { Component, inject, ViewChild } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { RoomService } from '../../core/services/room.service';
import { MotelService } from '../../core/services/motel.service';
import { ServiceService } from '../../core/services/services.service';
import { FilterModal } from '../../components/filter-modal/filter-modal';
import { Button01 } from '../../components/button-01/button-01';
import { Button02 } from '../../components/button-02/button-02';
import { Card3 } from '../../components/card-3/card-3';
import { Map as MapComponent } from '../../components/map/map';
import { LoadingCard3 } from '../../components/loading-card-3/loading-card-3';
import { SearchService } from '../../core/services/search.service';
import { PaymentModal } from '../../components/payment-modal/payment-modal';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["mobileMap"];
const _c1 = a0 => ["/motelProfile", a0];
const _forTrack0 = ($index, $item) => $item.id;
function Explore_Conditional_9_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-loading-card-3");
} }
function Explore_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, Explore_Conditional_9_For_1_Template, 1, 0, "app-loading-card-3", null, i0.ɵɵrepeaterTrackByIndex);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r1.skeletonItems);
} }
function Explore_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Error al cargar las habitaciones.");
    i0.ɵɵelementEnd();
} }
function Explore_Conditional_11_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-card-3", 14);
    i0.ɵɵlistener("viewLocation", function Explore_Conditional_11_For_1_Template_app_card_3_viewLocation_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onViewLocation($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const card_r4 = ctx.$implicit;
    i0.ɵɵproperty("card", card_r4);
} }
function Explore_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, Explore_Conditional_11_For_1_Template, 1, 1, "app-card-3", 13, _forTrack0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r1.cards);
} }
function Explore_Conditional_15_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 25);
    i0.ɵɵlistener("click", function Explore_Conditional_15_Conditional_8_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closeMobileMap()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 26);
    i0.ɵɵelement(2, "path", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Ver m\u00E1s info ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", ctx_r1.mobileMapCard.type === "room" ? i0.ɵɵpureFunction1(1, _c1, ctx_r1.mobileMapCard.motelId) : i0.ɵɵpureFunction1(3, _c1, ctx_r1.mobileMapCard.id));
} }
function Explore_Conditional_15_Conditional_9_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 32);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "number");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" $ ", i0.ɵɵpipeBind1(2, 1, ctx_r1.mobileMapCard.price), " ");
} }
function Explore_Conditional_15_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelement(1, "img", 28);
    i0.ɵɵelementStart(2, "div", 29)(3, "p", 30);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 31);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(7, Explore_Conditional_15_Conditional_9_Conditional_7_Template, 3, 3, "span", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r1.mobileMapCard.image, i0.ɵɵsanitizeUrl)("alt", ctx_r1.mobileMapCard.motelName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.mobileMapCard.motelName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.mobileMapCard.adress);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.mobileMapCard.type === "room" && ctx_r1.mobileMapCard.price ? 7 : -1);
} }
function Explore_Conditional_15_Conditional_13_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-button-01", 35);
    i0.ɵɵlistener("clicked", function Explore_Conditional_15_Conditional_13_Conditional_1_Template_app_button_01_clicked_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openPaymentFromMap()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("fullWidth", true);
} }
function Explore_Conditional_15_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵconditionalCreate(1, Explore_Conditional_15_Conditional_13_Conditional_1_Template, 1, 1, "app-button-01", 33);
    i0.ɵɵelementStart(2, "button", 34);
    i0.ɵɵlistener("click", function Explore_Conditional_15_Conditional_13_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closeMobileMap()); });
    i0.ɵɵtext(3, " Volver a resultados ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.mobileMapCard.type === "room" ? 1 : -1);
} }
function Explore_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 15)(2, "div", 16)(3, "button", 17);
    i0.ɵɵlistener("click", function Explore_Conditional_15_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeMobileMap()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(4, "svg", 18);
    i0.ɵɵelement(5, "path", 19);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "span", 20);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(8, Explore_Conditional_15_Conditional_8_Template, 4, 5, "a", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(9, Explore_Conditional_15_Conditional_9_Template, 8, 5, "div", 22);
    i0.ɵɵelementStart(10, "div", 23);
    i0.ɵɵelement(11, "app-map", 11, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(13, Explore_Conditional_15_Conditional_13_Template, 4, 1, "div", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", (ctx_r1.mobileMapCard == null ? null : ctx_r1.mobileMapCard.roomType) ?? (ctx_r1.mobileMapCard == null ? null : ctx_r1.mobileMapCard.motelName) ?? "Ubicaci\u00F3n", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.mobileMapCard ? 8 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.mobileMapCard ? 9 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("points", ctx_r1.mobileMapPoints)("active", ctx_r1.mobileActivePoint);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.mobileMapCard ? 13 : -1);
} }
/**
 * Normaliza un string para comparación robusta:
 * minúsculas, sin tildes, sin puntos, trim.
 * Ej: "Bogotá D.C." → "bogota dc"
 */
function normalize(str) {
    return (str ?? '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\./g, '')
        .trim();
}
export class Explore {
    roomService = inject(RoomService);
    motelService = inject(MotelService);
    serviceService = inject(ServiceService);
    dialog = inject(Dialog);
    searchService = inject(SearchService);
    router = inject(Router);
    /** Referencia al mapa mobile para forzar invalidateSize al abrir */
    mobileMapRef;
    allCards = [];
    cards = [];
    points = [];
    services = [];
    loading = false;
    error = false;
    roomTypes = [];
    cities = [];
    activePoint = null;
    skeletonItems = Array.from({ length: 5 });
    searchInputValue = '';
    // ── Mobile map state ────────────────────────────────────────────────────
    mobileMapOpen = false;
    mobileMapCard = null;
    mobileMapPoints = [];
    mobileActivePoint = null;
    currentFilters = {
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
    ngOnInit() {
        this.loadInitialData();
    }
    loadInitialData() {
        this.loading = true;
        this.error = false;
        forkJoin({
            rooms: this.roomService.getRooms(),
            motels: this.motelService.getAllMotels(), // ✅ endpoint público, sin auth
            services: this.serviceService.getServices(),
        }).subscribe({
            next: ({ rooms, motels, services }) => {
                this.services = [...new Map(services.map(s => [s.id, s])).values()];
                const roomCards = rooms.map(room => ({
                    id: room.id,
                    type: 'room',
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
                const motelCards = motels.map(motel => ({
                    id: motel.id,
                    type: 'motel',
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
                this.roomTypes = [...new Set(rooms.map(r => r.roomType))];
                this.cities = [...new Set(rooms.map(r => r.motelCity))];
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
    applyHeaderSearch() {
        const { department, city, query } = this.searchService.state();
        if (!department && !city && !query) {
            this.applyFilters(this.currentFilters);
            return;
        }
        if (query)
            this.searchInputValue = query;
        const merged = {
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
        const dialogRef = this.dialog.open(FilterModal, {
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
    applyFilters(filters, textQuery = '') {
        let result = [...this.allCards];
        if (filters.showType !== 'all') {
            const t = filters.showType === 'rooms' ? 'room' : 'motel';
            result = result.filter(r => r.type === t);
        }
        if (filters.onlyAvailable) {
            result = result.filter(r => r.type === 'motel' || r.isAvailable === true);
        }
        if (filters.priceMin !== null) {
            result = result.filter(r => r.type === 'motel' || (r.price ?? 0) >= filters.priceMin);
        }
        if (filters.priceMax !== null) {
            result = result.filter(r => r.type === 'motel' || (r.price ?? 0) <= filters.priceMax);
        }
        if (filters.roomTypes.length) {
            result = result.filter(r => r.type === 'motel' || (r.roomType && filters.roomTypes.includes(r.roomType)));
        }
        if (filters.cities.length) {
            const normalizedCities = filters.cities.map(normalize);
            result = result.filter(r => normalizedCities.some(nc => normalize(r.location).includes(nc) || nc.includes(normalize(r.location))));
        }
        if (filters.department?.length) {
            const normalizedDep = normalize(filters.department[0]);
            result = result.filter(r => normalize(r.location).includes(normalizedDep) ||
                normalize(r.adress).includes(normalizedDep) ||
                normalizedDep.includes(normalize(r.location)));
        }
        if (filters.serviceIds.length) {
            result = result.filter(r => r.type === 'motel' ||
                (r.serviceIds && filters.serviceIds.every(id => r.serviceIds.includes(id))));
        }
        if (textQuery.trim()) {
            const q = normalize(textQuery);
            result = result.filter(c => normalize(c.motelName +
                (c.roomType ?? '') +
                c.location +
                c.adress +
                (c.descripcion ?? '')).includes(q));
        }
        if (filters.sortBy === 'priceAsc')
            result.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
        if (filters.sortBy === 'priceDesc')
            result.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
        this.cards = result;
        this.points = this.mapPoints(result);
    }
    mapPoints(cards) {
        return cards
            .filter(c => c.lat != null && c.lng != null && c.lat !== 0 && c.lng !== 0)
            .map(c => ({
            lat: c.lat,
            lng: c.lng,
            name: c.type === 'room' ? `${c.motelName} — ${c.roomType}` : c.motelName,
            id: c.id,
        }));
    }
    onSearchInput(value) {
        this.searchInputValue = value;
        if (!value.trim()) {
            this.applyFilters(this.currentFilters);
            return;
        }
        this.applyFilters(this.currentFilters, value);
    }
    // ── Ver ubicación: desktop vs mobile ─────────────────────────────────────
    onViewLocation(event) {
        const card = this.allCards.find(c => c.id === event.id) ?? null;
        const isMobile = window.innerWidth < 1024; // lg breakpoint
        if (isMobile) {
            // Abrir modal de mapa mobile
            this.mobileMapCard = card;
            this.mobileMapPoints = card?.lat != null && card?.lng != null
                ? [{ lat: card.lat, lng: card.lng, name: event.name, id: event.id }]
                : [];
            this.mobileActivePoint = this.mobileMapPoints[0] ?? null;
            this.mobileMapOpen = true;
            // Bloquear scroll del body mientras el modal está abierto
            document.body.style.overflow = 'hidden';
            // Forzar recálculo del tamaño del mapa tras render
            setTimeout(() => this.mobileMapRef?.invalidateSize(), 200);
        }
        else {
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
        if (!this.mobileMapCard)
            return;
        const dialogRef = this.dialog.open(PaymentModal, {
            data: { id: this.mobileMapCard.id }
        });
        dialogRef.closed.subscribe((result) => {
            if (result?.success) {
                this.router.navigate(['/payment/success'], { state: { paymentDetails: result.details } });
            }
        });
        this.closeMobileMap();
    }
    static ɵfac = function Explore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Explore)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Explore, selectors: [["app-explore"]], viewQuery: function Explore_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mobileMapRef = _t.first);
        } }, decls: 16, vars: 6, consts: [["desktopMap", ""], ["mobileMap", ""], [1, "flex", "mt-16", "mb-16", "flex-col", "lg:flex-row", "justify-between", "gap-6"], [1, "results-section", "flex-1", "flex", "flex-col", "gap-6", "max-h-[800px]", "max-w-full", "lg:max-w-[60%]", "rounded-xl", "overflow-hidden", "border", "border-white/10"], [1, "title", "flex", "flex-col", "sm:flex-row", "sm:items-center", "px-4", "sm:px-6", "py-4", "justify-between", "gap-3"], [1, "text-2xl", "font-semibold"], [1, "flex", "items-center", "gap-2", "w-full", "sm:w-auto"], ["type", "text", "placeholder", "Buscar moteles o ciudades...", 1, "w-full", "sm:w-80", "px-3", "py-2", "rounded", "bg-[#1e2128]", "text-white", "border", "border-white/10", 3, "input"], ["text", "Filtro", 3, "click"], [1, "results", "flex", "flex-col", "gap-6", "sm:gap-10", "w-full", "flex-1", "overflow-y-auto", "p-5"], [1, "hidden", "lg:flex", "flex-1", "h-[800px]", "min-h-[400px]", "rounded-xl", "overflow-hidden", "relative"], [1, "block", "w-full", "h-full", 3, "points", "active"], [1, "fixed", "inset-0", "z-50", "flex", "flex-col", "lg:hidden", 2, "background", "#0d0608"], [3, "card"], [3, "viewLocation", "card"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "border-b", "border-white/10", "bg-[#14090C]", "shrink-0"], [1, "flex", "items-center", "gap-3"], ["aria-label", "Cerrar mapa", 1, "flex", "items-center", "justify-center", "w-9", "h-9", "rounded-full", "bg-white/10", "hover:bg-white/20", "transition", "text-white", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "text-white", "font-semibold", "text-base"], [1, "flex", "items-center", "gap-1.5", "bg-amber-500", "hover:bg-amber-400", "text-black", "text-sm", "font-semibold", "px-3", "py-1.5", "rounded-lg", "transition", 3, "routerLink"], [1, "flex", "items-center", "gap-3", "px-4", "py-2.5", "bg-[#1a0e11]", "border-b", "border-white/5", "shrink-0"], [1, "flex-1", "relative", "overflow-hidden"], [1, "shrink-0", "px-4", "py-3", "bg-[#14090C]", "border-t", "border-white/10", "flex", "gap-3"], [1, "flex", "items-center", "gap-1.5", "bg-amber-500", "hover:bg-amber-400", "text-black", "text-sm", "font-semibold", "px-3", "py-1.5", "rounded-lg", "transition", 3, "click", "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 110 20A10 10 0 0112 2z"], [1, "w-10", "h-10", "rounded-lg", "object-cover", 3, "src", "alt"], [1, "flex-1", "min-w-0"], [1, "text-white", "text-sm", "font-medium", "truncate"], [1, "text-gray-400", "text-xs", "truncate"], [1, "text-amber-400", "font-bold", "text-sm", "shrink-0"], ["text", "Reservar", 3, "fullWidth"], [1, "flex-1", "border", "border-white/20", "text-white/80", "rounded-lg", "px-4", "py-2", "hover:bg-white/5", "transition", "text-sm", "font-medium", 3, "click"], ["text", "Reservar", 3, "clicked", "fullWidth"]], template: function Explore_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h2", 5);
            i0.ɵɵtext(4, "Moteles y Habitaciones");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 6)(6, "input", 7);
            i0.ɵɵlistener("input", function Explore_Template_input_input_6_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onSearchInput($event.target.value)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "app-button-02", 8);
            i0.ɵɵlistener("click", function Explore_Template_app_button_02_click_7_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.openModal()); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "section", 9);
            i0.ɵɵconditionalCreate(9, Explore_Conditional_9_Template, 2, 0);
            i0.ɵɵconditionalCreate(10, Explore_Conditional_10_Template, 2, 0, "p");
            i0.ɵɵconditionalCreate(11, Explore_Conditional_11_Template, 2, 0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 10);
            i0.ɵɵelement(13, "app-map", 11, 0);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(15, Explore_Conditional_15_Template, 14, 6, "div", 12);
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵconditional(ctx.loading ? 9 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error ? 10 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.loading && !ctx.error ? 11 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("points", ctx.points)("active", ctx.activePoint);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.mobileMapOpen ? 15 : -1);
        } }, dependencies: [CommonModule, Button01, Button02, Card3, MapComponent, LoadingCard3, RouterLink, i1.DecimalPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Explore, [{
        type: Component,
        args: [{ selector: 'app-explore', standalone: true, imports: [CommonModule, Button01, Button02, Card3, MapComponent, LoadingCard3, RouterLink], template: "<div class=\"flex mt-16 mb-16 flex-col lg:flex-row justify-between gap-6\">\n\n  <!-- RESULTADOS -->\n  <div\n    class=\"results-section flex-1 flex flex-col gap-6 max-h-[800px] max-w-full lg:max-w-[60%] rounded-xl overflow-hidden border border-white/10\"\n  >\n    <div\n      class=\"title flex flex-col sm:flex-row sm:items-center px-4 sm:px-6 py-4 justify-between gap-3\"\n    >\n      <h2 class=\"text-2xl font-semibold\">Moteles y Habitaciones</h2>\n      <div class=\"flex items-center gap-2 w-full sm:w-auto\">\n        <input\n          type=\"text\"\n          placeholder=\"Buscar moteles o ciudades...\"\n          class=\"w-full sm:w-80 px-3 py-2 rounded bg-[#1e2128] text-white border border-white/10\"\n          (input)=\"onSearchInput($any($event.target).value)\"\n        />\n        <app-button-02 text=\"Filtro\" (click)=\"openModal()\"></app-button-02>\n      </div>\n    </div>\n\n    <section class=\"results flex flex-col gap-6 sm:gap-10 w-full flex-1 overflow-y-auto p-5\">\n\n      @if (loading) {\n        @for (_ of skeletonItems; track $index) {\n          <app-loading-card-3/>\n        }\n      }\n\n      @if (error) {\n        <p>Error al cargar las habitaciones.</p>\n      }\n\n      @if (!loading && !error) {\n        @for (card of cards; track card.id) {\n          <app-card-3\n            [card]=\"card\"\n            (viewLocation)=\"onViewLocation($event)\">\n          </app-card-3>\n        }\n      }\n\n    </section>\n  </div>\n\n  <!-- MAPA \u2014 solo visible en desktop (lg+) -->\n  <div class=\"hidden lg:flex flex-1 h-[800px] min-h-[400px] rounded-xl overflow-hidden relative\">\n    <app-map\n      #desktopMap\n      class=\"block w-full h-full\"\n      [points]=\"points\"\n      [active]=\"activePoint\">\n    </app-map>\n  </div>\n\n</div>\n\n\n<!-- =====================================================================\n     MOBILE MAP MODAL \u2014 Se activa al presionar \"Ver ubicaci\u00F3n\" en mobile\n====================================================================== -->\n@if (mobileMapOpen) {\n  <div\n    class=\"fixed inset-0 z-50 flex flex-col lg:hidden\"\n    style=\"background: #0d0608;\"\n  >\n\n    <!-- Header del modal -->\n    <div class=\"flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#14090C] shrink-0\">\n\n      <div class=\"flex items-center gap-3\">\n        <button\n          (click)=\"closeMobileMap()\"\n          class=\"flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition text-white\"\n          aria-label=\"Cerrar mapa\"\n        >\n          <!-- X icon -->\n          <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"w-5 h-5\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>\n          </svg>\n        </button>\n        <span class=\"text-white font-semibold text-base\">\n          {{ mobileMapCard?.roomType ?? mobileMapCard?.motelName ?? 'Ubicaci\u00F3n' }}\n        </span>\n      </div>\n\n      <!-- Bot\u00F3n Ver m\u00E1s info -->\n      @if (mobileMapCard) {\n        <a\n          [routerLink]=\"mobileMapCard.type === 'room'\n            ? ['/motelProfile', mobileMapCard.motelId]\n            : ['/motelProfile', mobileMapCard.id]\"\n          (click)=\"closeMobileMap()\"\n          class=\"flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-3 py-1.5 rounded-lg transition\"\n        >\n          <!-- Info icon -->\n          <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"w-4 h-4\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 110 20A10 10 0 0112 2z\"/>\n          </svg>\n          Ver m\u00E1s info\n        </a>\n      }\n\n    </div>\n\n    <!-- Info r\u00E1pida de la card seleccionada -->\n    @if (mobileMapCard) {\n      <div class=\"flex items-center gap-3 px-4 py-2.5 bg-[#1a0e11] border-b border-white/5 shrink-0\">\n        <img\n          [src]=\"mobileMapCard.image\"\n          [alt]=\"mobileMapCard.motelName\"\n          class=\"w-10 h-10 rounded-lg object-cover\"\n        />\n        <div class=\"flex-1 min-w-0\">\n          <p class=\"text-white text-sm font-medium truncate\">{{ mobileMapCard.motelName }}</p>\n          <p class=\"text-gray-400 text-xs truncate\">{{ mobileMapCard.adress }}</p>\n        </div>\n        @if (mobileMapCard.type === 'room' && mobileMapCard.price) {\n          <span class=\"text-amber-400 font-bold text-sm shrink-0\">\n            $ {{ mobileMapCard.price | number }}\n          </span>\n        }\n      </div>\n    }\n\n    <!-- Mapa mobile \u2014 ocupa el resto del espacio -->\n    <div class=\"flex-1 relative overflow-hidden\">\n      <app-map\n        #mobileMap\n        class=\"block w-full h-full\"\n        [points]=\"mobileMapPoints\"\n        [active]=\"mobileActivePoint\">\n      </app-map>\n    </div>\n\n    <!-- Footer con botones de acci\u00F3n -->\n    @if (mobileMapCard) {\n      <div class=\"shrink-0 px-4 py-3 bg-[#14090C] border-t border-white/10 flex gap-3\">\n\n        @if (mobileMapCard.type === 'room') {\n          <app-button-01\n            text=\"Reservar\"\n            [fullWidth]=\"true\"\n            (clicked)=\"openPaymentFromMap()\">\n          </app-button-01>\n        }\n\n        <button\n          (click)=\"closeMobileMap()\"\n          class=\"flex-1 border border-white/20 text-white/80 rounded-lg px-4 py-2 hover:bg-white/5 transition text-sm font-medium\"\n        >\n          Volver a resultados\n        </button>\n\n      </div>\n    }\n\n  </div>\n}" }]
    }], null, { mobileMapRef: [{
            type: ViewChild,
            args: ['mobileMap']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Explore, { className: "Explore", filePath: "src/app/views/explore/explore.ts", lineNumber: 44 }); })();
