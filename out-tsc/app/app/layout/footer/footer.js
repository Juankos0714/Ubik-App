import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class Footer {
    logoFooter = 'https://res.cloudinary.com/du4tcug9q/image/upload/v1763481484/LogoUbikFooter_kamrwy.png';
    static ɵfac = function Footer_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Footer)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Footer, selectors: [["app-footer"]], decls: 26, vars: 1, consts: [[1, "px-4", "sm:px-5", "py-8", "sm:py-10", "text-white", "font-sans", "mb-15"], [1, "flex", "items-center", "gap-8", "sm:gap-10", "flex-col", "md:flex-row", "max-w-4xl", "mx-auto", "justify-center"], [1, "flex", "flex-col", "items-center", "md:items-center", "gap-1", "md:mr-3"], ["alt", "", 1, "h-24", "sm:h-32", "md:h-40", "mx-auto", "md:mx-0", 3, "src"], [1, "hidden", "md:flex", "items-center"], [1, "relative", "flex", "items-center"], [1, "block", "w-0.5", "h-16", "rounded", "bg-linear-to-b", "from-white/10", "via-white/60", "to-white/10", "shadow-[0_0_8px_#ffffff]"], [1, "absolute", "left-1/2", "-translate-x-1/2", "w-3", "h-20", "rounded", "bg-linear-to-b", "from-transparent", "via-white/60", "to-transparent", "blur-xl", "opacity-60", "animate-pulse", "pointer-events-none"], [1, "flex-1", "text-center", "md:text-left", "md:max-w-2xl"], [1, "font-bold", "text-xs", "sm:text-sm", "mb-1"], [1, "text-[11px]", "sm:text-[13px]", "mb-4", "sm:mb-5"], [1, "flex", "flex-col", "sm:flex-row", "gap-4", "sm:gap-20", "mb-4", "sm:mb-6", "justify-center", "sm:justify-start"], [1, "flex", "flex-col", "gap-2"], ["href", "#", 1, "text-gray-300", "text-xs", "hover:underline"], [1, "text-[10px]", "sm:text-[11px]", "opacity-80", "mt-2"]], template: function Footer_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵdomElement(3, "img", 3);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(4, "div", 4)(5, "div", 5);
            i0.ɵɵdomElement(6, "span", 6)(7, "span", 7);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(8, "div", 8)(9, "p", 9);
            i0.ɵɵtext(10, " UBIK - PLATAFORMA PARA LA GESTI\u00D3N INTELIGENTE DE MOTELES ");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(11, "p", 10);
            i0.ɵɵtext(12, " ADMINISTRA TUS RESERVAS, HABITACIONES Y SERVICIOS DESDE UN SOLO LUGAR. ");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(13, "div", 11)(14, "div", 12)(15, "a", 13);
            i0.ɵɵtext(16, "Pol\u00EDtica de Privacidad");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(17, "a", 13);
            i0.ɵɵtext(18, "T\u00E9rminos y Condiciones");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(19, "div", 12)(20, "a", 13);
            i0.ɵɵtext(21, "Pol\u00EDtica de Cookies");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(22, "a", 13);
            i0.ɵɵtext(23, "Aviso Legal");
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(24, "p", 14);
            i0.ɵɵtext(25, " Todos los derechos reservados UBIK\u00AE 2024\u20132026 ");
            i0.ɵɵdomElementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵdomProperty("src", ctx.logoFooter, i0.ɵɵsanitizeUrl);
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Footer, [{
        type: Component,
        args: [{ selector: 'app-footer', standalone: true, imports: [], template: "<footer class=\"px-4 sm:px-5 py-8 sm:py-10 text-white font-sans mb-15\">\n  <div\n    class=\"flex items-center gap-8 sm:gap-10 flex-col md:flex-row max-w-4xl mx-auto justify-center\"\n  >\n    <!-- Logo -->\n    <div class=\"flex flex-col items-center md:items-center gap-1 md:mr-3\">\n      <img [src]=\"logoFooter\" class=\"h-24 sm:h-32 md:h-40 mx-auto md:mx-0\" alt=\"\" />\n    </div>\n\n    <!-- Divisor vertical estilo ne\u00F3n (visible en tablet y superiores) -->\n    <div class=\"hidden md:flex items-center\">\n      <div class=\"relative flex items-center\">\n        <!-- l\u00EDnea central -->\n        <span\n          class=\"block w-0.5 h-16 rounded bg-linear-to-b from-white/10 via-white/60 to-white/10 shadow-[0_0_8px_#ffffff]\"\n        >\n        </span>\n        <!-- brillo difuso animado -->\n        <span\n          class=\"absolute left-1/2 -translate-x-1/2 w-3 h-20 rounded bg-linear-to-b from-transparent via-white/60 to-transparent blur-xl opacity-60 animate-pulse pointer-events-none\"\n        >\n        </span>\n      </div>\n    </div>\n\n    <!-- Texto informativo -->\n    <div class=\"flex-1 text-center md:text-left md:max-w-2xl\">\n      <p class=\"font-bold text-xs sm:text-sm mb-1\">\n        UBIK - PLATAFORMA PARA LA GESTI\u00D3N INTELIGENTE DE MOTELES\n      </p>\n      <p class=\"text-[11px] sm:text-[13px] mb-4 sm:mb-5\">\n        ADMINISTRA TUS RESERVAS, HABITACIONES Y SERVICIOS DESDE UN SOLO LUGAR.\n      </p>\n\n      <!-- Enlaces en columnas -->\n      <div\n        class=\"flex flex-col sm:flex-row gap-4 sm:gap-20 mb-4 sm:mb-6 justify-center sm:justify-start\"\n      >\n        <div class=\"flex flex-col gap-2\">\n          <a href=\"#\" class=\"text-gray-300 text-xs hover:underline\">Pol\u00EDtica de Privacidad</a>\n          <a href=\"#\" class=\"text-gray-300 text-xs hover:underline\">T\u00E9rminos y Condiciones</a>\n        </div>\n        <div class=\"flex flex-col gap-2\">\n          <a href=\"#\" class=\"text-gray-300 text-xs hover:underline\">Pol\u00EDtica de Cookies</a>\n          <a href=\"#\" class=\"text-gray-300 text-xs hover:underline\">Aviso Legal</a>\n        </div>\n      </div>\n\n      <!-- Derechos reservados -->\n      <p class=\"text-[10px] sm:text-[11px] opacity-80 mt-2\">\n        Todos los derechos reservados UBIK\u00AE 2024\u20132026\n      </p>\n    </div>\n  </div>\n</footer>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Footer, { className: "Footer", filePath: "src/app/layout/footer/footer.ts", lineNumber: 9 }); })();
