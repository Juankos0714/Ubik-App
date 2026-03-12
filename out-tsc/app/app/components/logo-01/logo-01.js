import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import * as i0 from "@angular/core";
export class Logo01 {
    static ɵfac = function Logo01_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Logo01)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Logo01, selectors: [["app-logo-01"]], decls: 4, vars: 0, consts: [["routerLink", "/", 1, "flex", "items-center", "gap-2", "text-neutral-50"], ["src", "/assets/logo/favicon.png", "alt", "Ubik", 1, "w-8", "h-8", "sm:w-10", "sm:h-10", "lg:w-12", "lg:h-12"], [1, "font-bold", "text-xl", "sm:text-2xl", "lg:text-4xl"]], template: function Logo01_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 0);
            i0.ɵɵelement(1, "img", 1);
            i0.ɵɵelementStart(2, "h1", 2);
            i0.ɵɵtext(3, " UBIK ");
            i0.ɵɵelementEnd()();
        } }, dependencies: [RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Logo01, [{
        type: Component,
        args: [{ selector: 'app-logo-01', imports: [RouterLink], template: "<a\n  routerLink=\"/\"\n  class=\"flex items-center gap-2 text-neutral-50\"\n>\n  <img\n    src=\"/assets/logo/favicon.png\"\n    alt=\"Ubik\"\n    class=\"w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12\"\n  >\n\n  <h1 class=\"font-bold text-xl sm:text-2xl lg:text-4xl\">\n    UBIK\n  </h1>\n</a>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Logo01, { className: "Logo01", filePath: "src/app/components/logo-01/logo-01.ts", lineNumber: 10 }); })();
