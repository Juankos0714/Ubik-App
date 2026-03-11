import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs/operators';
import { Inputcomponent } from '../../components/input/input';
import { Button01 } from '../../components/button-01/button-01';
import { MotelService } from '../../core/services/motel.service';
import * as i0 from "@angular/core";
function EditProfileMotel_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
    i0.ɵɵelement(2, "img", 2)(3, "div", 3);
    i0.ɵɵelementStart(4, "button", 4);
    i0.ɵɵtext(5, " + ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 5)(7, "div", 6);
    i0.ɵɵelement(8, "img", 7);
    i0.ɵɵelementStart(9, "button", 8);
    i0.ɵɵtext(10, " + ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(11, "div", 9)(12, "section")(13, "h2", 10);
    i0.ɵɵtext(14, " Nombre del establecimiento ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(15, "app-input", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "section")(17, "h2", 10);
    i0.ɵɵtext(18, " Ubicaci\u00F3n ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(19, "app-input", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "section")(21, "h2", 10);
    i0.ɵɵtext(22, " Direcci\u00F3n ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(23, "app-input", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "section")(25, "h2", 10);
    i0.ɵɵtext(26, " Descripci\u00F3n ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(27, "label", 14)(28, "textarea", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "app-button-01", 16);
    i0.ɵɵlistener("click", function EditProfileMotel_Conditional_0_Template_app_button_01_click_29_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveProfile()); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    i0.ɵɵadvance(29);
    i0.ɵɵproperty("text", "Guardar cambios");
} }
export class EditProfileMotel {
    motelService = inject(MotelService);
    profile;
    loading = false;
    error = null;
    success = false;
    ngOnInit() {
        this.loadProfile();
    }
    loadProfile() {
        this.loading = true;
        this.error = null;
        this.motelService.getProfile()
            .pipe(finalize(() => (this.loading = false)))
            .subscribe({
            next: (data) => {
                this.profile = structuredClone(data);
            },
            error: (err) => {
                console.error('Error cargando perfil', err);
                this.error = err?.error?.message ?? 'No se pudo cargar el perfil';
            },
        });
    }
    saveProfile() {
        this.loading = true;
        this.success = false;
        this.error = null;
        const id = this.profile?.id;
        if (!id) {
            this.error = 'No se encontró el id del motel';
            this.loading = false;
            return;
        }
        // Construye SOLO lo editable/permitido por tu backend
        const payload = {
            name: this.profile.name,
            address: this.profile.address,
            city: this.profile.city,
            phoneNumber: this.profile.phoneNumber ?? null,
            description: this.profile.description ?? null,
            latitude: this.profile.latitude ?? null,
            longitude: this.profile.longitude ?? null,
            ownerDocumentType: this.profile.ownerDocumentType,
            ownerDocumentNumber: this.profile.ownerDocumentNumber,
            ownerFullName: this.profile.ownerFullName,
            legalRepresentativeName: this.profile.legalRepresentativeName ?? null,
        };
        this.motelService.updateMotel(id, payload)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe({
            next: (updated) => {
                this.profile = structuredClone(updated);
                this.success = true;
            },
            error: (err) => {
                console.error('Error guardando perfil', err);
                this.error = err?.error?.message ?? 'No se pudo guardar el perfil';
            },
        });
    }
    static ɵfac = function EditProfileMotel_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EditProfileMotel)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EditProfileMotel, selectors: [["app-edit-profile-motel"]], decls: 1, vars: 1, consts: [[1, "min-h-screen", "bg-[#1a0508]", "text-white"], [1, "relative", "h-56", "w-full"], ["alt", "Cover motel", 1, "h-full", "w-full", "object-cover", 3, "src"], [1, "absolute", "top-4", "left-4", "text-xl", "font-bold", "tracking-wide"], [1, "absolute", "top-4", "right-4", "bg-white", "text-black", "rounded-full", "w-10", "h-10", "flex", "items-center", "justify-center", "shadow"], [1, "absolute", "-bottom-12", "left-1/2", "-translate-x-1/2"], [1, "relative", "w-24", "h-24", "rounded-full", "border-4", "border-[#1a0508]"], ["alt", "Logo", 1, "w-full", "h-full", "rounded-full", "object-cover", 3, "src"], [1, "absolute", "inset-0", "bg-black/40", "rounded-full", "flex", "items-center", "justify-center", "text-2xl"], [1, "px-6", "pt-20", "space-y-6"], [1, "text-sm", "font-semibold", "mb-2", "uppercase", "opacity-80"], ["placeholder", "Nombre del motel"], ["placeholder", "Ciudad, Departamento"], ["placeholder", "Direcci\u00F3n exacta"], ["for", "textField"], ["id", "textField", "title", "notitle", 1, "w-full", "min-h-[120px]", "rounded-xl", "bg-black/40", "px-4", "py-3", "text-sm", "text-white", "outline-none", "focus:ring-2", "focus:ring-red-500"], [1, "w-full", "mt-4", 3, "click", "text"]], template: function EditProfileMotel_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, EditProfileMotel_Conditional_0_Template, 30, 1, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.profile ? 0 : -1);
        } }, dependencies: [CommonModule, Inputcomponent, Button01], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EditProfileMotel, [{
        type: Component,
        args: [{ selector: 'app-edit-profile-motel', standalone: true, imports: [CommonModule, Inputcomponent, Button01], template: "@if (profile) {\n  <div class=\"min-h-screen bg-[#1a0508] text-white\">\n    <!-- HEADER / COVER -->\n    <div class=\"relative h-56 w-full\">\n      <img\n        [src]=\"\"\n        alt=\"Cover motel\"\n        class=\"h-full w-full object-cover\"\n      />\n\n      <!-- Nombre -->\n      <div class=\"absolute top-4 left-4 text-xl font-bold tracking-wide\">\n        \n      </div>\n\n      <!-- Add cover -->\n      <button\n        class=\"absolute top-4 right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow\"\n      >\n        +\n      </button>\n\n      <!-- Avatar -->\n      <div class=\"absolute -bottom-12 left-1/2 -translate-x-1/2\">\n        <div class=\"relative w-24 h-24 rounded-full border-4 border-[#1a0508]\">\n          <img\n            [src]=\"\"\n            alt=\"Logo\"\n            class=\"w-full h-full rounded-full object-cover\"\n          />\n          <button\n            class=\"absolute inset-0 bg-black/40 rounded-full flex items-center justify-center text-2xl\"\n          >\n            +\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <!-- FORM -->\n    <div class=\"px-6 pt-20 space-y-6\">\n      <!-- Nombre -->\n      <section>\n        <h2 class=\"text-sm font-semibold mb-2 uppercase opacity-80\">\n          Nombre del establecimiento\n        </h2>\n        <app-input\n          placeholder=\"Nombre del motel\"\n        />\n      </section>\n\n      <!-- Ubicaci\u00F3n -->\n      <section>\n        <h2 class=\"text-sm font-semibold mb-2 uppercase opacity-80\">\n          Ubicaci\u00F3n\n        </h2>\n        <app-input\n          placeholder=\"Ciudad, Departamento\"\n        />\n      </section>\n\n      <!-- Direcci\u00F3n -->\n      <section>\n        <h2 class=\"text-sm font-semibold mb-2 uppercase opacity-80\">\n          Direcci\u00F3n\n        </h2>\n        <app-input\n          placeholder=\"Direcci\u00F3n exacta\"\n        />\n      </section>\n\n      <!-- Descripci\u00F3n -->\n      <section>\n\n        <h2 class=\"text-sm font-semibold mb-2 uppercase opacity-80\">\n          Descripci\u00F3n\n        </h2>\n\n        <label for=\"textField\"></label>\n        <textarea class=\"w-full min-h-[120px] rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-red-500\" id=\"textField\"\n        title=\"notitle\"></textarea>\n\n      </section>\n\n      <!-- Guardar -->\n        <app-button-01\n            [text]=\"'Guardar cambios'\"\n            class=\"w-full mt-4\"\n            (click)=\"saveProfile()\">\n        </app-button-01>\n    </div>\n  </div>\n}" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EditProfileMotel, { className: "EditProfileMotel", filePath: "src/app/views/edit-profile-motel/edit-profile-motel.ts", lineNumber: 17 }); })();
