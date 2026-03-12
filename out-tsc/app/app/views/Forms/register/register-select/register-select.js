import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button01 } from '../../../../components/button-01/button-01';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class RegisterSelect {
    router;
    constructor(router) {
        this.router = router;
    }
    // =========================
    // Acciones UI
    // =========================
    onSelectEstablishment() {
        console.log('Seleccionó Propetario de Establecimiento');
        this.router.navigate(['/register-propertyEst']);
    }
    onSelectClient() {
        console.log('Seleccionó Cliente');
        this.router.navigate(['/register-user']);
    }
    // =========================
    // Helpers (opcional)
    // =========================
    openEstablishmentDialog() {
    }
    static ɵfac = function RegisterSelect_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RegisterSelect)(i0.ɵɵdirectiveInject(i1.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RegisterSelect, selectors: [["app-register-select"]], decls: 6, vars: 6, consts: [[1, "h-[80vh]", "flex", "items-center", "justify-center", "px-4"], [1, "w-full", "max-w-4xl", "mb-8", "flex", "flex-col", "md:flex-row", "gap-6", "justify-center"], [1, "flex-1", "flex", "flex-col", "items-stretch", "gap-3"], ["text", "Dueno de Establecimiento", "subtext", "Registrarte como dueno de un establecimiento para gestionar tus moteles y habitaciones", "iconLeft", "fas fa-home", "iconRight", "fas fa-arrow-right", 3, "routerLink", "fullWidth", "tall"], ["text", "Cliente", "subtext", "Registrar un cliente con datos personales y de contacto", "iconLeft", "fas fa-user", "iconRight", "fas fa-arrow-right", 3, "routerLink", "fullWidth", "tall"]], template: function RegisterSelect_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵelement(3, "app-button-01", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵelement(5, "app-button-01", 4);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("routerLink", "/register-owner")("fullWidth", true)("tall", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", "/register-user")("fullWidth", true)("tall", true);
        } }, dependencies: [CommonModule, Button01], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegisterSelect, [{
        type: Component,
        args: [{ selector: 'app-register-select', standalone: true, imports: [CommonModule, Button01], template: "<div class=\"h-[80vh] flex items-center justify-center px-4\">\n  <div class=\"w-full max-w-4xl mb-8 flex flex-col md:flex-row gap-6 justify-center\">\n    <div class=\"flex-1 flex flex-col items-stretch gap-3\">\n      <app-button-01\n        text=\"Dueno de Establecimiento\"\n        subtext=\"Registrarte como dueno de un establecimiento para gestionar tus moteles y habitaciones\"\n        [routerLink]=\"'/register-owner'\"\n        iconLeft=\"fas fa-home\"\n        iconRight=\"fas fa-arrow-right\"\n        [fullWidth]=\"true\"\n        [tall]=\"true\"\n      >\n      </app-button-01>\n    </div>\n\n    <div class=\"flex-1 flex flex-col items-stretch gap-3\">\n      <app-button-01\n        text=\"Cliente\"\n        subtext=\"Registrar un cliente con datos personales y de contacto\"\n        [routerLink]=\"'/register-user'\"\n        iconLeft=\"fas fa-user\"\n        iconRight=\"fas fa-arrow-right\"\n        [fullWidth]=\"true\"\n        [tall]=\"true\"\n      >\n      </app-button-01>\n    </div>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RegisterSelect, { className: "RegisterSelect", filePath: "src/app/views/Forms/register/register-select/register-select.ts", lineNumber: 23 }); })();
