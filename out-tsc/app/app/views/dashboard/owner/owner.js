import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class DashboardOwner {
    static ɵfac = function DashboardOwner_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardOwner)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardOwner, selectors: [["app-dashboard-owner"]], decls: 28, vars: 0, consts: [[1, "space-y-16"], [1, "text-2xl", "font-bold", "mb-6"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-6"], [1, "bg-black/60", "backdrop-blur-md", "border", "border-white/10", "rounded-2xl", "p-6"], [1, "text-sm", "text-gray-400"], [1, "text-3xl", "font-bold", "mt-2"], [1, "flex", "flex-wrap", "gap-6"], [1, "px-6", "py-3", "bg-white", "text-black", "rounded-xl", "hover:bg-gray-200", "transition-all", "duration-300", "cursor-pointer"]], template: function DashboardOwner_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0)(1, "section")(2, "h2", 1);
            i0.ɵɵtext(3, "Dashboard");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(4, "div", 2)(5, "div", 3)(6, "p", 4);
            i0.ɵɵtext(7, "Moteles");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(8, "p", 5);
            i0.ɵɵtext(9, "45");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(10, "div", 3)(11, "p", 4);
            i0.ɵɵtext(12, "Reservas Hoy");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(13, "p", 5);
            i0.ɵɵtext(14, "18");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(15, "div", 3)(16, "p", 4);
            i0.ɵɵtext(17, "Ingresos Hoy");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(18, "p", 5);
            i0.ɵɵtext(19, "$850");
            i0.ɵɵdomElementEnd()()()();
            i0.ɵɵdomElementStart(20, "section")(21, "h2", 1);
            i0.ɵɵtext(22, "Acciones");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(23, "div", 6)(24, "button", 7);
            i0.ɵɵtext(25, " Agregar Motel ");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(26, "button", 7);
            i0.ɵɵtext(27, " Ver Reservas ");
            i0.ɵɵdomElementEnd()()()();
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardOwner, [{
        type: Component,
        args: [{ selector: 'app-dashboard-owner', imports: [], template: "<div class=\"space-y-16\">\n\n  <!-- Resumen del Motel -->\n  <section>\n    <h2 class=\"text-2xl font-bold mb-6\">Dashboard</h2>\n\n    <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-6\">\n\n      <div class=\"bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6\">\n        <p class=\"text-sm text-gray-400\">Moteles</p>\n        <p class=\"text-3xl font-bold mt-2\">45</p>\n      </div>\n\n      <div class=\"bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6\">\n        <p class=\"text-sm text-gray-400\">Reservas Hoy</p>\n        <p class=\"text-3xl font-bold mt-2\">18</p>\n      </div>\n\n      <div class=\"bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6\">\n        <p class=\"text-sm text-gray-400\">Ingresos Hoy</p>\n        <p class=\"text-3xl font-bold mt-2\">$850</p>\n      </div>\n\n    </div>\n  </section>\n\n  <!-- Acciones -->\n  <section>\n    <h2 class=\"text-2xl font-bold mb-6\">Acciones</h2>\n\n    <div class=\"flex flex-wrap gap-6\">\n\n      <button class=\"px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition-all duration-300 cursor-pointer\">\n        Agregar Motel\n      </button>\n\n      <button class=\"px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition-all duration-300 cursor-pointer\">\n        Ver Reservas\n      </button>\n\n    </div>\n  </section>\n\n</div>" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardOwner, { className: "DashboardOwner", filePath: "src/app/views/dashboard/owner/owner.ts", lineNumber: 8 }); })();
