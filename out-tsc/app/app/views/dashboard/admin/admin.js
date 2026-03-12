import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class DashboardAdmin {
    static ɵfac = function DashboardAdmin_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardAdmin)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardAdmin, selectors: [["app-dashboard-admin"]], decls: 39, vars: 0, consts: [[1, "space-y-16"], [1, "text-2xl", "font-bold", "mb-6"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-6"], [1, "bg-black/60", "backdrop-blur-md", "border", "border-white/10", "rounded-2xl", "p-6", "shadow-lg"], [1, "text-sm", "text-gray-400"], [1, "text-3xl", "font-bold", "mt-2"], [1, "grid", "md:grid-cols-2", "gap-8"], [1, "bg-black/60", "backdrop-blur-md", "border", "border-white/10", "rounded-2xl", "p-6"], [1, "text-lg", "font-semibold", "mb-4"], [1, "px-4", "py-2", "bg-white", "text-black", "rounded-lg", "hover:bg-gray-200", "transition"]], template: function DashboardAdmin_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0)(1, "section")(2, "h2", 1);
            i0.ɵɵtext(3, "Estad\u00EDsticas Generales");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(4, "div", 2)(5, "div", 3)(6, "p", 4);
            i0.ɵɵtext(7, "Usuarios");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(8, "p", 5);
            i0.ɵɵtext(9, "1,254");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(10, "div", 3)(11, "p", 4);
            i0.ɵɵtext(12, "Moteles");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(13, "p", 5);
            i0.ɵɵtext(14, "230");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(15, "div", 3)(16, "p", 4);
            i0.ɵɵtext(17, "Reservas");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(18, "p", 5);
            i0.ɵɵtext(19, "3,890");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(20, "div", 3)(21, "p", 4);
            i0.ɵɵtext(22, "Ingresos");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(23, "p", 5);
            i0.ɵɵtext(24, "$24,500");
            i0.ɵɵdomElementEnd()()()();
            i0.ɵɵdomElementStart(25, "section")(26, "h2", 1);
            i0.ɵɵtext(27, "Gesti\u00F3n Global");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(28, "div", 6)(29, "div", 7)(30, "h3", 8);
            i0.ɵɵtext(31, "Usuarios");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(32, "button", 9);
            i0.ɵɵtext(33, " Administrar Usuarios ");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(34, "div", 7)(35, "h3", 8);
            i0.ɵɵtext(36, "Reportes");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(37, "button", 9);
            i0.ɵɵtext(38, " Ver Reportes ");
            i0.ɵɵdomElementEnd()()()()();
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardAdmin, [{
        type: Component,
        args: [{ selector: 'app-dashboard-admin', imports: [], template: "<div class=\"space-y-16\">\n\n  <!-- Estad\u00EDsticas Generales -->\n  <section>\n    <h2 class=\"text-2xl font-bold mb-6\">Estad\u00EDsticas Generales</h2>\n\n    <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6\">\n\n      <div class=\"bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg\">\n        <p class=\"text-sm text-gray-400\">Usuarios</p>\n        <p class=\"text-3xl font-bold mt-2\">1,254</p>\n      </div>\n\n      <div class=\"bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg\">\n        <p class=\"text-sm text-gray-400\">Moteles</p>\n        <p class=\"text-3xl font-bold mt-2\">230</p>\n      </div>\n\n      <div class=\"bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg\">\n        <p class=\"text-sm text-gray-400\">Reservas</p>\n        <p class=\"text-3xl font-bold mt-2\">3,890</p>\n      </div>\n\n      <div class=\"bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg\">\n        <p class=\"text-sm text-gray-400\">Ingresos</p>\n        <p class=\"text-3xl font-bold mt-2\">$24,500</p>\n      </div>\n\n    </div>\n  </section>\n\n  <!-- Gesti\u00F3n -->\n  <section>\n    <h2 class=\"text-2xl font-bold mb-6\">Gesti\u00F3n Global</h2>\n\n    <div class=\"grid md:grid-cols-2 gap-8\">\n\n      <div class=\"bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6\">\n        <h3 class=\"text-lg font-semibold mb-4\">Usuarios</h3>\n        <button class=\"px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition\">\n          Administrar Usuarios\n        </button>\n      </div>\n\n      <div class=\"bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6\">\n        <h3 class=\"text-lg font-semibold mb-4\">Reportes</h3>\n        <button class=\"px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition\">\n          Ver Reportes\n        </button>\n      </div>\n\n    </div>\n  </section>\n\n</div>" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardAdmin, { className: "DashboardAdmin", filePath: "src/app/views/dashboard/admin/admin.ts", lineNumber: 8 }); })();
