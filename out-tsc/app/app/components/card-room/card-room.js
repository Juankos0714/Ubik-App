import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import * as i0 from "@angular/core";
const _c0 = a0 => [a0, "COP", "symbol-narrow", "1.0-0", "es-CO"];
function CardRoom_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 4)(1, "span", 21);
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Hab. ", ctx_r0.cardHabitacion.number, " ");
} }
function CardRoom_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 5)(1, "span", 22);
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.cardHabitacion.tipo, " ");
} }
function CardRoom_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 6)(1, "span", 23);
    i0.ɵɵtext(2, " por noche ");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "span", 24);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "currency");
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBindV(5, 1, i0.ɵɵpureFunction1(7, _c0, ctx_r0.cardHabitacion.price)), " ");
} }
function CardRoom_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p", 10);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.cardHabitacion.descripcion, " ");
} }
function CardRoom_Conditional_13_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const servicio_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", servicio_r2, " ");
} }
function CardRoom_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 12);
    i0.ɵɵrepeaterCreate(1, CardRoom_Conditional_13_For_2_Template, 2, 1, "span", 25, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.cardHabitacion.servicios);
} }
export class CardRoom {
    cardHabitacion;
    static ɵfac = function CardRoom_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CardRoom)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardRoom, selectors: [["app-card-room"]], inputs: { cardHabitacion: "cardHabitacion" }, decls: 24, vars: 8, consts: [[1, "group", "relative", "flex", "flex-col", "w-72", "rounded-3xl", "overflow-hidden", "bg-zinc-900", "border", "border-white/[0.07]", "shadow-xl", "shadow-black/40", "hover:shadow-2xl", "hover:shadow-red-900/20", "hover:-translate-y-2", "hover:border-white/15", "transition-all", "duration-300", "ease-out", "cursor-pointer"], [1, "relative", "h-44", "overflow-hidden", "shrink-0"], [1, "w-full", "h-full", "object-cover", "group-hover:scale-105", "transition-transform", "duration-700", "ease-out", 3, "src", "alt"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-zinc-900", "via-zinc-900/20", "to-transparent", "group-hover:via-zinc-900/10", "transition-all", "duration-300"], [1, "absolute", "top-3", "left-3", "bg-black/70", "backdrop-blur-md", "border", "border-white/10", "rounded-xl", "px-2.5", "py-1", "shadow-lg"], [1, "absolute", "top-3", "right-3", "bg-red-500/20", "backdrop-blur-md", "border", "border-red-500/30", "rounded-xl", "px-2.5", "py-1", "shadow-lg"], [1, "absolute", "bottom-3", "right-3", "flex", "flex-col", "items-end", "bg-black/70", "backdrop-blur-md", "border", "border-white/10", "rounded-2xl", "px-3", "py-1.5", "shadow-lg"], [1, "flex", "flex-col", "flex-1", "px-4", "py-4", "gap-3"], [1, "flex", "flex-col", "gap-1.5"], [1, "text-white", "font-bold", "text-base", "leading-snug", "line-clamp-1", "tracking-tight"], [1, "text-gray-500", "text-[11px]", "line-clamp-2", "leading-relaxed"], [1, "flex-1"], [1, "flex", "flex-wrap", "gap-1.5"], [1, "h-px", "bg-gradient-to-r", "from-transparent", "via-white/10", "to-transparent"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-2", "bg-white/[0.04]", "border", "border-white/[0.06]", "rounded-xl", "px-2.5", "py-1.5"], [1, "w-1.5", "h-1.5", "rounded-full", "shrink-0", "bg-emerald-400", "shadow-[0_0_6px_theme(colors.emerald.400)]"], [1, "text-[11px]", "font-medium", "text-emerald-400"], [1, "flex", "items-center", "gap-1", "text-[11px]", "font-semibold", "text-red-400", "group-hover:text-red-300", "bg-red-500/10", "group-hover:bg-red-500/20", "border", "border-red-500/20", "group-hover:border-red-400/40", "rounded-xl", "px-3", "py-1.5", "transition-all", "duration-200"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3", "h-3", "group-hover:translate-x-0.5", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M9 5l7 7-7 7"], [1, "text-[10px]", "font-bold", "text-gray-300", "tracking-widest", "uppercase"], [1, "text-[10px]", "font-bold", "text-red-300", "tracking-wider", "uppercase"], [1, "text-[8px]", "font-semibold", "text-gray-400", "uppercase", "tracking-[0.15em]", "leading-none"], [1, "text-sm", "font-bold", "text-white", "leading-tight", "mt-0.5"], [1, "text-[10px]", "font-medium", "text-gray-400", "bg-white/[0.05]", "border", "border-white/[0.07]", "rounded-lg", "px-2", "py-1", "leading-none"]], template: function CardRoom_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵdomElement(2, "img", 2)(3, "div", 3);
            i0.ɵɵconditionalCreate(4, CardRoom_Conditional_4_Template, 3, 1, "div", 4);
            i0.ɵɵconditionalCreate(5, CardRoom_Conditional_5_Template, 3, 1, "div", 5);
            i0.ɵɵconditionalCreate(6, CardRoom_Conditional_6_Template, 6, 9, "div", 6);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(7, "div", 7)(8, "div", 8)(9, "h3", 9);
            i0.ɵɵtext(10);
            i0.ɵɵdomElementEnd();
            i0.ɵɵconditionalCreate(11, CardRoom_Conditional_11_Template, 2, 1, "p", 10);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElement(12, "div", 11);
            i0.ɵɵconditionalCreate(13, CardRoom_Conditional_13_Template, 3, 0, "div", 12);
            i0.ɵɵdomElement(14, "div", 13);
            i0.ɵɵdomElementStart(15, "div", 14)(16, "div", 15);
            i0.ɵɵdomElement(17, "span", 16);
            i0.ɵɵdomElementStart(18, "span", 17);
            i0.ɵɵtext(19, "Disponible");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(20, "span", 18);
            i0.ɵɵtext(21, " Ver hab. ");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(22, "svg", 19);
            i0.ɵɵdomElement(23, "path", 20);
            i0.ɵɵdomElementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵdomProperty("src", ctx.cardHabitacion.imagen, i0.ɵɵsanitizeUrl)("alt", ctx.cardHabitacion.nombre);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.cardHabitacion.number ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.cardHabitacion.tipo ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.cardHabitacion.price ? 6 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.cardHabitacion.nombre, " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.cardHabitacion.descripcion ? 11 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.cardHabitacion.servicios.length ? 13 : -1);
        } }, dependencies: [CurrencyPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardRoom, [{
        type: Component,
        args: [{ selector: 'app-card-room', standalone: true, imports: [CurrencyPipe], template: "<div class=\"group relative flex flex-col w-72 rounded-3xl overflow-hidden\n            bg-zinc-900 border border-white/[0.07]\n            shadow-xl shadow-black/40\n            hover:shadow-2xl hover:shadow-red-900/20\n            hover:-translate-y-2 hover:border-white/15\n            transition-all duration-300 ease-out cursor-pointer\">\n\n  <!-- \u2550\u2550 IMAGEN \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <div class=\"relative h-44 overflow-hidden shrink-0\">\n    <img\n      [src]=\"cardHabitacion.imagen\"\n      [alt]=\"cardHabitacion.nombre\"\n      class=\"w-full h-full object-cover\n             group-hover:scale-105 transition-transform duration-700 ease-out\"\n    />\n    <!-- Gradiente inferior -->\n    <div class=\"absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent\n                group-hover:via-zinc-900/10 transition-all duration-300\"></div>\n\n    <!-- N\u00FAmero de habitaci\u00F3n \u2500\u2500 arriba izquierda -->\n    @if (cardHabitacion.number) {\n      <div class=\"absolute top-3 left-3\n                  bg-black/70 backdrop-blur-md border border-white/10\n                  rounded-xl px-2.5 py-1 shadow-lg\">\n        <span class=\"text-[10px] font-bold text-gray-300 tracking-widest uppercase\">\n          Hab. {{ cardHabitacion.number }}\n        </span>\n      </div>\n    }\n\n    <!-- Tipo de habitaci\u00F3n \u2500\u2500 arriba derecha -->\n    @if (cardHabitacion.tipo) {\n      <div class=\"absolute top-3 right-3\n                  bg-red-500/20 backdrop-blur-md border border-red-500/30\n                  rounded-xl px-2.5 py-1 shadow-lg\">\n        <span class=\"text-[10px] font-bold text-red-300 tracking-wider uppercase\">\n          {{ cardHabitacion.tipo }}\n        </span>\n      </div>\n    }\n\n    <!-- Precio \u2500\u2500 abajo derecha solapado -->\n    @if (cardHabitacion.price) {\n      <div class=\"absolute bottom-3 right-3 flex flex-col items-end\n                  bg-black/70 backdrop-blur-md border border-white/10\n                  rounded-2xl px-3 py-1.5 shadow-lg\">\n        <span class=\"text-[8px] font-semibold text-gray-400 uppercase tracking-[0.15em] leading-none\">\n          por noche\n        </span>\n        <span class=\"text-sm font-bold text-white leading-tight mt-0.5\">\n          {{ cardHabitacion.price | currency:'COP':'symbol-narrow':'1.0-0':'es-CO' }}\n        </span>\n      </div>\n    }\n  </div>\n\n  <!-- \u2550\u2550 CONTENIDO \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <div class=\"flex flex-col flex-1 px-4 py-4 gap-3\">\n\n    <!-- Nombre + descripci\u00F3n -->\n    <div class=\"flex flex-col gap-1.5\">\n      <h3 class=\"text-white font-bold text-base leading-snug line-clamp-1 tracking-tight\">\n        {{ cardHabitacion.nombre }}\n      </h3>\n      @if (cardHabitacion.descripcion) {\n        <p class=\"text-gray-500 text-[11px] line-clamp-2 leading-relaxed\">\n          {{ cardHabitacion.descripcion }}\n        </p>\n      }\n    </div>\n\n    <div class=\"flex-1\"></div>\n\n    <!-- Servicios -->\n    @if (cardHabitacion.servicios.length) {\n      <div class=\"flex flex-wrap gap-1.5\">\n        @for (servicio of cardHabitacion.servicios; track servicio) {\n          <span class=\"text-[10px] font-medium text-gray-400\n                       bg-white/[0.05] border border-white/[0.07]\n                       rounded-lg px-2 py-1 leading-none\">\n            {{ servicio }}\n          </span>\n        }\n      </div>\n    }\n\n    <!-- Divider -->\n    <div class=\"h-px bg-gradient-to-r from-transparent via-white/10 to-transparent\"></div>\n\n    <!-- Footer -->\n    <div class=\"flex items-center justify-between \">\n      <div class=\"flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-xl px-2.5 py-1.5\">\n        <span class=\"w-1.5 h-1.5 rounded-full shrink-0 bg-emerald-400\n                     shadow-[0_0_6px_theme(colors.emerald.400)]\"></span>\n        <span class=\"text-[11px] font-medium text-emerald-400\">Disponible</span>\n      </div>\n      <span class=\"flex items-center gap-1 text-[11px] font-semibold\n                   text-red-400 group-hover:text-red-300\n                   bg-red-500/10 group-hover:bg-red-500/20\n                   border border-red-500/20 group-hover:border-red-400/40\n                   rounded-xl px-3 py-1.5 transition-all duration-200\">\n        Ver hab.\n        <svg class=\"w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200\"\n             fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n          <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2.5\" d=\"M9 5l7 7-7 7\"/>\n        </svg>\n      </span>\n    </div>\n\n  </div>\n</div>" }]
    }], null, { cardHabitacion: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CardRoom, { className: "CardRoom", filePath: "src/app/components/card-room/card-room.ts", lineNumber: 21 }); })();
