import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { RoomService } from '../../core/services/room.service';
import { validateEmail } from '../../core/utils/validation.utils';
import { Map as AppMap } from '../../components/map/map';
import { PaymentModal } from '../../components/payment-modal/payment-modal';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/dialog";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
const _c0 = a0 => ["/motelProfile", a0];
function ProductRoom_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 3);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 4);
    i0.ɵɵelement(3, "circle", 5)(4, "path", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "span", 7);
    i0.ɵɵtext(6, "Cargando habitaci\u00F3n...");
    i0.ɵɵelementEnd()()();
} }
function ProductRoom_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 8);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 9);
    i0.ɵɵelement(3, "path", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "p", 11);
    i0.ɵɵtext(5, "Error al cargar la habitaci\u00F3n");
    i0.ɵɵelementEnd()()();
} }
function ProductRoom_Conditional_3_Conditional_2_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62);
    i0.ɵɵelement(1, "img", 63)(2, "div", 64)(3, "div", 65);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const photo_r2 = ctx.$implicit;
    const $index_r3 = ctx.$index;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", photo_r2, i0.ɵɵsanitizeUrl)("alt", "Imagen " + ($index_r3 + 1) + " \u2014 " + ctx_r3.room.roomType);
} }
function ProductRoom_Conditional_3_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, ProductRoom_Conditional_3_Conditional_2_For_1_Template, 4, 2, "div", 62, i0.ɵɵrepeaterTrackByIndex);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r3.room.imageUrls);
} }
function ProductRoom_Conditional_3_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelement(1, "img", 66);
    i0.ɵɵelementEnd();
} }
function ProductRoom_Conditional_3_Conditional_4_For_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 75);
    i0.ɵɵlistener("click", function ProductRoom_Conditional_3_Conditional_4_For_8_Template_button_click_0_listener() { const $index_r7 = i0.ɵɵrestoreView(_r6).$index; const ctx_r3 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r3.goToSlide($index_r7)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const $index_r7 = ctx.$index;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", ctx_r3.currentSlide === $index_r7 ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/70");
} }
function ProductRoom_Conditional_3_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 67);
    i0.ɵɵlistener("click", function ProductRoom_Conditional_3_Conditional_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.prevSlide()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 68);
    i0.ɵɵelement(2, "path", 69);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "button", 70);
    i0.ɵɵlistener("click", function ProductRoom_Conditional_3_Conditional_4_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.nextSlide()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(4, "svg", 68);
    i0.ɵɵelement(5, "path", 71);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "div", 72);
    i0.ɵɵrepeaterCreate(7, ProductRoom_Conditional_3_Conditional_4_For_8_Template, 1, 1, "button", 73, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 74);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵrepeater(ctx_r3.room.imageUrls);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", ctx_r3.currentSlide + 1, " / ", ctx_r3.room.imageUrls.length, " ");
} }
function ProductRoom_Conditional_3_Conditional_5_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 77);
    i0.ɵɵlistener("click", function ProductRoom_Conditional_3_Conditional_5_For_2_Template_button_click_0_listener() { const $index_r9 = i0.ɵɵrestoreView(_r8).$index; const ctx_r3 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r3.goToSlide($index_r9)); });
    i0.ɵɵelement(1, "img", 78);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const photo_r10 = ctx.$implicit;
    const $index_r9 = ctx.$index;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", ctx_r3.currentSlide === $index_r9 ? "border-white opacity-100" : "border-transparent opacity-50 hover:opacity-80");
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", photo_r10, i0.ɵɵsanitizeUrl);
} }
function ProductRoom_Conditional_3_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵrepeaterCreate(1, ProductRoom_Conditional_3_Conditional_5_For_2_Template, 2, 2, "button", 76, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r3.room.imageUrls.slice(0, 6));
} }
function ProductRoom_Conditional_3_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 79);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 80);
    i0.ɵɵtext(3, "\u203A");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, ctx_r3.room.motelId));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r3.room.motelName, " ");
} }
function ProductRoom_Conditional_3_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 33);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 81);
    i0.ɵɵelement(2, "path", 82);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(5, "svg", 83);
    i0.ɵɵelement(6, "path", 71);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, ctx_r3.room.motelId));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.room.motelName);
} }
function ProductRoom_Conditional_3_Conditional_39_For_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i");
} if (rf & 2) {
    const svcId_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMap(ctx_r3.getServiceIcon(svcId_r11) + " text-[#c8a97e] text-xs");
} }
function ProductRoom_Conditional_3_Conditional_39_For_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 86);
    i0.ɵɵelement(1, "path", 87);
    i0.ɵɵelementEnd();
} }
function ProductRoom_Conditional_3_Conditional_39_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 84);
    i0.ɵɵconditionalCreate(1, ProductRoom_Conditional_3_Conditional_39_For_2_Conditional_1_Template, 1, 2, "i", 85)(2, ProductRoom_Conditional_3_Conditional_39_For_2_Conditional_2_Template, 2, 0, ":svg:svg", 86);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const svcId_r11 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r3.getServiceIcon(svcId_r11) ? 1 : 2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.getServiceName(svcId_r11), " ");
} }
function ProductRoom_Conditional_3_Conditional_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵrepeaterCreate(1, ProductRoom_Conditional_3_Conditional_39_For_2_Template, 4, 2, "span", 84, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r3.room.serviceIds);
} }
function ProductRoom_Conditional_3_Conditional_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1, "Sin servicios registrados.");
    i0.ɵɵelementEnd();
} }
function ProductRoom_Conditional_3_Conditional_59_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52)(1, "p", 88);
    i0.ɵɵtext(2, " Esta habitaci\u00F3n est\u00E1 disponible. Realiza tu reserva ahora y confirma tu estad\u00EDa. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 89);
    i0.ɵɵlistener("click", function ProductRoom_Conditional_3_Conditional_59_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r12); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.openPayment()); });
    i0.ɵɵtext(4, " Reservar ahora ");
    i0.ɵɵelementEnd()();
} }
function ProductRoom_Conditional_3_Conditional_60_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 97);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 100);
    i0.ɵɵelement(2, "path", 101);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " \u00A1Te avisaremos cuando est\u00E9 disponible! ");
    i0.ɵɵelementEnd();
} }
function ProductRoom_Conditional_3_Conditional_60_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 98);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 100);
    i0.ɵɵelement(2, "path", 102);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.notifyError, " ");
} }
function ProductRoom_Conditional_3_Conditional_60_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53)(1, "div", 90);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 91);
    i0.ɵɵelement(3, "path", 92);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "p", 93);
    i0.ɵɵtext(5, " Esta habitaci\u00F3n no est\u00E1 disponible ahora mismo. D\u00E9janos tu email y te avisamos cuando se libere. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 94)(7, "label", 95);
    i0.ɵɵtext(8, "Tu email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "input", 96);
    i0.ɵɵtwoWayListener("ngModelChange", function ProductRoom_Conditional_3_Conditional_60_Template_input_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r3 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r3.notifyEmail, $event) || (ctx_r3.notifyEmail = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(10, ProductRoom_Conditional_3_Conditional_60_Conditional_10_Template, 4, 0, "div", 97);
    i0.ɵɵconditionalCreate(11, ProductRoom_Conditional_3_Conditional_60_Conditional_11_Template, 4, 1, "div", 98);
    i0.ɵɵelementStart(12, "button", 99);
    i0.ɵɵlistener("click", function ProductRoom_Conditional_3_Conditional_60_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r13); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.subscribeNotification()); });
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(9);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.notifyEmail);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r3.notifySuccess ? 10 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r3.notifyError ? 11 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", !ctx_r3.notifyEmail || ctx_r3.notifyLoading);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r3.notifyLoading ? "Enviando..." : "Av\u00EDsame cuando est\u00E9 disponible", " ");
} }
function ProductRoom_Conditional_3_Conditional_78_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 58);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 103);
    i0.ɵɵelement(2, "path", 82);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Ver motel completo ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(1, _c0, ctx_r3.room.motelId));
} }
function ProductRoom_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 13);
    i0.ɵɵconditionalCreate(2, ProductRoom_Conditional_3_Conditional_2_Template, 2, 0)(3, ProductRoom_Conditional_3_Conditional_3_Template, 2, 0, "div", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(4, ProductRoom_Conditional_3_Conditional_4_Template, 11, 2);
    i0.ɵɵconditionalCreate(5, ProductRoom_Conditional_3_Conditional_5_Template, 3, 0, "div", 15);
    i0.ɵɵelementStart(6, "div", 16)(7, "nav", 17);
    i0.ɵɵconditionalCreate(8, ProductRoom_Conditional_3_Conditional_8_Template, 4, 4);
    i0.ɵɵelementStart(9, "span", 18);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 19)(12, "button", 20);
    i0.ɵɵlistener("click", function ProductRoom_Conditional_3_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r1); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.toggleFavorite()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(13, "svg", 21);
    i0.ɵɵelement(14, "path", 22);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(15, "div", 23)(16, "span", 24);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "div", 25)(19, "div", 26)(20, "div", 27)(21, "div")(22, "p", 28);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "h1", 29);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "p", 30);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(27, "svg", 31);
    i0.ɵɵelement(28, "path", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(30, ProductRoom_Conditional_3_Conditional_30_Template, 7, 4, "a", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(31, "div", 34)(32, "h2", 35);
    i0.ɵɵtext(33, "Descripci\u00F3n");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "p", 36);
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "div", 34)(37, "h2", 37);
    i0.ɵɵtext(38, "Servicios incluidos");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(39, ProductRoom_Conditional_3_Conditional_39_Template, 3, 0, "div", 38)(40, ProductRoom_Conditional_3_Conditional_40_Template, 2, 0, "p", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "div", 40)(42, "div", 41)(43, "h2", 42);
    i0.ɵɵtext(44, "Ubicaci\u00F3n");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "div", 43);
    i0.ɵɵelement(46, "app-map", 44);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(47, "aside", 45)(48, "div", 46)(49, "div")(50, "p", 47);
    i0.ɵɵtext(51, "Precio por noche");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "div", 48)(53, "span", 49);
    i0.ɵɵtext(54);
    i0.ɵɵpipe(55, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "span", 50);
    i0.ɵɵtext(57, "COP");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(58, "div", 51);
    i0.ɵɵconditionalCreate(59, ProductRoom_Conditional_3_Conditional_59_Template, 5, 0, "div", 52)(60, ProductRoom_Conditional_3_Conditional_60_Template, 14, 5, "div", 53);
    i0.ɵɵelement(61, "div", 51);
    i0.ɵɵelementStart(62, "div", 54)(63, "div", 55)(64, "span");
    i0.ɵɵtext(65, "Direcci\u00F3n");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "span", 56);
    i0.ɵɵtext(67);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(68, "div", 55)(69, "span");
    i0.ɵɵtext(70, "Ciudad");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(71, "span", 57);
    i0.ɵɵtext(72);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(73, "div", 55)(74, "span");
    i0.ɵɵtext(75, "Tel\u00E9fono");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "span", 57);
    i0.ɵɵtext(77);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(78, ProductRoom_Conditional_3_Conditional_78_Template, 4, 3, "a", 58);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(79, "div", 59)(80, "div", 60)(81, "h2", 42);
    i0.ɵɵtext(82, "Ubicaci\u00F3n");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(83, "div", 61);
    i0.ɵɵelement(84, "app-map", 44);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("transform", "translateX(-" + ctx_r3.currentSlide * 100 + "%)");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r3.room.imageUrls && ctx_r3.room.imageUrls.length > 0 ? 2 : 3);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r3.room.imageUrls && ctx_r3.room.imageUrls.length > 1 ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r3.room.imageUrls && ctx_r3.room.imageUrls.length > 1 ? 5 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r3.room.motelId ? 8 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Hab. ", ctx_r3.room.number);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r3.isFavorite ? "text-red-400 border-red-500/50 bg-red-900/30" : "text-white/60 hover:text-white hover:border-white/40")("title", ctx_r3.isFavorite ? "Quitar de favoritos" : "Guardar en favoritos");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("scale-125", ctx_r3.isFavorite);
    i0.ɵɵattribute("fill", ctx_r3.isFavorite ? "currentColor" : "none");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", ctx_r3.room.isAvailable ? "bg-green-900/60 border-green-500/50 text-green-300" : "bg-gray-900/60 border-gray-500/30 text-gray-400");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r3.room.isAvailable ? "\u25CF Disponible" : "\u25CB No disponible", " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r3.room.roomType);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Habitaci\u00F3n ", ctx_r3.room.number, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2(" ", ctx_r3.room.motelCity, " \u00B7 ", ctx_r3.room.motelAddress, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r3.room.motelId ? 30 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r3.room.description);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r3.room.serviceIds && ctx_r3.room.serviceIds.length ? 39 : 40);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("points", ctx_r3.points);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind1(55, 29, ctx_r3.room.price));
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r3.room.isAvailable ? 59 : 60);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r3.room.motelAddress);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r3.room.motelCity);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r3.room.motelPhoneNumber);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r3.room.motelId ? 78 : -1);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("points", ctx_r3.points);
} }
export class ProductRoom {
    dialog;
    roomService = inject(RoomService);
    route = inject(ActivatedRoute);
    room = null;
    loading = false;
    error = false;
    points = [];
    // Carrusel
    currentSlide = 0;
    // Favoritos
    isFavorite = false;
    // Formulario notificación (habitación no disponible)
    notifyEmail = '';
    notifyLoading = false;
    notifySuccess = false;
    notifyError = null;
    ngOnInit() {
        const idFromQuery = Number(this.route.snapshot.queryParamMap.get('id'));
        const idFromParam = Number(this.route.snapshot.paramMap.get('id'));
        const id = idFromQuery || idFromParam;
        if (id)
            this.loadRoom(id);
    }
    loadRoom(id) {
        this.loading = true;
        this.roomService.getRoomById(id).subscribe({
            next: (r) => {
                this.room = r;
                if (r.latitude != null && r.longitude != null) {
                    this.points = [{ lat: r.latitude, lng: r.longitude, name: r.motelName }];
                }
                else {
                    this.points = [];
                }
                this.loading = false;
            },
            error: () => {
                this.error = true;
                this.loading = false;
            },
        });
    }
    // ── Carrusel ──
    prevSlide() {
        if (!this.room?.imageUrls?.length)
            return;
        this.currentSlide = (this.currentSlide - 1 + this.room.imageUrls.length) % this.room.imageUrls.length;
    }
    nextSlide() {
        if (!this.room?.imageUrls?.length)
            return;
        this.currentSlide = (this.currentSlide + 1) % this.room.imageUrls.length;
    }
    goToSlide(index) {
        this.currentSlide = index;
    }
    // ── Favoritos ──
    toggleFavorite() {
        this.isFavorite = !this.isFavorite;
    }
    // ── Servicios ──
    getServiceName(id) {
        const names = {
            1: 'WiFi', 2: 'TV', 3: 'Aire acondicionado', 4: 'Jacuzzi',
            5: 'Minibar', 6: 'Desayuno', 7: 'Estacionamiento', 8: 'Piscina',
        };
        return names[id] ?? `Servicio ${id}`;
    }
    getServiceIcon(id) {
        const icons = {
            1: 'fas fa-wifi', 2: 'fas fa-tv', 3: 'fas fa-snowflake', 4: 'fas fa-hot-tub',
            5: 'fas fa-wine-bottle', 6: 'fas fa-coffee', 7: 'fas fa-car', 8: 'fas fa-swimming-pool',
        };
        return icons[id] ?? '';
    }
    // ── Notificación disponibilidad ──
    subscribeNotification() {
        this.notifySuccess = false;
        this.notifyError = null;
        const email = this.notifyEmail.trim();
        const emailError = validateEmail(email);
        if (emailError) {
            this.notifyError = emailError;
            return;
        }
        if (!this.room) {
            this.notifyError = 'No se pudo identificar la habitación.';
            return;
        }
        this.notifyLoading = true;
        this.roomService.subscribeAvailability(this.room.id, email).subscribe({
            next: () => {
                this.notifyLoading = false;
                this.notifySuccess = true;
            },
            error: () => {
                this.notifyLoading = false;
                this.notifyError = 'No se pudo registrar el correo. Intenta de nuevo.';
            },
        });
    }
    router = inject(Router);
    constructor(dialog) {
        this.dialog = dialog;
    }
    openPayment() {
        const dialogRef = this.dialog.open(PaymentModal, {
            data: { id: this.room?.id }
        });
        dialogRef.closed.subscribe((result) => {
            if (result?.success) {
                this.router.navigate(['/payment/success'], { state: { paymentDetails: result.details } });
            }
        });
    }
    static ɵfac = function ProductRoom_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProductRoom)(i0.ɵɵdirectiveInject(i1.Dialog)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductRoom, selectors: [["app-product-room"]], decls: 4, vars: 3, consts: [[1, "min-h-screen", "text-white", "font-['DM_Sans',sans-serif]"], [1, "flex", "items-center", "justify-center", "min-h-screen"], [1, "flex", "items-center", "justify-center", "min-h-screen", "px-6"], [1, "flex", "flex-col", "items-center", "gap-4", "text-white/40"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-8", "h-8"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "text-sm", "tracking-widest", "uppercase"], [1, "bg-red-900/20", "border", "border-red-600/30", "rounded-2xl", "p-8", "text-center", "max-w-md"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-red-400", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"], [1, "text-red-400", "font-semibold"], [1, "relative", "w-full", "h-[55vh]", "md:h-[65vh]", "overflow-hidden", "bg-black"], [1, "flex", "h-full", "transition-transform", "duration-700", "ease-[cubic-bezier(0.77,0,0.175,1)]"], [1, "shrink-0", "w-full", "h-full"], [1, "absolute", "bottom-0", "left-0", "right-0", "hidden", "md:flex", "gap-2", "px-6", "pb-4", "justify-center", "z-10"], [1, "absolute", "top-0", "left-0", "right-0", "flex", "items-center", "justify-between", "px-6", "pt-6", "z-10"], [1, "flex", "items-center", "gap-2", "text-sm", "text-white/60", "bg-black/30", "backdrop-blur-sm", "px-4", "py-2", "rounded-full"], [1, "text-white"], [1, "flex", "items-center", "gap-2"], [1, "w-10", "h-10", "rounded-full", "bg-black/40", "backdrop-blur-sm", "border", "border-white/15", "flex", "items-center", "justify-center", "transition-all", "duration-300", 3, "click", "ngClass", "title"], ["stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"], [1, "absolute", "top-20", "left-6", "z-10"], [1, "px-3", "py-1.5", "rounded-full", "text-xs", "font-semibold", "border", "backdrop-blur-sm", 3, "ngClass"], [1, "max-w-6xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-8", "grid", "grid-cols-1", "lg:grid-cols-3", "gap-8"], [1, "lg:col-span-2", "flex", "flex-col", "gap-8"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-start", "sm:justify-between", "gap-4"], [1, "text-[#c8a97e]", "text-xs", "tracking-[0.25em]", "uppercase", "mb-1"], [1, "text-3xl", "md:text-4xl", "font-['Cormorant_Garamond',serif]", "font-bold", "leading-tight"], [1, "text-white/50", "text-sm", "mt-2", "flex", "items-center", "gap-1.5"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5", "text-[#c8a97e]", "shrink-0"], ["d", "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"], [1, "flex", "items-center", "gap-2", "px-4", "py-2", "rounded-xl", "border", "border-white/10", "bg-white/[0.03]", "hover:border-[#A72027]/60", "hover:bg-[#6E2A35]/10", "transition-all", "duration-300", "text-sm", "text-white/70", "hover:text-white", "shrink-0", "group", 3, "routerLink"], [1, "bg-white/[0.03]", "border", "border-white/[0.07]", "rounded-2xl", "p-6"], [1, "text-[#c8a97e]", "text-xs", "tracking-[0.25em]", "uppercase", "mb-3"], [1, "text-white/70", "leading-relaxed", "text-sm"], [1, "text-[#c8a97e]", "text-xs", "tracking-[0.25em]", "uppercase", "mb-4"], [1, "flex", "flex-wrap", "gap-2"], [1, "text-white/30", "text-sm"], [1, "lg:hidden", "bg-white/[0.03]", "border", "border-white/[0.07]", "rounded-2xl", "overflow-hidden"], [1, "px-6", "pt-5", "pb-3"], [1, "text-[#c8a97e]", "text-xs", "tracking-[0.25em]", "uppercase"], [1, "h-56"], [3, "points"], [1, "flex", "flex-col", "gap-5", "lg:sticky", "lg:top-8", "lg:self-start"], [1, "bg-white/[0.03]", "border", "border-white/[0.07]", "rounded-2xl", "p-6", "flex", "flex-col", "gap-5"], [1, "text-white/40", "text-xs", "uppercase", "tracking-widest", "mb-1"], [1, "flex", "items-baseline", "gap-1"], [1, "text-4xl", "font-['Cormorant_Garamond',serif]", "font-bold", "text-white"], [1, "text-white/40", "text-sm"], [1, "w-full", "h-px", "bg-white/[0.07]"], [1, "flex", "flex-col", "gap-3"], [1, "flex", "flex-col", "gap-4"], [1, "flex", "flex-col", "gap-2", "text-sm", "text-white/50"], [1, "flex", "justify-between"], [1, "text-white/80", "text-right", "max-w-[55%]"], [1, "text-white/80"], [1, "flex", "items-center", "justify-center", "gap-2", "w-full", "border", "border-white/10", "text-white/60", "py-2.5", "rounded-xl", "text-sm", "hover:border-white/30", "hover:text-white", "transition-all", "duration-300", 3, "routerLink"], [1, "hidden", "lg:block", "bg-white/[0.03]", "border", "border-white/[0.07]", "rounded-2xl", "overflow-hidden"], [1, "px-5", "pt-4", "pb-2"], [1, "h-52"], [1, "relative", "shrink-0", "w-full", "h-full"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "absolute", "inset-0", "bg-gradient-to-r", "from-black/40", "via-transparent", "to-black/40"], [1, "absolute", "inset-0", "bg-gradient-to-b", "from-black/50", "via-transparent", "to-black/80"], ["src", "./assets/images/ubikLogo.jpg", "alt", "Sin imagen", 1, "w-full", "h-full", "object-cover", "opacity-40"], [1, "absolute", "left-4", "top-1/2", "-translate-y-1/2", "w-11", "h-11", "rounded-full", "bg-black/50", "backdrop-blur-sm", "border", "border-white/15", "flex", "items-center", "justify-center", "hover:bg-black/70", "transition-all", "duration-200", "z-10", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "absolute", "right-4", "top-1/2", "-translate-y-1/2", "w-11", "h-11", "rounded-full", "bg-black/50", "backdrop-blur-sm", "border", "border-white/15", "flex", "items-center", "justify-center", "hover:bg-black/70", "transition-all", "duration-200", "z-10", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "absolute", "bottom-5", "left-1/2", "-translate-x-1/2", "flex", "gap-2", "z-10"], [1, "transition-all", "duration-300", "rounded-full", 3, "ngClass"], [1, "absolute", "bottom-5", "right-5", "bg-black/50", "backdrop-blur-sm", "px-3", "py-1", "rounded-full", "text-xs", "text-white/70", "z-10"], [1, "transition-all", "duration-300", "rounded-full", 3, "click", "ngClass"], [1, "shrink-0", "w-16", "h-10", "rounded-lg", "overflow-hidden", "border-2", "transition-all", "duration-200", 3, "ngClass"], [1, "shrink-0", "w-16", "h-10", "rounded-lg", "overflow-hidden", "border-2", "transition-all", "duration-200", 3, "click", "ngClass"], [1, "w-full", "h-full", "object-cover", 3, "src"], [1, "hover:text-white", "transition-colors", 3, "routerLink"], [1, "text-white/30"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-[#c8a97e]"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5", "opacity-0", "group-hover:opacity-100", "-translate-x-1", "group-hover:translate-x-0", "transition-all"], [1, "flex", "items-center", "gap-1.5", "px-3", "py-1.5", "bg-white/5", "border", "border-white/10", "rounded-xl", "text-sm", "text-white/70"], [3, "class"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5", "text-[#c8a97e]"], ["d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-xs", "text-white/50", "leading-relaxed"], [1, "w-full", "bg-gradient-to-r", "from-[#6E2A35]", "to-[#A72027]", "text-white", "font-semibold", "py-3.5", "rounded-xl", "hover:from-[#7E3A45]", "hover:to-[#B73037]", "transition-all", "duration-300", "shadow-lg", "shadow-[#6E2A35]/30", "text-sm", "tracking-wide", 3, "click"], [1, "flex", "items-start", "gap-3", "p-3", "bg-amber-900/20", "border", "border-amber-600/30", "rounded-xl"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-amber-400", "shrink-0", "mt-0.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"], [1, "text-amber-300/80", "text-xs", "leading-relaxed"], [1, "flex", "flex-col", "gap-2"], [1, "text-white/40", "text-xs", "uppercase", "tracking-widest"], ["type", "email", "placeholder", "correo@ejemplo.com", 1, "w-full", "bg-white/5", "border", "border-white/15", "rounded-xl", "px-4", "py-3", "text-sm", "text-white", "placeholder-white/20", "focus:outline-none", "focus:border-[#A72027]", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "gap-2", "text-green-400", "text-xs", "bg-green-900/20", "border", "border-green-600/30", "rounded-lg", "px-3", "py-2"], [1, "flex", "items-center", "gap-2", "text-red-300", "text-xs", "bg-red-900/20", "border", "border-red-600/30", "rounded-lg", "px-3", "py-2"], [1, "w-full", "border", "border-[#8B0000]", "text-[#cc3a3a]", "py-3", "rounded-xl", "text-sm", "font-semibold", "hover:bg-[#6E2A35]/20", "transition-all", "duration-300", "disabled:opacity-30", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"]], template: function ProductRoom_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵconditionalCreate(1, ProductRoom_Conditional_1_Template, 7, 0, "div", 1);
            i0.ɵɵconditionalCreate(2, ProductRoom_Conditional_2_Template, 6, 0, "div", 2);
            i0.ɵɵconditionalCreate(3, ProductRoom_Conditional_3_Template, 85, 31);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.loading && ctx.error ? 2 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.loading && !ctx.error && ctx.room ? 3 : -1);
        } }, dependencies: [CommonModule, i2.NgClass, FormsModule, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, AppMap, RouterLink, i2.DecimalPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductRoom, [{
        type: Component,
        args: [{ selector: 'app-product-room', standalone: true, imports: [CommonModule, FormsModule, AppMap, RouterLink], template: "<div class=\"min-h-screen text-white font-['DM_Sans',sans-serif]\">\n\n  <!-- \u2500\u2500 LOADING \u2500\u2500 -->\n  @if (loading) {\n    <div class=\"flex items-center justify-center min-h-screen\">\n      <div class=\"flex flex-col items-center gap-4 text-white/40\">\n        <svg class=\"animate-spin w-8 h-8\" fill=\"none\" viewBox=\"0 0 24 24\">\n          <circle class=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"4\"/>\n          <path class=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z\"/>\n        </svg>\n        <span class=\"text-sm tracking-widest uppercase\">Cargando habitaci\u00F3n...</span>\n      </div>\n    </div>\n  }\n\n  <!-- \u2500\u2500 ERROR \u2500\u2500 -->\n  @if (!loading && error) {\n    <div class=\"flex items-center justify-center min-h-screen px-6\">\n      <div class=\"bg-red-900/20 border border-red-600/30 rounded-2xl p-8 text-center max-w-md\">\n        <svg class=\"w-12 h-12 text-red-400 mx-auto mb-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n          <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\"/>\n        </svg>\n        <p class=\"text-red-400 font-semibold\">Error al cargar la habitaci\u00F3n</p>\n      </div>\n    </div>\n  }\n\n  <!-- \u2500\u2500 CONTENIDO \u2500\u2500 -->\n  @if (!loading && !error && room) {\n\n    <!-- CARRUSEL HERO \u2014 full width -->\n    <div class=\"relative w-full h-[55vh] md:h-[65vh] overflow-hidden bg-black\">\n\n      <!-- Slides -->\n      <div\n        class=\"flex h-full transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]\"\n        [style.transform]=\"'translateX(-' + (currentSlide * 100) + '%)'\"\n      >\n        @if (room.imageUrls && room.imageUrls.length > 0) {\n          @for (photo of room.imageUrls; track $index) {\n            <div class=\"relative shrink-0 w-full h-full\">\n              <img\n                [src]=\"photo\"\n                [alt]=\"'Imagen ' + ($index + 1) + ' \u2014 ' + room.roomType\"\n                class=\"w-full h-full object-cover\"\n              />\n              <!-- Vi\u00F1eta lateral para profundidad -->\n              <div class=\"absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40\"></div>\n              <div class=\"absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80\"></div>\n            </div>\n          }\n        } @else {\n          <div class=\"shrink-0 w-full h-full\">\n            <img src=\"./assets/images/ubikLogo.jpg\" alt=\"Sin imagen\" class=\"w-full h-full object-cover opacity-40\"/>\n          </div>\n        }\n      </div>\n\n      <!-- Flechas de navegaci\u00F3n -->\n      @if (room.imageUrls && room.imageUrls.length > 1) {\n        <button\n          (click)=\"prevSlide()\"\n          class=\"absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 flex items-center justify-center hover:bg-black/70 transition-all duration-200 z-10\"\n        >\n          <svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 19l-7-7 7-7\"/>\n          </svg>\n        </button>\n        <button\n          (click)=\"nextSlide()\"\n          class=\"absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 flex items-center justify-center hover:bg-black/70 transition-all duration-200 z-10\"\n        >\n          <svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 5l7 7-7 7\"/>\n          </svg>\n        </button>\n\n        <!-- Dots indicadores -->\n        <div class=\"absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10\">\n          @for (photo of room.imageUrls; track $index) {\n            <button\n              (click)=\"goToSlide($index)\"\n              class=\"transition-all duration-300 rounded-full\"\n              [ngClass]=\"currentSlide === $index\n                ? 'w-6 h-2 bg-white'\n                : 'w-2 h-2 bg-white/40 hover:bg-white/70'\"\n            ></button>\n          }\n        </div>\n\n        <!-- Contador -->\n        <div class=\"absolute bottom-5 right-5 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white/70 z-10\">\n          {{ currentSlide + 1 }} / {{ room.imageUrls.length }}\n        </div>\n      }\n\n      <!-- Thumbnails strip (desktop) -->\n      @if (room.imageUrls && room.imageUrls.length > 1) {\n        <div class=\"absolute bottom-0 left-0 right-0 hidden md:flex gap-2 px-6 pb-4 justify-center z-10\">\n          @for (photo of room.imageUrls.slice(0, 6); track $index) {\n            <button\n              (click)=\"goToSlide($index)\"\n              class=\"shrink-0 w-16 h-10 rounded-lg overflow-hidden border-2 transition-all duration-200\"\n              [ngClass]=\"currentSlide === $index ? 'border-white opacity-100' : 'border-transparent opacity-50 hover:opacity-80'\"\n            >\n              <img [src]=\"photo\" class=\"w-full h-full object-cover\"/>\n            </button>\n          }\n        </div>\n      }\n\n      <!-- Breadcrumb + acciones sobre el hero -->\n      <div class=\"absolute top-0 left-0 right-0 flex items-center justify-between px-6 pt-6 z-10\">\n        <!-- Breadcrumb -->\n        <nav class=\"flex items-center gap-2 text-sm text-white/60 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full\">\n          @if (room.motelId) {\n            <a [routerLink]=\"['/motelProfile', room.motelId]\" class=\"hover:text-white transition-colors\">\n              {{ room.motelName }}\n            </a>\n            <span class=\"text-white/30\">\u203A</span>\n          }\n          <span class=\"text-white\">Hab. {{ room.number }}</span>\n        </nav>\n\n        <!-- Acciones: favorito + compartir -->\n        <div class=\"flex items-center gap-2\">\n          <!-- Favorito -->\n          <button\n            (click)=\"toggleFavorite()\"\n            class=\"w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 flex items-center justify-center transition-all duration-300\"\n            [ngClass]=\"isFavorite ? 'text-red-400 border-red-500/50 bg-red-900/30' : 'text-white/60 hover:text-white hover:border-white/40'\"\n            [title]=\"isFavorite ? 'Quitar de favoritos' : 'Guardar en favoritos'\"\n          >\n            <svg class=\"w-5 h-5 transition-transform duration-200\" [class.scale-125]=\"isFavorite\"\n              [attr.fill]=\"isFavorite ? 'currentColor' : 'none'\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"\n                d=\"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\"/>\n            </svg>\n          </button>\n        </div>\n      </div>\n\n      <!-- Badge disponibilidad sobre el hero -->\n      <div class=\"absolute top-20 left-6 z-10\">\n        <span\n          class=\"px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm\"\n          [ngClass]=\"room.isAvailable\n            ? 'bg-green-900/60 border-green-500/50 text-green-300'\n            : 'bg-gray-900/60 border-gray-500/30 text-gray-400'\"\n        >\n          {{ room.isAvailable ? '\u25CF Disponible' : '\u25CB No disponible' }}\n        </span>\n      </div>\n\n    </div>\n    <!-- FIN CARRUSEL HERO -->\n\n    <!-- \u2500\u2500 CONTENIDO PRINCIPAL \u2500\u2500 -->\n    <div class=\"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8\">\n\n      <!-- \u2500\u2500 COLUMNA IZQUIERDA \u2500\u2500 -->\n      <div class=\"lg:col-span-2 flex flex-col gap-8\">\n\n        <!-- T\u00EDtulo + meta -->\n        <div class=\"flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4\">\n          <div>\n            <p class=\"text-[#c8a97e] text-xs tracking-[0.25em] uppercase mb-1\">{{ room.roomType }}</p>\n            <h1 class=\"text-3xl md:text-4xl font-['Cormorant_Garamond',serif] font-bold leading-tight\">\n              Habitaci\u00F3n {{ room.number }}\n            </h1>\n            <p class=\"text-white/50 text-sm mt-2 flex items-center gap-1.5\">\n              <svg class=\"w-3.5 h-3.5 text-[#c8a97e] shrink-0\" fill=\"currentColor\" viewBox=\"0 0 24 24\">\n                <path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"/>\n              </svg>\n              {{ room.motelCity }} \u00B7 {{ room.motelAddress }}\n            </p>\n          </div>\n          <!-- Link al motel -->\n          @if (room.motelId) {\n            <a\n              [routerLink]=\"['/motelProfile', room.motelId]\"\n              class=\"flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#A72027]/60 hover:bg-[#6E2A35]/10 transition-all duration-300 text-sm text-white/70 hover:text-white shrink-0 group\"\n            >\n              <svg class=\"w-4 h-4 text-[#c8a97e]\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4\"/>\n              </svg>\n              <span>{{ room.motelName }}</span>\n              <svg class=\"w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 5l7 7-7 7\"/>\n              </svg>\n            </a>\n          }\n        </div>\n\n        <!-- Descripci\u00F3n -->\n        <div class=\"bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6\">\n          <h2 class=\"text-[#c8a97e] text-xs tracking-[0.25em] uppercase mb-3\">Descripci\u00F3n</h2>\n          <p class=\"text-white/70 leading-relaxed text-sm\">{{ room.description }}</p>\n        </div>\n\n        <!-- Servicios -->\n        <div class=\"bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6\">\n          <h2 class=\"text-[#c8a97e] text-xs tracking-[0.25em] uppercase mb-4\">Servicios incluidos</h2>\n          @if (room.serviceIds && room.serviceIds.length) {\n            <div class=\"flex flex-wrap gap-2\">\n              @for (svcId of room.serviceIds; track $index) {\n                <span class=\"flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white/70\">\n                  @if (getServiceIcon(svcId)) {\n                    <i [class]=\"getServiceIcon(svcId) + ' text-[#c8a97e] text-xs'\"></i>\n                  } @else {\n                    <svg class=\"w-3.5 h-3.5 text-[#c8a97e]\" fill=\"currentColor\" viewBox=\"0 0 24 24\">\n                      <path d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"/>\n                    </svg>\n                  }\n                  {{ getServiceName(svcId) }}\n                </span>\n              }\n            </div>\n          } @else {\n            <p class=\"text-white/30 text-sm\">Sin servicios registrados.</p>\n          }\n        </div>\n\n        <!-- Mapa (mobile \u2014 se muestra aqu\u00ED en m\u00F3vil) -->\n        <div class=\"lg:hidden bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden\">\n          <div class=\"px-6 pt-5 pb-3\">\n            <h2 class=\"text-[#c8a97e] text-xs tracking-[0.25em] uppercase\">Ubicaci\u00F3n</h2>\n          </div>\n          <div class=\"h-56\">\n            <app-map [points]=\"points\"></app-map>\n          </div>\n        </div>\n\n      </div>\n\n      <!-- \u2500\u2500 COLUMNA DERECHA \u2014 SIDEBAR STICKY \u2500\u2500 -->\n      <aside class=\"flex flex-col gap-5 lg:sticky lg:top-8 lg:self-start\">\n\n        <!-- Card precio + reserva -->\n        <div class=\"bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-5\">\n\n          <!-- Precio -->\n          <div>\n            <p class=\"text-white/40 text-xs uppercase tracking-widest mb-1\">Precio por noche</p>\n            <div class=\"flex items-baseline gap-1\">\n              <span class=\"text-4xl font-['Cormorant_Garamond',serif] font-bold text-white\">${{ room.price | number }}</span>\n              <span class=\"text-white/40 text-sm\">COP</span>\n            </div>\n          </div>\n\n          <div class=\"w-full h-px bg-white/[0.07]\"></div>\n\n          <!-- Estado de reserva -->\n          @if (room.isAvailable) {\n\n            <!-- DISPONIBLE: mostrar bot\u00F3n de reserva -->\n            <div class=\"flex flex-col gap-3\">\n              <p class=\"text-xs text-white/50 leading-relaxed\">\n                Esta habitaci\u00F3n est\u00E1 disponible. Realiza tu reserva ahora y confirma tu estad\u00EDa.\n              </p>\n              <button\n                (click)=\"openPayment()\"\n                class=\"w-full bg-gradient-to-r from-[#6E2A35] to-[#A72027] text-white font-semibold py-3.5 rounded-xl hover:from-[#7E3A45] hover:to-[#B73037] transition-all duration-300 shadow-lg shadow-[#6E2A35]/30 text-sm tracking-wide\"\n              >\n                Reservar ahora\n              </button>\n            </div>\n\n          } @else {\n\n            <!-- NO DISPONIBLE: formulario de notificaci\u00F3n -->\n            <div class=\"flex flex-col gap-4\">\n\n              <div class=\"flex items-start gap-3 p-3 bg-amber-900/20 border border-amber-600/30 rounded-xl\">\n                <svg class=\"w-4 h-4 text-amber-400 shrink-0 mt-0.5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n                  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z\"/>\n                </svg>\n                <p class=\"text-amber-300/80 text-xs leading-relaxed\">\n                  Esta habitaci\u00F3n no est\u00E1 disponible ahora mismo. D\u00E9janos tu email y te avisamos cuando se libere.\n                </p>\n              </div>\n\n              <!-- Input email notificaci\u00F3n -->\n              <div class=\"flex flex-col gap-2\">\n                <label class=\"text-white/40 text-xs uppercase tracking-widest\">Tu email</label>\n                <input\n                  [(ngModel)]=\"notifyEmail\"\n                  type=\"email\"\n                  placeholder=\"correo@ejemplo.com\"\n                  class=\"w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#A72027] transition-colors\"\n                />\n              </div>\n\n              @if (notifySuccess) {\n                <div class=\"flex items-center gap-2 text-green-400 text-xs bg-green-900/20 border border-green-600/30 rounded-lg px-3 py-2\">\n                  <svg class=\"w-4 h-4 shrink-0\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 13l4 4L19 7\"/>\n                  </svg>\n                  \u00A1Te avisaremos cuando est\u00E9 disponible!\n                </div>\n              }\n              @if (notifyError) {\n                <div class=\"flex items-center gap-2 text-red-300 text-xs bg-red-900/20 border border-red-600/30 rounded-lg px-3 py-2\">\n                  <svg class=\"w-4 h-4 shrink-0\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/>\n                  </svg>\n                  {{ notifyError }}\n                </div>\n              }\n\n              <button\n                (click)=\"subscribeNotification()\"\n                [disabled]=\"!notifyEmail || notifyLoading\"\n                class=\"w-full border border-[#8B0000] text-[#cc3a3a] py-3 rounded-xl text-sm font-semibold hover:bg-[#6E2A35]/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed\"\n              >\n                {{ notifyLoading ? 'Enviando...' : 'Av\u00EDsame cuando est\u00E9 disponible' }}\n              </button>\n\n            </div>\n          }\n\n          <div class=\"w-full h-px bg-white/[0.07]\"></div>\n\n          <!-- Info del motel -->\n          <div class=\"flex flex-col gap-2 text-sm text-white/50\">\n            <div class=\"flex justify-between\">\n              <span>Direcci\u00F3n</span>\n              <span class=\"text-white/80 text-right max-w-[55%]\">{{ room.motelAddress }}</span>\n            </div>\n            <div class=\"flex justify-between\">\n              <span>Ciudad</span>\n              <span class=\"text-white/80\">{{ room.motelCity }}</span>\n            </div>\n            <div class=\"flex justify-between\">\n              <span>Tel\u00E9fono</span>\n              <span class=\"text-white/80\">{{ room.motelPhoneNumber }}</span>\n            </div>\n          </div>\n\n          <!-- Link al motel (sidebar) -->\n          @if (room.motelId) {\n            <a\n              [routerLink]=\"['/motelProfile', room.motelId]\"\n              class=\"flex items-center justify-center gap-2 w-full border border-white/10 text-white/60 py-2.5 rounded-xl text-sm hover:border-white/30 hover:text-white transition-all duration-300\"\n            >\n              <svg class=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4\"/>\n              </svg>\n              Ver motel completo\n            </a>\n          }\n\n        </div>\n\n        <!-- Mapa (desktop) -->\n        <div class=\"hidden lg:block bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden\">\n          <div class=\"px-5 pt-4 pb-2\">\n            <h2 class=\"text-[#c8a97e] text-xs tracking-[0.25em] uppercase\">Ubicaci\u00F3n</h2>\n          </div>\n          <div class=\"h-52\">\n            <app-map [points]=\"points\"></app-map>\n          </div>\n        </div>\n\n      </aside>\n    </div>\n  }\n</div>\n" }]
    }], () => [{ type: i1.Dialog }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProductRoom, { className: "ProductRoom", filePath: "src/app/views/product-room/product-room.ts", lineNumber: 19 }); })();
