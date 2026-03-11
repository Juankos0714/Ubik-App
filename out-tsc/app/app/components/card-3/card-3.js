import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button01 } from '../button-01/button-01';
import { PaymentModal } from '../payment-modal/payment-modal';
import { RouterLink } from "@angular/router";
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/dialog";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
const _c0 = a0 => ["/motelProfile", a0];
function Card3_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.card.isAvailable ? "bg-green-600/80 text-white" : "bg-gray-700 text-white");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.card.isAvailable ? "Disponible" : "No disponible", " ");
} }
function Card3_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, ctx_r0.card.motelId));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.card.motelName, " ");
} }
function Card3_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.card.motelName);
} }
function Card3_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.card.roomType, " ");
} }
function Card3_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "number");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" $ ", i0.ɵɵpipeBind1(2, 1, ctx_r0.card.price), " ");
} }
function Card3_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵtext(1, "Ver habitaciones");
    i0.ɵɵelementEnd();
} }
function Card3_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "app-button-01", 21);
    i0.ɵɵlistener("clicked", function Card3_Conditional_22_Template_app_button_01_clicked_1_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.openPayment()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "app-button-01", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("fullWidth", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("fullWidth", true)("routerLink", i0.ɵɵpureFunction1(3, _c0, ctx_r0.card.motelId));
} }
function Card3_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-button-01", 19);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("fullWidth", true)("routerLink", i0.ɵɵpureFunction1(2, _c0, ctx_r0.card.id));
} }
export class Card3 {
    dialog;
    router;
    card;
    viewLocation = new EventEmitter();
    constructor(dialog, router) {
        this.dialog = dialog;
        this.router = router;
    }
    openPayment() {
        const dialogRef = this.dialog.open(PaymentModal, {
            data: { id: this.card.id }
        });
        dialogRef.closed.subscribe((result) => {
            if (result?.success) {
                this.router.navigate(['/payment/success'], { state: { paymentDetails: result.details } });
            }
        });
    }
    onViewLocation() {
        if (this.card.lat == null || this.card.lng == null) {
            console.warn('El Motel no ha registrado su ubicacion en el mapa');
            return;
        }
        this.viewLocation.emit({
            lat: this.card.lat,
            lng: this.card.lng,
            name: this.card.roomType ?? this.card.motelName,
            id: this.card.id,
        });
    }
    static ɵfac = function Card3_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Card3)(i0.ɵɵdirectiveInject(i1.Dialog), i0.ɵɵdirectiveInject(i2.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Card3, selectors: [["app-card-3"]], inputs: { card: "card" }, outputs: { viewLocation: "viewLocation" }, decls: 26, vars: 10, consts: [[1, "bg-[#14090C]", "rounded-2xl", "overflow-hidden", "border", "border-white/10", "shadow-lg", "hover:shadow-xl", "transition-all", "duration-300", "flex", "flex-col"], [1, "relative", "h-52", "overflow-hidden"], [1, "w-full", "h-full", "object-cover", "hover:scale-105", "transition-transform", "duration-500", 3, "src", "alt"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-black/90", "via-black/40", "to-transparent"], [1, "absolute", "top-3", "left-3", "bg-black/60", "backdrop-blur-md", "px-3", "py-1", "rounded-full", "text-xs", "text-white"], [1, "absolute", "top-3", "right-3", "px-3", "py-1", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "absolute", "bottom-0", "left-0", "w-full", "p-4", "flex", "justify-between", "items-end"], [1, "text-sm", "text-gray-300", "hover:text-gray-100", 3, "routerLink"], [1, "text-sm", "text-gray-300"], [1, "text-lg", "font-semibold", "text-white"], [1, "p-5", "flex", "flex-col", "flex-1"], [1, "text-sm", "text-gray-400", "line-clamp-2", "mb-4"], [1, "mt-auto"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-amber-400", "font-bold", "text-xl"], [1, "text-amber-400/60", "text-sm", "italic"], [1, "text-xs", "text-gray-500"], [1, "flex", "gap-3", "flex-col"], [1, "flex", "gap-2"], ["text", "Ver motel", 3, "fullWidth", "routerLink"], [1, "border", "border-[#8B0000]", "text-[#cc3a3a]", "rounded-lg", "px-4", "py-2", "hover:bg-[#6E2A35]/20", "transition", "w-full", "cursor-pointer", 3, "click"], ["text", "Reservar", 3, "clicked", "fullWidth"], ["text", "Ver m\u00E1s info", 3, "fullWidth", "routerLink"]], template: function Card3_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵelement(2, "img", 2)(3, "div", 3);
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(6, Card3_Conditional_6_Template, 2, 2, "div", 5);
            i0.ɵɵelementStart(7, "div", 6)(8, "div");
            i0.ɵɵconditionalCreate(9, Card3_Conditional_9_Template, 2, 4, "a", 7)(10, Card3_Conditional_10_Template, 2, 1, "span", 8);
            i0.ɵɵconditionalCreate(11, Card3_Conditional_11_Template, 2, 1, "h3", 9);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(12, "div", 10)(13, "p", 11);
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 12)(16, "div", 13);
            i0.ɵɵconditionalCreate(17, Card3_Conditional_17_Template, 3, 3, "span", 14)(18, Card3_Conditional_18_Template, 2, 0, "span", 15);
            i0.ɵɵelementStart(19, "span", 16);
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "div", 17);
            i0.ɵɵconditionalCreate(22, Card3_Conditional_22_Template, 3, 5, "div", 18)(23, Card3_Conditional_23_Template, 1, 4, "app-button-01", 19);
            i0.ɵɵelementStart(24, "button", 20);
            i0.ɵɵlistener("click", function Card3_Template_button_click_24_listener() { return ctx.onViewLocation(); });
            i0.ɵɵtext(25, " Ver ubicaci\u00F3n ");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("src", ctx.card.image, i0.ɵɵsanitizeUrl)("alt", ctx.card.motelName);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.card.location, " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.card.type === "room" ? 6 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.card.type === "room" && ctx.card.motelId ? 9 : 10);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.card.type === "room" ? 11 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.card.descripcion, " ");
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.card.type === "room" ? 17 : 18);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.card.adress, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.card.type === "room" ? 22 : 23);
        } }, dependencies: [CommonModule, i3.NgClass, Button01, RouterLink, i3.DecimalPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Card3, [{
        type: Component,
        args: [{ selector: 'app-card-3', standalone: true, imports: [CommonModule, Button01, RouterLink], template: "<div class=\"bg-[#14090C] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col\">\n\n  <div class=\"relative h-52 overflow-hidden\">\n\n    <!-- Imagen -->\n    <img\n      [src]=\"card.image\"\n      [alt]=\"card.motelName\"\n      class=\"w-full h-full object-cover hover:scale-105 transition-transform duration-500\"\n    />\n\n    <!-- Degradado inferior -->\n    <div class=\"absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent\"></div>\n\n    <!-- Ubicaci\u00F3n (arriba izquierda) -->\n    <div class=\"absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white\">\n      {{ card.location }}\n    </div>\n\n    <!-- \u2705 Badge disponibilidad: solo para rooms -->\n    @if (card.type === 'room') {\n      <div\n        class=\"absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium\"\n        [ngClass]=\"card.isAvailable ? 'bg-green-600/80 text-white' : 'bg-gray-700 text-white'\"\n      >\n        {{ card.isAvailable ? 'Disponible' : 'No disponible' }}\n      </div>\n    }\n\n    <!-- Informaci\u00F3n inferior -->\n    <div class=\"absolute bottom-0 left-0 w-full p-4 flex justify-between items-end\">\n      <div>\n        <!-- \u2705 Link al motel solo si hay motelId (rooms) -->\n        @if (card.type === 'room' && card.motelId) {\n          <a\n            [routerLink]=\"['/motelProfile', card.motelId!]\"\n            class=\"text-sm text-gray-300 hover:text-gray-100\"\n          >\n            {{ card.motelName }}\n          </a>\n        } @else {\n          <span class=\"text-sm text-gray-300\">{{ card.motelName }}</span>\n        }\n\n        <!-- \u2705 roomType solo si es room -->\n        @if (card.type === 'room') {\n          <h3 class=\"text-lg font-semibold text-white\">\n            {{ card.roomType }}\n          </h3>\n        }\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"p-5 flex flex-col flex-1\">\n\n    <p class=\"text-sm text-gray-400 line-clamp-2 mb-4\">\n      {{ card.descripcion }}\n    </p>\n\n    <div class=\"mt-auto\">\n\n      <div class=\"flex items-center justify-between mb-4\">\n        <!-- \u2705 Precio solo si es room -->\n        @if (card.type === 'room') {\n          <span class=\"text-amber-400 font-bold text-xl\">\n            $ {{ card.price | number }}\n          </span>\n        } @else {\n          <span class=\"text-amber-400/60 text-sm italic\">Ver habitaciones</span>\n        }\n\n        <span class=\"text-xs text-gray-500\">\n          {{ card.adress }}\n        </span>\n      </div>\n\n      <div class=\"flex gap-3 flex-col\">\n\n        @if (card.type === 'room') {\n          <!-- Reservar + Ver m\u00E1s info lado a lado -->\n          <div class=\"flex gap-2\">\n            <app-button-01\n              text=\"Reservar\"\n              [fullWidth]=\"true\"\n              (clicked)=\"openPayment()\">\n            </app-button-01>\n\n            <app-button-01\n              text=\"Ver m\u00E1s info\"\n              [fullWidth]=\"true\"\n              [routerLink]=\"['/motelProfile', card.motelId!]\">\n            </app-button-01>\n          </div>\n        } @else {\n          <app-button-01\n            text=\"Ver motel\"\n            [fullWidth]=\"true\"\n            [routerLink]=\"['/motelProfile', card.id]\">\n          </app-button-01>\n        }\n\n        <button\n          (click)=\"onViewLocation()\"\n          class=\"border border-[#8B0000] text-[#cc3a3a] rounded-lg px-4 py-2 hover:bg-[#6E2A35]/20 transition w-full cursor-pointer\">\n          Ver ubicaci\u00F3n\n        </button>\n\n      </div>\n\n    </div>\n  </div>\n</div>" }]
    }], () => [{ type: i1.Dialog }, { type: i2.Router }], { card: [{
            type: Input
        }], viewLocation: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Card3, { className: "Card3", filePath: "src/app/components/card-3/card-3.ts", lineNumber: 39 }); })();
