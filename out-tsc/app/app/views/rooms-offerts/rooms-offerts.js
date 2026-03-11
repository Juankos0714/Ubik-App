import { Component } from '@angular/core';
import { CardOffers } from '../../components/card-offers/card-offers'; // El componente
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.id;
function RoomsOfferts_For_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-card-offers", 13);
} if (rf & 2) {
    const hab_r1 = ctx.$implicit;
    i0.ɵɵproperty("card", hab_r1)("textButton1", "Editar")("textButton2", "Eliminar")("showButton01", true)("showButton02", true)("showDescription", false);
} }
export class RoomsOfferts {
    habitacionesOfertas = []; // Usa CardOff para el tipado
    ngOnInit() {
        this.cargarHabitaciones();
    }
    cargarHabitaciones() {
        this.habitacionesOfertas = [
            {
                id: 1,
                image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
                nombre: 'Oferta Suite Premium',
                descripcion: 'Descripción de la oferta'
            }
        ];
    }
    static ɵfac = function RoomsOfferts_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RoomsOfferts)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RoomsOfferts, selectors: [["app-rooms-offerts"]], decls: 17, vars: 0, consts: [[1, "container", "mx-auto", "px-4", "py-8"], [1, "text-white", "text-2xl", "mb-6", "text-center"], [1, "flex", "flex-col", "items-center", "gap-6", "max-w-2xl", "mx-auto"], [1, "w-full", "max-w-sm"], [1, "flex", "bg-gradient-to-br", "from-[#F7E8E3]", "to-[#EDD9D3]", "rounded-xl", "overflow-hidden", "shadow-md", "w-full", "border-2", "border-dashed", "border-[#4A2A2A]", "hover:border-solid", "hover:shadow-lg", "transition-all", "duration-300", "cursor-pointer", "group"], [1, "w-2/3", "flex", "flex-col", "items-center", "justify-center", "p-5"], [1, "w-16", "h-16", "rounded-full", "bg-[#4A2A2A]", "flex", "items-center", "justify-center", "mb-3", "group-hover:scale-110", "transition-transform", "duration-300"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-10", "h-10", "text-[#F7E8E3]"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "text-xl", "font-extrabold", "text-[#4A2A2A]", "uppercase", "text-center"], [1, "w-1/2", "bg-[#4A2A2A]", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-20", "h-20", "text-[#F7E8E3]", "opacity-50"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "w-full", "max-w-sm", "text-base", 3, "card", "textButton1", "textButton2", "showButton01", "showButton02", "showDescription"]], template: function RoomsOfferts_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
            i0.ɵɵtext(2, "Tus Ofertas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(8, "svg", 7);
            i0.ɵɵelement(9, "path", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(10, "h2", 9);
            i0.ɵɵtext(11, " Agregar Oferta ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 10);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(13, "svg", 11);
            i0.ɵɵelement(14, "path", 12);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵrepeaterCreate(15, RoomsOfferts_For_16_Template, 1, 6, "app-card-offers", 13, _forTrack0);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(15);
            i0.ɵɵrepeater(ctx.habitacionesOfertas);
        } }, dependencies: [CardOffers], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RoomsOfferts, [{
        type: Component,
        args: [{ selector: 'app-rooms-offerts', imports: [CardOffers], template: "<div class=\"container mx-auto px-4 py-8\">\n  <!-- T\u00EDtulo de la secci\u00F3n -->\n  <h1 class=\"text-white text-2xl mb-6 text-center\">Tus Ofertas</h1>\n\n  <!-- Columna de cards centrada -->\n  <div class=\"flex flex-col items-center gap-6 max-w-2xl mx-auto\">\n    \n    <!-- Card para agregar nueva oferta -->\n    <div class=\"w-full max-w-sm\">\n      <div class=\"flex bg-gradient-to-br from-[#F7E8E3] to-[#EDD9D3] rounded-xl overflow-hidden shadow-md w-full border-2 border-dashed border-[#4A2A2A] hover:border-solid hover:shadow-lg transition-all duration-300 cursor-pointer group\">\n        \n        <div class=\"w-2/3 flex flex-col items-center justify-center p-5\">\n          <!-- Icono de agregar -->\n          <div class=\"w-16 h-16 rounded-full bg-[#4A2A2A] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300\">\n            <svg class=\"w-10 h-10 text-[#F7E8E3]\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4v16m8-8H4\"/>\n            </svg>\n          </div>\n          \n          <h2 class=\"text-xl font-extrabold text-[#4A2A2A] uppercase text-center\">\n            Agregar Oferta\n          </h2> \n        </div>\n\n        <div class=\"w-1/2 bg-[#4A2A2A] flex items-center justify-center\">\n          <svg class=\"w-20 h-20 text-[#F7E8E3] opacity-50\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\"/>\n          </svg>\n        </div>\n      </div>\n    </div>\n    <!-- Cards de ofertas existentes en columna -->\n    @for (hab of habitacionesOfertas; track hab.id) {\n      <app-card-offers\n        class=\"w-full max-w-sm text-base\"\n        [card]=\"hab\"                 \n        [textButton1]=\"'Editar'\"    \n        [textButton2]=\"'Eliminar'\"   \n        [showButton01]=\"true\"\n        [showButton02]=\"true\"\n        [showDescription]=\"false\">\n      </app-card-offers>\n    }\n    \n  </div>\n</div>" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RoomsOfferts, { className: "RoomsOfferts", filePath: "src/app/views/rooms-offerts/rooms-offerts.ts", lineNumber: 11 }); })();
