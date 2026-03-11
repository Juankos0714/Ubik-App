import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class Card2 {
    card2 = {
        imagen: '',
        titulo: ''
    };
    ngOnInit() {
        this.cargarDatos();
    }
    cargarDatos() {
        this.card2 = {
            imagen: 'https://res.cloudinary.com/du4tcug9q/image/upload/v1763726311/image-habitation_mmy7ly.png',
            titulo: 'Aniversario especial'
        };
    }
    static ɵfac = function Card2_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Card2)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Card2, selectors: [["app-card-2"]], decls: 5, vars: 3, consts: [[1, "relative", "w-72", "h-40", "m-5", "rounded-lg", "overflow-hidden"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "absolute", "inset-0", "bg-black/40"], [1, "absolute", "bottom-3", "left-3", "text-white", "font-semibold", "text-lg"]], template: function Card2_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0);
            i0.ɵɵdomElement(1, "img", 1)(2, "div", 2);
            i0.ɵɵdomElementStart(3, "h2", 3);
            i0.ɵɵtext(4);
            i0.ɵɵdomElementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵdomProperty("src", ctx.card2.imagen, i0.ɵɵsanitizeUrl)("alt", ctx.card2.titulo);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.card2.titulo, " ");
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Card2, [{
        type: Component,
        args: [{ selector: 'app-card-2', imports: [], template: "<div class=\"relative w-72 h-40 m-5 rounded-lg overflow-hidden\">\n\n  <!-- Imagen -->\n  <img [src]=\"card2.imagen\" [alt]=\"card2.titulo\" class=\"w-full h-full object-cover\"/>\n\n  <!-- Overlay oscuro -->\n  <div class=\"absolute inset-0 bg-black/40\"></div>\n\n  <!-- Texto -->\n  <h2 class=\"absolute bottom-3 left-3 text-white font-semibold text-lg\">\n    {{ card2.titulo }}\n  </h2>\n\n</div>" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Card2, { className: "Card2", filePath: "src/app/components/card-2/card-2.ts", lineNumber: 13 }); })();
