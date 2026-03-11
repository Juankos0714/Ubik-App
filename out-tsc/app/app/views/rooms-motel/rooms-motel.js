import { Component } from '@angular/core';
import { Card } from "../../components/card/card";
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.id;
function RoomsMotel_For_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-card");
} }
export class RoomsMotel /*implements OnInit*/ {
    habitaciones = [];
    static ɵfac = function RoomsMotel_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RoomsMotel /*implements OnInit*/)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RoomsMotel /*implements OnInit*/, selectors: [["app-rooms-motel"]], decls: 11, vars: 1, consts: [[1, "container", "mx-auto", "p-4"], [1, "text-white", "text-2xl", "mb-6", "text-center"], [1, "grid", "grid-cols-2", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "flex", "flex-col", "items-center", "justify-center", "border-2", "border-dashed", "border-gray-400", "rounded-xl", "h-70", "cursor-pointer", "w-45", 3, "routerLink"], [1, "text-5xl", "text-gray-400"], [1, "text-gray-300", "mt-2", "text-sm"]], template: function RoomsMotel_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
            i0.ɵɵtext(2, "Habitaciones del Motel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "span", 4);
            i0.ɵɵtext(6, "+");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p", 5);
            i0.ɵɵtext(8, " Agregar habitaci\u00F3n ");
            i0.ɵɵelementEnd()();
            i0.ɵɵrepeaterCreate(9, RoomsMotel_For_10_Template, 1, 0, "app-card", null, _forTrack0);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("routerLink", "/");
            i0.ɵɵadvance(5);
            i0.ɵɵrepeater(ctx.habitaciones);
        } }, dependencies: [Card, RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RoomsMotel /*implements OnInit*/, [{
        type: Component,
        args: [{ selector: 'app-rooms-motel', standalone: true, imports: [Card, RouterLink], template: "<div class=\"container mx-auto p-4\">\n  <h1 class=\"text-white text-2xl mb-6 text-center\">Habitaciones del Motel</h1>\n\n  <div class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6\">\n\n    <!-- CARD AGREGAR HABITACI\u00D3N -->\n    <div\n      class=\"flex flex-col items-center justify-center\n             border-2 border-dashed border-gray-400\n             rounded-xl h-70 cursor-pointer w-45\"\n      [routerLink]=\"'/'\"\n    >\n      <span class=\"text-5xl text-gray-400\">+</span>\n      <p class=\"text-gray-300 mt-2 text-sm\">\n        Agregar habitaci\u00F3n\n      </p>\n    </div>\n\n    <!-- CARDS DE HABITACIONES -->\n\n    <!-- Las comente porque me esta arrojando error, segun tengo entenndido esto auun no esta xreado o no hay una vista concretaa ELIMINAR COMENTARIO CUANDO ESTE COMPLETA LA VISTA \u26A0\uFE0F -->\n\n     @for (hab of habitaciones; track hab.id) {\n      <app-card\n        \n      >\n      </app-card>\n    } \n\n\n    <!-- class=\"w-43 text-base\"\n        [card]=\"hab\"\n        [textButton1]=\"'Editar'\"\n        [textButton2]=\"'Eliminar'\"\n        [showDescription]=\"false\"    -->\n\n  </div>\n</div>" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RoomsMotel /*implements OnInit*/, { className: "RoomsMotel", filePath: "src/app/views/rooms-motel/rooms-motel.ts", lineNumber: 14 }); })();
