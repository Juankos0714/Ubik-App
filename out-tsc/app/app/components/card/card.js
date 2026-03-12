import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Button01 } from "../button-01/button-01";
import { Button02 } from "../button-02/button-02";
import * as i0 from "@angular/core";
const _c0 = a0 => ({ id: a0 });
const _c1 = a0 => [a0, "COP", "symbol-narrow", "1.0-0", "es-CO"];
function Card_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "span", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 17);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "currency");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r0.card.isAvailable ? "text-emerald-400" : "text-gray-600");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.card.isAvailable ? "Disponible" : "Ocupada", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBindV(5, 4, i0.ɵɵpureFunction1(10, _c1, ctx_r0.card.price)), " ");
} }
function Card_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 18);
    i0.ɵɵelement(2, "path", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span", 20);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.card.motelName);
} }
function Card_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.card.description, " ");
} }
export class Card {
    card;
    showDescription = true;
    static ɵfac = function Card_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Card)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Card, selectors: [["app-card"]], inputs: { card: "card" }, decls: 17, vars: 11, consts: [[1, "group", "relative", "flex", "flex-col", "w-72", "rounded-3xl", "overflow-hidden", "bg-zinc-900", "border", "border-white/[0.07]", "shadow-xl", "shadow-black/40", "hover:shadow-2xl", "hover:shadow-red-900/20", "hover:-translate-y-2", "hover:border-white/15", "transition-all", "duration-300", "ease-out", "min-h-80", "sm:min-h-[340px]", "md:min-h-[360px]", "max-h-80", "sm:max-h-[340px]", "md:max-h-[360px]"], [1, "relative", "h-44", "overflow-hidden", "shrink-0"], [1, "w-full", "h-full", "object-cover", "group-hover:scale-105", "transition-transform", "duration-700", "ease-out", 3, "src", "alt"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-zinc-900", "via-zinc-900/20", "to-transparent", "group-hover:via-zinc-900/10", "transition-all", "duration-300"], [1, "absolute", "top-3", "left-3", "bg-black/70", "backdrop-blur-md", "border", "border-white/10", "rounded-xl", "px-2.5", "py-1", "shadow-lg"], [1, "text-[10px]", "font-bold", "text-gray-300", "tracking-widest", "uppercase"], [1, "absolute", "top-3", "right-3", "flex", "flex-col", "items-end", "bg-black/70", "backdrop-blur-md", "border", "border-white/10", "rounded-2xl", "px-3", "py-1.5", "shadow-lg"], [1, "absolute", "bottom-3", "left-3", "flex", "items-center", "gap-1.5"], [1, "flex", "flex-col", "flex-1", "px-4", "py-4", "gap-3"], [1, "text-gray-500", "text-xs", "line-clamp-2", "leading-relaxed"], [1, "flex-1"], [1, "h-px", "bg-gradient-to-r", "from-transparent", "via-white/10", "to-transparent"], [1, "flex", "items-center", "justify-between", "gap-1", "flex-col"], [1, "flex", "gap-8"], ["text", "Reservar", "action", "reservar", 3, "id"], ["text", "Ver m\u00E1s", 3, "routerLink", "queryParams"], [1, "text-[11px]", "font-medium"], [1, "text-sm", "font-bold", "text-white", "leading-tight", "mt-0.5"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-3", "h-3", "shrink-0", "text-red-400"], ["fill-rule", "evenodd", "d", "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z", "clip-rule", "evenodd"], [1, "text-[10px]", "text-gray-300", "font-medium", "drop-shadow", "line-clamp-1"]], template: function Card_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵelement(2, "img", 2)(3, "div", 3);
            i0.ɵɵelementStart(4, "div", 4)(5, "span", 5);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(7, Card_Conditional_7_Template, 6, 12, "div", 6);
            i0.ɵɵconditionalCreate(8, Card_Conditional_8_Template, 5, 1, "div", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 8);
            i0.ɵɵconditionalCreate(10, Card_Conditional_10_Template, 2, 1, "p", 9);
            i0.ɵɵelement(11, "div", 10)(12, "div", 11);
            i0.ɵɵelementStart(13, "div", 12)(14, "div", 13);
            i0.ɵɵelement(15, "app-button-01", 14)(16, "app-button-02", 15);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("src", ctx.card.imageUrls.length ? ctx.card.imageUrls[0] : "./assets/images/ubikLogo.jpg", i0.ɵɵsanitizeUrl)("alt", ctx.card.roomType);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.card.roomType, " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.card.price ? 7 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.card.motelName ? 8 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showDescription && ctx.card.description ? 10 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("id", ctx.card.id);
            i0.ɵɵadvance();
            i0.ɵɵproperty("routerLink", "/roominfo")("queryParams", i0.ɵɵpureFunction1(9, _c0, ctx.card.id));
        } }, dependencies: [Button01, Button02, CurrencyPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Card, [{
        type: Component,
        args: [{ selector: 'app-card', standalone: true, imports: [Button01, Button02, CurrencyPipe], template: "<div class=\"group relative flex flex-col w-72 rounded-3xl overflow-hidden\n            bg-zinc-900 border border-white/[0.07]\n            shadow-xl shadow-black/40\n            hover:shadow-2xl hover:shadow-red-900/20\n            hover:-translate-y-2 hover:border-white/15\n            transition-all duration-300 ease-out\n            min-h-80 sm:min-h-[340px] md:min-h-[360px]\n            max-h-80 sm:max-h-[340px] md:max-h-[360px]\">\n\n  <!-- \u2550\u2550 IMAGEN \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <div class=\"relative h-44 overflow-hidden shrink-0\">\n    <img\n      [src]=\"card.imageUrls.length ? card.imageUrls[0] : './assets/images/ubikLogo.jpg'\"\n      [alt]=\"card.roomType\"\n      class=\"w-full h-full object-cover\n             group-hover:scale-105 transition-transform duration-700 ease-out\"\n    />\n    <div class=\"absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent\n                group-hover:via-zinc-900/10 transition-all duration-300\"></div>\n\n    <!-- Tipo de habitaci\u00F3n \u2500\u2500 arriba izquierda -->\n    <div class=\"absolute top-3 left-3\n                bg-black/70 backdrop-blur-md border border-white/10\n                rounded-xl px-2.5 py-1 shadow-lg\">\n      <span class=\"text-[10px] font-bold text-gray-300 tracking-widest uppercase\">\n        {{ card.roomType }}\n      </span>\n    </div>\n\n    <!-- Precio \u2500\u2500 arriba derecha -->\n    @if (card.price) {\n      <div class=\"absolute top-3 right-3 flex flex-col items-end\n                  bg-black/70 backdrop-blur-md border border-white/10\n                  rounded-2xl px-3 py-1.5 shadow-lg\">\n          <span class=\"text-[11px] font-medium\"\n                [class]=\"card.isAvailable ? 'text-emerald-400' : 'text-gray-600'\">\n            {{ card.isAvailable ? 'Disponible' : 'Ocupada' }}\n          </span>\n        <span class=\"text-sm font-bold text-white leading-tight mt-0.5\">\n          {{ card.price | currency:'COP':'symbol-narrow':'1.0-0':'es-CO' }}\n        </span>\n      </div>\n    }\n\n    <!-- Motel \u2500\u2500 abajo izquierda -->\n    @if (card.motelName) {\n      <div class=\"absolute bottom-3 left-3 flex items-center gap-1.5\">\n        <svg class=\"w-3 h-3 shrink-0 text-red-400\" fill=\"currentColor\" viewBox=\"0 0 20 20\">\n          <path fill-rule=\"evenodd\"\n            d=\"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z\"\n            clip-rule=\"evenodd\"/>\n        </svg>\n        <span class=\"text-[10px] text-gray-300 font-medium drop-shadow line-clamp-1\">{{ card.motelName }}</span>\n      </div>\n    }\n  </div>\n\n  <!-- \u2550\u2550 CONTENIDO \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <div class=\"flex flex-col flex-1 px-4 py-4 gap-3\">\n\n    <!-- Descripci\u00F3n -->\n    @if (showDescription && card.description) {\n      <p class=\"text-gray-500 text-xs line-clamp-2 leading-relaxed\">\n        {{ card.description }}\n      </p>\n    }\n\n    <div class=\"flex-1\"></div>\n\n    <!-- Divider -->\n    <div class=\"h-px bg-gradient-to-r from-transparent via-white/10 to-transparent\"></div>\n\n    <!-- Footer: disponibilidad + botones -->\n    <div class=\"flex items-center justify-between gap-1 flex-col\">\n\n\n      <!-- Botones -->\n      <div class=\"flex gap-8\">\n        <app-button-01\n          text=\"Reservar\"\n          [id]=\"card.id\"\n          action=\"reservar\"\n        ></app-button-01>\n        <app-button-02\n          text=\"Ver m\u00E1s\"\n          [routerLink]=\"'/roominfo'\"\n          [queryParams]=\"{ id: card.id }\"\n        ></app-button-02>\n      </div>\n\n    </div>\n\n  </div>\n</div>" }]
    }], null, { card: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Card, { className: "Card", filePath: "src/app/components/card/card.ts", lineNumber: 13 }); })();
