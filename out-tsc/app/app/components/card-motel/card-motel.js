import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
const _c0 = a0 => ["/motelProfile", a0];
function CardMotel_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 11);
    i0.ɵɵelement(2, "path", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Verificado ");
    i0.ɵɵelementEnd();
} }
export class CardMotel {
    motel;
    get coverImage() {
        const cover = this.motel.imageUrls.find(img => img.role === 'COVER');
        return cover?.url ?? this.motel.imageUrls[0]?.url ?? '';
    }
    get profileImage() {
        const profile = this.motel.imageUrls.find(img => img.role === 'PROFILE');
        return profile?.url ?? null;
    }
    get formattedMinPrice() {
        if (!this.motel.rooms?.length)
            return null;
        const min = Math.min(...this.motel.rooms.map(r => r.price));
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            maximumFractionDigits: 0,
        }).format(min);
    }
    get availableRoomsCount() {
        return this.motel.rooms?.filter(r => r.isAvailable).length ?? 0;
    }
    get totalRooms() {
        return this.motel.rooms?.length ?? 0;
    }
    static ɵfac = function CardMotel_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CardMotel)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardMotel, selectors: [["app-card-motel"]], inputs: { motel: "motel" }, decls: 13, vars: 9, consts: [[1, "group", "relative", "flex", "items-center", "justify-center", "cursor-pointer", "w-70", "h-70", "rounded-full", "overflow-hidden", "shadow-2xl", "shadow-black/60", "hover:shadow-red-900/40", "hover:scale-105", "transition-all", "duration-500", "ease-out", "ring-2", "ring-white/10", "hover:ring-red-500/40", 3, "routerLink"], [1, "absolute", "inset-0"], [1, "w-full", "h-full", "object-cover", "group-hover:scale-110", "transition-transform", "duration-700", "ease-out", 3, "src", "alt"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-black/80", "via-black/30", "to-black/10"], [1, "absolute", "top-5", "left-1/2", "-translate-x-1/2", "flex", "items-center", "gap-1", "bg-emerald-500/90", "backdrop-blur-sm", "text-white", "text-[9px]", "font-bold", "px-2", "py-0.5", "rounded-full", "tracking-widest", "uppercase", "shadow-lg", "shadow-emerald-900/50", "ring-1", "ring-emerald-400/30"], [1, "absolute", "bottom-0", "left-0", "right-0", "flex", "flex-col", "items-center", "text-center", "px-4", "pb-10", "gap-2"], [1, "text-white", "font-bold", "text-lg", "leading-snug", "line-clamp-1", "tracking-tight", "drop-shadow-lg"], [1, "flex", "items-center", "gap-1", "text-white/70"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-2.5", "h-2.5", "shrink-0", "text-red-400"], ["fill-rule", "evenodd", "d", "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z", "clip-rule", "evenodd"], [1, "text-xs", "line-clamp-1", "drop-shadow-md"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-2.5", "h-2.5"], ["fill-rule", "evenodd", "d", "M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z", "clip-rule", "evenodd"]], template: function CardMotel_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 0)(1, "div", 1);
            i0.ɵɵelement(2, "img", 2)(3, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(4, CardMotel_Conditional_4_Template, 4, 0, "div", 4);
            i0.ɵɵelementStart(5, "div", 5)(6, "h3", 6);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 7);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(9, "svg", 8);
            i0.ɵɵelement(10, "path", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(11, "span", 10);
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(7, _c0, ctx.motel.id));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("src", ctx.profileImage || ctx.coverImage, i0.ɵɵsanitizeUrl)("alt", ctx.motel.name);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.motel.approvalStatus === "APPROVED" ? 4 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.motel.name, " ");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate2(" ", ctx.motel.city, "", ctx.motel.address ? ", " + ctx.motel.address : "", " ");
        } }, dependencies: [RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardMotel, [{
        type: Component,
        args: [{ selector: 'app-card-motel', imports: [RouterLink], template: "<a [routerLink]=\"['/motelProfile', motel.id]\"\n   class=\"group relative flex items-center justify-center cursor-pointer\n          w-70 h-70 rounded-full overflow-hidden\n          shadow-2xl shadow-black/60\n          hover:shadow-red-900/40\n          hover:scale-105\n          transition-all duration-500 ease-out\n          ring-2 ring-white/10 hover:ring-red-500/40\">\n\n  <!-- \u2550\u2550 FONDO: FOTO DE PERFIL \u2550\u2550 -->\n  <div class=\"absolute inset-0\">\n    <img\n      [src]=\"profileImage || coverImage\"\n      [alt]=\"motel.name\"\n      class=\"w-full h-full object-cover\n             group-hover:scale-110 transition-transform duration-700 ease-out\"\n    />\n    <!-- Overlay oscuro degradado desde abajo -->\n    <div class=\"absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10\"></div>\n  </div>\n\n  <!-- \u2550\u2550 BADGE VERIFICADO \u2550\u2550 -->\n  @if (motel.approvalStatus === 'APPROVED') {\n    <div class=\"absolute top-5 left-1/2 -translate-x-1/2\n                flex items-center gap-1\n                bg-emerald-500/90 backdrop-blur-sm text-white\n                text-[9px] font-bold px-2 py-0.5 rounded-full\n                tracking-widest uppercase shadow-lg shadow-emerald-900/50\n                ring-1 ring-emerald-400/30\">\n      <svg class=\"w-2.5 h-2.5\" fill=\"currentColor\" viewBox=\"0 0 20 20\">\n        <path fill-rule=\"evenodd\"\n          d=\"M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z\"\n          clip-rule=\"evenodd\"/>\n      </svg>\n      Verificado\n    </div>\n  }\n\n  <!-- \u2550\u2550 TEXTO: NOMBRE + UBICACI\u00D3N \u2550\u2550 -->\n  <div class=\"absolute bottom-0 left-0 right-0\n              flex flex-col items-center text-center\n              px-4 pb-10 gap-2\">\n\n    <h3 class=\"text-white font-bold text-lg leading-snug line-clamp-1 tracking-tight drop-shadow-lg\">\n      {{ motel.name }}\n    </h3>\n\n    <div class=\"flex items-center gap-1 text-white/70\">\n      <svg class=\"w-2.5 h-2.5 shrink-0 text-red-400\" fill=\"currentColor\" viewBox=\"0 0 20 20\">\n        <path fill-rule=\"evenodd\"\n          d=\"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z\"\n          clip-rule=\"evenodd\"/>\n      </svg>\n      <span class=\"text-xs line-clamp-1 drop-shadow-md\">\n        {{ motel.city }}{{ motel.address ? ', ' + motel.address : '' }}\n      </span>\n    </div>\n\n  </div>\n\n</a>" }]
    }], null, { motel: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CardMotel, { className: "CardMotel", filePath: "src/app/components/card-motel/card-motel.ts", lineNumber: 11 }); })();
