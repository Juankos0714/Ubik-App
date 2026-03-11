import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from '../../core/services/room.service';
import { MotelService } from '../../core/services/motel.service';
import { Card } from '../../components/card/card';
import { LoadingCard } from '../../components/loading-card/loading-card';
import { CardMotel } from '../../components/card-motel/card-motel';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.id;
function Home_Conditional_12_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "app-loading-card");
    i0.ɵɵelementEnd();
} }
function Home_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, Home_Conditional_12_For_1_Template, 2, 0, "div", 13, i0.ɵɵrepeaterTrackByIndex);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r2.skeletonItems);
} }
function Home_Conditional_13_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "app-card-motel", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const motel_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("motel", motel_r4);
} }
function Home_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, Home_Conditional_13_For_1_Template, 2, 1, "div", 13, _forTrack0);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r2.motelesCercanos);
} }
function Home_Conditional_27_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "app-loading-card");
    i0.ɵɵelementEnd();
} }
function Home_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, Home_Conditional_27_For_1_Template, 2, 0, "div", 13, i0.ɵɵrepeaterTrackByIndex);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r2.skeletonItems);
} }
function Home_Conditional_28_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "app-card", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const destino_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("card", destino_r6);
} }
function Home_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, Home_Conditional_28_For_1_Template, 2, 1, "div", 13, _forTrack0);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r2.destinosPopulares);
} }
function Home_Conditional_42_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "app-loading-card");
    i0.ɵɵelementEnd();
} }
function Home_Conditional_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, Home_Conditional_42_For_1_Template, 2, 0, "div", 13, i0.ɵɵrepeaterTrackByIndex);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r2.skeletonItems);
} }
function Home_Conditional_43_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "app-card", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const oferta_r8 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("card", oferta_r8);
} }
function Home_Conditional_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, Home_Conditional_43_For_1_Template, 2, 1, "div", 13, _forTrack0);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r2.mejoresOfertas);
} }
export class Home {
    roomService = inject(RoomService);
    motelService = inject(MotelService);
    router = inject(Router);
    loading = true;
    skeletonItems = Array.from({ length: 5 });
    mejoresOfertas = [];
    motelesCercanos = [];
    destinosPopulares = [];
    ngOnInit() {
        this.loadHomeData();
    }
    loadHomeData() {
        this.loading = true;
        this.roomService.getRooms().subscribe({
            next: (rooms) => {
                this.mejoresOfertas = rooms.slice(0, 5);
                this.destinosPopulares = rooms.slice(5, 10);
            },
            error: (err) => {
                console.error('Error cargando rooms:', err);
                this.loading = false;
            },
        });
        this.motelService.getMotels().subscribe({
            next: (motels) => {
                this.motelesCercanos = motels.slice(0, 5);
            },
            error: (err) => {
                console.error('Error cargando moteles:', err);
                this.loading = false;
            },
            complete: () => {
                this.loading = false;
            },
        });
    }
    goToExplore() {
        this.router.navigate(['/explore']);
    }
    scrollLeft(el) {
        el.scrollBy({ left: -320, behavior: 'smooth' });
    }
    scrollRight(el) {
        el.scrollBy({ left: 320, behavior: 'smooth' });
    }
    static ɵfac = function Home_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Home)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Home, selectors: [["app-home"]], decls: 46, vars: 3, consts: [["nearbyMotelsCarousel", ""], ["destinosPopularesCarousel", ""], ["ofertasCarousel", ""], [1, "w-full", "px-4", "sm:px-6", "lg:px-8", "lg:max-w-1400px", "lg:mx-auto", "flex", "flex-col", "gap-20", "mt-12", "pb-24"], [1, "flex", "items-center", "justify-between", "mb-5"], [1, "text-xl", "sm:text-2xl", "font-bold"], [1, "text-sm", "text-red-400", "hover:text-red-300", "transition", "cursor-pointer", "hidden", "sm:block", 3, "click"], [1, "relative", "group"], [1, "hidden", "lg:flex", "absolute", "-left-5", "top-1/2", "-translate-y-1/2", "z-20", "w-12", "h-12", "items-center", "justify-center", "rounded-full", "bg-black/70", "border", "border-white/20", "text-white", "text-xl", "opacity-0", "group-hover:opacity-100", "hover:bg-black/90", "transition-all", "duration-200", "cursor-pointer", "shadow-lg", 3, "click"], [1, "flex", "gap-4", "overflow-x-auto", "scroll-smooth", "scrollbar-hide", "pb-2", "snap-x", "snap-mandatory"], [1, "hidden", "lg:flex", "absolute", "-right-5", "top-1/2", "-translate-y-1/2", "z-20", "w-10", "h-10", "items-center", "justify-center", "rounded-full", "bg-black/70", "border", "border-white/20", "text-white", "text-xl", "opacity-0", "group-hover:opacity-100", "hover:bg-black/90", "transition-all", "duration-200", "cursor-pointer", "shadow-lg", 3, "click"], [1, "hidden", "lg:flex", "absolute", "-left-5", "top-1/2", "-translate-y-1/2", "z-20", "w-10", "h-10", "items-center", "justify-center", "rounded-full", "bg-black/70", "border", "border-white/20", "text-white", "text-xl", "opacity-0", "group-hover:opacity-100", "hover:bg-black/90", "transition-all", "duration-200", "cursor-pointer", "shadow-lg", 3, "click"], ["id", "offerts", 1, "text-xl", "sm:text-2xl", "font-bold"], [1, "snap-start", "shrink-0"], [3, "motel"], [3, "card"]], template: function Home_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 3)(1, "section")(2, "div", 4)(3, "h3", 5);
            i0.ɵɵtext(4, "Moteles m\u00E1s cercanos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "a", 6);
            i0.ɵɵlistener("click", function Home_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.goToExplore()); });
            i0.ɵɵtext(6, " Ver todos \u2192 ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 7)(8, "button", 8);
            i0.ɵɵlistener("click", function Home_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r1); const nearbyMotelsCarousel_r2 = i0.ɵɵreference(11); return i0.ɵɵresetView(ctx.scrollLeft(nearbyMotelsCarousel_r2)); });
            i0.ɵɵtext(9, " \u2039 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 9, 0);
            i0.ɵɵconditionalCreate(12, Home_Conditional_12_Template, 2, 0)(13, Home_Conditional_13_Template, 2, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "button", 10);
            i0.ɵɵlistener("click", function Home_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r1); const nearbyMotelsCarousel_r2 = i0.ɵɵreference(11); return i0.ɵɵresetView(ctx.scrollRight(nearbyMotelsCarousel_r2)); });
            i0.ɵɵtext(15, " \u203A ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(16, "section")(17, "div", 4)(18, "h3", 5);
            i0.ɵɵtext(19, "Destinos Populares");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "a", 6);
            i0.ɵɵlistener("click", function Home_Template_a_click_20_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.goToExplore()); });
            i0.ɵɵtext(21, " Ver todos \u2192 ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 7)(23, "button", 11);
            i0.ɵɵlistener("click", function Home_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r1); const destinosPopularesCarousel_r5 = i0.ɵɵreference(26); return i0.ɵɵresetView(ctx.scrollLeft(destinosPopularesCarousel_r5)); });
            i0.ɵɵtext(24, " \u2039 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div", 9, 1);
            i0.ɵɵconditionalCreate(27, Home_Conditional_27_Template, 2, 0)(28, Home_Conditional_28_Template, 2, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "button", 10);
            i0.ɵɵlistener("click", function Home_Template_button_click_29_listener() { i0.ɵɵrestoreView(_r1); const destinosPopularesCarousel_r5 = i0.ɵɵreference(26); return i0.ɵɵresetView(ctx.scrollRight(destinosPopularesCarousel_r5)); });
            i0.ɵɵtext(30, " \u203A ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(31, "section")(32, "div", 4)(33, "h3", 12);
            i0.ɵɵtext(34, "Mejores ofertas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "a", 6);
            i0.ɵɵlistener("click", function Home_Template_a_click_35_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.goToExplore()); });
            i0.ɵɵtext(36, " Ver todos \u2192 ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(37, "div", 7)(38, "button", 11);
            i0.ɵɵlistener("click", function Home_Template_button_click_38_listener() { i0.ɵɵrestoreView(_r1); const ofertasCarousel_r7 = i0.ɵɵreference(41); return i0.ɵɵresetView(ctx.scrollLeft(ofertasCarousel_r7)); });
            i0.ɵɵtext(39, " \u2039 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "div", 9, 2);
            i0.ɵɵconditionalCreate(42, Home_Conditional_42_Template, 2, 0)(43, Home_Conditional_43_Template, 2, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "button", 10);
            i0.ɵɵlistener("click", function Home_Template_button_click_44_listener() { i0.ɵɵrestoreView(_r1); const ofertasCarousel_r7 = i0.ɵɵreference(41); return i0.ɵɵresetView(ctx.scrollRight(ofertasCarousel_r7)); });
            i0.ɵɵtext(45, " \u203A ");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(12);
            i0.ɵɵconditional(ctx.loading ? 12 : 13);
            i0.ɵɵadvance(15);
            i0.ɵɵconditional(ctx.loading ? 27 : 28);
            i0.ɵɵadvance(15);
            i0.ɵɵconditional(ctx.loading ? 42 : 43);
        } }, dependencies: [Card, LoadingCard, CardMotel], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Home, [{
        type: Component,
        args: [{ selector: 'app-home', standalone: true, imports: [Card, LoadingCard, CardMotel], template: "<div class=\"w-full px-4 sm:px-6 lg:px-8 lg:max-w-1400px lg:mx-auto flex flex-col gap-20 mt-12 pb-24\">\n\n  <!-- \u2500\u2500 Moteles Cercanos \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <section>\n    <div class=\"flex items-center justify-between mb-5\">\n      <h3 class=\"text-xl sm:text-2xl font-bold\">Moteles m\u00E1s cercanos</h3>\n      <a (click)=\"goToExplore()\"\n        class=\"text-sm text-red-400 hover:text-red-300 transition cursor-pointer hidden sm:block\">\n        Ver todos \u2192\n      </a>\n    </div>\n\n    <div class=\"relative group\">\n\n      <!-- Flecha izquierda \u2014 solo desktop -->\n      <button\n        (click)=\"scrollLeft(nearbyMotelsCarousel)\"\n        class=\"hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20\n               w-12 h-12 items-center justify-center rounded-full\n               bg-black/70 border border-white/20 text-white text-xl\n               opacity-0 group-hover:opacity-100 hover:bg-black/90\n               transition-all duration-200 cursor-pointer shadow-lg\">\n        \u2039\n      </button>\n\n      <div\n        #nearbyMotelsCarousel\n        class=\"flex gap-4 overflow-x-auto scroll-smooth\n               scrollbar-hide pb-2\n               snap-x snap-mandatory\">\n        @if (loading) {\n          @for (_ of skeletonItems; track $index) {\n            <div class=\"snap-start shrink-0\">\n              <app-loading-card></app-loading-card>\n            </div>\n          }\n        } @else {\n          @for (motel of motelesCercanos; track motel.id) {\n            <div class=\"snap-start shrink-0\">\n              <app-card-motel [motel]=\"motel\"></app-card-motel>\n            </div>\n          }\n        }\n      </div>\n\n      <!-- Flecha derecha \u2014 solo desktop -->\n      <button\n        (click)=\"scrollRight(nearbyMotelsCarousel)\"\n        class=\"hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20\n               w-10 h-10 items-center justify-center rounded-full\n               bg-black/70 border border-white/20 text-white text-xl\n               opacity-0 group-hover:opacity-100 hover:bg-black/90\n               transition-all duration-200 cursor-pointer shadow-lg\">\n        \u203A\n      </button>\n\n    </div>\n  </section>\n\n  <!-- \u2500\u2500 Destinos Populares \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <section>\n    <div class=\"flex items-center justify-between mb-5\">\n      <h3 class=\"text-xl sm:text-2xl font-bold\">Destinos Populares</h3>\n      <a (click)=\"goToExplore()\"\n        class=\"text-sm text-red-400 hover:text-red-300 transition cursor-pointer hidden sm:block\">\n        Ver todos \u2192\n      </a>\n    </div>\n\n    <div class=\"relative group\">\n\n      <button\n        (click)=\"scrollLeft(destinosPopularesCarousel)\"\n        class=\"hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20\n               w-10 h-10 items-center justify-center rounded-full\n               bg-black/70 border border-white/20 text-white text-xl\n               opacity-0 group-hover:opacity-100 hover:bg-black/90\n               transition-all duration-200 cursor-pointer shadow-lg\">\n        \u2039\n      </button>\n\n      <div\n        #destinosPopularesCarousel\n        class=\"flex gap-4 overflow-x-auto scroll-smooth\n               scrollbar-hide pb-2\n               snap-x snap-mandatory\">\n        @if (loading) {\n          @for (_ of skeletonItems; track $index) {\n            <div class=\"snap-start shrink-0\">\n              <app-loading-card></app-loading-card>\n            </div>\n          }\n        } @else {\n          @for (destino of destinosPopulares; track destino.id) {\n            <div class=\"snap-start shrink-0\">\n              <app-card [card]=\"destino\"></app-card>\n            </div>\n          }\n        }\n      </div>\n\n      <button\n        (click)=\"scrollRight(destinosPopularesCarousel)\"\n        class=\"hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20\n               w-10 h-10 items-center justify-center rounded-full\n               bg-black/70 border border-white/20 text-white text-xl\n               opacity-0 group-hover:opacity-100 hover:bg-black/90\n               transition-all duration-200 cursor-pointer shadow-lg\">\n        \u203A\n      </button>\n\n    </div>\n  </section>\n\n  <!-- \u2500\u2500 Mejores Ofertas \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <section>\n    <div class=\"flex items-center justify-between mb-5\">\n      <h3 class=\"text-xl sm:text-2xl font-bold\" id=\"offerts\">Mejores ofertas</h3>\n      <a (click)=\"goToExplore()\"\n        class=\"text-sm text-red-400 hover:text-red-300 transition cursor-pointer hidden sm:block\">\n        Ver todos \u2192\n      </a>\n    </div>\n\n    <div class=\"relative group\">\n\n      <button\n        (click)=\"scrollLeft(ofertasCarousel)\"\n        class=\"hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20\n               w-10 h-10 items-center justify-center rounded-full\n               bg-black/70 border border-white/20 text-white text-xl\n               opacity-0 group-hover:opacity-100 hover:bg-black/90\n               transition-all duration-200 cursor-pointer shadow-lg\">\n        \u2039\n      </button>\n\n      <div\n        #ofertasCarousel\n        class=\"flex gap-4 overflow-x-auto scroll-smooth\n               scrollbar-hide pb-2\n               snap-x snap-mandatory\">\n        @if (loading) {\n          @for (_ of skeletonItems; track $index) {\n            <div class=\"snap-start shrink-0\">\n              <app-loading-card></app-loading-card>\n            </div>\n          }\n        } @else {\n          @for (oferta of mejoresOfertas; track oferta.id) {\n            <div class=\"snap-start shrink-0\">\n              <app-card [card]=\"oferta\"></app-card>\n            </div>\n          }\n        }\n      </div>\n\n      <button\n        (click)=\"scrollRight(ofertasCarousel)\"\n        class=\"hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20\n               w-10 h-10 items-center justify-center rounded-full\n               bg-black/70 border border-white/20 text-white text-xl\n               opacity-0 group-hover:opacity-100 hover:bg-black/90\n               transition-all duration-200 cursor-pointer shadow-lg\">\n        \u203A\n      </button>\n\n    </div>\n  </section>\n\n</div>" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Home, { className: "Home", filePath: "src/app/views/home/home.ts", lineNumber: 17 }); })();
