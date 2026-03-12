import { Component, Inject, PLATFORM_ID, inject } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// 1. IMPORTAR NUEVOS ÍCONOS
import { faHouse, faCompass, faCircleUser, faRightFromBracket, faBars, faBuilding, faEye, } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../core/services/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@fortawesome/angular-fontawesome";
function NavBarBottomComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵlistener("click", function NavBarBottomComponent_Conditional_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeMenu()); });
    i0.ɵɵelementEnd();
} }
function NavBarBottomComponent_Conditional_14_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function NavBarBottomComponent_Conditional_14_Conditional_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.navigateTo(ctx_r1.AppRoutes.LOGIN)); });
    i0.ɵɵtext(1, " Iniciar Sesi\u00F3n ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 14);
    i0.ɵɵlistener("click", function NavBarBottomComponent_Conditional_14_Conditional_1_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.navigateTo(ctx_r1.AppRoutes.REGISTER)); });
    i0.ɵɵtext(3, " Registrarse ");
    i0.ɵɵelementEnd();
} }
function NavBarBottomComponent_Conditional_14_Conditional_2_Case_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("click", function NavBarBottomComponent_Conditional_14_Conditional_2_Case_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.navigateTo(ctx_r1.AppRoutes.ADMIN)); });
    i0.ɵɵelement(1, "fa-icon", 17);
    i0.ɵɵtext(2, " Panel Admin ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r1.icons.admin);
} }
function NavBarBottomComponent_Conditional_14_Conditional_2_Case_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("click", function NavBarBottomComponent_Conditional_14_Conditional_2_Case_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.navigateTo(ctx_r1.AppRoutes.PROPERTY)); });
    i0.ɵɵelement(1, "fa-icon", 17);
    i0.ɵɵtext(2, " Propiedades ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 18);
    i0.ɵɵlistener("click", function NavBarBottomComponent_Conditional_14_Conditional_2_Case_1_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.navigateTo(ctx_r1.AppRoutes.PROFILE)); });
    i0.ɵɵelement(4, "fa-icon", 17);
    i0.ɵɵtext(5, " Mi Perfil ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r1.icons.owner);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("icon", ctx_r1.icons.user);
} }
function NavBarBottomComponent_Conditional_14_Conditional_2_Case_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("click", function NavBarBottomComponent_Conditional_14_Conditional_2_Case_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.navigateTo(ctx_r1.AppRoutes.PROFILE)); });
    i0.ɵɵelement(1, "fa-icon", 17);
    i0.ɵɵtext(2, " Mi Perfil ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r1.icons.user);
} }
function NavBarBottomComponent_Conditional_14_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵconditionalCreate(0, NavBarBottomComponent_Conditional_14_Conditional_2_Case_0_Template, 3, 1, "button", 15)(1, NavBarBottomComponent_Conditional_14_Conditional_2_Case_1_Template, 6, 2)(2, NavBarBottomComponent_Conditional_14_Conditional_2_Case_2_Template, 3, 1, "button", 15);
    i0.ɵɵelementStart(3, "button", 16);
    i0.ɵɵlistener("click", function NavBarBottomComponent_Conditional_14_Conditional_2_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.logout()); });
    i0.ɵɵelement(4, "fa-icon", 17);
    i0.ɵɵtext(5, " Cerrar Sesi\u00F3n ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional((tmp_2_0 = ctx_r1.role()) === 7392841056473829 ? 0 : tmp_2_0 === 3847261094857362 ? 1 : 2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("icon", ctx_r1.icons.logout);
} }
function NavBarBottomComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵconditionalCreate(1, NavBarBottomComponent_Conditional_14_Conditional_1_Template, 4, 0);
    i0.ɵɵconditionalCreate(2, NavBarBottomComponent_Conditional_14_Conditional_2_Template, 6, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r1.isLogged() ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.isLogged() ? 2 : -1);
} }
const ROUTES = {
    HOME: '/',
    EXPLORE: '/explore',
    LOGIN: '/login',
    REGISTER: '/select-register',
    PROPERTY: '/listProperty',
    PROFILE: '/userProfile',
    OWNER: '/listProperty',
    ADMIN: '/',
};
export class NavBarBottomComponent {
    router;
    platformId;
    auth = inject(AuthService);
    isLogged = this.auth.isLogged;
    role = this.auth.role;
    menuOpen = false;
    icons = {
        house: faHouse,
        compass: faCompass,
        user: faCircleUser,
        logout: faRightFromBracket,
        menu: faBars,
        owner: faBuilding,
        admin: faEye,
    };
    routerSubscription;
    constructor(router, platformId) {
        this.router = router;
        this.platformId = platformId;
    }
    ngOnInit() {
        if (!isPlatformBrowser(this.platformId))
            return;
        this.routerSubscription = this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe(() => {
            this.menuOpen = false;
        });
    }
    ngOnDestroy() {
        this.routerSubscription?.unsubscribe();
    }
    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }
    closeMenu() {
        this.menuOpen = false;
    }
    navigateTo(path) {
        this.closeMenu();
        this.router.navigate([path]);
    }
    logout() {
        this.auth.logout();
        this.navigateTo(ROUTES.LOGIN);
    }
    AppRoutes = ROUTES;
    static ɵfac = function NavBarBottomComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NavBarBottomComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(PLATFORM_ID)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavBarBottomComponent, selectors: [["app-nav-bar-bottom"]], decls: 19, vars: 7, consts: [[1, "fixed", "inset-0", "z-40", "bg-black/20", "backdrop-blur-[1px]"], [1, "w-dvw", "bg-[#2d2f35]", "text-white", "min-h-60px", "fixed", "bottom-0", "left-0", "flex", "justify-center", "items-center", "shadow-white", "z-50", "font-bold", "lg:hidden"], [1, "flex", "w-full", "justify-around", "items-end"], [1, "home-icon"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-1", "py-2", "px-4", "cursor-pointer", 3, "click"], [1, "text-[20px]", 3, "icon"], [1, "text-[0.7rem]"], [1, "explora-icon"], [1, "menu-icon", "relative", "flex", "justify-center"], [1, "absolute", "bottom-full", "mb-4", "w-40", "bg-[#3a3d45]", "rounded-xl", "shadow-2xl", "overflow-hidden", "border", "border-gray-600", "flex", "flex-col", "animation-fade-in"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-1", "py-2", "px-4", "cursor-pointer", "z-50", "relative", 3, "click"], [1, "text-[20px]", "transition-transform", "duration-200", 3, "icon"], [1, "fixed", "inset-0", "z-40", "bg-black/20", "backdrop-blur-[1px]", 3, "click"], [1, "w-full", "text-left", "px-4", "py-3", "text-sm", "hover:bg-[#4a4d55]", "border-b", "border-gray-600", "transition-colors", 3, "click"], [1, "w-full", "text-left", "px-4", "py-3", "text-sm", "hover:bg-[#4a4d55]", "transition-colors", 3, "click"], [1, "w-full", "text-left", "px-4", "py-3", "text-sm", "hover:bg-[#4a4d55]", "border-b", "border-gray-600", "transition-colors", "flex", "items-center", "gap-2"], [1, "w-full", "text-left", "px-4", "py-3", "text-sm", "text-red-400", "hover:bg-[#4a4d55]", "transition-colors", "flex", "items-center", "gap-2", 3, "click"], [1, "text-[18px]", 3, "icon"], [1, "w-full", "text-left", "px-4", "py-3", "text-sm", "hover:bg-[#4a4d55]", "border-b", "border-gray-600", "transition-colors", "flex", "items-center", "gap-2", 3, "click"]], template: function NavBarBottomComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, NavBarBottomComponent_Conditional_0_Template, 1, 0, "div", 0);
            i0.ɵɵelementStart(1, "nav", 1)(2, "ul", 2)(3, "li", 3)(4, "a", 4);
            i0.ɵɵlistener("click", function NavBarBottomComponent_Template_a_click_4_listener() { return ctx.navigateTo(ctx.AppRoutes.HOME); });
            i0.ɵɵelement(5, "fa-icon", 5);
            i0.ɵɵelementStart(6, "p", 6);
            i0.ɵɵtext(7, "Inicio");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "li", 7)(9, "a", 4);
            i0.ɵɵlistener("click", function NavBarBottomComponent_Template_a_click_9_listener() { return ctx.navigateTo(ctx.AppRoutes.EXPLORE); });
            i0.ɵɵelement(10, "fa-icon", 5);
            i0.ɵɵelementStart(11, "p", 6);
            i0.ɵɵtext(12, "Explora");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(13, "li", 8);
            i0.ɵɵconditionalCreate(14, NavBarBottomComponent_Conditional_14_Template, 3, 2, "div", 9);
            i0.ɵɵelementStart(15, "a", 10);
            i0.ɵɵlistener("click", function NavBarBottomComponent_Template_a_click_15_listener() { return ctx.toggleMenu(); });
            i0.ɵɵelement(16, "fa-icon", 11);
            i0.ɵɵelementStart(17, "p", 6);
            i0.ɵɵtext(18, "Menu");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.menuOpen ? 0 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("icon", ctx.icons.house);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("icon", ctx.icons.compass);
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.menuOpen ? 14 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("rotate-90", ctx.menuOpen);
            i0.ɵɵproperty("icon", ctx.icons.menu);
        } }, dependencies: [CommonModule, FontAwesomeModule, i2.FaIconComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavBarBottomComponent, [{
        type: Component,
        args: [{ selector: 'app-nav-bar-bottom', standalone: true, imports: [CommonModule, FontAwesomeModule], template: "@if (menuOpen) {\n  <div \n    class=\"fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px]\" \n    (click)=\"closeMenu()\">\n  </div>\n}\n\n<nav\n  class=\"w-dvw bg-[#2d2f35] text-white min-h-60px fixed bottom-0 left-0\n         flex justify-center items-center shadow-white z-50 font-bold lg:hidden\"\n>\n  <ul class=\"flex w-full justify-around items-end\">\n\n    <li class=\"home-icon\">\n      <a (click)=\"navigateTo(AppRoutes.HOME)\" class=\"flex flex-col items-center justify-center gap-1 py-2 px-4 cursor-pointer\">\n        <fa-icon [icon]=\"icons.house\" class=\"text-[20px]\" />\n        <p class=\"text-[0.7rem]\">Inicio</p>\n      </a>\n    </li>\n\n    <li class=\"explora-icon\">\n      <a (click)=\"navigateTo(AppRoutes.EXPLORE)\" class=\"flex flex-col items-center justify-center gap-1 py-2 px-4 cursor-pointer\">\n        <fa-icon [icon]=\"icons.compass\" class=\"text-[20px]\" />\n        <p class=\"text-[0.7rem]\">Explora</p>\n      </a>\n    </li>\n\n    <li class=\"menu-icon relative flex justify-center\">\n      \n      @if (menuOpen) {\n        <div \n          class=\"absolute bottom-full mb-4 w-40 bg-[#3a3d45] rounded-xl shadow-2xl \n                overflow-hidden border border-gray-600 flex flex-col animation-fade-in\"\n        >\n\n          <!-- \uD83D\uDD13 NO LOGUEADO -->\n          @if (!isLogged()) {\n            <button \n              (click)=\"navigateTo(AppRoutes.LOGIN)\" \n              class=\"w-full text-left px-4 py-3 text-sm hover:bg-[#4a4d55] border-b border-gray-600 transition-colors\"\n            >\n              Iniciar Sesi\u00F3n\n            </button>\n\n            <button \n              (click)=\"navigateTo(AppRoutes.REGISTER)\" \n              class=\"w-full text-left px-4 py-3 text-sm hover:bg-[#4a4d55] transition-colors\"\n            >\n              Registrarse\n            </button>\n          }\n\n          <!-- \uD83D\uDD10 LOGUEADO -->\n          @if (isLogged()) {\n\n            @switch (role()) {\n\n              @case (7392841056473829) {\n                <button \n                  (click)=\"navigateTo(AppRoutes.ADMIN)\" \n                  class=\"w-full text-left px-4 py-3 text-sm hover:bg-[#4a4d55] border-b border-gray-600 transition-colors flex items-center gap-2\"\n                >\n                  <fa-icon [icon]=\"icons.admin\" class=\"text-[18px]\" />\n                  Panel Admin\n                </button>\n              }\n\n              @case (3847261094857362) {\n                <button \n                  (click)=\"navigateTo(AppRoutes.PROPERTY)\" \n                  class=\"w-full text-left px-4 py-3 text-sm hover:bg-[#4a4d55] border-b border-gray-600 transition-colors flex items-center gap-2\"\n                >\n                  <fa-icon [icon]=\"icons.owner\" class=\"text-[18px]\" />\n                  Propiedades\n                </button>\n                <button \n                  (click)=\"navigateTo(AppRoutes.PROFILE)\" \n                  class=\"w-full text-left px-4 py-3 text-sm hover:bg-[#4a4d55] border-b border-gray-600 transition-colors flex items-center gap-2\"\n                >\n                  <fa-icon [icon]=\"icons.user\" class=\"text-[18px]\" />\n                  Mi Perfil\n                </button>\n              }\n\n              @default {\n                <button \n                  (click)=\"navigateTo(AppRoutes.PROFILE)\" \n                  class=\"w-full text-left px-4 py-3 text-sm hover:bg-[#4a4d55] border-b border-gray-600 transition-colors flex items-center gap-2\"\n                >\n                  <fa-icon [icon]=\"icons.user\" class=\"text-[18px]\" />\n                  Mi Perfil\n                </button>\n              }\n            }\n\n            <button \n              (click)=\"logout()\" \n              class=\"w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-[#4a4d55] transition-colors flex items-center gap-2\"\n            >\n              <fa-icon [icon]=\"icons.logout\" class=\"text-[18px]\" />\n              Cerrar Sesi\u00F3n\n            </button>\n          }\n\n        </div>\n      }\n\n      <a\n        (click)=\"toggleMenu()\"\n        class=\"flex flex-col items-center justify-center gap-1 py-2 px-4 cursor-pointer z-50 relative\"\n      >\n        <fa-icon [icon]=\"icons.menu\" class=\"text-[20px] transition-transform duration-200\" [class.rotate-90]=\"menuOpen\" />\n        <p class=\"text-[0.7rem]\">Menu</p>\n      </a>\n    </li>\n\n  </ul>\n</nav>" }]
    }], () => [{ type: i1.Router }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavBarBottomComponent, { className: "NavBarBottomComponent", filePath: "src/app/layout/nav-bar-bottom/nav-bar-bottom.ts", lineNumber: 38 }); })();
