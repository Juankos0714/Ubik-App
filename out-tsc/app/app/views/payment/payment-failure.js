import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class PaymentFailureComponent {
    static ɵfac = function PaymentFailureComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaymentFailureComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaymentFailureComponent, selectors: [["app-payment-failure"]], decls: 14, vars: 0, consts: [[1, "flex", "flex-col", "items-center", "justify-center", "min-h-screen", "bg-gray-100", "p-4"], [1, "bg-white", "p-8", "rounded-lg", "shadow-md", "max-w-md", "w-full", "text-center"], [1, "text-red-500", "mb-4"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-16", "w-16", "mx-auto"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "text-2xl", "font-bold", "text-gray-800", "mb-2"], [1, "text-gray-600", "mb-6"], [1, "flex", "flex-col", "gap-3"], ["routerLink", "/explore", 1, "bg-primary", "text-white", "px-6", "py-2", "rounded-full", "font-semibold", "hover:bg-opacity-90", "transition-colors"], ["routerLink", "/", 1, "text-gray-500", "hover:underline"]], template: function PaymentFailureComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(3, "svg", 3);
            i0.ɵɵelement(4, "path", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(5, "h1", 5);
            i0.ɵɵtext(6, "Pago Fallido");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p", 6);
            i0.ɵɵtext(8, "Hubo un problema al procesar tu pago. No te preocupes, no se ha realizado ning\u00FAn cargo.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 7)(10, "button", 8);
            i0.ɵɵtext(11, " Intentar de Nuevo ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 9);
            i0.ɵɵtext(13, " Ir al Inicio ");
            i0.ɵɵelementEnd()()()();
        } }, dependencies: [CommonModule, RouterModule, i1.RouterLink], styles: ["[_nghost-%COMP%] { display: block; }\n    .bg-primary[_ngcontent-%COMP%] { background-color: #e91e63; }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaymentFailureComponent, [{
        type: Component,
        args: [{ selector: 'app-payment-failure', standalone: true, imports: [CommonModule, RouterModule], template: `
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <div class="text-red-500 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-gray-800 mb-2">Pago Fallido</h1>
        <p class="text-gray-600 mb-6">Hubo un problema al procesar tu pago. No te preocupes, no se ha realizado ningún cargo.</p>
        <div class="flex flex-col gap-3">
          <button routerLink="/explore" class="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
            Intentar de Nuevo
          </button>
          <button routerLink="/" class="text-gray-500 hover:underline">
            Ir al Inicio
          </button>
        </div>
      </div>
    </div>
  `, styles: ["\n    :host { display: block; }\n    .bg-primary { background-color: #e91e63; }\n  "] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaymentFailureComponent, { className: "PaymentFailureComponent", filePath: "src/app/views/payment/payment-failure.ts", lineNumber: 35 }); })();
