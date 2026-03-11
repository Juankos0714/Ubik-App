import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { Footer } from "./layout/footer/footer";
import { NavBarBottomComponent } from "./layout/nav-bar-bottom/nav-bar-bottom";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as i0 from "@angular/core";
export class App {
    title = signal('frontend', ...(ngDevMode ? [{ debugName: "title" }] : []));
    static ɵfac = function App_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || App)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: App, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "w-full"]], template: function App_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-header");
            i0.ɵɵelementStart(1, "main", 0);
            i0.ɵɵelement(2, "router-outlet");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "app-nav-bar-bottom")(4, "app-footer");
        } }, dependencies: [RouterOutlet, Header, Footer, NavBarBottomComponent, FontAwesomeModule], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(App, [{
        type: Component,
        args: [{ selector: 'app-root', imports: [RouterOutlet, Header, Footer, NavBarBottomComponent, FontAwesomeModule], template: "<app-header></app-header>\n\n<main class=\"w-full\">\n  <router-outlet></router-outlet>\n</main>\n\n<app-nav-bar-bottom></app-nav-bar-bottom>\n<app-footer></app-footer>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 13 }); })();
