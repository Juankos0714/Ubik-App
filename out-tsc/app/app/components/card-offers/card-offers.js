import { Component, Input } from '@angular/core';
import { Button01 } from '../../components/button-01/button-01';
import { Button02 } from '../../components/button-02/button-02';
import * as i0 from "@angular/core";
function CardOffers_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.card.descripcion, " ");
} }
function CardOffers_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-button-01", 6);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("text", ctx_r0.textButton1);
} }
function CardOffers_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-button-02", 6);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("text", ctx_r0.textButton2);
} }
export class CardOffers {
    card = {
        id: 0,
        image: '',
        nombre: '',
        descripcion: '',
    };
    showDescription = true;
    showButton01 = true;
    showButton02 = false;
    textButton1 = 'Editar';
    textButton2 = 'Eliminar';
    constructor() { }
    static ɵfac = function CardOffers_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CardOffers)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardOffers, selectors: [["app-card-offers"]], inputs: { card: "card", showDescription: "showDescription", showButton01: "showButton01", showButton02: "showButton02", textButton1: "textButton1", textButton2: "textButton2" }, decls: 11, vars: 5, consts: [[1, "w-sm", "h-45", "flex", "flex-col", "gap-6"], [1, "flex", "bg-[#F7E8E3]", "rounded-xl", "overflow-hidden", "shadow-md", "w-full"], [1, "w-2/3", "flex", "flex-col", "justify-center", "p-5"], [1, "text-xl", "font-extrabold", "text-[#4A2A2A]", "uppercase"], [1, "text-sm", "text-[#4A2A2A]", "text-base", "line-clamp-2"], [1, "flex", "gap-3", "mt-4"], [1, "w-30", 3, "text"], [1, "w-1/2"], ["alt", "Oferta", 1, "w-full", "h-full", "object-cover", 3, "src"]], template: function CardOffers_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(5, CardOffers_Conditional_5_Template, 2, 1, "p", 4);
            i0.ɵɵelementStart(6, "div", 5);
            i0.ɵɵconditionalCreate(7, CardOffers_Conditional_7_Template, 1, 1, "app-button-01", 6);
            i0.ɵɵconditionalCreate(8, CardOffers_Conditional_8_Template, 1, 1, "app-button-02", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 7);
            i0.ɵɵelement(10, "img", 8);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.card.nombre, " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showDescription ? 5 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showButton01 ? 7 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showButton02 ? 8 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("src", ctx.card.image, i0.ɵɵsanitizeUrl);
        } }, dependencies: [Button01, Button02], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardOffers, [{
        type: Component,
        args: [{ selector: 'app-card-offers', standalone: true, imports: [Button01, Button02], template: "<div class=\"w-sm h-45 flex flex-col gap-6\">\n  <div class=\"flex bg-[#F7E8E3] rounded-xl overflow-hidden shadow-md w-full\">\n    \n    <div class=\"w-2/3 flex flex-col justify-center p-5\">\n      <h2 class=\"text-xl font-extrabold text-[#4A2A2A] uppercase\">\n        {{ card.nombre }}\n      </h2>\n\n      @if (showDescription) {\n        <p class=\"text-sm text-[#4A2A2A] text-base line-clamp-2\">\n          {{card.descripcion}}\n        </p>\n      }\n\n      <div class=\"flex gap-3 mt-4\">\n        @if (showButton01) {\n          <app-button-01 \n            [text]=\"textButton1\" \n            class=\"w-30\">\n          </app-button-01>\n        }\n\n        @if (showButton02) {\n          <app-button-02 \n            [text]=\"textButton2\" \n            class=\"w-30\">\n          </app-button-02>\n        }\n      </div>\n    </div>\n\n    <div class=\"w-1/2\">\n      <img [src]=\"card.image\" alt=\"Oferta\" class=\"w-full h-full object-cover\"/>\n    </div>\n\n  </div>\n</div>\n" }]
    }], () => [], { card: [{
            type: Input
        }], showDescription: [{
            type: Input
        }], showButton01: [{
            type: Input
        }], showButton02: [{
            type: Input
        }], textButton1: [{
            type: Input
        }], textButton2: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CardOffers, { className: "CardOffers", filePath: "src/app/components/card-offers/card-offers.ts", lineNumber: 18 }); })();
