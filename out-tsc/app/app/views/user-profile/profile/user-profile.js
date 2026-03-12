import { Component, inject } from '@angular/core';
import { UsersService } from '../../../core/services/user.service';
import { Button01 } from "../../../components/button-01/button-01";
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function UserProfile_Conditional_1_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "date");
} if (rf & 2) {
    const profile_r1 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(1, 1, profile_r1.birthDate, "longDate"), " ");
} }
function UserProfile_Conditional_1_Conditional_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " No registrada ");
} }
function UserProfile_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 3);
    i0.ɵɵelement(2, "img", 4)(3, "div", 5);
    i0.ɵɵelementStart(4, "div", 6)(5, "div", 7);
    i0.ɵɵelement(6, "img", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 9)(8, "h1", 10);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p", 11);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(12, "div", 12)(13, "div", 13)(14, "div", 14)(15, "div", 15)(16, "div")(17, "h2", 16);
    i0.ɵɵtext(18, "Informaci\u00F3n");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "p", 17);
    i0.ɵɵtext(20, " Datos de contacto y detalles del usuario. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(21, "app-button-01", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 19)(23, "div", 20)(24, "p", 21);
    i0.ɵɵtext(25, "Email:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "p", 22);
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 20)(29, "p", 21);
    i0.ɵɵtext(30, "Tel\u00E9fono:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "p", 23);
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "div", 20)(34, "p", 21);
    i0.ɵɵtext(35, "Nacimiento:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "p", 23);
    i0.ɵɵconditionalCreate(37, UserProfile_Conditional_1_Conditional_37_Template, 2, 4)(38, UserProfile_Conditional_1_Conditional_38_Template, 1, 0);
    i0.ɵɵelementEnd()()()()()()();
} if (rf & 2) {
    const profile_r1 = ctx;
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("src", "https://ui-avatars.com/api/?name=" + profile_r1.username + "&background=0f172a&color=fff&size=256", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", profile_r1.username, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ID : ", profile_r1.id, " ");
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("text", "Editar Perfil")("routerLink", "/edit-profile");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", profile_r1.email, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", profile_r1.phoneNumber || "No registrado", " ");
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(profile_r1.birthDate ? 37 : 38);
} }
function UserProfile_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 24);
    i0.ɵɵelement(2, "i", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h2", 26);
    i0.ɵɵtext(4, "No hay datos de perfil");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 17);
    i0.ɵɵtext(6, " No pudimos cargar tu perfil. Intenta recargar o vuelve m\u00E1s tarde. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 27)(8, "a", 28);
    i0.ɵɵtext(9, " Reintentar ");
    i0.ɵɵelementEnd()()();
} }
export class UserProfile {
    usersService = inject(UsersService);
    profile$ = this.usersService.profile$;
    loading = true;
    ngOnInit() {
        this.usersService.loadProfile().subscribe({
            next: () => (this.loading = false),
            error: () => (this.loading = false),
        });
    }
    static ɵfac = function UserProfile_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UserProfile)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UserProfile, selectors: [["app-user-profile"]], decls: 4, vars: 3, consts: [[1, "mx-auto", "w-full", "max-w-5xl", "px-4", "py-6"], [1, "overflow-hidden"], [1, "rounded-3xl", "border-black", "bg-linear-to-r", "from-[#6E2A35]", "to-[#A72027]", "p-8", "text-center", "shadow-sm"], [1, "relative", "h-48", "sm:h-56"], ["src", "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1600&q=60", "alt", "Imagen de fondo", 1, "h-full", "w-full", "object-cover", "rounded-2xl"], [1, "absolute", "inset-0", "to-transparent"], [1, "absolute", "-bottom-12", "left-6", "flex", "items-end", "gap-4", "sm:left-8"], [1, "h-27", "w-27", "overflow-hidden", "rounded-full"], ["alt", "Avatar", 1, "h-full", "w-full", "object-cover", 3, "src"], [1, "text-white", "flex", "flex-col", "pb-6"], [1, "text-xl", "font-semibold", "leading-tight", "sm:text-2xl"], [1, "mt-1", "text-sm", "text-white/80"], [1, "px-6", "pb-8", "pt-16", "sm:px-8"], [1, "flex", "flex-col", "gap-6", "lg:flex-row", "lg:items-start", "lg:justify-between"], [1, "flex-1"], [1, "flex", "flex-row", "items-center", "justify-between"], [1, "text-base", "font-semibold", "text-white"], [1, "mt-1", "text-sm", "text-white"], [1, "text-sm", 3, "text", "routerLink"], [1, "mt-5", "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2"], [1, "p-4", "flex", "flex-row", "items-center", "gap-6", "border", "rounded-2xl"], [1, "text-sm", "font-medium", "text-white"], [1, "text-sm", "font-semibold", "text-white", "break-all"], [1, "text-sm", "font-semibold", "text-white"], [1, ""], [1, "fa-regular", "fa-circle-xmark", "fa-2xl", 2, "color", "rgb(255, 255, 255)"], [1, "mt-4", "text-base", "font-semibold", "text-white"], [1, "mt-6", "flex", "justify-center"], ["routerLink", "/profile", 1, "inline-flex", "items-center", "justify-center", "rounded-xl", "border", "border-slate-200", "bg-white", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "shadow-sm", "transition", "hover:bg-slate-50"]], template: function UserProfile_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵconditionalCreate(1, UserProfile_Conditional_1_Template, 39, 8, "div", 1);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵconditionalBranchCreate(3, UserProfile_Conditional_3_Template, 10, 0, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_0_0 = i0.ɵɵpipeBind1(2, 1, ctx.profile$)) ? 1 : 3, tmp_0_0);
        } }, dependencies: [CommonModule, Button01, i1.AsyncPipe, i1.DatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserProfile, [{
        type: Component,
        args: [{ selector: 'app-user-profile', standalone: true, imports: [CommonModule, Button01], template: "<section class=\"mx-auto w-full max-w-5xl px-4 py-6 \">\n  @if (profile$ | async; as profile) {\n    <!-- Cover -->\n    <div class=\"overflow-hidden\">\n      <div class=\"relative h-48 sm:h-56\">\n        <img\n          src=\"https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1600&q=60\"\n          alt=\"Imagen de fondo\"\n          class=\"h-full w-full object-cover  rounded-2xl\"\n        />\n\n        <!-- Overlay -->\n        <div class=\"absolute inset-0 to-transparent\"></div>\n\n        <!-- Actions (top-right) \n        <div class=\"absolute right-4 top-4 flex gap-2\">\n          <app-button-01\n            [text]=\"'Editar Perfil'\"\n            [routerLink]=\"'/edit-profile'\"\n          ></app-button-01>\n        </div>\n        -->\n\n        <!-- Avatar -->\n        <div class=\"absolute -bottom-12 left-6 flex items-end gap-4 sm:left-8\">\n          <div class=\"h-27 w-27 overflow-hidden rounded-full\">\n            <img\n              [src]=\"'https://ui-avatars.com/api/?name=' + profile.username + '&background=0f172a&color=fff&size=256'\"\n              alt=\"Avatar\"\n              class=\"h-full w-full object-cover\"\n            />\n          </div>\n\n          <div class=\" text-white flex flex-col pb-6 \">\n            <h1 class=\"text-xl font-semibold leading-tight sm:text-2xl\">\n              {{ profile.username }}\n            </h1>\n            <p class=\"mt-1 text-sm text-white/80\">\n              ID  : {{ profile.id }}\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <!-- Content -->\n      <div class=\"px-6 pb-8 pt-16 sm:px-8\">\n        <div class=\"flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between\">\n          <!-- Left: Info -->\n          <div class=\"flex-1\">\n\n            <!-- Informacion principal y boton -->\n            <div class=\"flex flex-row items-center justify-between\">\n              <div>\n                <h2 class=\"text-base font-semibold text-white\">Informaci\u00F3n</h2>\n                <p class=\"mt-1 text-sm text-white\">\n                  Datos de contacto y detalles del usuario.\n                </p>\n              </div>\n\n              <app-button-01\n                [text]=\"'Editar Perfil'\"\n                [routerLink]=\"'/edit-profile'\"\n                class=\"text-sm\"\n              ></app-button-01>\n            </div>\n\n            <div class=\"mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2\">\n\n              <!-- Email -->\n              <div class=\"p-4 flex flex-row items-center gap-6 border rounded-2xl\">\n                <p class=\"text-sm font-medium text-white\">Email:</p>\n                <p class=\"text-sm font-semibold text-white break-all\">\n                  {{ profile.email }}\n                </p>\n              </div>\n\n              <!-- Phone -->\n              <div class=\"p-4 flex flex-row items-center gap-6 border rounded-2xl\">\n                <p class=\"text-sm font-medium text-white\">Tel\u00E9fono:</p>\n                <p class=\"text-sm font-semibold text-white\">\n                  {{ profile.phoneNumber || 'No registrado' }}\n                </p>\n              </div>\n\n              <!-- BirthDate -->\n              <div class=\"p-4 flex flex-row items-center gap-6 border rounded-2xl\">\n                <p class=\"text-sm font-medium text-white\">Nacimiento:</p>\n                <p class=\"text-sm font-semibold text-white\">\n                  @if (profile.birthDate) {\n                    {{ profile.birthDate | date:'longDate' }}\n                  } @else {\n                    No registrada\n                  }\n                </p>\n              </div>\n\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  } @else {\n    <!-- Empty state -->\n    <div class=\"rounded-3xl border-black bg-linear-to-r from-[#6E2A35] to-[#A72027] p-8 text-center shadow-sm\">\n      <div class=\"\">\n        <i class=\"fa-regular fa-circle-xmark fa-2xl\" style=\"color: rgb(255, 255, 255);\"></i>\n      </div>\n      <h2 class=\"mt-4 text-base font-semibold text-white\">No hay datos de perfil</h2>\n      <p class=\"mt-1 text-sm text-white\">\n        No pudimos cargar tu perfil. Intenta recargar o vuelve m\u00E1s tarde.\n      </p>\n\n      <div class=\"mt-6 flex justify-center\">\n        <a\n          routerLink=\"/profile\"\n          class=\"inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50\"\n        >\n          Reintentar\n        </a>\n      </div>\n    </div>\n  }\n</section>" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(UserProfile, { className: "UserProfile", filePath: "src/app/views/user-profile/profile/user-profile.ts", lineNumber: 14 }); })();
