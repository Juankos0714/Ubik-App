import { Component, computed, signal, inject, PLATFORM_ID, HostListener, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject, filter, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { Logo01 } from '../../components/logo-01/logo-01';
import { Button01 } from '../../components/button-01/button-01';
import { AuthService } from '../../core/services/auth.service';
import { SearchService } from '../../core/services/search.service';
import { ColombiaService } from '../../core/services/colombia.service';
import { routes } from '../../app.routes';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
function Header_Conditional_0_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 16);
    i0.ɵɵlistener("click", function Header_Conditional_0_Conditional_11_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.navigateTo(ctx_r1.ROUTES.LOGIN)); });
    i0.ɵɵtext(1, " Inicia sesi\u00F3n ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "a", 17);
    i0.ɵɵlistener("click", function Header_Conditional_0_Conditional_11_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.navigateTo(ctx_r1.ROUTES.REGISTER)); });
    i0.ɵɵtext(3, " Registrarse ");
    i0.ɵɵelementEnd();
} }
function Header_Conditional_0_Conditional_12_Case_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 20);
    i0.ɵɵlistener("click", function Header_Conditional_0_Conditional_12_Case_0_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.navigateTo(ctx_r1.ROUTES.ADMIN)); });
    i0.ɵɵtext(1, "Panel Admin");
    i0.ɵɵelementEnd();
} }
function Header_Conditional_0_Conditional_12_Case_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 20);
    i0.ɵɵlistener("click", function Header_Conditional_0_Conditional_12_Case_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.navigateTo(ctx_r1.ROUTES.OWNER)); });
    i0.ɵɵtext(1, "Propiedades");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "a", 20);
    i0.ɵɵlistener("click", function Header_Conditional_0_Conditional_12_Case_1_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.navigateTo(ctx_r1.ROUTES.PROFILE)); });
    i0.ɵɵtext(3, "Mi Perfil");
    i0.ɵɵelementEnd();
} }
function Header_Conditional_0_Conditional_12_Case_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 20);
    i0.ɵɵlistener("click", function Header_Conditional_0_Conditional_12_Case_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.navigateTo(ctx_r1.ROUTES.PROFILE)); });
    i0.ɵɵtext(1, "Mi Perfil");
    i0.ɵɵelementEnd();
} }
function Header_Conditional_0_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵconditionalCreate(0, Header_Conditional_0_Conditional_12_Case_0_Template, 2, 0, "a", 18)(1, Header_Conditional_0_Conditional_12_Case_1_Template, 4, 0)(2, Header_Conditional_0_Conditional_12_Case_2_Template, 2, 0, "a", 18);
    i0.ɵɵelementStart(3, "a", 19);
    i0.ɵɵlistener("click", function Header_Conditional_0_Conditional_12_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.logout()); });
    i0.ɵɵtext(4, " Cerrar sesi\u00F3n ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional((tmp_2_0 = ctx_r1.role()) === 7392841056473829 ? 0 : tmp_2_0 === 3847261094857362 ? 1 : 2);
} }
function Header_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 11);
    i0.ɵɵelement(2, "app-logo-01");
    i0.ɵɵelementStart(3, "div", 12)(4, "a", 13);
    i0.ɵɵlistener("click", function Header_Conditional_0_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.navigateTo(ctx_r1.ROUTES.HOME)); });
    i0.ɵɵtext(5, " Inicio ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "a", 13);
    i0.ɵɵlistener("click", function Header_Conditional_0_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.navigateTo(ctx_r1.ROUTES.EXPLORE)); });
    i0.ɵɵtext(7, " Explorar ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "a", 14);
    i0.ɵɵtext(9, " Ofertas ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 15);
    i0.ɵɵconditionalCreate(11, Header_Conditional_0_Conditional_11_Template, 4, 0);
    i0.ɵɵconditionalCreate(12, Header_Conditional_0_Conditional_12_Template, 5, 1);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("-translate-y-full", !ctx_r1.showStickyNav())("translate-y-0", ctx_r1.showStickyNav());
    i0.ɵɵadvance(4);
    i0.ɵɵclassMap(ctx_r1.isActive(ctx_r1.ROUTES.HOME) ? "text-red-400 font-semibold" : "text-white/70 hover:text-white");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(ctx_r1.isActive(ctx_r1.ROUTES.EXPLORE) ? "text-red-400 font-semibold" : "text-white/70 hover:text-white");
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(!ctx_r1.isLogged() ? 11 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.isLogged() ? 12 : -1);
} }
function Header_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 2);
} }
function Header_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 21);
    i0.ɵɵlistener("click", function Header_Conditional_14_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.navigateTo(ctx_r1.ROUTES.LOGIN)); });
    i0.ɵɵtext(1, " Inicia sesi\u00F3n ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "a", 22);
    i0.ɵɵlistener("click", function Header_Conditional_14_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.navigateTo(ctx_r1.ROUTES.REGISTER)); });
    i0.ɵɵtext(3, " Registrarse ");
    i0.ɵɵelementEnd();
} }
function Header_Conditional_15_Case_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 25);
    i0.ɵɵlistener("click", function Header_Conditional_15_Case_0_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.navigateTo(ctx_r1.ROUTES.ADMIN)); });
    i0.ɵɵtext(1, "Panel Admin");
    i0.ɵɵelementEnd();
} }
function Header_Conditional_15_Case_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 25);
    i0.ɵɵlistener("click", function Header_Conditional_15_Case_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.navigateTo(ctx_r1.ROUTES.OWNER)); });
    i0.ɵɵtext(1, "Propiedades");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "a", 25);
    i0.ɵɵlistener("click", function Header_Conditional_15_Case_1_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.navigateTo(ctx_r1.ROUTES.DASHBOARDOWNER)); });
    i0.ɵɵtext(3, "Dashboard");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "a", 25);
    i0.ɵɵlistener("click", function Header_Conditional_15_Case_1_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.navigateTo(ctx_r1.ROUTES.PROFILE)); });
    i0.ɵɵtext(5, "Mi Perfil");
    i0.ɵɵelementEnd();
} }
function Header_Conditional_15_Case_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 25);
    i0.ɵɵlistener("click", function Header_Conditional_15_Case_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.navigateTo(ctx_r1.ROUTES.PROFILE)); });
    i0.ɵɵtext(1, "Mi Perfil");
    i0.ɵɵelementEnd();
} }
function Header_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵconditionalCreate(0, Header_Conditional_15_Case_0_Template, 2, 0, "a", 23)(1, Header_Conditional_15_Case_1_Template, 6, 0)(2, Header_Conditional_15_Case_2_Template, 2, 0, "a", 23);
    i0.ɵɵelementStart(3, "a", 24);
    i0.ɵɵlistener("click", function Header_Conditional_15_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.logout()); });
    i0.ɵɵtext(4, " Cerrar sesi\u00F3n ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵconditional((tmp_1_0 = ctx_r1.role()) === 7392841056473829 ? 0 : tmp_1_0 === 3847261094857362 ? 1 : 2);
} }
function Header_Conditional_16_Conditional_12_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 46);
    i0.ɵɵlistener("mousedown", function Header_Conditional_16_Conditional_12_For_2_Template_li_mousedown_0_listener() { const dep_r15 = i0.ɵɵrestoreView(_r14).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.selectDepartment(dep_r15)); });
    i0.ɵɵelementStart(1, "span", 47);
    i0.ɵɵtext(2, "\uD83D\uDCCD");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dep_r15 = ctx.$implicit;
    const ɵ$index_125_r16 = ctx.$index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMap(ɵ$index_125_r16 === ctx_r1.activeIndex.department ? "bg-red-700/30 text-white" : "text-white/70 hover:bg-white/5 hover:text-white");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", dep_r15, " ");
} }
function Header_Conditional_16_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 34);
    i0.ɵɵrepeaterCreate(1, Header_Conditional_16_Conditional_12_For_2_Template, 4, 3, "li", 45, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.departmentSuggestions);
} }
function Header_Conditional_16_Conditional_17_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 46);
    i0.ɵɵlistener("mousedown", function Header_Conditional_16_Conditional_17_For_2_Template_li_mousedown_0_listener() { const city_r18 = i0.ɵɵrestoreView(_r17).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.selectCity(city_r18)); });
    i0.ɵɵelementStart(1, "span", 47);
    i0.ɵɵtext(2, "\uD83C\uDFD9\uFE0F");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const city_r18 = ctx.$implicit;
    const ɵ$index_142_r19 = ctx.$index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMap(ɵ$index_142_r19 === ctx_r1.activeIndex.city ? "bg-red-700/30 text-white" : "text-white/70 hover:bg-white/5 hover:text-white");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", city_r18, " ");
} }
function Header_Conditional_16_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 34);
    i0.ɵɵrepeaterCreate(1, Header_Conditional_16_Conditional_17_For_2_Template, 4, 3, "li", 45, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.citySuggestions);
} }
function Header_Conditional_16_Conditional_22_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 46);
    i0.ɵɵlistener("mousedown", function Header_Conditional_16_Conditional_22_For_2_Template_li_mousedown_0_listener() { const sug_r21 = i0.ɵɵrestoreView(_r20).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.selectQuery(sug_r21)); });
    i0.ɵɵelementStart(1, "span", 47);
    i0.ɵɵtext(2, "\uD83D\uDD0D");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sug_r21 = ctx.$implicit;
    const ɵ$index_159_r22 = ctx.$index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMap(ɵ$index_159_r22 === ctx_r1.activeIndex.query ? "bg-red-700/30 text-white" : "text-white/70 hover:bg-white/5 hover:text-white");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", sug_r21, " ");
} }
function Header_Conditional_16_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 34);
    i0.ɵɵrepeaterCreate(1, Header_Conditional_16_Conditional_22_For_2_Template, 4, 3, "li", 45, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.querySuggestions);
} }
function Header_Conditional_16_For_30_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 48);
    i0.ɵɵlistener("click", function Header_Conditional_16_For_30_Template_button_click_0_listener() { const tag_r24 = i0.ɵɵrestoreView(_r23).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.quickSearch(tag_r24)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tag_r24 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tag_r24, " ");
} }
function Header_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 9)(1, "div", 26)(2, "h2", 27);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 28);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 29)(7, "div", 30)(8, "div", 31)(9, "label", 32);
    i0.ɵɵtext(10, " Departamento ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 33);
    i0.ɵɵtwoWayListener("ngModelChange", function Header_Conditional_16_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.department, $event) || (ctx_r1.form.department = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function Header_Conditional_16_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onDepartmentInput($event)); })("focus", function Header_Conditional_16_Template_input_focus_11_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onDepartmentInput(ctx_r1.form.department)); })("blur", function Header_Conditional_16_Template_input_blur_11_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeDropdown("department", 150)); })("keydown.enter", function Header_Conditional_16_Template_input_keydown_enter_11_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.search()); })("keydown.arrowdown", function Header_Conditional_16_Template_input_keydown_arrowdown_11_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.moveDown("department")); })("keydown.arrowup", function Header_Conditional_16_Template_input_keydown_arrowup_11_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.moveUp("department")); });
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(12, Header_Conditional_16_Conditional_12_Template, 3, 0, "ul", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 31)(14, "label", 32);
    i0.ɵɵtext(15, " Municipio ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "input", 35);
    i0.ɵɵtwoWayListener("ngModelChange", function Header_Conditional_16_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.city, $event) || (ctx_r1.form.city = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function Header_Conditional_16_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onCityInput($event)); })("focus", function Header_Conditional_16_Template_input_focus_16_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onCityInput(ctx_r1.form.city)); })("blur", function Header_Conditional_16_Template_input_blur_16_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeDropdown("city", 150)); })("keydown.enter", function Header_Conditional_16_Template_input_keydown_enter_16_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.search()); })("keydown.arrowdown", function Header_Conditional_16_Template_input_keydown_arrowdown_16_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.moveDown("city")); })("keydown.arrowup", function Header_Conditional_16_Template_input_keydown_arrowup_16_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.moveUp("city")); });
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(17, Header_Conditional_16_Conditional_17_Template, 3, 0, "ul", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 31)(19, "label", 32);
    i0.ɵɵtext(20, " \u00BFQu\u00E9 buscas? ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "input", 36);
    i0.ɵɵtwoWayListener("ngModelChange", function Header_Conditional_16_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.query, $event) || (ctx_r1.form.query = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function Header_Conditional_16_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onQueryInput($event)); })("focus", function Header_Conditional_16_Template_input_focus_21_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onQueryInput(ctx_r1.form.query)); })("blur", function Header_Conditional_16_Template_input_blur_21_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeDropdown("query", 150)); })("keydown.enter", function Header_Conditional_16_Template_input_keydown_enter_21_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.search()); })("keydown.arrowdown", function Header_Conditional_16_Template_input_keydown_arrowdown_21_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.moveDown("query")); })("keydown.arrowup", function Header_Conditional_16_Template_input_keydown_arrowup_21_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.moveUp("query")); });
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(22, Header_Conditional_16_Conditional_22_Template, 3, 0, "ul", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 37)(24, "app-button-01", 38);
    i0.ɵɵlistener("clicked", function Header_Conditional_16_Template_app_button_01_clicked_24_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.search()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 39)(26, "span", 40);
    i0.ɵɵtext(27, "Popular:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 41);
    i0.ɵɵrepeaterCreate(29, Header_Conditional_16_For_30_Template, 2, 1, "button", 42, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(31, "div", 43)(32, "input", 44);
    i0.ɵɵtwoWayListener("ngModelChange", function Header_Conditional_16_Template_input_ngModelChange_32_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.query, $event) || (ctx_r1.form.query = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keydown.enter", function Header_Conditional_16_Template_input_keydown_enter_32_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.search()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "app-button-01", 38);
    i0.ɵɵlistener("clicked", function Header_Conditional_16_Template_app_button_01_clicked_33_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.search()); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.title, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.subtitle, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.department);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.departmentSuggestions.length && ctx_r1.dropdowns.department ? 12 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.city);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.citySuggestions.length && ctx_r1.dropdowns.city ? 17 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.query);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.querySuggestions.length && ctx_r1.dropdowns.query ? 22 : -1);
    i0.ɵɵadvance(7);
    i0.ɵɵrepeater(ctx_r1.quickTags);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.query);
} }
const ROUTES = {
    HOME: '/',
    EXPLORE: '/explore',
    LOGIN: '/login',
    REGISTER: '/select-register',
    PROFILE: '/userProfile',
    OWNER: '/listProperty',
    DASHBOARDOWNER: '/dashboard/owner',
    ADMIN: '/dashboard/admin',
};
const QUERY_OPTIONS = [
    'Jacuzzi',
    'Suite',
    'Parqueadero',
    'Wifi',
    'Piscina',
    'Habitación doble',
    'Habitación sencilla',
    'Aire acondicionado',
    'TV',
    'Terraza',
    'Bar',
    'Desayuno incluido',
];
export class Header {
    title = 'ENCUENTRA EL LUGAR PERFECTO PARA TU MOMENTO ESPECIAL';
    subtitle = 'Descubre moteles y espacios únicos cerca de ti, de forma rápida y segura.';
    router = inject(Router);
    auth = inject(AuthService);
    searchService = inject(SearchService);
    colombiaService = inject(ColombiaService);
    platformId = inject(PLATFORM_ID);
    // Subject para limpiar suscripciones
    destroy$ = new Subject();
    ROUTES = ROUTES;
    AppRoutes = routes;
    isLogged = this.auth.isLogged;
    role = this.auth.role;
    // ── Ruta actual ───────────────────────────────────────────────
    currentUrl = signal('/', ...(ngDevMode ? [{ debugName: "currentUrl" }] : []));
    /** True solo cuando estamos en home (path '/') */
    isHome = computed(() => this.currentUrl() === '/', ...(ngDevMode ? [{ debugName: "isHome" }] : []));
    /** Qué link está activo para resaltarlo de rojo */
    isActive(route) {
        return this.currentUrl() === route;
    }
    // ── Scroll sticky nav (solo desktop, solo en home) ────────────
    lastScrollY = 0;
    _showSticky = signal(false, ...(ngDevMode ? [{ debugName: "_showSticky" }] : []));
    /** El nav sticky solo aparece si: scrolled > 100px Y scrolling hacia arriba */
    showStickyNav = computed(() => this._showSticky(), ...(ngDevMode ? [{ debugName: "showStickyNav" }] : []));
    onScroll() {
        if (!isPlatformBrowser(this.platformId))
            return;
        if (!this.isHome())
            return;
        const currentY = window.scrollY;
        const scrollingUp = currentY < this.lastScrollY;
        const pastHero = currentY > 100;
        // Mostrar sticky: usuario scrolleó suficiente Y va hacia arriba
        this._showSticky.set(scrollingUp && pastHero);
        this.lastScrollY = currentY;
    }
    // ── Autocomplete ──────────────────────────────────────────────
    form = { department: '', city: '', query: '' };
    allDepartments = [];
    colombiaData = [];
    departmentSuggestions = [];
    citySuggestions = [];
    querySuggestions = [];
    dropdowns = { department: false, city: false, query: false };
    activeIndex = { department: -1, city: -1, query: -1 };
    quickTags = ['Jacuzzi', 'Suite', 'Parqueadero', 'Wifi', 'Piscina'];
    // ─────────────────────────────────────────────────────────────
    constructor() {
        this.currentUrl.set(this.cleanUrl(this.router.url));
        this.router.events
            .pipe(filter((e) => e instanceof NavigationEnd), takeUntil(this.destroy$))
            .subscribe(() => {
            this.currentUrl.set(this.cleanUrl(this.router.url));
            // Resetear sticky al cambiar de ruta
            this._showSticky.set(false);
            this.lastScrollY = 0;
        });
    }
    cleanUrl(url) {
        return url.split('#')[0].split('?')[0] || '/';
    }
    ngOnInit() {
        this.colombiaService
            .getAll()
            .pipe(takeUntil(this.destroy$))
            .subscribe((data) => {
            this.colombiaData = data;
            this.allDepartments = data.map((d) => d.name);
        });
    }
    ngOnDestroy() {
        // Limpiar todas las suscripciones
        this.destroy$.next();
        this.destroy$.complete();
    }
    // ── Autocomplete: Departamento ────────────────────────────────
    onDepartmentInput(value) {
        this.activeIndex.department = -1;
        if (!value.trim()) {
            this.departmentSuggestions = [];
            this.dropdowns.department = false;
            return;
        }
        const q = value.toLowerCase();
        this.departmentSuggestions = this.allDepartments
            .filter((d) => d.toLowerCase().includes(q))
            .slice(0, 7);
        this.dropdowns.department = this.departmentSuggestions.length > 0;
    }
    selectDepartment(dep) {
        this.form.department = dep;
        this.departmentSuggestions = [];
        this.dropdowns.department = false;
        this.form.city = '';
        this.citySuggestions = [];
    }
    // ── Autocomplete: Municipio ───────────────────────────────────
    onCityInput(value) {
        this.activeIndex.city = -1;
        if (!value.trim()) {
            this.citySuggestions = [];
            this.dropdowns.city = false;
            return;
        }
        const q = value.toLowerCase();
        const selectedDep = this.colombiaData.find((d) => d.name.toLowerCase() === this.form.department.toLowerCase());
        const pool = selectedDep
            ? selectedDep.municipalities
            : this.colombiaData.flatMap((d) => d.municipalities);
        this.citySuggestions = pool.filter((c) => c.toLowerCase().includes(q)).slice(0, 7);
        this.dropdowns.city = this.citySuggestions.length > 0;
    }
    selectCity(city) {
        this.form.city = city;
        this.citySuggestions = [];
        this.dropdowns.city = false;
    }
    // ── Autocomplete: Query ───────────────────────────────────────
    onQueryInput(value) {
        this.activeIndex.query = -1;
        if (!value.trim()) {
            this.querySuggestions = [];
            this.dropdowns.query = false;
            return;
        }
        const q = value.toLowerCase();
        this.querySuggestions = QUERY_OPTIONS.filter((o) => o.toLowerCase().includes(q)).slice(0, 6);
        this.dropdowns.query = this.querySuggestions.length > 0;
    }
    selectQuery(sug) {
        this.form.query = sug;
        this.querySuggestions = [];
        this.dropdowns.query = false;
    }
    closeDropdown(field, delay = 150) {
        setTimeout(() => {
            this.dropdowns[field] = false;
        }, delay);
    }
    // ── Teclado ───────────────────────────────────────────────────
    moveDown(field) {
        const list = this.getSuggestions(field);
        if (!list.length)
            return;
        this.activeIndex[field] = Math.min(this.activeIndex[field] + 1, list.length - 1);
        this.applyKeyboardSelection(field);
    }
    moveUp(field) {
        const list = this.getSuggestions(field);
        if (!list.length)
            return;
        this.activeIndex[field] = Math.max(this.activeIndex[field] - 1, 0);
        this.applyKeyboardSelection(field);
    }
    getSuggestions(field) {
        if (field === 'department')
            return this.departmentSuggestions;
        if (field === 'city')
            return this.citySuggestions;
        return this.querySuggestions;
    }
    applyKeyboardSelection(field) {
        const idx = this.activeIndex[field];
        const list = this.getSuggestions(field);
        if (idx < 0 || idx >= list.length)
            return;
        if (field === 'department')
            this.form.department = list[idx];
        if (field === 'city')
            this.form.city = list[idx];
        if (field === 'query')
            this.form.query = list[idx];
    }
    // ── Buscar ────────────────────────────────────────────────────
    search() {
        this.dropdowns = { department: false, city: false, query: false };
        this.searchService.set({
            department: this.form.department.trim(),
            city: this.form.city.trim(),
            query: this.form.query.trim(),
        });
        this.router.navigate([ROUTES.EXPLORE]);
    }
    quickSearch(tag) {
        this.form.query = tag;
        this.search();
    }
    navigateTo(route) {
        this.router.navigate([route]);
    }
    logout() {
        this.auth.logout();
        this.router.navigate([ROUTES.HOME]);
    }
    static ɵfac = function Header_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Header)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Header, selectors: [["app-header"]], hostBindings: function Header_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function Header_scroll_HostBindingHandler() { return ctx.onScroll(); }, i0.ɵɵresolveWindow);
        } }, decls: 17, vars: 13, consts: [[1, "fixed", "top-0", "left-0", "right-0", "z-50", "hidden", "lg:flex", "transition-transform", "duration-300", "ease-in-out", 3, "-translate-y-full", "translate-y-0"], [1, "w-full", "relative"], [1, "absolute", "inset-0", "bg-linear-to-b", "from-black/80", "via-black/50", "to-black/20", "pointer-events-none"], [1, "relative", "z-10", "w-full", "px-5", "pt-4", "flex", "flex-col"], [1, "flex", "items-center", "justify-center", "lg:justify-between"], [1, "navlinks", "hidden", "lg:flex", "items-center", "gap-6"], [1, "text-sm", "transition", "cursor-pointer", "font-medium", 3, "click"], ["href", "#offerts", 1, "text-sm", "transition", "cursor-pointer", "font-medium", "text-white/70", "hover:text-white"], [1, "logandreg", "hidden", "lg:flex", "gap-4", "items-center"], [1, "w-full", "flex", "flex-col", "items-center", "justify-center", "pt-20", "pb-16", "px-4", "gap-10"], [1, "fixed", "top-0", "left-0", "right-0", "z-50", "hidden", "lg:flex", "transition-transform", "duration-300", "ease-in-out"], [1, "w-full", "px-8", "py-3", "flex", "items-center", "justify-between", "bg-white/5", "backdrop-blur-xl", "border-b", "border-white/10", "shadow-lg"], [1, "flex", "items-center", "gap-6"], [1, "text-sm", "transition", "cursor-pointer", 3, "click"], ["href", "#offerts", 1, "text-sm", "transition", "cursor-pointer", "text-white/70", "hover:text-white"], [1, "flex", "items-center", "gap-4"], [1, "text-sm", "text-white/60", "hover:text-white", "transition", "cursor-pointer", 3, "click"], [1, "px-4", "py-1.5", "rounded-full", "border", "border-red-600/50", "text-red-400", "hover:bg-red-600/10", "transition", "cursor-pointer", "text-sm", 3, "click"], [1, "text-sm", "text-white/70", "hover:text-white", "transition", "cursor-pointer"], [1, "text-sm", "text-white/40", "hover:text-red-400", "transition", "cursor-pointer", 3, "click"], [1, "text-sm", "text-white/70", "hover:text-white", "transition", "cursor-pointer", 3, "click"], [1, "text-white/60", "hover:text-white", "transition", "cursor-pointer", "text-sm", 3, "click"], [1, "px-4", "py-1.5", "rounded-full", "border", "border-red-600/50", "text-red-400", "hover:bg-red-600/10", "hover:border-red-500", "transition", "cursor-pointer", "text-sm", 3, "click"], [1, "text-white/70", "hover:text-white", "transition", "cursor-pointer", "text-sm"], [1, "text-white/40", "hover:text-red-400", "transition", "cursor-pointer", "text-sm", 3, "click"], [1, "text-white/70", "hover:text-white", "transition", "cursor-pointer", "text-sm", 3, "click"], [1, "flex", "flex-col", "text-center", "text-white", "max-w-3xl", "gap-4"], [1, "text-3xl", "sm:text-4xl", "lg:text-5xl", "font-extrabold", "leading-tight", "tracking-tight", "drop-shadow-lg"], [1, "text-sm", "sm:text-base", "text-white/60", "max-w-xl", "mx-auto", "drop-shadow"], [1, "hidden", "lg:flex", "w-full", "max-w-5xl", "flex-col", "gap-3"], [1, "flex", "w-full", "items-stretch", "rounded-2xl", "overflow-visible", "border", "border-white/10", "bg-white/6", "backdrop-blur-md", "shadow-2xl"], [1, "flex-1", "flex", "flex-col", "px-5", "py-3.5", "border-r", "border-white/8", "min-w-0", "relative"], [1, "text-[10px]", "font-semibold", "uppercase", "tracking-widest", "text-white/40", "mb-1.5"], ["type", "text", "placeholder", "Quind\u00EDo, Antioquia...", "autocomplete", "off", 1, "bg-transparent", "text-white", "text-sm", "outline-none", "placeholder-white/25", "w-full", 3, "ngModelChange", "focus", "blur", "keydown.enter", "keydown.arrowdown", "keydown.arrowup", "ngModel"], [1, "absolute", "top-full", "left-0", "right-0", "mt-1", "z-50", "bg-[#13151a]", "border", "border-white/10", "rounded-xl", "overflow-hidden", "shadow-2xl"], ["type", "text", "placeholder", "Armenia, Calarc\u00E1...", "autocomplete", "off", 1, "bg-transparent", "text-white", "text-sm", "outline-none", "placeholder-white/25", "w-full", 3, "ngModelChange", "focus", "blur", "keydown.enter", "keydown.arrowdown", "keydown.arrowup", "ngModel"], ["type", "text", "placeholder", "Jacuzzi, suite, parqueadero...", "autocomplete", "off", 1, "bg-transparent", "text-white", "text-sm", "outline-none", "placeholder-white/25", "w-full", 3, "ngModelChange", "focus", "blur", "keydown.enter", "keydown.arrowdown", "keydown.arrowup", "ngModel"], [1, "flex", "items-center", "px-3"], ["text", "Buscar", 3, "clicked"], [1, "flex", "items-center", "gap-2", "px-1"], [1, "text-white/30", "text-xs", "shrink-0"], [1, "flex", "flex-wrap", "gap-2"], [1, "text-xs", "px-3", "py-1", "rounded-full", "border", "border-white/10", "text-white/40", "hover:border-white/25", "hover:text-white/70", "transition", "cursor-pointer", "bg-white/[0.03]"], [1, "flex", "lg:hidden", "w-full", "max-w-md", "gap-2"], ["type", "text", "placeholder", "Ciudad, motel, jacuzzi...", 1, "flex-1", "bg-white/10", "border", "border-white/15", "rounded-xl", "px-4", "py-2.5", "text-white", "text-sm", "outline-none", "placeholder-white/30", "focus:border-white/30", "transition", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "px-4", "py-2.5", "text-sm", "cursor-pointer", "transition-colors", "flex", "items-center", "gap-2", 3, "class"], [1, "px-4", "py-2.5", "text-sm", "cursor-pointer", "transition-colors", "flex", "items-center", "gap-2", 3, "mousedown"], [1, "text-red-500/60", "text-xs"], [1, "text-xs", "px-3", "py-1", "rounded-full", "border", "border-white/10", "text-white/40", "hover:border-white/25", "hover:text-white/70", "transition", "cursor-pointer", "bg-white/[0.03]", 3, "click"]], template: function Header_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, Header_Conditional_0_Template, 13, 10, "div", 0);
            i0.ɵɵelementStart(1, "header", 1);
            i0.ɵɵconditionalCreate(2, Header_Conditional_2_Template, 1, 0, "div", 2);
            i0.ɵɵelementStart(3, "div", 3)(4, "nav", 4);
            i0.ɵɵelement(5, "app-logo-01");
            i0.ɵɵelementStart(6, "div", 5)(7, "a", 6);
            i0.ɵɵlistener("click", function Header_Template_a_click_7_listener() { return ctx.navigateTo(ctx.ROUTES.HOME); });
            i0.ɵɵtext(8, " Inicio ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "a", 6);
            i0.ɵɵlistener("click", function Header_Template_a_click_9_listener() { return ctx.navigateTo(ctx.ROUTES.EXPLORE); });
            i0.ɵɵtext(10, " Explorar ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "a", 7);
            i0.ɵɵtext(12, " Ofertas ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 8);
            i0.ɵɵconditionalCreate(14, Header_Conditional_14_Template, 4, 0);
            i0.ɵɵconditionalCreate(15, Header_Conditional_15_Template, 5, 1);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(16, Header_Conditional_16_Template, 34, 9, "section", 9);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.isHome() ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵstyleMap(ctx.isHome() ? "background-image: url(/assets/images/banner-bg-image-02.png); background-size: cover; background-position: center;" : "");
            i0.ɵɵclassProp("min-h-[600px]", ctx.isHome());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isHome() ? 2 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵclassMap(ctx.isActive(ctx.ROUTES.HOME) ? "text-red-400" : "text-white/70 hover:text-white");
            i0.ɵɵadvance(2);
            i0.ɵɵclassMap(ctx.isActive(ctx.ROUTES.EXPLORE) ? "text-red-400" : "text-white/70 hover:text-white");
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(!ctx.isLogged() ? 14 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isLogged() ? 15 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isHome() ? 16 : -1);
        } }, dependencies: [Logo01, Button01, FormsModule, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Header, [{
        type: Component,
        args: [{ selector: 'app-header', standalone: true, imports: [Logo01, Button01, FormsModule], template: "<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n     NAV STICKY \u2014 aparece al hacer scroll hacia arriba (solo desktop)\n     Solo visible cuando: isHome && scrolled && scrollingUp\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n@if (isHome()) {\n  <div\n    class=\"fixed top-0 left-0 right-0 z-50 hidden lg:flex\n           transition-transform duration-300 ease-in-out\"\n    [class.-translate-y-full]=\"!showStickyNav()\"\n    [class.translate-y-0]=\"showStickyNav()\">\n    <div class=\"w-full px-8 py-3 flex items-center justify-between\n                bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-lg\">\n\n      <app-logo-01></app-logo-01>\n\n      <div class=\"flex items-center gap-6\">\n        <a (click)=\"navigateTo(ROUTES.HOME)\"\n          class=\"text-sm transition cursor-pointer\"\n          [class]=\"isActive(ROUTES.HOME) ? 'text-red-400 font-semibold' : 'text-white/70 hover:text-white'\">\n          Inicio\n        </a>\n        <a (click)=\"navigateTo(ROUTES.EXPLORE)\"\n          class=\"text-sm transition cursor-pointer\"\n          [class]=\"isActive(ROUTES.EXPLORE) ? 'text-red-400 font-semibold' : 'text-white/70 hover:text-white'\">\n          Explorar\n        </a>\n        <a href=\"#offerts\"\n          class=\"text-sm transition cursor-pointer text-white/70 hover:text-white\">\n          Ofertas\n        </a>\n      </div>\n\n      <div class=\"flex items-center gap-4\">\n        @if (!isLogged()) {\n          <a (click)=\"navigateTo(ROUTES.LOGIN)\"\n            class=\"text-sm text-white/60 hover:text-white transition cursor-pointer\">\n            Inicia sesi\u00F3n\n          </a>\n          <a (click)=\"navigateTo(ROUTES.REGISTER)\"\n            class=\"px-4 py-1.5 rounded-full border border-red-600/50 text-red-400\n                   hover:bg-red-600/10 transition cursor-pointer text-sm\">\n            Registrarse\n          </a>\n        }\n        @if (isLogged()) {\n          @switch (role()) {\n            @case (7392841056473829) {\n              <a (click)=\"navigateTo(ROUTES.ADMIN)\"\n                class=\"text-sm text-white/70 hover:text-white transition cursor-pointer\">Panel Admin</a>\n            }\n            @case (3847261094857362) {\n              <a (click)=\"navigateTo(ROUTES.OWNER)\"\n                class=\"text-sm text-white/70 hover:text-white transition cursor-pointer\">Propiedades</a>\n              <a (click)=\"navigateTo(ROUTES.PROFILE)\"\n                class=\"text-sm text-white/70 hover:text-white transition cursor-pointer\">Mi Perfil</a>\n            }\n            @default {\n              <a (click)=\"navigateTo(ROUTES.PROFILE)\"\n                class=\"text-sm text-white/70 hover:text-white transition cursor-pointer\">Mi Perfil</a>\n            }\n          }\n          <a (click)=\"logout()\"\n            class=\"text-sm text-white/40 hover:text-red-400 transition cursor-pointer\">\n            Cerrar sesi\u00F3n\n          </a>\n        }\n      </div>\n\n    </div>\n  </div>\n}\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n     HEADER PRINCIPAL\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<header\n  class=\"w-full relative\"\n  [class.min-h-[600px]]=\"isHome()\"\n  [style]=\"isHome() ? 'background-image: url(/assets/images/banner-bg-image-02.png); background-size: cover; background-position: center;' : ''\">\n\n  <!-- Degradado oscuro solo en home \u2014 de arriba hacia abajo -->\n  @if (isHome()) {\n    <div class=\"absolute inset-0 bg-linear-to-b from-black/80 via-black/50 to-black/20 pointer-events-none\"></div>\n  }\n\n  <!-- Contenido relativo sobre el degradado -->\n  <div class=\"relative z-10 w-full px-5 pt-4 flex flex-col\">\n\n    <!-- Nav principal -->\n    <nav class=\"flex items-center justify-center lg:justify-between\">\n      <app-logo-01></app-logo-01>\n\n      <div class=\"navlinks hidden lg:flex items-center gap-6\">\n        <a (click)=\"navigateTo(ROUTES.HOME)\"\n          class=\"text-sm transition cursor-pointer font-medium\"\n          [class]=\"isActive(ROUTES.HOME) ? 'text-red-400' : 'text-white/70 hover:text-white'\">\n          Inicio\n        </a>\n        <a (click)=\"navigateTo(ROUTES.EXPLORE)\"\n          class=\"text-sm transition cursor-pointer font-medium\"\n          [class]=\"isActive(ROUTES.EXPLORE) ? 'text-red-400' : 'text-white/70 hover:text-white'\">\n          Explorar\n        </a>\n        <a href=\"#offerts\"\n          class=\"text-sm transition cursor-pointer font-medium text-white/70 hover:text-white\">\n          Ofertas\n        </a>\n      </div>\n\n      <div class=\"logandreg hidden lg:flex gap-4 items-center\">\n        @if (!isLogged()) {\n          <a (click)=\"navigateTo(ROUTES.LOGIN)\"\n            class=\"text-white/60 hover:text-white transition cursor-pointer text-sm\">\n            Inicia sesi\u00F3n\n          </a>\n          <a (click)=\"navigateTo(ROUTES.REGISTER)\"\n            class=\"px-4 py-1.5 rounded-full border border-red-600/50 text-red-400\n                   hover:bg-red-600/10 hover:border-red-500 transition cursor-pointer text-sm\">\n            Registrarse\n          </a>\n        }\n        @if (isLogged()) {\n          @switch (role()) {\n            @case (7392841056473829) {\n              <a (click)=\"navigateTo(ROUTES.ADMIN)\"\n                class=\"text-white/70 hover:text-white transition cursor-pointer text-sm\">Panel Admin</a>\n            }\n            @case (3847261094857362) {\n              <a (click)=\"navigateTo(ROUTES.OWNER)\"\n                class=\"text-white/70 hover:text-white transition cursor-pointer text-sm\">Propiedades</a>\n              <a (click)=\"navigateTo(ROUTES.DASHBOARDOWNER)\"\n                class=\"text-white/70 hover:text-white transition cursor-pointer text-sm\">Dashboard</a>\n              <a (click)=\"navigateTo(ROUTES.PROFILE)\"\n                class=\"text-white/70 hover:text-white transition cursor-pointer text-sm\">Mi Perfil</a>\n            }\n            @default {\n              <a (click)=\"navigateTo(ROUTES.PROFILE)\"\n                class=\"text-white/70 hover:text-white transition cursor-pointer text-sm\">Mi Perfil</a>\n            }\n          }\n          <a (click)=\"logout()\"\n            class=\"text-white/40 hover:text-red-400 transition cursor-pointer text-sm\">\n            Cerrar sesi\u00F3n\n          </a>\n        }\n      </div>\n    </nav>\n\n    <!-- Hero + Search \u2014 solo en home -->\n    @if (isHome()) {\n      <section class=\"w-full flex flex-col items-center justify-center pt-20 pb-16 px-4 gap-10\">\n\n        <!-- Hero text -->\n        <div class=\"flex flex-col text-center text-white max-w-3xl gap-4\">\n          <h2 class=\"text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-lg\">\n            {{ title }}\n          </h2>\n          <p class=\"text-sm sm:text-base text-white/60 max-w-xl mx-auto drop-shadow\">\n            {{ subtitle }}\n          </p>\n        </div>\n\n        <!-- Search bar desktop -->\n        <div class=\"hidden lg:flex w-full max-w-5xl flex-col gap-3\">\n          <div class=\"flex w-full items-stretch rounded-2xl overflow-visible\n                      border border-white/10 bg-white/6 backdrop-blur-md shadow-2xl\">\n\n            <!-- Departamento -->\n            <div class=\"flex-1 flex flex-col px-5 py-3.5 border-r border-white/8 min-w-0 relative\">\n              <label class=\"text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-1.5\">\n                Departamento\n              </label>\n              <input\n                type=\"text\" placeholder=\"Quind\u00EDo, Antioquia...\"\n                autocomplete=\"off\"\n                class=\"bg-transparent text-white text-sm outline-none placeholder-white/25 w-full\"\n                [(ngModel)]=\"form.department\"\n                (ngModelChange)=\"onDepartmentInput($event)\"\n                (focus)=\"onDepartmentInput(form.department)\"\n                (blur)=\"closeDropdown('department', 150)\"\n                (keydown.enter)=\"search()\"\n                (keydown.arrowdown)=\"moveDown('department')\"\n                (keydown.arrowup)=\"moveUp('department')\" />\n              @if (departmentSuggestions.length && dropdowns.department) {\n                <ul class=\"absolute top-full left-0 right-0 mt-1 z-50\n                           bg-[#13151a] border border-white/10 rounded-xl overflow-hidden shadow-2xl\">\n                  @for (dep of departmentSuggestions; track dep; let i = $index) {\n                    <li (mousedown)=\"selectDepartment(dep)\"\n                      class=\"px-4 py-2.5 text-sm cursor-pointer transition-colors flex items-center gap-2\"\n                      [class]=\"i === activeIndex.department ? 'bg-red-700/30 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'\">\n                      <span class=\"text-red-500/60 text-xs\">\uD83D\uDCCD</span>{{ dep }}\n                    </li>\n                  }\n                </ul>\n              }\n            </div>\n\n            <!-- Municipio -->\n            <div class=\"flex-1 flex flex-col px-5 py-3.5 border-r border-white/8 min-w-0 relative\">\n              <label class=\"text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-1.5\">\n                Municipio\n              </label>\n              <input\n                type=\"text\" placeholder=\"Armenia, Calarc\u00E1...\"\n                autocomplete=\"off\"\n                class=\"bg-transparent text-white text-sm outline-none placeholder-white/25 w-full\"\n                [(ngModel)]=\"form.city\"\n                (ngModelChange)=\"onCityInput($event)\"\n                (focus)=\"onCityInput(form.city)\"\n                (blur)=\"closeDropdown('city', 150)\"\n                (keydown.enter)=\"search()\"\n                (keydown.arrowdown)=\"moveDown('city')\"\n                (keydown.arrowup)=\"moveUp('city')\" />\n              @if (citySuggestions.length && dropdowns.city) {\n                <ul class=\"absolute top-full left-0 right-0 mt-1 z-50\n                           bg-[#13151a] border border-white/10 rounded-xl overflow-hidden shadow-2xl\">\n                  @for (city of citySuggestions; track city; let i = $index) {\n                    <li (mousedown)=\"selectCity(city)\"\n                      class=\"px-4 py-2.5 text-sm cursor-pointer transition-colors flex items-center gap-2\"\n                      [class]=\"i === activeIndex.city ? 'bg-red-700/30 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'\">\n                      <span class=\"text-red-500/60 text-xs\">\uD83C\uDFD9\uFE0F</span>{{ city }}\n                    </li>\n                  }\n                </ul>\n              }\n            </div>\n\n            <!-- B\u00FAsqueda libre -->\n            <div class=\"flex-1 flex flex-col px-5 py-3.5 border-r border-white/8 min-w-0 relative\">\n              <label class=\"text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-1.5\">\n                \u00BFQu\u00E9 buscas?\n              </label>\n              <input\n                type=\"text\" placeholder=\"Jacuzzi, suite, parqueadero...\"\n                autocomplete=\"off\"\n                class=\"bg-transparent text-white text-sm outline-none placeholder-white/25 w-full\"\n                [(ngModel)]=\"form.query\"\n                (ngModelChange)=\"onQueryInput($event)\"\n                (focus)=\"onQueryInput(form.query)\"\n                (blur)=\"closeDropdown('query', 150)\"\n                (keydown.enter)=\"search()\"\n                (keydown.arrowdown)=\"moveDown('query')\"\n                (keydown.arrowup)=\"moveUp('query')\" />\n              @if (querySuggestions.length && dropdowns.query) {\n                <ul class=\"absolute top-full left-0 right-0 mt-1 z-50\n                           bg-[#13151a] border border-white/10 rounded-xl overflow-hidden shadow-2xl\">\n                  @for (sug of querySuggestions; track sug; let i = $index) {\n                    <li (mousedown)=\"selectQuery(sug)\"\n                      class=\"px-4 py-2.5 text-sm cursor-pointer transition-colors flex items-center gap-2\"\n                      [class]=\"i === activeIndex.query ? 'bg-red-700/30 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'\">\n                      <span class=\"text-red-500/60 text-xs\">\uD83D\uDD0D</span>{{ sug }}\n                    </li>\n                  }\n                </ul>\n              }\n            </div>\n\n            <!-- Bot\u00F3n -->\n            <div class=\"flex items-center px-3\">\n              <app-button-01 text=\"Buscar\" (clicked)=\"search()\"></app-button-01>\n            </div>\n          </div>\n\n          <!-- Tags r\u00E1pidos -->\n          <div class=\"flex items-center gap-2 px-1\">\n            <span class=\"text-white/30 text-xs shrink-0\">Popular:</span>\n            <div class=\"flex flex-wrap gap-2\">\n              @for (tag of quickTags; track tag) {\n                <button (click)=\"quickSearch(tag)\"\n                  class=\"text-xs px-3 py-1 rounded-full border border-white/10 text-white/40\n                         hover:border-white/25 hover:text-white/70 transition cursor-pointer bg-white/[0.03]\">\n                  {{ tag }}\n                </button>\n              }\n            </div>\n          </div>\n        </div>\n\n        <!-- Search bar mobile -->\n        <div class=\"flex lg:hidden w-full max-w-md gap-2\">\n          <input type=\"text\" placeholder=\"Ciudad, motel, jacuzzi...\"\n            class=\"flex-1 bg-white/10 border border-white/15 rounded-xl px-4 py-2.5\n                   text-white text-sm outline-none placeholder-white/30 focus:border-white/30 transition\"\n            [(ngModel)]=\"form.query\"\n            (keydown.enter)=\"search()\" />\n          <app-button-01 text=\"Buscar\" (clicked)=\"search()\"></app-button-01>\n        </div>\n\n      </section>\n    }\n\n  </div>\n</header>" }]
    }], () => [], { onScroll: [{
            type: HostListener,
            args: ['window:scroll']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Header, { className: "Header", filePath: "src/app/layout/header/header.ts", lineNumber: 55 }); })();
