import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Button01 } from "../button-01/button-01";
import * as i0 from "@angular/core";
import * as i1 from "../../core/services/list-motel.service";
import * as i2 from "@angular/router";
const _c0 = a0 => ["/motelProfile", a0];
const _forTrack0 = ($index, $item) => $item.id;
function PropertyUserComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1, " Cargando propiedades... ");
    i0.ɵɵelementEnd();
} }
function PropertyUserComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1, " No tienes propiedades a\u00FAn ");
    i0.ɵɵelementEnd();
} }
function PropertyUserComponent_Conditional_7_For_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 19);
    i0.ɵɵlistener("error", function PropertyUserComponent_Conditional_7_For_2_Conditional_1_Template_img_error_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.onImgError($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const property_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", property_r4.mainImageUrl, i0.ɵɵsanitizeUrl)("alt", property_r4.name);
} }
function PropertyUserComponent_Conditional_7_For_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "img", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r2.defaultImg, i0.ɵɵsanitizeUrl);
} }
function PropertyUserComponent_Conditional_7_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵconditionalCreate(1, PropertyUserComponent_Conditional_7_For_2_Conditional_1_Template, 1, 2, "img", 8)(2, PropertyUserComponent_Conditional_7_For_2_Conditional_2_Template, 2, 1, "div", 9);
    i0.ɵɵelementStart(3, "div", 10)(4, "h2", 11);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 12);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 13);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p", 14);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 15);
    i0.ɵɵelement(13, "app-button-01", 16);
    i0.ɵɵelementStart(14, "app-button-01", 17);
    i0.ɵɵlistener("clicked", function PropertyUserComponent_Conditional_7_For_2_Template_app_button_01_clicked_14_listener() { const property_r4 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.deleteProperty(property_r4.id)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "app-button-01", 18);
    i0.ɵɵlistener("clicked", function PropertyUserComponent_Conditional_7_For_2_Template_app_button_01_clicked_15_listener() { const property_r4 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.createRoom(property_r4.id)); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const property_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵconditional(property_r4.mainImageUrl ? 1 : 2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(property_r4.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\uD83D\uDCCD ", property_r4.city);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\uD83C\uDFE0 ", property_r4.address);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(property_r4.description);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(6, _c0, property_r4.id));
} }
function PropertyUserComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵrepeaterCreate(1, PropertyUserComponent_Conditional_7_For_2_Template, 16, 8, "div", 7, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.properties);
} }
export class PropertyUserComponent {
    propertyUserService;
    router;
    properties = [];
    loading = false;
    errorMsg = null;
    // ✅ fallback local
    defaultImg = 'assets/images/motel-placeholder.png';
    isBrowser;
    constructor(propertyUserService, platformId, router) {
        this.propertyUserService = propertyUserService;
        this.router = router;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    ngOnInit() {
        if (this.isBrowser)
            this.loadProperties();
    }
    // ✅ COVER → GALLERY → primera → null
    pickMainImage(images) {
        const imgs = images ?? [];
        const cover = imgs.find(i => (i.role ?? '').toUpperCase() === 'COVER')?.url;
        if (cover)
            return cover;
        const gallery = imgs.find(i => (i.role ?? '').toUpperCase() === 'GALLERY')?.url;
        if (gallery)
            return gallery;
        return imgs[0]?.url ?? null;
    }
    loadProperties() {
        this.loading = true;
        this.errorMsg = null;
        this.propertyUserService
            .getMyMotels()
            .pipe(finalize(() => (this.loading = false)))
            .subscribe({
            next: (data) => {
                this.properties = (data ?? []).map((p) => ({
                    ...p,
                    mainImageUrl: this.pickMainImage(p.imageUrls),
                }));
            },
            error: (err) => {
                console.error('Error cargando moteles:', err);
                this.errorMsg = 'No se pudieron cargar tus moteles. Revisa sesión/token.';
            },
        });
    }
    // ✅ reemplaza la imagen si falla la carga
    onImgError(ev) {
        ev.target.src = this.defaultImg;
    }
    deleteProperty(id) {
        if (!confirm('¿Eliminar esta propiedad?'))
            return;
        this.propertyUserService.deleteProperty(id).subscribe({
            next: () => {
                this.properties = this.properties.filter(p => p.id !== id);
            },
            error: (err) => {
                console.error('Error eliminando motel:', err);
                alert('No se pudo eliminar. Revisa permisos o el endpoint.');
            },
        });
    }
    createRoom(motelId) {
        this.router.navigate(['/create-room'], { queryParams: { motelId } });
    }
    trackById(_index, item) {
        return item.id;
    }
    static ɵfac = function PropertyUserComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PropertyUserComponent)(i0.ɵɵdirectiveInject(i1.PropertyUserService), i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i2.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyUserComponent, selectors: [["app-property-user"]], decls: 8, vars: 1, consts: [[1, "p-6", "text-white"], [1, "flex", "justify-between", "items-center", "mb-6", "gap-4"], [1, "text-3xl", "font-bold"], ["text", "+ Agregar Motel", "routerLink", "/create-motel"], [1, "text-center", "py-16", "opacity-70"], [1, "text-center", "py-16", "opacity-60"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "bg-zinc-900", "rounded-xl", "overflow-hidden", "shadow-lg", "border", "border-white/5"], ["loading", "lazy", 1, "w-full", "h-48", "object-cover", 3, "src", "alt"], [1, "w-full", "h-48", "bg-zinc-800", "flex", "items-center", "justify-center", "text-white/50"], [1, "p-4"], [1, "text-xl", "font-semibold"], [1, "opacity-70", "text-sm", "mb-1"], [1, "opacity-70", "text-sm", "mb-2"], [1, "text-sm", "mb-3", "line-clamp-2", "opacity-90"], [1, "flex", "gap-2", "flex-wrap"], ["text", "P\u00E1gina del Motel", 3, "routerLink"], ["text", "Eliminar", 3, "clicked"], ["text", "Crear Habitaci\u00F3n", 3, "clicked"], ["loading", "lazy", 1, "w-full", "h-48", "object-cover", 3, "error", "src", "alt"], [3, "src"]], template: function PropertyUserComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
            i0.ɵɵtext(3, "Mis Propiedades");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "app-button-01", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(5, PropertyUserComponent_Conditional_5_Template, 2, 0, "div", 4)(6, PropertyUserComponent_Conditional_6_Template, 2, 0, "div", 5)(7, PropertyUserComponent_Conditional_7_Template, 3, 0, "div", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(ctx.loading ? 5 : ctx.properties.length === 0 ? 6 : 7);
        } }, dependencies: [CommonModule, RouterModule, i2.RouterLink, Button01], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyUserComponent, [{
        type: Component,
        args: [{ selector: 'app-property-user', standalone: true, imports: [CommonModule, RouterModule, Button01], template: "<div class=\"p-6 text-white\">\n\n  <!-- Header -->\n  <div class=\"flex justify-between items-center mb-6 gap-4\">\n    <h1 class=\"text-3xl font-bold\">Mis Propiedades</h1>\n\n    <app-button-01\n      text=\"+ Agregar Motel\"\n      routerLink=\"/create-motel\">\n    </app-button-01>\n  </div>\n\n  <!-- Loading / Empty / List -->\n  @if (loading) {\n    <div class=\"text-center py-16 opacity-70\">\n      Cargando propiedades...\n    </div>\n  } @else if (properties.length === 0) {\n    <div class=\"text-center py-16 opacity-60\">\n      No tienes propiedades a\u00FAn\n    </div>\n  } @else {\n    <div class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\">\n\n      @for (property of properties; track property.id) {\n        <div class=\"bg-zinc-900 rounded-xl overflow-hidden shadow-lg border border-white/5\">\n\n          <!-- Imagen -->\n          @if (property.mainImageUrl) {\n            <img\n              [src]=\"property.mainImageUrl\"\n              (error)=\"onImgError($event)\"\n              [alt]=\"property.name\"\n              class=\"w-full h-48 object-cover\"\n              loading=\"lazy\"\n            />\n          } @else {\n            <div class=\"w-full h-48 bg-zinc-800 flex items-center justify-center text-white/50\">\n              <img [src]=\"defaultImg\">\n            </div>\n          }\n\n          <div class=\"p-4\">\n            <h2 class=\"text-xl font-semibold\">{{ property.name }}</h2>\n            <p class=\"opacity-70 text-sm mb-1\">\uD83D\uDCCD {{ property.city }}</p>\n            <p class=\"opacity-70 text-sm mb-2\">\uD83C\uDFE0 {{ property.address }}</p>\n            <p class=\"text-sm mb-3 line-clamp-2 opacity-90\">{{ property.description }}</p>\n\n            <!-- Acciones -->\n            <div class=\"flex gap-2 flex-wrap\">\n\n              <app-button-01\n                text=\"P\u00E1gina del Motel\"\n                [routerLink]=\"['/motelProfile', property.id]\">\n              </app-button-01>\n\n              <app-button-01\n                text=\"Eliminar\"\n                (clicked)=\"deleteProperty(property.id)\">\n              </app-button-01>\n\n              <app-button-01\n                text=\"Crear Habitaci\u00F3n\"\n                (clicked)=\"createRoom(property.id)\">\n              </app-button-01>\n\n            </div>\n          </div>\n        </div>\n      }\n\n    </div>\n  }\n\n</div>" }]
    }], () => [{ type: i1.PropertyUserService }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i2.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PropertyUserComponent, { className: "PropertyUserComponent", filePath: "src/app/components/List-motels/property-user.component.ts", lineNumber: 21 }); })();
