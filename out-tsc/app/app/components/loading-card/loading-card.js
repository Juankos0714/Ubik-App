import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class LoadingCard {
    static ɵfac = function LoadingCard_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoadingCard)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoadingCard, selectors: [["app-loading-card"]], decls: 10, vars: 0, consts: [[1, "shrink-0", "w-60", "sm:w-64", "md:w-72", "bg-[#1e2128]", "rounded-2xl", "overflow-hidden", "shadow-lg", "animate-pulse"], [1, "w-full", "h-40", "bg-white/10"], [1, "p-4", "flex", "flex-col", "gap-3"], [1, "h-5", "w-3/4", "bg-white/10", "rounded"], [1, "flex", "flex-col", "gap-2"], [1, "h-3", "w-full", "bg-white/10", "rounded"], [1, "h-3", "w-5/6", "bg-white/10", "rounded"], [1, "flex", "justify-between", "gap-2", "mt-2"], [1, "h-10", "flex-1", "bg-white/10", "rounded-lg"]], template: function LoadingCard_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0);
            i0.ɵɵdomElement(1, "div", 1);
            i0.ɵɵdomElementStart(2, "div", 2);
            i0.ɵɵdomElement(3, "div", 3);
            i0.ɵɵdomElementStart(4, "div", 4);
            i0.ɵɵdomElement(5, "div", 5)(6, "div", 6);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(7, "div", 7);
            i0.ɵɵdomElement(8, "div", 8)(9, "div", 8);
            i0.ɵɵdomElementEnd()()();
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingCard, [{
        type: Component,
        args: [{ selector: 'app-loading-card', imports: [], template: "<div class=\"shrink-0 w-60 sm:w-64 md:w-72 bg-[#1e2128] rounded-2xl overflow-hidden shadow-lg animate-pulse\">\n  \n  <!-- Imagen -->\n  <div class=\"w-full h-40 bg-white/10\"></div>\n\n  <div class=\"p-4 flex flex-col gap-3\">\n\n    <!-- T\u00EDtulo -->\n    <div class=\"h-5 w-3/4 bg-white/10 rounded\"></div>\n\n    <!-- Descripci\u00F3n (opcional visualmente) -->\n    <div class=\"flex flex-col gap-2\">\n      <div class=\"h-3 w-full bg-white/10 rounded\"></div>\n      <div class=\"h-3 w-5/6 bg-white/10 rounded\"></div>\n    </div>\n\n    <!-- Botones -->\n    <div class=\"flex justify-between gap-2 mt-2\">\n      <div class=\"h-10 flex-1 bg-white/10 rounded-lg\"></div>\n      <div class=\"h-10 flex-1 bg-white/10 rounded-lg\"></div>\n    </div>\n\n  </div>\n</div>" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoadingCard, { className: "LoadingCard", filePath: "src/app/components/loading-card/loading-card.ts", lineNumber: 8 }); })();
