import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "angularx-qrcode";
function PaymentSuccessComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("#", ctx_r0.displayCode);
} }
function PaymentSuccessComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "div", 20);
    i0.ɵɵelement(2, "i", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "span", 22);
    i0.ɵɵtext(5, "Alojamiento");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 23);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.details.roomName);
} }
function PaymentSuccessComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "div", 33);
    i0.ɵɵelement(2, "div", 34);
    i0.ɵɵelementStart(3, "h3", 35);
    i0.ɵɵelement(4, "i", 36);
    i0.ɵɵtext(5, " Entrada Express ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 37)(7, "div", 38);
    i0.ɵɵelement(8, "qrcode", 39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "p", 40);
    i0.ɵɵtext(10, " Muestra este c\u00F3digo QR en la recepci\u00F3n para agilizar tu entrada. ");
    i0.ɵɵelementStart(11, "strong", 41);
    i0.ɵɵtext(12, "\u00BFEl motel no cuenta con lector de QR?");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, " Dale el siguiente c\u00F3digo al recepcionista: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 42)(15, "span", 43);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("qrdata", "UBIK-" + ctx_r0.displayCode)("width", 160)("errorCorrectionLevel", "M");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.displayCode, " ");
} }
export class PaymentSuccessComponent {
    router;
    details = null;
    constructor(router) {
        this.router = router;
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras.state && navigation.extras.state['paymentDetails']) {
            this.details = navigation.extras.state['paymentDetails'];
        }
    }
    get displayCode() {
        if (!this.details?.confirmationCode)
            return '';
        // Format is like 260310-0001-F8B, we only want the '0001' part
        const parts = this.details.confirmationCode.split('-');
        return parts.length > 1 ? parts[1] : this.details.confirmationCode;
    }
    static ɵfac = function PaymentSuccessComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaymentSuccessComponent)(i0.ɵɵdirectiveInject(i1.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaymentSuccessComponent, selectors: [["app-payment-success"]], decls: 47, vars: 12, consts: [[1, "flex", "flex-col", "items-center", "justify-center", "py-16", "px-4"], [1, "text-center", "mb-10"], [1, "inline-flex", "items-center", "justify-center", "w-24", "h-24", "bg-green-500/10", "text-green-500", "rounded-full", "mb-6", "relative", "border", "border-green-500/20"], [1, "absolute", "inset-0", "bg-green-500/5", "rounded-full", "animate-ping"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "h-12", "w-12"], ["d", "M5 13l4 4L19 7", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "3"], [1, "text-4xl", "md:text-5xl", "font-bold", "tracking-tight", "text-white", "mb-2"], [1, "text-neutral-400", "text-lg"], [1, "bg-neutral-900", "border", "border-neutral-800", "rounded-2xl", "w-full", "max-w-xl", "p-6", "sm:p-8", "shadow-2xl", "relative", "overflow-hidden"], [1, "absolute", "top-0", "right-0", "w-40", "h-40", "bg-primary/10", "rounded-bl-full", "-mr-10", "-mt-10", "pointer-events-none"], [1, "flex", "items-center", "justify-between", "border-b", "border-neutral-800", "pb-6", "mb-6"], [1, "text-2xl", "font-bold", "text-white"], ["class", "text-primary block sm:inline sm:ml-2 text-xl font-mono", 4, "ngIf"], [1, "bg-green-500/10", "text-green-500", "font-bold", "px-3", "py-1", "rounded-full", "text-xs", "uppercase", "tracking-wider", "hidden", "sm:inline-block"], [1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:justify-between", "sm:items-center", "gap-2"], [1, "text-neutral-400", "font-medium"], [1, "text-3xl", "font-bold", "text-primary"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "bg-neutral-800/40", "border", "border-neutral-800/60", "p-5", "rounded-xl", "flex", "items-start", "gap-4", "transition-colors", "hover:bg-neutral-800/60"], [1, "bg-neutral-800", "p-2.5", "rounded-lg", "text-primary"], [1, "fas", "fa-calendar-alt", "text-lg"], [1, "block", "text-xs", "text-neutral-500", "uppercase", "font-bold", "mb-1", "tracking-wider"], [1, "text-white", "font-medium", "text-lg"], [1, "fas", "fa-clock", "text-lg"], ["class", "bg-neutral-800/40 border border-neutral-800/60 p-5 rounded-xl flex items-start gap-4 transition-colors hover:bg-neutral-800/60 mt-4", 4, "ngIf"], ["class", "mt-8 border-t border-dashed border-neutral-700 pt-8", 4, "ngIf"], [1, "mt-8", "pt-6", "border-t", "border-neutral-800", "flex", "flex-col", "sm:flex-row", "gap-4"], ["routerLink", "/", 1, "flex-1", "bg-primary", "hover:bg-primary/90", "text-white", "font-bold", "py-4", "px-6", "rounded-xl", "transition-all", "transform", "hover:scale-[1.02]", "active:scale-[0.98]", "text-center", "shadow-lg", "shadow-primary/20"], [1, "text-primary", "block", "sm:inline", "sm:ml-2", "text-xl", "font-mono"], [1, "bg-neutral-800/40", "border", "border-neutral-800/60", "p-5", "rounded-xl", "flex", "items-start", "gap-4", "transition-colors", "hover:bg-neutral-800/60", "mt-4"], [1, "fas", "fa-bed", "text-lg"], [1, "mt-8", "border-t", "border-dashed", "border-neutral-700", "pt-8"], [1, "bg-primary/5", "border", "border-primary/20", "rounded-2xl", "p-6", "text-center", "relative", "overflow-hidden"], [1, "absolute", "inset-x-0", "top-0", "h-1", "bg-gradient-to-r", "from-transparent", "via-primary", "to-transparent", "opacity-50"], [1, "text-primary", "font-bold", "uppercase", "tracking-[0.2em]", "text-xs", "mb-6", "inline-flex", "items-center", "gap-2"], [1, "fas", "fa-ticket-alt"], [1, "flex", "justify-center", "mb-6"], [1, "bg-white", "p-4", "rounded-2xl", "shadow-[0_0_30px_rgba(167,32,39,0.15)]", "ring-4", "ring-neutral-900", "inline-flex", "justify-center", "items-center"], [3, "qrdata", "width", "errorCorrectionLevel"], [1, "text-neutral-400", "text-sm", "max-w-sm", "mx-auto", "mb-4", "leading-relaxed"], [1, "text-neutral-300", "block", "mt-2", "font-medium"], [1, "bg-neutral-900", "border", "border-neutral-700/50", "py-4", "px-6", "rounded-xl", "inline-block", "shadow-inner", "mt-2"], [1, "text-4xl", "sm:text-5xl", "font-mono", "font-black", "tracking-widest", "text-white", "drop-shadow-md"]], template: function PaymentSuccessComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵelement(3, "div", 3);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(4, "svg", 4);
            i0.ɵɵelement(5, "path", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(6, "h1", 6);
            i0.ɵɵtext(7, "\u00A1Pago Exitoso!");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p", 7);
            i0.ɵɵtext(9, "Tu reserva ha sido confirmada. Hemos enviado el comprobante a tu correo.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 8);
            i0.ɵɵelement(11, "div", 9);
            i0.ɵɵelementStart(12, "div", 10)(13, "h2", 11);
            i0.ɵɵtext(14, " Resumen de Reserva ");
            i0.ɵɵtemplate(15, PaymentSuccessComponent_span_15_Template, 2, 1, "span", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "span", 13);
            i0.ɵɵtext(17, "Confirmada");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "div", 14)(19, "div", 15)(20, "span", 16);
            i0.ɵɵtext(21, "Total pagado");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "span", 17);
            i0.ɵɵtext(23);
            i0.ɵɵpipe(24, "currency");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "div", 18)(26, "div", 19)(27, "div", 20);
            i0.ɵɵelement(28, "i", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "div")(30, "span", 22);
            i0.ɵɵtext(31, "Fecha");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "span", 23);
            i0.ɵɵtext(33);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(34, "div", 19)(35, "div", 20);
            i0.ɵɵelement(36, "i", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "div")(38, "span", 22);
            i0.ɵɵtext(39, "Horario");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "span", 23);
            i0.ɵɵtext(41);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(42, PaymentSuccessComponent_div_42_Template, 8, 1, "div", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(43, PaymentSuccessComponent_div_43_Template, 17, 4, "div", 26);
            i0.ɵɵelementStart(44, "div", 27)(45, "button", 28);
            i0.ɵɵtext(46, " Volver al Inicio ");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("ngIf", ctx.details == null ? null : ctx.details.confirmationCode);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.details ? i0.ɵɵpipeBind4(24, 7, ctx.details.totalPrice, "COP", "symbol-narrow", "1.0-0") : "\u2014");
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate((ctx.details == null ? null : ctx.details.date) || "Fecha de hoy");
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate2("", (ctx.details == null ? null : ctx.details.startTime) || "--:--", " a ", (ctx.details == null ? null : ctx.details.endTime) || "--:--");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.details == null ? null : ctx.details.roomName);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.details == null ? null : ctx.details.confirmationCode);
        } }, dependencies: [CommonModule, i2.NgIf, RouterModule, i1.RouterLink, QRCodeModule, i3.QRCodeComponent, i2.CurrencyPipe], styles: ["[_nghost-%COMP%] { display: block; }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaymentSuccessComponent, [{
        type: Component,
        args: [{ selector: 'app-payment-success', standalone: true, imports: [CommonModule, RouterModule, QRCodeModule], template: `
    <div class="flex flex-col items-center justify-center py-16 px-4">
      <div class="text-center mb-10">
        <div class="inline-flex items-center justify-center w-24 h-24 bg-green-500/10 text-green-500 rounded-full mb-6 relative border border-green-500/20">
          <div class="absolute inset-0 bg-green-500/5 rounded-full animate-ping"></div>
          <svg class="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
          </svg>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">¡Pago Exitoso!</h1>
        <p class="text-neutral-400 text-lg">Tu reserva ha sido confirmada. Hemos enviado el comprobante a tu correo.</p>
      </div>

      <div class="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <!-- Decoración -->
        <div class="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-bl-full -mr-10 -mt-10 pointer-events-none"></div>

        <div class="flex items-center justify-between border-b border-neutral-800 pb-6 mb-6">
          <h2 class="text-2xl font-bold text-white">
            Resumen de Reserva <span *ngIf="details?.confirmationCode" class="text-primary block sm:inline sm:ml-2 text-xl font-mono">#{{ displayCode }}</span>
          </h2>
          <span class="bg-green-500/10 text-green-500 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider hidden sm:inline-block">Confirmada</span>
        </div>

        <div class="space-y-6">
          <!-- Precio -->
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <span class="text-neutral-400 font-medium">Total pagado</span>
            <span class="text-3xl font-bold text-primary">{{ details ? (details.totalPrice | currency:'COP':'symbol-narrow':'1.0-0') : '—' }}</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Fecha -->
            <div class="bg-neutral-800/40 border border-neutral-800/60 p-5 rounded-xl flex items-start gap-4 transition-colors hover:bg-neutral-800/60">
              <div class="bg-neutral-800 p-2.5 rounded-lg text-primary">
                <i class="fas fa-calendar-alt text-lg"></i>
              </div>
              <div>
                <span class="block text-xs text-neutral-500 uppercase font-bold mb-1 tracking-wider">Fecha</span>
                <span class="text-white font-medium text-lg">{{ details?.date || 'Fecha de hoy' }}</span>
              </div>
            </div>

            <!-- Horario -->
            <div class="bg-neutral-800/40 border border-neutral-800/60 p-5 rounded-xl flex items-start gap-4 transition-colors hover:bg-neutral-800/60">
              <div class="bg-neutral-800 p-2.5 rounded-lg text-primary">
                <i class="fas fa-clock text-lg"></i>
              </div>
              <div>
                <span class="block text-xs text-neutral-500 uppercase font-bold mb-1 tracking-wider">Horario</span>
                <span class="text-white font-medium text-lg">{{ details?.startTime || '--:--' }} a {{ details?.endTime || '--:--' }}</span>
              </div>
            </div>
          </div>
          
          <!-- Habitación -->
          <div *ngIf="details?.roomName" class="bg-neutral-800/40 border border-neutral-800/60 p-5 rounded-xl flex items-start gap-4 transition-colors hover:bg-neutral-800/60 mt-4">
             <div class="bg-neutral-800 p-2.5 rounded-lg text-primary">
                <i class="fas fa-bed text-lg"></i>
              </div>
              <div>
                <span class="block text-xs text-neutral-500 uppercase font-bold mb-1 tracking-wider">Alojamiento</span>
                <span class="text-white font-medium text-lg">{{ details.roomName }}</span>
              </div>
          </div>
        </div>
        
        <!-- Sección Especial QR y Código (Solo si existe) -->
        <div *ngIf="details?.confirmationCode" class="mt-8 border-t border-dashed border-neutral-700 pt-8">
          <div class="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center relative overflow-hidden">
            <!-- Efecto de brillo de fondo -->
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
            
            <h3 class="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-6 inline-flex items-center gap-2">
              <i class="fas fa-ticket-alt"></i> Entrada Express
            </h3>
            
            <div class="flex justify-center mb-6">
              <div class="bg-white p-4 rounded-2xl shadow-[0_0_30px_rgba(167,32,39,0.15)] ring-4 ring-neutral-900 inline-flex justify-center items-center">
                <qrcode [qrdata]="'UBIK-' + displayCode" [width]="160" [errorCorrectionLevel]="'M'"></qrcode>
              </div>
            </div>
            
            <p class="text-neutral-400 text-sm max-w-sm mx-auto mb-4 leading-relaxed">
              Muestra este código QR en la recepción para agilizar tu entrada. 
              <strong class="text-neutral-300 block mt-2 font-medium">¿El motel no cuenta con lector de QR?</strong> 
              Dale el siguiente código al recepcionista:
            </p>
            
            <div class="bg-neutral-900 border border-neutral-700/50 py-4 px-6 rounded-xl inline-block shadow-inner mt-2">
              <span class="text-4xl sm:text-5xl font-mono font-black tracking-widest text-white drop-shadow-md">
                {{ displayCode }}
              </span>
            </div>
          </div>
        </div>

        <div class="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row gap-4">
            <button routerLink="/" class="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] text-center shadow-lg shadow-primary/20">
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  `, styles: ["\n    :host { display: block; }\n  "] }]
    }], () => [{ type: i1.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaymentSuccessComponent, { className: "PaymentSuccessComponent", filePath: "src/app/views/payment/payment-success.ts", lineNumber: 119 }); })();
