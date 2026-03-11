import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { loadStripe } from '@stripe/stripe-js';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/dialog";
import * as i2 from "../../core/services/room.service";
import * as i3 from "../../core/services/payment.service";
import * as i4 from "@angular/common/http";
import * as i5 from "@angular/common";
const _c0 = () => [1, 2, 3];
const _c1 = (a0, a1, a2, a3, a4) => ({ invisible: a0, "text-white/15 cursor-not-allowed": a1, "hover:bg-white/10 text-white/70": a2, "bg-gradient-to-br from-[#6E2A35] to-[#A72027] text-white font-bold shadow-lg": a3, "bg-indigo-900/50 border border-indigo-500/50 text-indigo-200 font-semibold": a4 });
const _c2 = (a0, a1, a2, a3) => ({ "opacity-20 cursor-not-allowed border-transparent": a0, "border-[#A72027] bg-gradient-to-b from-[#6E2A35]/60 to-[#A72027]/25 shadow-lg": a1, "border-indigo-500/60 bg-indigo-900/35": a2, "border-white/10 hover:border-white/30 hover:bg-white/5": a3 });
const _c3 = (a0, a1, a2) => ({ "text-white": a0, "text-indigo-300": a1, "text-white/65": a2 });
const _c4 = (a0, a1, a2, a3, a4) => ({ invisible: a0, "text-white/15 cursor-not-allowed": a1, "hover:bg-white/8 text-white/60 cursor-pointer": a2, "bg-gradient-to-br from-[#6E2A35] to-[#A72027] text-white font-bold shadow-md": a3, "bg-indigo-900/50 border border-indigo-500/40 text-indigo-200 font-semibold": a4 });
const _c5 = (a0, a1, a2, a3) => ({ "opacity-20 cursor-not-allowed border-transparent": a0, "border-[#A72027] bg-gradient-to-b from-[#6E2A35]/50 to-[#A72027]/20": a1, "border-indigo-500/50 bg-indigo-900/25": a2, "border-white/8 hover:border-white/25 hover:bg-white/5": a3 });
const _c6 = (a0, a1, a2) => ({ "text-white": a0, "text-indigo-300": a1, "text-white/60": a2 });
const _forTrack0 = ($index, $item) => $item.label;
const _forTrack1 = ($index, $item) => $item.time;
function PaymentModal_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 6);
    i0.ɵɵelement(2, "circle", 7)(3, "path", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Cargando... ");
    i0.ɵɵelementEnd();
} }
function PaymentModal_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1, " Error al cargar la habitaci\u00F3n. ");
    i0.ɵɵelementStart(2, "button", 9);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_5_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(3, " Cerrar ");
    i0.ɵɵelementEnd()();
} }
function PaymentModal_Conditional_6_For_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 20);
} if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r1.mobileStep >= s_r4 ? "bg-gradient-to-r from-[#6E2A35] to-[#A72027]" : "bg-white/10");
} }
function PaymentModal_Conditional_6_Conditional_19_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 47);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\uD83D\uDCC5 ", ctx_r1.selectedDateLabel);
} }
function PaymentModal_Conditional_6_Conditional_19_Conditional_8_For_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(d_r7);
} }
function PaymentModal_Conditional_6_Conditional_19_Conditional_8_For_14_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵtext(1, "\uD83C\uDF19");
    i0.ɵɵelementEnd();
} }
function PaymentModal_Conditional_6_Conditional_19_Conditional_8_For_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 60);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_19_Conditional_8_For_14_Template_button_click_0_listener() { const day_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.selectDate(day_r9)); });
    i0.ɵɵtext(1);
    i0.ɵɵconditionalCreate(2, PaymentModal_Conditional_6_Conditional_19_Conditional_8_For_14_Conditional_2_Template, 2, 0, "span", 61);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r9 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", !day_r9.day || day_r9.isPast)("ngClass", i0.ɵɵpureFunction5(4, _c1, !day_r9.day, day_r9.day && day_r9.isPast, day_r9.day && !day_r9.isPast && !ctx_r1.isSelectedDate(day_r9) && !ctx_r1.isEndDate(day_r9), day_r9.day && ctx_r1.isSelectedDate(day_r9), day_r9.day && ctx_r1.isEndDate(day_r9)));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", day_r9.day || "", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(day_r9.day && ctx_r1.isEndDate(day_r9) ? 2 : -1);
} }
function PaymentModal_Conditional_6_Conditional_19_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50)(1, "button", 51);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_19_Conditional_8_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.prevMonth()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 52);
    i0.ɵɵelement(3, "path", 53);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "p", 54);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 51);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_19_Conditional_8_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.nextMonth()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(7, "svg", 52);
    i0.ɵɵelement(8, "path", 55);
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(9, "div", 56);
    i0.ɵɵrepeaterCreate(10, PaymentModal_Conditional_6_Conditional_19_Conditional_8_For_11_Template, 2, 1, "div", 57, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 58);
    i0.ɵɵrepeaterCreate(13, PaymentModal_Conditional_6_Conditional_19_Conditional_8_For_14_Template, 3, 10, "button", 59, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.monthLabel);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r1.dayNames);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.calendarDays);
} }
function PaymentModal_Conditional_6_Conditional_19_Conditional_9_For_11_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 69);
    i0.ɵɵtext(1, "Entrada");
    i0.ɵɵelementEnd();
} }
function PaymentModal_Conditional_6_Conditional_19_Conditional_9_For_11_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 70);
    i0.ɵɵtext(1, "\uD83C\uDF19 Salida");
    i0.ɵɵelementEnd();
} }
function PaymentModal_Conditional_6_Conditional_19_Conditional_9_For_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 66);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_19_Conditional_9_For_11_Template_button_click_0_listener() { const wd_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.selectWeekDay(wd_r12)); });
    i0.ɵɵelementStart(1, "span", 67);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 68);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, PaymentModal_Conditional_6_Conditional_19_Conditional_9_For_11_Conditional_5_Template, 2, 0, "span", 69);
    i0.ɵɵconditionalCreate(6, PaymentModal_Conditional_6_Conditional_19_Conditional_9_For_11_Conditional_6_Template, 2, 0, "span", 70);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const wd_r12 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", wd_r12.isPast)("ngClass", i0.ɵɵpureFunction4(8, _c2, wd_r12.isPast, ctx_r1.weekDayMark(wd_r12) === "start", ctx_r1.weekDayMark(wd_r12) === "end", !wd_r12.isPast && !ctx_r1.weekDayMark(wd_r12)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.weekDayMark(wd_r12) ? "text-white/60" : "text-white/30");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(wd_r12.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(13, _c3, ctx_r1.weekDayMark(wd_r12) === "start", ctx_r1.weekDayMark(wd_r12) === "end", !ctx_r1.weekDayMark(wd_r12)));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(wd_r12.num);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.weekDayMark(wd_r12) === "start" ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.weekDayMark(wd_r12) === "end" ? 6 : -1);
} }
function PaymentModal_Conditional_6_Conditional_19_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50)(1, "button", 62);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_19_Conditional_9_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.prevWeek()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 52);
    i0.ɵɵelement(3, "path", 53);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "p", 63);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 62);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_19_Conditional_9_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.nextWeek()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(7, "svg", 52);
    i0.ɵɵelement(8, "path", 55);
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(9, "div", 64);
    i0.ɵɵrepeaterCreate(10, PaymentModal_Conditional_6_Conditional_19_Conditional_9_For_11_Template, 7, 17, "button", 65, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.weekRangeLabel);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r1.weekDaysView);
} }
function PaymentModal_Conditional_6_Conditional_19_Conditional_10_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 73);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const range_r13 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(range_r13);
} }
function PaymentModal_Conditional_6_Conditional_19_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48)(1, "p", 71);
    i0.ɵɵtext(2, " Horarios ocupados ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 72);
    i0.ɵɵrepeaterCreate(4, PaymentModal_Conditional_6_Conditional_19_Conditional_10_For_5_Template, 2, 1, "span", 73, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r1.getUnavailableRanges());
} }
function PaymentModal_Conditional_6_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22)(1, "div", 44)(2, "div", 45)(3, "button", 46);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_19_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.calendarView = "month"); });
    i0.ɵɵtext(4, " Mes ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 46);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_19_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.calendarView = "week"); });
    i0.ɵɵtext(6, " Semana ");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(7, PaymentModal_Conditional_6_Conditional_19_Conditional_7_Template, 2, 1, "span", 47);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(8, PaymentModal_Conditional_6_Conditional_19_Conditional_8_Template, 15, 1);
    i0.ɵɵconditionalCreate(9, PaymentModal_Conditional_6_Conditional_19_Conditional_9_Template, 12, 1);
    i0.ɵɵconditionalCreate(10, PaymentModal_Conditional_6_Conditional_19_Conditional_10_Template, 6, 0, "div", 48);
    i0.ɵɵelementStart(11, "button", 49);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_19_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.mobileStep = 2); });
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", ctx_r1.calendarView === "month" ? "bg-white/10 text-white" : "text-white/40 hover:text-white");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r1.calendarView === "week" ? "bg-white/10 text-white" : "text-white/40 hover:text-white");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.selectedDate ? 7 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.calendarView === "month" ? 8 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.calendarView === "week" ? 9 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.reservations.length > 0 ? 10 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", !ctx_r1.selectedDate);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.selectedDate ? "Continuar \u2014 " + ctx_r1.selectedDateLabel : "Selecciona un d\u00EDa", " ");
} }
function PaymentModal_Conditional_6_Conditional_20_For_6_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 87);
    i0.ɵɵtext(1, "\u2715");
    i0.ɵɵelementEnd();
} }
function PaymentModal_Conditional_6_Conditional_20_For_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 86);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_20_For_6_Template_button_click_0_listener() { const slot_r16 = i0.ɵɵrestoreView(_r15).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.selectStartTime(slot_r16)); });
    i0.ɵɵtext(1);
    i0.ɵɵconditionalCreate(2, PaymentModal_Conditional_6_Conditional_20_For_6_Conditional_2_Template, 2, 0, "span", 87);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const slot_r16 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", !slot_r16.available)("ngClass", ctx_r1.startTime === slot_r16.time ? "bg-gradient-to-br from-[#6E2A35] to-[#A72027] border-[#A72027] text-white font-bold" : slot_r16.available ? "bg-white/[0.04] border-white/10 text-white/60 hover:border-white/30 hover:text-white" : "bg-red-900/20 border-red-800/30 text-red-400/50 cursor-not-allowed opacity-50");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", slot_r16.time, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(!slot_r16.available ? 2 : -1);
} }
function PaymentModal_Conditional_6_Conditional_20_Conditional_7_Conditional_3_For_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 87);
    i0.ɵɵtext(1, "\u2715");
    i0.ɵɵelementEnd();
} }
function PaymentModal_Conditional_6_Conditional_20_Conditional_7_Conditional_3_For_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 86);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_20_Conditional_7_Conditional_3_For_4_Template_button_click_0_listener() { const slot_r18 = i0.ɵɵrestoreView(_r17).$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.selectEndTime(slot_r18, false)); });
    i0.ɵɵtext(1);
    i0.ɵɵconditionalCreate(2, PaymentModal_Conditional_6_Conditional_20_Conditional_7_Conditional_3_For_4_Conditional_2_Template, 2, 0, "span", 87);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const slot_r18 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("disabled", !slot_r18.available)("ngClass", ctx_r1.endTime === slot_r18.time && !ctx_r1.crossesMidnight ? "bg-gradient-to-br from-[#6E2A35] to-[#A72027] border-[#A72027] text-white font-bold" : slot_r18.available ? "bg-white/[0.04] border-white/10 text-white/60 hover:border-white/30 hover:text-white" : "bg-red-900/20 border-red-800/30 text-red-400/50 cursor-not-allowed opacity-50");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", slot_r18.time, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(!slot_r18.available ? 2 : -1);
} }
function PaymentModal_Conditional_6_Conditional_20_Conditional_7_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 92);
    i0.ɵɵtext(1, "Mismo d\u00EDa");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 93);
    i0.ɵɵrepeaterCreate(3, PaymentModal_Conditional_6_Conditional_20_Conditional_7_Conditional_3_For_4_Template, 3, 4, "button", 76, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.exitSameDaySlots);
} }
function PaymentModal_Conditional_6_Conditional_20_Conditional_7_For_11_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 94);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_20_Conditional_7_For_11_Template_button_click_0_listener() { const slot_r20 = i0.ɵɵrestoreView(_r19).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.selectEndTime(slot_r20, true)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const slot_r20 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngClass", ctx_r1.endTime === slot_r20.time && ctx_r1.crossesMidnight ? "bg-gradient-to-br from-[#6E2A35] to-[#A72027] border-[#A72027] text-white font-bold" : "bg-indigo-950/40 border-indigo-800/30 text-indigo-300/70 hover:border-indigo-500/50 hover:text-indigo-200");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", slot_r20.time, " ");
} }
function PaymentModal_Conditional_6_Conditional_20_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "p", 74);
    i0.ɵɵtext(2, " Hora de salida ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, PaymentModal_Conditional_6_Conditional_20_Conditional_7_Conditional_3_Template, 5, 0);
    i0.ɵɵelementStart(4, "div", 88);
    i0.ɵɵelement(5, "div", 89);
    i0.ɵɵelementStart(6, "span", 90);
    i0.ɵɵtext(7, "\uD83C\uDF19 D\u00EDa siguiente");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "div", 89);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 75);
    i0.ɵɵrepeaterCreate(10, PaymentModal_Conditional_6_Conditional_20_Conditional_7_For_11_Template, 2, 2, "button", 91, _forTrack1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.exitSameDaySlots.length > 0 ? 3 : -1);
    i0.ɵɵadvance(7);
    i0.ɵɵrepeater(ctx_r1.exitNextDaySlots);
} }
function PaymentModal_Conditional_6_Conditional_20_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 77);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 95);
    i0.ɵɵelement(2, "circle", 7)(3, "path", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Verificando disponibilidad... ");
    i0.ɵɵelementEnd();
} }
function PaymentModal_Conditional_6_Conditional_20_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 78);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 96);
    i0.ɵɵelement(2, "path", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" No disponible", ctx_r1.availabilityMsg ? ". " + ctx_r1.availabilityMsg : "", " ");
} }
function PaymentModal_Conditional_6_Conditional_20_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 79);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 96);
    i0.ɵɵelement(2, "path", 97);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " \u00A1Horario disponible! ");
    i0.ɵɵelementEnd();
} }
function PaymentModal_Conditional_6_Conditional_20_Conditional_11_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 101);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 106);
    i0.ɵɵelement(2, "path", 107);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", ctx_r1.selectedDateLabel, " \u2192 ", ctx_r1.nextDayLabel, " ");
} }
function PaymentModal_Conditional_6_Conditional_20_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 80)(1, "div", 98)(2, "div", 99);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 100);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(6, PaymentModal_Conditional_6_Conditional_20_Conditional_11_Conditional_6_Template, 4, 2, "div", 101);
    i0.ɵɵelementStart(7, "div", 102)(8, "p", 103);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p", 104);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "number");
    i0.ɵɵelementStart(14, "span", 105);
    i0.ɵɵtext(15, "COP");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r1.startTime, " \u2192 ", ctx_r1.endTime);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.totalHours, "h");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.crossesMidnight ? 6 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", ctx_r1.totalHours, "h \u00D7 $", i0.ɵɵpipeBind1(10, 7, ctx_r1.room.price), "/h ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" $", i0.ɵɵpipeBind1(13, 9, ctx_r1.totalPrice), " ");
} }
function PaymentModal_Conditional_6_Conditional_20_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 96);
    i0.ɵɵelement(2, "path", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.paymentError, " ");
} }
function PaymentModal_Conditional_6_Conditional_20_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 85);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 108);
    i0.ɵɵelement(2, "circle", 7)(3, "path", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Procesando... ");
    i0.ɵɵelementEnd();
} }
function PaymentModal_Conditional_6_Conditional_20_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Elige el horario ");
} }
function PaymentModal_Conditional_6_Conditional_20_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Verificando... ");
} }
function PaymentModal_Conditional_6_Conditional_20_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " No disponible ");
} }
function PaymentModal_Conditional_6_Conditional_20_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "number");
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵtextInterpolate1(" Pagar $", i0.ɵɵpipeBind1(1, 1, ctx_r1.totalPrice), " COP ");
} }
function PaymentModal_Conditional_6_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "div")(2, "p", 74);
    i0.ɵɵtext(3, " Hora de entrada ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 75);
    i0.ɵɵrepeaterCreate(5, PaymentModal_Conditional_6_Conditional_20_For_6_Template, 3, 4, "button", 76, _forTrack1);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(7, PaymentModal_Conditional_6_Conditional_20_Conditional_7_Template, 12, 1, "div");
    i0.ɵɵconditionalCreate(8, PaymentModal_Conditional_6_Conditional_20_Conditional_8_Template, 5, 0, "div", 77);
    i0.ɵɵconditionalCreate(9, PaymentModal_Conditional_6_Conditional_20_Conditional_9_Template, 4, 1, "div", 78);
    i0.ɵɵconditionalCreate(10, PaymentModal_Conditional_6_Conditional_20_Conditional_10_Template, 4, 0, "div", 79);
    i0.ɵɵconditionalCreate(11, PaymentModal_Conditional_6_Conditional_20_Conditional_11_Template, 16, 11, "div", 80);
    i0.ɵɵconditionalCreate(12, PaymentModal_Conditional_6_Conditional_20_Conditional_12_Template, 4, 1, "div", 81);
    i0.ɵɵelementStart(13, "div", 82)(14, "button", 83);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_20_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.mobileStep = 1); });
    i0.ɵɵtext(15, " \u2190 Fecha ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 84);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_20_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.reserve()); });
    i0.ɵɵconditionalCreate(17, PaymentModal_Conditional_6_Conditional_20_Conditional_17_Template, 5, 0, "span", 85)(18, PaymentModal_Conditional_6_Conditional_20_Conditional_18_Template, 1, 0)(19, PaymentModal_Conditional_6_Conditional_20_Conditional_19_Template, 1, 0)(20, PaymentModal_Conditional_6_Conditional_20_Conditional_20_Template, 1, 0)(21, PaymentModal_Conditional_6_Conditional_20_Conditional_21_Template, 2, 3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r1.entrySlots);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.startTime ? 7 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.checkingAvailability ? 8 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r1.checkingAvailability && ctx_r1.availabilityOk === false ? 9 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r1.checkingAvailability && ctx_r1.availabilityOk === true ? 10 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.startTime && ctx_r1.endTime && ctx_r1.totalHours > 0 ? 11 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.paymentError && ctx_r1.mobileStep === 2 ? 12 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !ctx_r1.canReserve || ctx_r1.reserving);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.reserving ? 17 : !ctx_r1.startTime || !ctx_r1.endTime ? 18 : ctx_r1.checkingAvailability ? 19 : ctx_r1.availabilityOk === false ? 20 : 21);
} }
function PaymentModal_Conditional_6_Conditional_21_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 117);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 96);
    i0.ɵɵelement(2, "path", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.paymentError, " ");
} }
function PaymentModal_Conditional_6_Conditional_21_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 118);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 96);
    i0.ɵɵelement(2, "path", 97);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Pago exitoso. Confirmando reserva... ");
    i0.ɵɵelementEnd();
} }
function PaymentModal_Conditional_6_Conditional_21_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 85);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 108);
    i0.ɵɵelement(2, "circle", 7)(3, "path", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Procesando... ");
    i0.ɵɵelementEnd();
} }
function PaymentModal_Conditional_6_Conditional_21_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Pago Completo ");
} }
function PaymentModal_Conditional_6_Conditional_21_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Confirmar Pago ");
} }
function PaymentModal_Conditional_6_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "div")(2, "p", 74);
    i0.ɵɵtext(3, " Resumen de Reserva ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 109)(5, "div", 110)(6, "span", 111);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 112);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 113);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "p", 114);
    i0.ɵɵtext(14, " Pago Seguro ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 115);
    i0.ɵɵelement(16, "div", 116);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(17, PaymentModal_Conditional_6_Conditional_21_Conditional_17_Template, 4, 1, "div", 117);
    i0.ɵɵconditionalCreate(18, PaymentModal_Conditional_6_Conditional_21_Conditional_18_Template, 4, 0, "div", 118);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 82)(20, "button", 119);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_21_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r21); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(21, " Cancelar ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "button", 84);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_21_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r21); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.confirmPayment()); });
    i0.ɵɵconditionalCreate(23, PaymentModal_Conditional_6_Conditional_21_Conditional_23_Template, 5, 0, "span", 85)(24, PaymentModal_Conditional_6_Conditional_21_Conditional_24_Template, 1, 0)(25, PaymentModal_Conditional_6_Conditional_21_Conditional_25_Template, 1, 0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.selectedDateLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind1(10, 10, ctx_r1.totalPrice));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate3("", ctx_r1.startTime, " \u2192 ", ctx_r1.endTime, " (", ctx_r1.totalHours, "h)");
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r1.paymentError ? 17 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.paymentSuccess ? 18 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.processingPayment || ctx_r1.paymentSuccess);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.processingPayment || ctx_r1.paymentSuccess || !ctx_r1.elements);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.processingPayment ? 23 : ctx_r1.paymentSuccess ? 24 : 25);
} }
function PaymentModal_Conditional_6_Conditional_32_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 123);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r23 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(d_r23);
} }
function PaymentModal_Conditional_6_Conditional_32_For_15_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 127);
    i0.ɵɵtext(1, "\uD83C\uDF19");
    i0.ɵɵelementEnd();
} }
function PaymentModal_Conditional_6_Conditional_32_For_15_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 126);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_32_For_15_Template_button_click_0_listener() { const day_r25 = i0.ɵɵrestoreView(_r24).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.selectDate(day_r25)); });
    i0.ɵɵtext(1);
    i0.ɵɵconditionalCreate(2, PaymentModal_Conditional_6_Conditional_32_For_15_Conditional_2_Template, 2, 0, "span", 127);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r25 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", !day_r25.day || day_r25.isPast)("ngClass", i0.ɵɵpureFunction5(4, _c4, !day_r25.day, day_r25.day && day_r25.isPast, day_r25.day && !day_r25.isPast && !ctx_r1.isSelectedDate(day_r25) && !ctx_r1.isEndDate(day_r25), day_r25.day && ctx_r1.isSelectedDate(day_r25), day_r25.day && ctx_r1.isEndDate(day_r25)));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", day_r25.day || "", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(day_r25.day && ctx_r1.isEndDate(day_r25) ? 2 : -1);
} }
function PaymentModal_Conditional_6_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30)(1, "div", 98)(2, "button", 120);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_32_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.prevMonth()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 106);
    i0.ɵɵelement(4, "path", 53);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "p", 121);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 120);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_32_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.nextMonth()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(8, "svg", 106);
    i0.ɵɵelement(9, "path", 55);
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(10, "div", 122);
    i0.ɵɵrepeaterCreate(11, PaymentModal_Conditional_6_Conditional_32_For_12_Template, 2, 1, "div", 123, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 124);
    i0.ɵɵrepeaterCreate(14, PaymentModal_Conditional_6_Conditional_32_For_15_Template, 3, 10, "button", 125, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.monthLabel);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r1.dayNames);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.calendarDays);
} }
function PaymentModal_Conditional_6_Conditional_33_For_12_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 134);
    i0.ɵɵtext(1, "In");
    i0.ɵɵelementEnd();
} }
function PaymentModal_Conditional_6_Conditional_33_For_12_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 135);
    i0.ɵɵtext(1, "\uD83C\uDF19");
    i0.ɵɵelementEnd();
} }
function PaymentModal_Conditional_6_Conditional_33_For_12_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 131);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_33_For_12_Template_button_click_0_listener() { const wd_r28 = i0.ɵɵrestoreView(_r27).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.selectWeekDay(wd_r28)); });
    i0.ɵɵelementStart(1, "span", 132);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 133);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, PaymentModal_Conditional_6_Conditional_33_For_12_Conditional_5_Template, 2, 0, "span", 134);
    i0.ɵɵconditionalCreate(6, PaymentModal_Conditional_6_Conditional_33_For_12_Conditional_6_Template, 2, 0, "span", 135);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const wd_r28 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", wd_r28.isPast)("ngClass", i0.ɵɵpureFunction4(8, _c5, wd_r28.isPast, ctx_r1.weekDayMark(wd_r28) === "start", ctx_r1.weekDayMark(wd_r28) === "end", !wd_r28.isPast && !ctx_r1.weekDayMark(wd_r28)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.weekDayMark(wd_r28) ? "text-white/50" : "text-white/25");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(wd_r28.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(13, _c6, ctx_r1.weekDayMark(wd_r28) === "start", ctx_r1.weekDayMark(wd_r28) === "end", !ctx_r1.weekDayMark(wd_r28)));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(wd_r28.num);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.weekDayMark(wd_r28) === "start" ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.weekDayMark(wd_r28) === "end" ? 6 : -1);
} }
function PaymentModal_Conditional_6_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30)(1, "div", 50)(2, "button", 128);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_33_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.prevWeek()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 106);
    i0.ɵɵelement(4, "path", 53);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "p", 129);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 128);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_33_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.nextWeek()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(8, "svg", 106);
    i0.ɵɵelement(9, "path", 55);
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(10, "div", 58);
    i0.ɵɵrepeaterCreate(11, PaymentModal_Conditional_6_Conditional_33_For_12_Template, 7, 17, "button", 130, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.weekRangeLabel);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r1.weekDaysView);
} }
function PaymentModal_Conditional_6_Conditional_34_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 137);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\uD83C\uDF19 Salida: ", ctx_r1.nextDayLabel);
} }
function PaymentModal_Conditional_6_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31)(1, "p", 136);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, PaymentModal_Conditional_6_Conditional_34_Conditional_3_Template, 2, 1, "p", 137);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\uD83D\uDCC5 ", ctx_r1.selectedDateLabel);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.crossesMidnight ? 3 : -1);
} }
function PaymentModal_Conditional_6_Conditional_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34)(1, "p", 138);
    i0.ɵɵtext(2, "Selecciona una fecha primero");
    i0.ɵɵelementEnd()();
} }
function PaymentModal_Conditional_6_Conditional_40_For_6_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 143);
    i0.ɵɵtext(1, "\u2715");
    i0.ɵɵelementEnd();
} }
function PaymentModal_Conditional_6_Conditional_40_For_6_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 142);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_40_For_6_Template_button_click_0_listener() { const slot_r30 = i0.ɵɵrestoreView(_r29).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.selectStartTime(slot_r30)); });
    i0.ɵɵtext(1);
    i0.ɵɵconditionalCreate(2, PaymentModal_Conditional_6_Conditional_40_For_6_Conditional_2_Template, 2, 0, "span", 143);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const slot_r30 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", !slot_r30.available)("ngClass", ctx_r1.startTime === slot_r30.time ? "bg-gradient-to-br from-[#6E2A35] to-[#A72027] border-[#A72027] text-white font-bold" : slot_r30.available ? "bg-white/[0.03] border-white/10 text-white/50 hover:border-white/25 hover:text-white/80" : "bg-red-900/15 border-red-800/25 text-red-400/40 cursor-not-allowed opacity-50");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", slot_r30.time, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(!slot_r30.available ? 2 : -1);
} }
function PaymentModal_Conditional_6_Conditional_40_Conditional_7_Conditional_3_For_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 143);
    i0.ɵɵtext(1, "\u2715");
    i0.ɵɵelementEnd();
} }
function PaymentModal_Conditional_6_Conditional_40_Conditional_7_Conditional_3_For_4_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 142);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_40_Conditional_7_Conditional_3_For_4_Template_button_click_0_listener() { const slot_r32 = i0.ɵɵrestoreView(_r31).$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.selectEndTime(slot_r32, false)); });
    i0.ɵɵtext(1);
    i0.ɵɵconditionalCreate(2, PaymentModal_Conditional_6_Conditional_40_Conditional_7_Conditional_3_For_4_Conditional_2_Template, 2, 0, "span", 143);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const slot_r32 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("disabled", !slot_r32.available)("ngClass", ctx_r1.endTime === slot_r32.time && !ctx_r1.crossesMidnight ? "bg-gradient-to-br from-[#6E2A35] to-[#A72027] border-[#A72027] text-white font-bold" : slot_r32.available ? "bg-white/[0.03] border-white/10 text-white/50 hover:border-white/25 hover:text-white/80" : "bg-red-900/15 border-red-800/25 text-red-400/40 cursor-not-allowed opacity-50");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", slot_r32.time, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(!slot_r32.available ? 2 : -1);
} }
function PaymentModal_Conditional_6_Conditional_40_Conditional_7_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 149);
    i0.ɵɵtext(1, "Mismo d\u00EDa");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 150);
    i0.ɵɵrepeaterCreate(3, PaymentModal_Conditional_6_Conditional_40_Conditional_7_Conditional_3_For_4_Template, 3, 4, "button", 141, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.exitSameDaySlots);
} }
function PaymentModal_Conditional_6_Conditional_40_Conditional_7_For_11_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 151);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_40_Conditional_7_For_11_Template_button_click_0_listener() { const slot_r34 = i0.ɵɵrestoreView(_r33).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.selectEndTime(slot_r34, true)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const slot_r34 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngClass", ctx_r1.endTime === slot_r34.time && ctx_r1.crossesMidnight ? "bg-gradient-to-br from-[#6E2A35] to-[#A72027] border-[#A72027] text-white font-bold" : "bg-indigo-950/40 border-indigo-800/30 text-indigo-300/60 hover:border-indigo-500/40 hover:text-indigo-200");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", slot_r34.time, " ");
} }
function PaymentModal_Conditional_6_Conditional_40_Conditional_7_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 77);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 95);
    i0.ɵɵelement(2, "circle", 7)(3, "path", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Verificando... ");
    i0.ɵɵelementEnd();
} }
function PaymentModal_Conditional_6_Conditional_40_Conditional_7_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 146);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 96);
    i0.ɵɵelement(2, "path", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" No disponible", ctx_r1.availabilityMsg ? ". " + ctx_r1.availabilityMsg : "", " ");
} }
function PaymentModal_Conditional_6_Conditional_40_Conditional_7_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 147);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 96);
    i0.ɵɵelement(2, "path", 97);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " \u00A1Disponible! ");
    i0.ɵɵelementEnd();
} }
function PaymentModal_Conditional_6_Conditional_40_Conditional_7_Conditional_15_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 155);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" \uD83C\uDF19 ", ctx_r1.selectedDateLabel, " \u2192 ", ctx_r1.nextDayLabel, " ");
} }
function PaymentModal_Conditional_6_Conditional_40_Conditional_7_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 148)(1, "div", 152)(2, "span", 153);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 154);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(6, PaymentModal_Conditional_6_Conditional_40_Conditional_7_Conditional_15_Conditional_6_Template, 2, 2, "p", 155);
    i0.ɵɵelementStart(7, "div", 156)(8, "span", 103);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 157);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "number");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r1.startTime, " \u2192 ", ctx_r1.endTime);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.totalHours, "h");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.crossesMidnight ? 6 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r1.totalHours, "h \u00D7 $", i0.ɵɵpipeBind1(10, 7, ctx_r1.room.price));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind1(13, 9, ctx_r1.totalPrice));
} }
function PaymentModal_Conditional_6_Conditional_40_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "p", 139);
    i0.ɵɵtext(2, " Hora de salida ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, PaymentModal_Conditional_6_Conditional_40_Conditional_7_Conditional_3_Template, 5, 0);
    i0.ɵɵelementStart(4, "div", 88);
    i0.ɵɵelement(5, "div", 89);
    i0.ɵɵelementStart(6, "span", 144);
    i0.ɵɵtext(7, "\uD83C\uDF19 D\u00EDa siguiente");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "div", 89);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 140);
    i0.ɵɵrepeaterCreate(10, PaymentModal_Conditional_6_Conditional_40_Conditional_7_For_11_Template, 2, 2, "button", 145, _forTrack1);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(12, PaymentModal_Conditional_6_Conditional_40_Conditional_7_Conditional_12_Template, 5, 0, "div", 77);
    i0.ɵɵconditionalCreate(13, PaymentModal_Conditional_6_Conditional_40_Conditional_7_Conditional_13_Template, 4, 1, "div", 146);
    i0.ɵɵconditionalCreate(14, PaymentModal_Conditional_6_Conditional_40_Conditional_7_Conditional_14_Template, 4, 0, "div", 147);
    i0.ɵɵconditionalCreate(15, PaymentModal_Conditional_6_Conditional_40_Conditional_7_Conditional_15_Template, 14, 11, "div", 148);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.exitSameDaySlots.length > 0 ? 3 : -1);
    i0.ɵɵadvance(7);
    i0.ɵɵrepeater(ctx_r1.exitNextDaySlots);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.checkingAvailability ? 12 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r1.checkingAvailability && ctx_r1.availabilityOk === false ? 13 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r1.checkingAvailability && ctx_r1.availabilityOk === true ? 14 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.endTime && ctx_r1.totalHours > 0 ? 15 : -1);
} }
function PaymentModal_Conditional_6_Conditional_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "div")(2, "p", 139);
    i0.ɵɵtext(3, " Hora de entrada ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 140);
    i0.ɵɵrepeaterCreate(5, PaymentModal_Conditional_6_Conditional_40_For_6_Template, 3, 4, "button", 141, _forTrack1);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(7, PaymentModal_Conditional_6_Conditional_40_Conditional_7_Template, 16, 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r1.entrySlots);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.startTime ? 7 : -1);
} }
function PaymentModal_Conditional_6_Conditional_47_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 159);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \u2192 ", ctx_r1.nextDayLabel);
} }
function PaymentModal_Conditional_6_Conditional_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39)(1, "div", 158)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵconditionalCreate(4, PaymentModal_Conditional_6_Conditional_47_Conditional_4_Template, 2, 1, "span", 159);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 156)(8, "span", 160);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 161);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "number");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.selectedDateLabel, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.crossesMidnight ? 4 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r1.startTime, " \u2013 ", ctx_r1.endTime);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r1.totalHours, "h \u00D7 $", i0.ɵɵpipeBind1(10, 7, ctx_r1.room.price), "/h");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind1(13, 9, ctx_r1.totalPrice));
} }
function PaymentModal_Conditional_6_Conditional_48_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 146);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 96);
    i0.ɵɵelement(2, "path", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.paymentError, " ");
} }
function PaymentModal_Conditional_6_Conditional_48_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 147);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 96);
    i0.ɵɵelement(2, "path", 97);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Pago exitoso. \u00A1Reserva confirmada! ");
    i0.ɵɵelementEnd();
} }
function PaymentModal_Conditional_6_Conditional_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 162)(1, "p", 74);
    i0.ɵɵtext(2, "Pago Seguro");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 163);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(4, PaymentModal_Conditional_6_Conditional_48_Conditional_4_Template, 4, 1, "div", 146);
    i0.ɵɵconditionalCreate(5, PaymentModal_Conditional_6_Conditional_48_Conditional_5_Template, 4, 0, "div", 147);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r1.paymentError ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.paymentSuccess ? 5 : -1);
} }
function PaymentModal_Conditional_6_Conditional_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 96);
    i0.ɵɵelement(2, "path", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.paymentError, " ");
} }
function PaymentModal_Conditional_6_Conditional_53_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 85);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 108);
    i0.ɵɵelement(2, "circle", 7)(3, "path", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Generando cobro... ");
    i0.ɵɵelementEnd();
} }
function PaymentModal_Conditional_6_Conditional_53_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Selecciona fecha y hora ");
} }
function PaymentModal_Conditional_6_Conditional_53_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Elige el horario ");
} }
function PaymentModal_Conditional_6_Conditional_53_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Verificando... ");
} }
function PaymentModal_Conditional_6_Conditional_53_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " No disponible ");
} }
function PaymentModal_Conditional_6_Conditional_53_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Continuar al Pago ");
} }
function PaymentModal_Conditional_6_Conditional_53_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 164);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_53_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.reserve()); });
    i0.ɵɵconditionalCreate(1, PaymentModal_Conditional_6_Conditional_53_Conditional_1_Template, 5, 0, "span", 85)(2, PaymentModal_Conditional_6_Conditional_53_Conditional_2_Template, 1, 0)(3, PaymentModal_Conditional_6_Conditional_53_Conditional_3_Template, 1, 0)(4, PaymentModal_Conditional_6_Conditional_53_Conditional_4_Template, 1, 0)(5, PaymentModal_Conditional_6_Conditional_53_Conditional_5_Template, 1, 0)(6, PaymentModal_Conditional_6_Conditional_53_Conditional_6_Template, 1, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r1.canReserve || ctx_r1.reserving);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.reserving ? 1 : !ctx_r1.selectedDate ? 2 : !ctx_r1.startTime || !ctx_r1.endTime ? 3 : ctx_r1.checkingAvailability ? 4 : ctx_r1.availabilityOk === false ? 5 : 6);
} }
function PaymentModal_Conditional_6_Conditional_54_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 85);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 108);
    i0.ɵɵelement(2, "circle", 7)(3, "path", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Procesando... ");
    i0.ɵɵelementEnd();
} }
function PaymentModal_Conditional_6_Conditional_54_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Pago Completo ");
} }
function PaymentModal_Conditional_6_Conditional_54_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Confirmar Pago ");
} }
function PaymentModal_Conditional_6_Conditional_54_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 164);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Conditional_54_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r36); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.confirmPayment()); });
    i0.ɵɵconditionalCreate(1, PaymentModal_Conditional_6_Conditional_54_Conditional_1_Template, 5, 0, "span", 85)(2, PaymentModal_Conditional_6_Conditional_54_Conditional_2_Template, 1, 0)(3, PaymentModal_Conditional_6_Conditional_54_Conditional_3_Template, 1, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r1.processingPayment || ctx_r1.paymentSuccess || !ctx_r1.elements);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.processingPayment ? 1 : ctx_r1.paymentSuccess ? 2 : 3);
} }
function PaymentModal_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div")(2, "p", 11);
    i0.ɵɵtext(3, " Confirmar reserva ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h2", 12);
    i0.ɵɵtext(5);
    i0.ɵɵelementStart(6, "span", 13);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "number");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "button", 14);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(10, "svg", 15);
    i0.ɵɵelement(11, "path", 16);
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(12, "div", 17)(13, "div", 18)(14, "div", 19);
    i0.ɵɵrepeaterCreate(15, PaymentModal_Conditional_6_For_16_Template, 1, 1, "div", 20, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "p", 21);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(19, PaymentModal_Conditional_6_Conditional_19_Template, 13, 8, "div", 22);
    i0.ɵɵconditionalCreate(20, PaymentModal_Conditional_6_Conditional_20_Template, 22, 8, "div", 23);
    i0.ɵɵconditionalCreate(21, PaymentModal_Conditional_6_Conditional_21_Template, 26, 12, "div", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 24)(23, "div", 25)(24, "div", 26)(25, "p", 27);
    i0.ɵɵtext(26, "Fecha");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 28)(28, "button", 29);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.calendarView = "month"); });
    i0.ɵɵtext(29, " Mes ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "button", 29);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Template_button_click_30_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.calendarView = "week"); });
    i0.ɵɵtext(31, " Semana ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(32, PaymentModal_Conditional_6_Conditional_32_Template, 16, 1, "div", 30);
    i0.ɵɵconditionalCreate(33, PaymentModal_Conditional_6_Conditional_33_Template, 13, 1, "div", 30);
    i0.ɵɵconditionalCreate(34, PaymentModal_Conditional_6_Conditional_34_Template, 4, 2, "div", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "div", 32)(36, "div", 33)(37, "p", 27);
    i0.ɵɵtext(38, "Horario y precio");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(39, PaymentModal_Conditional_6_Conditional_39_Template, 3, 0, "div", 34)(40, PaymentModal_Conditional_6_Conditional_40_Template, 8, 1, "div", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "div", 36)(42, "div", 33)(43, "p", 27);
    i0.ɵɵtext(44, "Confirmar y pagar");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "div", 37)(46, "div", 38);
    i0.ɵɵconditionalCreate(47, PaymentModal_Conditional_6_Conditional_47_Template, 14, 11, "div", 39);
    i0.ɵɵconditionalCreate(48, PaymentModal_Conditional_6_Conditional_48_Template, 6, 2);
    i0.ɵɵconditionalCreate(49, PaymentModal_Conditional_6_Conditional_49_Template, 4, 1, "div", 40);
    i0.ɵɵelementStart(50, "div", 41)(51, "button", 42);
    i0.ɵɵlistener("click", function PaymentModal_Conditional_6_Template_button_click_51_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(52, " Cancelar ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(53, PaymentModal_Conditional_6_Conditional_53_Template, 7, 2, "button", 43)(54, PaymentModal_Conditional_6_Conditional_54_Template, 4, 2, "button", 43);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2(" ", ctx_r1.room.roomType, " \u2014 Hab. ", ctx_r1.room.number, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind1(8, 18, ctx_r1.room.price), "/h");
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(20, _c0));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.mobileStep === 1 ? "Selecciona fecha" : ctx_r1.mobileStep === 2 ? "Horario, precio y datos" : "Pago Seguro", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.mobileStep === 1 ? 19 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.mobileStep === 2 ? 20 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.mobileStep === 3 ? 21 : -1);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngClass", ctx_r1.calendarView === "month" ? "bg-white/10 text-white" : "text-white/35 hover:text-white");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r1.calendarView === "week" ? "bg-white/10 text-white" : "text-white/35 hover:text-white");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.calendarView === "month" ? 32 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.calendarView === "week" ? 33 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.selectedDate ? 34 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(!ctx_r1.selectedDate ? 39 : 40);
    i0.ɵɵadvance(8);
    i0.ɵɵconditional(ctx_r1.startTime && ctx_r1.endTime && ctx_r1.totalHours > 0 ? 47 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.mobileStep === 3 ? 48 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.paymentError && ctx_r1.mobileStep !== 3 ? 49 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.processingPayment || ctx_r1.paymentSuccess);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.mobileStep !== 3 ? 53 : 54);
} }
export class PaymentModal {
    dialogRef;
    data;
    roomService;
    paymentService;
    http;
    cdr;
    room = null;
    loading = true;
    isSubmitting = false;
    error = false;
    reserving = false;
    // ── Stripe ───────────────────────────────────────────────────────────────
    stripe = null;
    elements = null;
    clientSecret = null;
    paymentId = null;
    processingPayment = false;
    paymentError = null;
    paymentSuccess = false;
    confirmationCode = null;
    // ── Mobile wizard ────────────────────────────────────────────────────────
    mobileStep = 1;
    // ── Calendario ───────────────────────────────────────────────────────────
    calYear = new Date().getFullYear();
    calMonth = new Date().getMonth();
    calendarDays = [];
    selectedDay = null;
    weekDays = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
    dayNames = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
    // All available time slots
    ALL_SLOTS = [
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00',
    ];
    // Time slots with availability status
    entrySlots = [];
    exitSameDaySlots = [];
    exitNextDaySlots = [];
    startTime = '';
    endTime = '';
    // ── Disponibilidad ────────────────────────────────────────────────────────
    checkingAvailability = false;
    availabilityOk = null;
    availabilityMsg = '';
    reservations = [];
    // ── Calendar view mode ────────────────────────────────────────────────────
    calendarView = 'month';
    currentWeekStart = this.getWeekStart(new Date());
    // ══════════════════════════════════════════════════════════════════════════
    constructor(dialogRef, data, roomService, paymentService, http, cdr) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.roomService = roomService;
        this.paymentService = paymentService;
        this.http = http;
        this.cdr = cdr;
    }
    buildCheckInOutDateTimes() {
        if (!this.selectedDate || !this.startTime || !this.endTime)
            return null;
        const [startHour] = this.startTime.split(':').map(Number);
        const [endHour] = this.endTime.split(':').map(Number);
        const checkIn = new Date(this.selectedDate);
        checkIn.setHours(startHour, 0, 0, 0);
        const checkOut = new Date(this.selectedDate);
        checkOut.setHours(endHour, 0, 0, 0);
        if (this.crossesMidnight)
            checkOut.setDate(checkOut.getDate() + 1);
        return {
            checkIn,
            checkOut,
            checkInIso: checkIn.toISOString(),
            checkOutIso: checkOut.toISOString(),
        };
    }
    setEndDateFromTimes() {
        if (!this.selectedDay?.date || !this.startTime || !this.endTime) {
            this._endDate = null;
            return;
        }
        if (!this.crossesMidnight) {
            this._endDate = null;
            return;
        }
        const next = new Date(this.selectedDay.date);
        next.setDate(next.getDate() + 1);
        next.setHours(0, 0, 0, 0);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        this._endDate = { day: next.getDate(), date: next, isPast: next < today };
    }
    ngOnInit() {
        this.buildCalendar();
        this.initializeTimeSlots();
        this.initializeStripe();
        const id = this.data?.id;
        if (!id) {
            this.error = true;
            this.loading = false;
            return;
        }
        this.roomService.getRoomById(id).subscribe({
            next: (room) => {
                this.room = room;
                this.loading = false;
                if (this.data.date) {
                    const pre = new Date(this.data.date + 'T00:00:00');
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    pre.setHours(0, 0, 0, 0);
                    if (pre >= today) {
                        this.selectedDay = { day: pre.getDate(), date: pre, isPast: false };
                        this.loadReservationsForDate(pre);
                        this.mobileStep = 2;
                    }
                    this.calYear = pre.getFullYear();
                    this.calMonth = pre.getMonth();
                    this.buildCalendar();
                }
                if (this.data.time) {
                    this.startTime = this.data.time;
                }
            },
            error: () => {
                this.error = true;
                this.loading = false;
            },
        });
    }
    // ══════════════════════════════════════════════════════════════════════════
    // Stripe Initialization
    // ══════════════════════════════════════════════════════════════════════════
    initializeStripe() {
        this.paymentService.getStripeConfig().subscribe({
            next: async (config) => {
                this.stripe = await loadStripe(config.publishableKey);
            },
            error: (err) => {
                console.error('Error loading Stripe config:', err);
                this.error = true;
            }
        });
    }
    // ══════════════════════════════════════════════════════════════════════════
    // Initialize time slots
    // ══════════════════════════════════════════════════════════════════════════
    initializeTimeSlots() {
        this.entrySlots = this.ALL_SLOTS.map((time) => ({
            time,
            label: time,
            available: true,
        }));
        this.exitSameDaySlots = this.ALL_SLOTS.map((time) => ({
            time,
            label: time,
            available: true,
        }));
        this.exitNextDaySlots = [
            '00:00',
            '01:00',
            '02:00',
            '03:00',
            '04:00',
            '05:00',
            '06:00',
            '07:00',
        ].map((time) => ({
            time,
            label: time,
            available: true,
        }));
    }
    // ══════════════════════════════════════════════════════════════════════════
    // Load reservations for selected date
    // ══════════════════════════════════════════════════════════════════════════
    loadReservationsForDate(date) {
        if (!this.room)
            return;
        const dateStr = date.toISOString().split('T')[0];
        this.roomService.getReservationsForDate(this.room.id, dateStr).subscribe({
            next: (reservations) => {
                this.reservations = reservations.filter((r) => r.status === 'confirmed' || r.status === 'pending');
                this.updateTimeSlotAvailability();
            },
            error: () => {
                // If endpoint doesn't exist yet, continue with all slots available
                this.reservations = [];
                this.updateTimeSlotAvailability();
            },
        });
    }
    isSelectedDateToday() {
        if (!this.selectedDay?.date)
            return false;
        const today = new Date();
        const sel = this.selectedDay.date;
        return sel.getFullYear() === today.getFullYear() &&
            sel.getMonth() === today.getMonth() &&
            sel.getDate() === today.getDate();
    }
    isPastTime(time) {
        if (!this.isSelectedDateToday())
            return false;
        const [h] = time.split(':').map(Number);
        return h <= new Date().getHours();
    }
    // ══════════════════════════════════════════════════════════════════════════
    // Update time slot availability based on reservations
    // ══════════════════════════════════════════════════════════════════════════
    updateTimeSlotAvailability() {
        // Reset all slots
        this.initializeTimeSlots();
        // Update entry slots - mark slots that overlap with reservations as unavailable
        this.entrySlots = this.entrySlots.map((slot) => {
            const reservation = this.findOverlappingReservation(slot.time, '23:59', false);
            const past = this.isPastTime(slot.time);
            return {
                ...slot,
                available: !reservation && !past,
                reservation: reservation || undefined,
            };
        });
        // Update exit same-day slots
        if (this.startTime) {
            const startIndex = this.ALL_SLOTS.indexOf(this.startTime);
            this.exitSameDaySlots = this.ALL_SLOTS.slice(startIndex + 1).map((time) => {
                const reservation = this.findOverlappingReservation(time, '23:59', false);
                return {
                    time,
                    label: time,
                    available: !reservation,
                    reservation: reservation || undefined,
                };
            });
        }
        // Update exit next-day slots (all available for now, logic can be enhanced)
        this.exitNextDaySlots = this.exitNextDaySlots.map((slot) => {
            return {
                ...slot,
                available: true,
            };
        });
    }
    // ══════════════════════════════════════════════════════════════════════════
    // Check if a time overlaps with any reservation
    // ══════════════════════════════════════════════════════════════════════════
    findOverlappingReservation(time, endLimit, isNextDay) {
        const timeHour = parseInt(time.split(':')[0], 10);
        for (const reservation of this.reservations) {
            const resStartHour = parseInt(reservation.start_time.split(':')[0], 10);
            const resEndHour = parseInt(reservation.end_time.split(':')[0], 10);
            // Same day reservation
            if (!isNextDay) {
                if (timeHour >= resStartHour && timeHour < resEndHour) {
                    return reservation;
                }
            }
        }
        return null;
    }
    // ══════════════════════════════════════════════════════════════════════════
    // Get unavailable time ranges for display
    // ══════════════════════════════════════════════════════════════════════════
    getUnavailableRanges() {
        if (this.reservations.length === 0)
            return [];
        return this.reservations.map((r) => `${r.start_time} - ${r.end_time}`);
    }
    // ══════════════════════════════════════════════════════════════════════════
    // Calendario
    // ══════════════════════════════════════════════════════════════════════════
    buildCalendar() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const firstDay = new Date(this.calYear, this.calMonth, 1).getDay();
        const daysInMo = new Date(this.calYear, this.calMonth + 1, 0).getDate();
        const days = [];
        for (let i = 0; i < firstDay; i++)
            days.push({ day: null, date: null, isPast: false });
        for (let d = 1; d <= daysInMo; d++) {
            const date = new Date(this.calYear, this.calMonth, d);
            date.setHours(0, 0, 0, 0);
            days.push({ day: d, date, isPast: date < today });
        }
        this.calendarDays = days;
    }
    get currentMonthLabel() {
        return new Date(this.calYear, this.calMonth, 1)
            .toLocaleDateString('es-CO', { month: 'long', year: 'numeric' })
            .replace(/^\w/, (c) => c.toUpperCase());
    }
    prevMonth() {
        this.calMonth === 0 ? ((this.calMonth = 11), this.calYear--) : this.calMonth--;
        this.buildCalendar();
    }
    nextMonth() {
        this.calMonth === 11 ? ((this.calMonth = 0), this.calYear++) : this.calMonth++;
        this.buildCalendar();
    }
    // ══════════════════════════════════════════════════════════════════════════
    // Week view helpers
    // ══════════════════════════════════════════════════════════════════════════
    getWeekStart(date) {
        const d = new Date(date);
        const day = d.getDay();
        d.setDate(d.getDate() - day);
        d.setHours(0, 0, 0, 0);
        return d;
    }
    get weekDaysView() {
        const days = [];
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        for (let i = 0; i < 7; i++) {
            const d = new Date(this.currentWeekStart);
            d.setDate(d.getDate() + i);
            days.push({
                label: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'][i],
                num: d.getDate(),
                date: d,
                isPast: d < today,
            });
        }
        return days;
    }
    get weekRangeLabel() {
        const start = new Date(this.currentWeekStart);
        const end = new Date(start);
        end.setDate(end.getDate() + 6);
        return `${start.getDate()} - ${end.getDate()} ${end.toLocaleDateString('es-CO', { month: 'short' })}`;
    }
    prevWeek() {
        this.currentWeekStart = new Date(this.currentWeekStart);
        this.currentWeekStart.setDate(this.currentWeekStart.getDate() - 7);
        this.buildCalendar();
    }
    nextWeek() {
        this.currentWeekStart = new Date(this.currentWeekStart);
        this.currentWeekStart.setDate(this.currentWeekStart.getDate() + 7);
        this.buildCalendar();
    }
    selectWeekDay(day) {
        if (day.isPast)
            return;
        this.selectDate({ day: day.num, date: day.date, isPast: day.isPast });
    }
    // ══════════════════════════════════════════════════════════════════════════
    selectDate(day) {
        if (!day.date || day.isPast)
            return;
        this.selectedDay = day;
        this.startTime = '';
        this.endTime = '';
        this._endDate = null;
        this.availabilityOk = null;
        this.availabilityMsg = '';
        // Load reservations for this date
        this.loadReservationsForDate(day.date);
    }
    isSelectedDate(day) {
        return (!!this.selectedDay &&
            this.selectedDay.day === day.day &&
            this.selectedDay.date?.getMonth() === this.calMonth &&
            this.selectedDay.date?.getFullYear() === this.calYear);
    }
    // ══════════════════════════════════════════════════════════════════════════
    // End date selection for range (if needed in future)
    // ══════════════════════════════════════════════════════════════════════════
    _endDate = null;
    get endDate() {
        return this._endDate;
    }
    isEndDate(day) {
        return (!!this._endDate &&
            this._endDate.day === day.day &&
            this._endDate.date?.getMonth() === this.calMonth &&
            this._endDate.date?.getFullYear() === this.calYear);
    }
    get selectedDate() {
        return this.selectedDay?.date ?? null;
    }
    get selectedDateLabel() {
        if (!this.selectedDay?.date)
            return '';
        return this.selectedDay.date.toLocaleDateString('es-CO', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
        });
    }
    get nextDayLabel() {
        if (!this.selectedDay?.date)
            return '';
        const next = new Date(this.selectedDay.date);
        next.setDate(next.getDate() + 1);
        return next.toLocaleDateString('es-CO', {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
        });
    }
    get crossesMidnight() {
        if (!this.startTime || !this.endTime)
            return false;
        const startHour = parseInt(this.startTime.split(':')[0], 10);
        const endHour = parseInt(this.endTime.split(':')[0], 10);
        return endHour <= startHour;
    }
    // ══════════════════════════════════════════════════════════════════════════
    // Horario + verificación de disponibilidad
    // ══════════════════════════════════════════════════════════════════════════
    selectStartTime(slot) {
        // Check if slot is available
        if (!slot.available)
            return;
        this.startTime = slot.time;
        this.endTime = '';
        this._endDate = null;
        this.availabilityOk = null;
        this.availabilityMsg = '';
        // Update exit slots availability
        this.updateExitSlotsAvailability();
    }
    updateExitSlotsAvailability() {
        if (!this.startTime)
            return;
        const startIndex = this.ALL_SLOTS.indexOf(this.startTime);
        // Same day exit slots
        this.exitSameDaySlots = this.ALL_SLOTS.slice(startIndex + 1).map((time) => {
            const reservation = this.findOverlappingReservation(time, '23:59', false);
            return {
                time,
                label: time,
                available: !reservation,
                reservation: reservation || undefined,
            };
        });
    }
    /**
     * Al elegir la hora de SALIDA → verificar disponibilidad inmediatamente.
     */
    selectEndTime(slot, crossesMidnight = false) {
        // Check if slot is available
        if (!slot.available)
            return;
        this.endTime = slot.time;
        this.setEndDateFromTimes();
        this.verifyAvailability();
    }
    verifyAvailability() {
        if (!this.room || !this.selectedDate || !this.startTime || !this.endTime)
            return;
        this.checkingAvailability = true;
        this.availabilityOk = null;
        this.availabilityMsg = '';
        const date = this.selectedDate.toISOString().split('T')[0];
        this.roomService.checkAvailability(this.room.id, date, this.startTime, this.endTime).subscribe({
            next: (res) => {
                this.availabilityOk = res.available;
                this.availabilityMsg = res.message ?? '';
                this.checkingAvailability = false;
                // En mobile, avanzar automáticamente al paso 3 si está disponible
                if (res.available && this.mobileStep === 2) {
                    setTimeout(() => {
                        this.mobileStep = 3;
                    }, 600);
                }
            },
            error: () => {
                // Si el endpoint no existe aún, asumir disponible para no bloquear el flujo
                this.availabilityOk = true;
                this.checkingAvailability = false;
            },
        });
    }
    get timeSlotsAfter() {
        if (!this.startTime)
            return [];
        return this.timeSlots.slice(this.timeSlots.indexOf(this.startTime) + 1);
    }
    get totalHours() {
        if (!this.startTime || !this.endTime)
            return 0;
        const [sh] = this.startTime.split(':').map(Number);
        const [eh] = this.endTime.split(':').map(Number);
        if (this.crossesMidnight) {
            return 24 - sh + eh;
        }
        return eh - sh;
    }
    get totalPrice() {
        return (this.room?.price ?? 0) * this.totalHours;
    }
    // ══════════════════════════════════════════════════════════════════════════
    // Validación
    // ══════════════════════════════════════════════════════════════════════════
    get canReserve() {
        return (!!this.selectedDate &&
            !!this.startTime &&
            !!this.endTime &&
            this.totalHours > 0 &&
            !this.checkingAvailability &&
            this.availabilityOk !== false);
    }
    // ══════════════════════════════════════════════════════════════════════════
    // Reserva → Mercado Pago
    // ══════════════════════════════════════════════════════════════════════════
    reserve() {
        if (!this.canReserve || !this.room)
            return;
        const dateTimes = this.buildCheckInOutDateTimes();
        if (!dateTimes)
            return;
        const now = new Date();
        if (dateTimes.checkIn <= now) {
            this.paymentError = 'La hora de entrada debe ser en el futuro.';
            return;
        }
        if (dateTimes.checkOut <= dateTimes.checkIn) {
            this.paymentError = 'La hora de salida debe ser posterior a la entrada.';
            return;
        }
        this.reserving = true;
        this.paymentError = null;
        const payload = {
            roomId: this.room.id,
            motelId: this.room.motelId,
            date: this.selectedDate.toISOString().split('T')[0],
            startTime: this.startTime,
            endTime: this.endTime,
            hours: this.totalHours,
            totalPrice: this.totalPrice,
        };
        // First create the reservation
        this.paymentService.createReservation(payload.roomId, payload.motelId, payload.totalPrice, 101, // Mock user ID or extracted correctly from token/auth context
        dateTimes.checkInIso, dateTimes.checkOutIso).subscribe({
            next: (res) => {
                const reservationId = res.id;
                this.confirmationCode = res.confirmationCode || null;
                // Next, create the Payment Intent for Stripe
                this.paymentService.createPaymentIntent(reservationId, payload.totalPrice).subscribe({
                    next: (intentRes) => {
                        this.reserving = false;
                        this.clientSecret = intentRes.clientSecret;
                        this.paymentId = intentRes.paymentId;
                        // Move to Stripe Payment step
                        this.mobileStep = 3;
                        this.mountStripeElements();
                    },
                    error: (err) => {
                        console.error('Error creating payment intent:', err);
                        this.paymentError = 'No se pudo inicializar el pago seguro.';
                        this.reserving = false;
                    }
                });
            },
            error: (err) => {
                console.error('Error creando reserva:', err);
                // Intentar parsear el mensaje de error del backend si existe
                if (err.error && err.error.message) {
                    this.paymentError = err.error.message;
                }
                else if (err.error && typeof err.error === 'string') {
                    this.paymentError = err.error;
                }
                else if (err.error && typeof err.error === 'object') {
                    const msgs = Object.values(err.error).filter((v) => typeof v === 'string' && v.trim().length > 0);
                    this.paymentError = msgs.length > 0 ? msgs.join(' ') : 'Error al crear la reserva. Por favor intenta de nuevo.';
                }
                else {
                    this.paymentError = 'Error al crear la reserva. Por favor intenta de nuevo.';
                }
                this.reserving = false;
            },
        });
    }
    // ══════════════════════════════════════════════════════════════════════════
    // Stripe Payment Flow
    // ══════════════════════════════════════════════════════════════════════════
    mountStripeElements() {
        if (!this.stripe || !this.clientSecret)
            return;
        // 1) Forzar que Angular renderice el @if(mobileStep === 3)
        this.cdr.detectChanges();
        // 2) Usar rAF + timeout para garantizar que el browser ya pintó el DOM
        requestAnimationFrame(() => {
            setTimeout(() => this.tryMountStripe(8), 50);
        });
    }
    tryMountStripe(attemptsLeft) {
        const container = document.getElementById('payment-element-desktop') ||
            document.getElementById('payment-element-mobile');
        if (!container) {
            if (attemptsLeft > 0) {
                requestAnimationFrame(() => {
                    setTimeout(() => this.tryMountStripe(attemptsLeft - 1), 100);
                });
            }
            else {
                console.error('Stripe: no se encontró el contenedor tras múltiples intentos');
            }
            return;
        }
        // Limpiar por si se montó antes
        container.innerHTML = '';
        this.elements = this.stripe.elements({
            clientSecret: this.clientSecret,
            appearance: {
                theme: 'night',
                variables: {
                    colorPrimary: '#A72027',
                    colorBackground: '#1a1a1f',
                    colorText: '#ffffff',
                    colorDanger: '#ff4d4f',
                    fontFamily: 'DM Sans, sans-serif',
                    borderRadius: '8px',
                }
            }
        });
        const paymentElement = this.elements.create('payment');
        paymentElement.mount(`#${container.id}`);
        // Habilitar el botón "Confirmar Pago"
        this.cdr.detectChanges();
    }
    async confirmPayment() {
        if (!this.stripe || !this.elements)
            return;
        this.processingPayment = true;
        this.paymentError = null;
        const { error } = await this.stripe.confirmPayment({
            elements: this.elements,
            confirmParams: {
                // Return URL is usually required for some payment methods, like 3D Secure
                // You can point this back to your booking page or a specific success route
                return_url: window.location.origin + '/reservations/success',
            },
            redirect: 'if_required' // We handle success locally down below without full redirect if possible
        });
        if (error) {
            // Show error to your customer (e.g., insufficient funds)
            this.paymentError = error.message || 'El pago fue rechazado o cancelado.';
            this.processingPayment = false;
            this.cdr.detectChanges(); // Forzar re-render para mostrar el mensaje de error
        }
        else {
            // The payment has been processed!
            this.processingPayment = false;
            this.paymentSuccess = true;
            this.cdr.detectChanges(); // Forzar re-render para mostrar el estado de éxito
            // Give the user a moment to see the success state, then close the modal
            setTimeout(() => {
                this.dialogRef.close({
                    success: true,
                    paymentId: this.paymentId,
                    details: {
                        date: this.selectedDate.toISOString().split('T')[0],
                        startTime: this.startTime,
                        endTime: this.endTime,
                        totalPrice: this.totalPrice,
                        roomName: this.room?.roomType || this.room?.motelName,
                        confirmationCode: this.confirmationCode
                    }
                });
            }, 2000);
        }
    }
    close() {
        this.dialogRef.close();
    }
    // ══════════════════════════════════════════════════════════════════════════
    // Helper getters for template compatibility
    // ══════════════════════════════════════════════════════════════════════════
    get timeSlots() {
        return this.ALL_SLOTS;
    }
    get monthLabel() {
        return this.currentMonthLabel;
    }
    weekDayMark(day) {
        if (!this.selectedDay?.date)
            return null;
        if (day.date.toDateString() === this.selectedDay.date.toDateString())
            return 'start';
        if (this._endDate?.date && day.date.toDateString() === this._endDate.date.toDateString())
            return 'end';
        return null;
    }
    static ɵfac = function PaymentModal_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaymentModal)(i0.ɵɵdirectiveInject(i1.DialogRef), i0.ɵɵdirectiveInject(DIALOG_DATA), i0.ɵɵdirectiveInject(i2.RoomService), i0.ɵɵdirectiveInject(i3.PaymentService), i0.ɵɵdirectiveInject(i4.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaymentModal, selectors: [["app-payment-modal"]], decls: 7, vars: 3, consts: [[1, "font-['DM_Sans',sans-serif]", "text-white", "bg-[#0c0c0e]", "w-full", "rounded-t-3xl", "max-h-[92vh]", "overflow-y-auto", "border-t", "border-white/[0.08]", "md:rounded-3xl", "md:border", "md:border-white/[0.08]", "md:max-h-[88vh]", "md:w-[960px]", "md:max-w-[95vw]", "md:overflow-hidden", "shadow-2xl", "shadow-black/80"], [1, "flex", "justify-center", "pt-3", "pb-1", "md:hidden"], [1, "w-10", "h-1", "rounded-full", "bg-white/20"], [1, "hidden", "md:block", "h-0.5", "w-full", "bg-gradient-to-r", "from-[#6E2A35]", "via-[#A72027]", "to-[#6E2A35]"], [1, "flex", "items-center", "justify-center", "py-20", "text-white/30", "text-sm", "gap-3"], [1, "px-6", "py-12", "text-center", "text-red-400", "text-sm"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-5", "h-5"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "block", "mx-auto", "mt-3", "text-white/40", "underline", "text-xs", 3, "click"], [1, "flex", "items-center", "justify-between", "px-5", "md:px-6", "pt-4", "pb-3", "md:pt-5", "border-b", "border-white/[0.06]"], [1, "text-[#c8a97e]", "text-[10px]", "tracking-[0.3em]", "uppercase", "mb-0.5"], [1, "text-base", "md:text-lg", "font-['Cormorant_Garamond',serif]", "font-bold"], [1, "text-white/30", "font-normal", "text-sm", "ml-1"], [1, "w-8", "h-8", "rounded-full", "bg-white/5", "border", "border-white/10", "flex", "items-center", "justify-center", "text-white/40", "hover:text-white", "hover:border-white/30", "transition-all", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "md:hidden"], [1, "px-5", "pt-4"], [1, "flex", "gap-1", "mb-1.5"], [1, "h-1", "flex-1", "rounded-full", "transition-all", "duration-500", 3, "ngClass"], [1, "text-[10px]", "text-white/30", "tracking-widest", "uppercase"], [1, "px-5", "pt-4", "pb-6"], [1, "px-5", "pt-4", "pb-6", "flex", "flex-col", "gap-5"], [1, "hidden", "md:flex", 2, "height", "calc(min(88vh, 620px) - 68px)"], [1, "w-[285px]", "shrink-0", "border-r", "border-white/[0.06]", "flex", "flex-col", "overflow-y-auto"], [1, "px-4", "pt-4", "pb-2", "flex", "items-center", "justify-between", "shrink-0"], [1, "text-[#c8a97e]", "text-[10px]", "tracking-[0.3em]", "uppercase"], [1, "flex", "bg-white/5", "rounded-lg", "p-0.5"], ["type", "button", 1, "px-2.5", "py-1", "rounded-md", "text-[10px]", "transition-all", 3, "click", "ngClass"], [1, "px-4", "pb-3"], [1, "px-4", "py-2", "border-t", "border-white/[0.06]", "mt-auto", "shrink-0"], [1, "w-[290px]", "shrink-0", "border-r", "border-white/[0.06]", "flex", "flex-col", "overflow-y-auto"], [1, "px-5", "pt-4", "pb-2", "shrink-0"], [1, "flex-1", "flex", "items-center", "justify-center", "px-6"], [1, "px-4", "flex", "flex-col", "gap-4", "pb-4"], [1, "flex-1", "flex", "flex-col", "overflow-y-auto", "min-w-0"], [1, "flex-1", "flex", "flex-col", "px-4", "pb-4", "gap-3"], [1, "mt-auto", "flex", "flex-col", "gap-3"], [1, "bg-white/[0.03]", "border", "border-white/[0.06]", "rounded-xl", "px-4", "py-3"], [1, "mb-2", "flex", "items-center", "gap-2", "bg-red-900/20", "border", "border-red-600/30", "rounded-xl", "px-3", "py-2", "text-xs", "text-red-400"], [1, "flex", "gap-2"], ["type", "button", 1, "px-4", "py-2.5", "border", "border-[#8B0000]", "text-[#cc3a3a]", "rounded-xl", "text-sm", "hover:bg-[#6E2A35]/15", "transition-all", 3, "click", "disabled"], ["type", "button", 1, "flex-1", "py-2.5", "rounded-xl", "text-sm", "font-semibold", "bg-gradient-to-r", "from-[#6E2A35]", "to-[#A72027]", "text-white", "shadow-lg", "shadow-[#6E2A35]/25", "disabled:opacity-25", "disabled:cursor-not-allowed", "transition-all", 3, "disabled"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "flex", "bg-white/5", "rounded-xl", "p-0.5"], ["type", "button", 1, "px-3", "py-1.5", "rounded-lg", "text-xs", "transition-all", 3, "click", "ngClass"], [1, "text-[10px]", "text-[#c8a97e]", "truncate", "ml-2"], [1, "mt-4", "p-3", "bg-red-900/10", "border", "border-red-600/20", "rounded-xl"], ["type", "button", 1, "mt-5", "w-full", "py-4", "rounded-2xl", "text-sm", "font-semibold", "bg-gradient-to-r", "from-[#6E2A35]", "to-[#A72027]", "text-white", "shadow-lg", "shadow-[#6E2A35]/30", "disabled:opacity-25", "disabled:cursor-not-allowed", "transition-all", 3, "click", "disabled"], [1, "flex", "items-center", "justify-between", "mb-3"], ["type", "button", 1, "w-8", "h-8", "rounded-xl", "bg-white/5", "flex", "items-center", "justify-center", "text-white/50", "hover:text-white", "transition-all", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "text-sm", "font-semibold", "text-white/80"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "grid", "grid-cols-7", "mb-1"], [1, "text-center", "text-[10px]", "text-white/25", "py-1"], [1, "grid", "grid-cols-7", "gap-1"], ["type", "button", 1, "aspect-square", "flex", "items-center", "justify-center", "text-sm", "rounded-xl", "transition-all", "relative", 3, "disabled", "ngClass"], ["type", "button", 1, "aspect-square", "flex", "items-center", "justify-center", "text-sm", "rounded-xl", "transition-all", "relative", 3, "click", "disabled", "ngClass"], [1, "absolute", "-top-1", "-right-0.5", "text-[8px]"], ["type", "button", 1, "w-8", "h-8", "rounded-xl", "bg-white/5", "flex", "items-center", "justify-center", "text-white/50", "hover:text-white", 3, "click"], [1, "text-xs", "text-white/60", "font-medium"], [1, "grid", "grid-cols-7", "gap-1.5"], ["type", "button", 1, "flex", "flex-col", "items-center", "py-3", "rounded-2xl", "border", "transition-all", "gap-0.5", 3, "disabled", "ngClass"], ["type", "button", 1, "flex", "flex-col", "items-center", "py-3", "rounded-2xl", "border", "transition-all", "gap-0.5", 3, "click", "disabled", "ngClass"], [1, "text-[9px]", "uppercase", "tracking-wide", 3, "ngClass"], [1, "text-lg", "font-bold", "leading-none", 3, "ngClass"], [1, "text-[8px]", "text-[#c8a97e]"], [1, "text-[8px]", "text-indigo-400"], [1, "text-[10px]", "text-red-400", "uppercase", "tracking-widest", "mb-2"], [1, "flex", "flex-wrap", "gap-2"], [1, "text-xs", "text-red-300", "bg-red-900/30", "px-2", "py-1", "rounded-lg"], [1, "text-white/40", "text-[10px]", "uppercase", "tracking-widest", "mb-3"], [1, "grid", "grid-cols-4", "gap-2"], ["type", "button", 1, "py-3", "rounded-xl", "text-sm", "border", "transition-all", "relative", 3, "disabled", "ngClass"], [1, "flex", "items-center", "gap-2", "text-white/40", "text-xs"], [1, "flex", "items-center", "gap-2", "bg-red-900/20", "border", "border-red-600/30", "rounded-xl", "px-3", "py-2.5", "text-xs", "text-red-400"], [1, "flex", "items-center", "gap-2", "bg-green-900/20", "border", "border-green-600/30", "rounded-xl", "px-3", "py-2.5", "text-xs", "text-green-400"], [1, "bg-[#6E2A35]/15", "border", "border-[#A72027]/30", "rounded-2xl", "px-4", "py-4"], [1, "mb-3", "flex", "items-center", "gap-2", "bg-red-900/20", "border", "border-red-600/30", "rounded-xl", "px-3", "py-2.5", "text-xs", "text-red-400"], [1, "flex", "gap-3"], ["type", "button", 1, "px-5", "py-3.5", "rounded-2xl", "border", "border-white/10", "text-white/50", "text-sm", "hover:border-white/25", "transition-all", 3, "click"], ["type", "button", 1, "flex-1", "py-3.5", "rounded-2xl", "text-sm", "font-semibold", "bg-gradient-to-r", "from-[#6E2A35]", "to-[#A72027]", "text-white", "shadow-lg", "shadow-[#6E2A35]/30", "disabled:opacity-25", "disabled:cursor-not-allowed", "transition-all", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "gap-2"], ["type", "button", 1, "py-3", "rounded-xl", "text-sm", "border", "transition-all", "relative", 3, "click", "disabled", "ngClass"], [1, "absolute", "-top-1", "-right-1", "text-[8px]", "bg-red-600", "text-white", "rounded-full", "w-3", "h-3", "flex", "items-center", "justify-center"], [1, "flex", "items-center", "gap-2", "mb-2"], [1, "h-px", "flex-1", "bg-white/10"], [1, "text-[10px]", "text-[#c8a97e]", "uppercase", "tracking-widest", "px-2"], ["type", "button", 1, "py-3", "rounded-xl", "text-sm", "border", "transition-all", 3, "ngClass"], [1, "text-[10px]", "text-white/25", "uppercase", "tracking-widest", "mb-2"], [1, "grid", "grid-cols-4", "gap-2", "mb-3"], ["type", "button", 1, "py-3", "rounded-xl", "text-sm", "border", "transition-all", 3, "click", "ngClass"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-3.5", "h-3.5"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "text-sm", "font-bold", "text-white"], [1, "text-xs", "text-white/40", "bg-white/5", "px-2", "py-0.5", "rounded-full"], [1, "flex", "items-center", "gap-2", "mb-2", "text-[10px]", "text-indigo-400/80", "bg-indigo-950/30", "border", "border-indigo-800/25", "rounded-lg", "px-2.5", "py-1.5"], [1, "flex", "items-baseline", "justify-between"], [1, "text-[10px]", "text-white/35"], [1, "text-2xl", "font-['Cormorant_Garamond',serif]", "font-bold", "text-[#c8a97e]"], [1, "text-sm", "font-sans", "font-normal", "text-white/30"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3", "h-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-4", "h-4"], [1, "bg-[#6E2A35]/15", "border", "border-[#A72027]/30", "rounded-2xl", "px-4", "py-4", "mb-4"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "text-white/70"], [1, "font-bold", "text-[#c8a97e]"], [1, "text-xs", "text-white/40", "mt-1"], [1, "text-white/40", "text-[10px]", "uppercase", "tracking-widest", "mb-3", "mt-4"], [1, "bg-white/[0.02]", "border", "border-white/[0.05]", "rounded-xl", "p-4", "min-h-[150px]"], ["id", "payment-element-mobile"], [1, "mt-3", "flex", "items-center", "gap-2", "bg-red-900/20", "border", "border-red-600/30", "rounded-xl", "px-3", "py-2.5", "text-xs", "text-red-400"], [1, "mt-3", "flex", "items-center", "gap-2", "bg-green-900/20", "border", "border-green-600/30", "rounded-xl", "px-3", "py-2.5", "text-xs", "text-green-400"], ["type", "button", 1, "px-5", "py-3.5", "rounded-2xl", "border", "border-white/10", "text-white/50", "text-sm", "hover:border-white/25", "transition-all", 3, "click", "disabled"], ["type", "button", 1, "w-6", "h-6", "rounded-md", "bg-white/5", "hover:bg-white/10", "flex", "items-center", "justify-center", "text-white/40", "hover:text-white", "transition-all", 3, "click"], [1, "text-xs", "font-semibold", "text-white/70"], [1, "grid", "grid-cols-7"], [1, "text-center", "text-[9px]", "text-white/20", "py-0.5"], [1, "grid", "grid-cols-7", "gap-0.5"], ["type", "button", 1, "aspect-square", "flex", "items-center", "justify-center", "text-[11px]", "rounded-lg", "transition-all", "relative", 3, "disabled", "ngClass"], ["type", "button", 1, "aspect-square", "flex", "items-center", "justify-center", "text-[11px]", "rounded-lg", "transition-all", "relative", 3, "click", "disabled", "ngClass"], [1, "absolute", "-top-0.5", "-right-0.5", "text-[7px]"], ["type", "button", 1, "w-6", "h-6", "rounded-md", "bg-white/5", "hover:bg-white/10", "flex", "items-center", "justify-center", "text-white/40", "hover:text-white", 3, "click"], [1, "text-[10px]", "text-white/55", "font-medium"], ["type", "button", 1, "flex", "flex-col", "items-center", "py-2.5", "rounded-xl", "border", "transition-all", "gap-0.5", 3, "disabled", "ngClass"], ["type", "button", 1, "flex", "flex-col", "items-center", "py-2.5", "rounded-xl", "border", "transition-all", "gap-0.5", 3, "click", "disabled", "ngClass"], [1, "text-[8px]", "uppercase", "tracking-wide", 3, "ngClass"], [1, "text-sm", "font-bold", "leading-none", 3, "ngClass"], [1, "text-[7px]", "text-[#c8a97e]"], [1, "text-[7px]", "text-indigo-400"], [1, "text-[10px]", "text-white/40"], [1, "text-[10px]", "text-indigo-400/70", "mt-0.5"], [1, "text-white/20", "text-xs", "text-center"], [1, "text-white/40", "text-[10px]", "uppercase", "tracking-widest", "mb-2"], [1, "grid", "grid-cols-4", "gap-1"], ["type", "button", 1, "py-2", "rounded-lg", "text-[11px]", "border", "transition-all", "relative", 3, "disabled", "ngClass"], ["type", "button", 1, "py-2", "rounded-lg", "text-[11px]", "border", "transition-all", "relative", 3, "click", "disabled", "ngClass"], [1, "absolute", "-top-0.5", "-right-0.5", "text-[6px]", "bg-red-600", "text-white", "rounded-full", "w-2.5", "h-2.5", "flex", "items-center", "justify-center"], [1, "text-[9px]", "text-[#c8a97e]", "uppercase", "tracking-widest", "px-1"], ["type", "button", 1, "py-2", "rounded-lg", "text-[11px]", "border", "transition-all", 3, "ngClass"], [1, "flex", "items-center", "gap-2", "bg-red-900/20", "border", "border-red-600/30", "rounded-xl", "px-3", "py-2", "text-xs", "text-red-400"], [1, "flex", "items-center", "gap-2", "bg-green-900/20", "border", "border-green-600/30", "rounded-xl", "px-3", "py-2", "text-xs", "text-green-400"], [1, "bg-[#6E2A35]/15", "border", "border-[#A72027]/25", "rounded-xl", "px-3", "py-3"], [1, "text-[9px]", "text-white/20", "uppercase", "tracking-widest", "mb-1.5"], [1, "grid", "grid-cols-4", "gap-1", "mb-3"], ["type", "button", 1, "py-2", "rounded-lg", "text-[11px]", "border", "transition-all", 3, "click", "ngClass"], [1, "flex", "justify-between", "items-center", "mb-1"], [1, "text-xs", "text-white/50", "font-medium"], [1, "text-xs", "text-white/35", "bg-white/5", "px-2", "py-0.5", "rounded-full"], [1, "text-[10px]", "text-indigo-400/70", "mb-1.5"], [1, "flex", "justify-between", "items-baseline"], [1, "text-xl", "font-['Cormorant_Garamond',serif]", "font-bold", "text-[#c8a97e]"], [1, "flex", "justify-between", "text-xs", "text-white/35", "mb-1"], [1, "text-indigo-400/60"], [1, "text-xs", "text-white/35"], [1, "text-[#c8a97e]", "font-bold", "font-['Cormorant_Garamond',serif]", "text-2xl"], [1, "bg-white/[0.02]", "border", "border-white/[0.05]", "rounded-xl", "p-4", "mt-2", "mb-2"], ["id", "payment-element-desktop"], ["type", "button", 1, "flex-1", "py-2.5", "rounded-xl", "text-sm", "font-semibold", "bg-gradient-to-r", "from-[#6E2A35]", "to-[#A72027]", "text-white", "shadow-lg", "shadow-[#6E2A35]/25", "disabled:opacity-25", "disabled:cursor-not-allowed", "transition-all", 3, "click", "disabled"]], template: function PaymentModal_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵelement(2, "div", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "div", 3);
            i0.ɵɵconditionalCreate(4, PaymentModal_Conditional_4_Template, 5, 0, "div", 4);
            i0.ɵɵconditionalCreate(5, PaymentModal_Conditional_5_Template, 4, 0, "div", 5);
            i0.ɵɵconditionalCreate(6, PaymentModal_Conditional_6_Template, 55, 21);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.loading ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.loading && ctx.error ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.loading && ctx.room ? 6 : -1);
        } }, dependencies: [CommonModule, i5.NgClass, i5.DecimalPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaymentModal, [{
        type: Component,
        args: [{ selector: 'app-payment-modal', standalone: true, imports: [CommonModule], template: "<div\n  class=\"font-['DM_Sans',sans-serif] text-white bg-[#0c0c0e] w-full rounded-t-3xl max-h-[92vh] overflow-y-auto border-t border-white/[0.08] md:rounded-3xl md:border md:border-white/[0.08] md:max-h-[88vh] md:w-[960px] md:max-w-[95vw] md:overflow-hidden shadow-2xl shadow-black/80\">\n  <div class=\"flex justify-center pt-3 pb-1 md:hidden\">\n    <div class=\"w-10 h-1 rounded-full bg-white/20\"></div>\n  </div>\n  <div class=\"hidden md:block h-0.5 w-full bg-gradient-to-r from-[#6E2A35] via-[#A72027] to-[#6E2A35]\"></div>\n\n  @if (loading) {\n  <div class=\"flex items-center justify-center py-20 text-white/30 text-sm gap-3\">\n    <svg class=\"animate-spin w-5 h-5\" fill=\"none\" viewBox=\"0 0 24 24\">\n      <circle class=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"4\" />\n      <path class=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z\" />\n    </svg>\n    Cargando...\n  </div>\n  }\n\n  @if (!loading && error) {\n  <div class=\"px-6 py-12 text-center text-red-400 text-sm\">\n    Error al cargar la habitaci\u00F3n.\n    <button (click)=\"close()\" class=\"block mx-auto mt-3 text-white/40 underline text-xs\">\n      Cerrar\n    </button>\n  </div>\n  }\n\n  @if (!loading && room) {\n  <!-- HEADER -->\n  <div class=\"flex items-center justify-between px-5 md:px-6 pt-4 pb-3 md:pt-5 border-b border-white/[0.06]\">\n    <div>\n      <p class=\"text-[#c8a97e] text-[10px] tracking-[0.3em] uppercase mb-0.5\">\n        Confirmar reserva\n      </p>\n      <h2 class=\"text-base md:text-lg font-['Cormorant_Garamond',serif] font-bold\">\n        {{ room.roomType }} \u2014 Hab. {{ room.number }}\n        <span class=\"text-white/30 font-normal text-sm ml-1\">${{ room.price | number }}/h</span>\n      </h2>\n    </div>\n    <button (click)=\"close()\"\n      class=\"w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all\">\n      <svg class=\"w-3.5 h-3.5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\" />\n      </svg>\n    </button>\n  </div>\n\n  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MOBILE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <div class=\"md:hidden\">\n    <div class=\"px-5 pt-4\">\n      <div class=\"flex gap-1 mb-1.5\">\n        @for (s of [1, 2, 3]; track s) {\n        <div class=\"h-1 flex-1 rounded-full transition-all duration-500\" [ngClass]=\"\n                mobileStep >= s ? 'bg-gradient-to-r from-[#6E2A35] to-[#A72027]' : 'bg-white/10'\n              \"></div>\n        }\n      </div>\n      <p class=\"text-[10px] text-white/30 tracking-widest uppercase\">\n        {{ mobileStep === 1 ? 'Selecciona fecha' : mobileStep === 2 ? 'Horario, precio y datos' : 'Pago Seguro' }}\n      </p>\n    </div>\n\n      <!-- PASO 1: FECHA -->\n      @if (mobileStep === 1) {\n      <div class=\"px-5 pt-4 pb-6\">\n        <!-- Toggle mes/semana -->\n        <div class=\"flex items-center justify-between mb-4\">\n          <div class=\"flex bg-white/5 rounded-xl p-0.5\">\n            <button type=\"button\" (click)=\"calendarView = 'month'\" class=\"px-3 py-1.5 rounded-lg text-xs transition-all\"\n              [ngClass]=\"\n                    calendarView === 'month'\n                      ? 'bg-white/10 text-white'\n                      : 'text-white/40 hover:text-white'\n                  \">\n              Mes\n            </button>\n            <button type=\"button\" (click)=\"calendarView = 'week'\" class=\"px-3 py-1.5 rounded-lg text-xs transition-all\"\n              [ngClass]=\"\n                    calendarView === 'week'\n                      ? 'bg-white/10 text-white'\n                      : 'text-white/40 hover:text-white'\n                  \">\n              Semana\n            </button>\n          </div>\n          @if (selectedDate) {\n          <span class=\"text-[10px] text-[#c8a97e] truncate ml-2\">\uD83D\uDCC5 {{ selectedDateLabel }}</span>\n          }\n        </div>\n\n        <!-- Vista mes mobile -->\n        @if (calendarView === 'month') {\n        <div class=\"flex items-center justify-between mb-3\">\n          <button type=\"button\" (click)=\"prevMonth()\"\n            class=\"w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-all\">\n            <svg class=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 19l-7-7 7-7\" />\n            </svg>\n          </button>\n          <p class=\"text-sm font-semibold text-white/80\">{{ monthLabel }}</p>\n          <button type=\"button\" (click)=\"nextMonth()\"\n            class=\"w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-all\">\n            <svg class=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 5l7 7-7 7\" />\n            </svg>\n          </button>\n        </div>\n        <div class=\"grid grid-cols-7 mb-1\">\n          @for (d of dayNames; track d) {\n          <div class=\"text-center text-[10px] text-white/25 py-1\">{{ d }}</div>\n          }\n        </div>\n        <div class=\"grid grid-cols-7 gap-1\">\n          @for (day of calendarDays; track $index) {\n          <button type=\"button\" [disabled]=\"!day.day || day.isPast\" (click)=\"selectDate(day)\"\n            class=\"aspect-square flex items-center justify-center text-sm rounded-xl transition-all relative\" [ngClass]=\"{\n                      invisible: !day.day,\n                      'text-white/15 cursor-not-allowed': day.day && day.isPast,\n                      'hover:bg-white/10 text-white/70':\n                        day.day && !day.isPast && !isSelectedDate(day) && !isEndDate(day),\n                      'bg-gradient-to-br from-[#6E2A35] to-[#A72027] text-white font-bold shadow-lg':\n                        day.day && isSelectedDate(day),\n                      'bg-indigo-900/50 border border-indigo-500/50 text-indigo-200 font-semibold':\n                        day.day && isEndDate(day),\n                    }\">\n            {{ day.day || '' }}\n            @if (day.day && isEndDate(day)) {\n            <span class=\"absolute -top-1 -right-0.5 text-[8px]\">\uD83C\uDF19</span>\n            }\n          </button>\n          }\n        </div>\n        }\n\n        <!-- Vista semana mobile -->\n        @if (calendarView === 'week') {\n        <div class=\"flex items-center justify-between mb-3\">\n          <button type=\"button\" (click)=\"prevWeek()\"\n            class=\"w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:text-white\">\n            <svg class=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 19l-7-7 7-7\" />\n            </svg>\n          </button>\n          <p class=\"text-xs text-white/60 font-medium\">{{ weekRangeLabel }}</p>\n          <button type=\"button\" (click)=\"nextWeek()\"\n            class=\"w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:text-white\">\n            <svg class=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 5l7 7-7 7\" />\n            </svg>\n          </button>\n        </div>\n        <div class=\"grid grid-cols-7 gap-1.5\">\n          @for (wd of weekDaysView; track wd.label) {\n          <button type=\"button\" (click)=\"selectWeekDay(wd)\" [disabled]=\"wd.isPast\"\n            class=\"flex flex-col items-center py-3 rounded-2xl border transition-all gap-0.5\" [ngClass]=\"{\n                      'opacity-20 cursor-not-allowed border-transparent': wd.isPast,\n                      'border-[#A72027] bg-gradient-to-b from-[#6E2A35]/60 to-[#A72027]/25 shadow-lg':\n                        weekDayMark(wd) === 'start',\n                      'border-indigo-500/60 bg-indigo-900/35': weekDayMark(wd) === 'end',\n                      'border-white/10 hover:border-white/30 hover:bg-white/5':\n                        !wd.isPast && !weekDayMark(wd),\n                    }\">\n            <span class=\"text-[9px] uppercase tracking-wide\"\n              [ngClass]=\"weekDayMark(wd) ? 'text-white/60' : 'text-white/30'\">{{ wd.label }}</span>\n            <span class=\"text-lg font-bold leading-none\" [ngClass]=\"{\n                        'text-white': weekDayMark(wd) === 'start',\n                        'text-indigo-300': weekDayMark(wd) === 'end',\n                        'text-white/65': !weekDayMark(wd),\n                      }\">{{ wd.num }}</span>\n            @if (weekDayMark(wd) === 'start') {\n            <span class=\"text-[8px] text-[#c8a97e]\">Entrada</span>\n            }\n            @if (weekDayMark(wd) === 'end') {\n            <span class=\"text-[8px] text-indigo-400\">\uD83C\uDF19 Salida</span>\n            }\n          </button>\n          }\n        </div>\n        }\n\n        <!-- Mostrar horarios ocupados -->\n        @if (reservations.length > 0) {\n        <div class=\"mt-4 p-3 bg-red-900/10 border border-red-600/20 rounded-xl\">\n          <p class=\"text-[10px] text-red-400 uppercase tracking-widest mb-2\">\n            Horarios ocupados\n          </p>\n          <div class=\"flex flex-wrap gap-2\">\n            @for (range of getUnavailableRanges(); track range) {\n            <span class=\"text-xs text-red-300 bg-red-900/30 px-2 py-1 rounded-lg\">{{\n              range\n              }}</span>\n            }\n          </div>\n        </div>\n        }\n\n        <button type=\"button\" (click)=\"mobileStep = 2\" [disabled]=\"!selectedDate\"\n          class=\"mt-5 w-full py-4 rounded-2xl text-sm font-semibold bg-gradient-to-r from-[#6E2A35] to-[#A72027] text-white shadow-lg shadow-[#6E2A35]/30 disabled:opacity-25 disabled:cursor-not-allowed transition-all\">\n          {{ selectedDate ? 'Continuar \u2014 ' + selectedDateLabel : 'Selecciona un d\u00EDa' }}\n        </button>\n      </div>\n      }\n\n      <!-- PASO 2: HORARIO + PRECIO + DATOS -->\n      @if (mobileStep === 2) {\n      <div class=\"px-5 pt-4 pb-6 flex flex-col gap-5\">\n        <!-- HORA ENTRADA -->\n        <div>\n          <p class=\"text-white/40 text-[10px] uppercase tracking-widest mb-3\">\n            Hora de entrada\n          </p>\n          <div class=\"grid grid-cols-4 gap-2\">\n            @for (slot of entrySlots; track slot.time) {\n            <button type=\"button\" (click)=\"selectStartTime(slot)\" [disabled]=\"!slot.available\"\n              class=\"py-3 rounded-xl text-sm border transition-all relative\" [ngClass]=\"\n                      startTime === slot.time\n                        ? 'bg-gradient-to-br from-[#6E2A35] to-[#A72027] border-[#A72027] text-white font-bold'\n                        : slot.available\n                          ? 'bg-white/[0.04] border-white/10 text-white/60 hover:border-white/30 hover:text-white'\n                          : 'bg-red-900/20 border-red-800/30 text-red-400/50 cursor-not-allowed opacity-50'\n                    \">\n              {{ slot.time }}\n              @if (!slot.available) {\n              <span\n                class=\"absolute -top-1 -right-1 text-[8px] bg-red-600 text-white rounded-full w-3 h-3 flex items-center justify-center\">\u2715</span>\n              }\n            </button>\n            }\n          </div>\n        </div>\n\n        <!-- HORA SALIDA -->\n        @if (startTime) {\n        <div>\n          <p class=\"text-white/40 text-[10px] uppercase tracking-widest mb-3\">\n            Hora de salida\n          </p>\n\n          <!-- Mismo d\u00EDa -->\n          @if (exitSameDaySlots.length > 0) {\n          <p class=\"text-[10px] text-white/25 uppercase tracking-widest mb-2\">Mismo d\u00EDa</p>\n          <div class=\"grid grid-cols-4 gap-2 mb-3\">\n            @for (slot of exitSameDaySlots; track slot.time) {\n            <button type=\"button\" (click)=\"selectEndTime(slot, false)\" [disabled]=\"!slot.available\"\n              class=\"py-3 rounded-xl text-sm border transition-all relative\" [ngClass]=\"\n                          endTime === slot.time && !crossesMidnight\n                            ? 'bg-gradient-to-br from-[#6E2A35] to-[#A72027] border-[#A72027] text-white font-bold'\n                            : slot.available\n                              ? 'bg-white/[0.04] border-white/10 text-white/60 hover:border-white/30 hover:text-white'\n                              : 'bg-red-900/20 border-red-800/30 text-red-400/50 cursor-not-allowed opacity-50'\n                        \">\n              {{ slot.time }}\n              @if (!slot.available) {\n              <span\n                class=\"absolute -top-1 -right-1 text-[8px] bg-red-600 text-white rounded-full w-3 h-3 flex items-center justify-center\">\u2715</span>\n              }\n            </button>\n            }\n          </div>\n          }\n\n          <!-- D\u00EDa siguiente -->\n          <div class=\"flex items-center gap-2 mb-2\">\n            <div class=\"h-px flex-1 bg-white/10\"></div>\n            <span class=\"text-[10px] text-[#c8a97e] uppercase tracking-widest px-2\">\uD83C\uDF19 D\u00EDa siguiente</span>\n            <div class=\"h-px flex-1 bg-white/10\"></div>\n          </div>\n          <div class=\"grid grid-cols-4 gap-2\">\n            @for (slot of exitNextDaySlots; track slot.time) {\n            <button type=\"button\" (click)=\"selectEndTime(slot, true)\"\n              class=\"py-3 rounded-xl text-sm border transition-all\" [ngClass]=\"\n                        endTime === slot.time && crossesMidnight\n                          ? 'bg-gradient-to-br from-[#6E2A35] to-[#A72027] border-[#A72027] text-white font-bold'\n                          : 'bg-indigo-950/40 border-indigo-800/30 text-indigo-300/70 hover:border-indigo-500/50 hover:text-indigo-200'\n                      \">\n              {{ slot.time }}\n            </button>\n            }\n          </div>\n        </div>\n        }\n\n        <!-- DISPONIBILIDAD -->\n        @if (checkingAvailability) {\n        <div class=\"flex items-center gap-2 text-white/40 text-xs\">\n          <svg class=\"animate-spin w-3.5 h-3.5\" fill=\"none\" viewBox=\"0 0 24 24\">\n            <circle class=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"4\" />\n            <path class=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z\" />\n          </svg>\n          Verificando disponibilidad...\n        </div>\n        }\n        @if (!checkingAvailability && availabilityOk === false) {\n        <div\n          class=\"flex items-center gap-2 bg-red-900/20 border border-red-600/30 rounded-xl px-3 py-2.5 text-xs text-red-400\">\n          <svg class=\"w-3.5 h-3.5 shrink-0\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\" />\n          </svg>\n          No disponible{{ availabilityMsg ? '. ' + availabilityMsg : '' }}\n        </div>\n        }\n        @if (!checkingAvailability && availabilityOk === true) {\n        <div\n          class=\"flex items-center gap-2 bg-green-900/20 border border-green-600/30 rounded-xl px-3 py-2.5 text-xs text-green-400\">\n          <svg class=\"w-3.5 h-3.5 shrink-0\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 13l4 4L19 7\" />\n          </svg>\n          \u00A1Horario disponible!\n        </div>\n        }\n\n        <!-- PRECIO -->\n        @if (startTime && endTime && totalHours > 0) {\n        <div class=\"bg-[#6E2A35]/15 border border-[#A72027]/30 rounded-2xl px-4 py-4\">\n          <div class=\"flex items-center justify-between mb-2\">\n            <div class=\"text-sm font-bold text-white\">{{ startTime }} \u2192 {{ endTime }}</div>\n            <span class=\"text-xs text-white/40 bg-white/5 px-2 py-0.5 rounded-full\">{{ totalHours }}h</span>\n          </div>\n          @if (crossesMidnight) {\n          <div\n            class=\"flex items-center gap-2 mb-2 text-[10px] text-indigo-400/80 bg-indigo-950/30 border border-indigo-800/25 rounded-lg px-2.5 py-1.5\">\n            <svg class=\"w-3 h-3\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"\n                d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\" />\n            </svg>\n            {{ selectedDateLabel }} \u2192 {{ nextDayLabel }}\n          </div>\n          }\n          <div class=\"flex items-baseline justify-between\">\n            <p class=\"text-[10px] text-white/35\">\n              {{ totalHours }}h \u00D7 ${{ room.price | number }}/h\n            </p>\n            <p class=\"text-2xl font-['Cormorant_Garamond',serif] font-bold text-[#c8a97e]\">\n              ${{ totalPrice | number }}\n              <span class=\"text-sm font-sans font-normal text-white/30\">COP</span>\n            </p>\n          </div>\n        </div>\n        }\n\n        <!-- PAYMENT ERROR MOBILE -->\n        @if (paymentError && mobileStep === 2) {\n        <div class=\"mb-3 flex items-center gap-2 bg-red-900/20 border border-red-600/30 rounded-xl px-3 py-2.5 text-xs text-red-400\">\n          <svg class=\"w-3.5 h-3.5 shrink-0\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\" />\n          </svg>\n          {{ paymentError }}\n        </div>\n        }\n\n        <!-- ACCIONES -->\n        <div class=\"flex gap-3\">\n          <button type=\"button\" (click)=\"mobileStep = 1\"\n            class=\"px-5 py-3.5 rounded-2xl border border-white/10 text-white/50 text-sm hover:border-white/25 transition-all\">\n            \u2190 Fecha\n          </button>\n          <button type=\"button\" (click)=\"reserve()\" [disabled]=\"!canReserve || reserving\"\n            class=\"flex-1 py-3.5 rounded-2xl text-sm font-semibold bg-gradient-to-r from-[#6E2A35] to-[#A72027] text-white shadow-lg shadow-[#6E2A35]/30 disabled:opacity-25 disabled:cursor-not-allowed transition-all\">\n            @if (reserving) {\n            <span class=\"flex items-center justify-center gap-2\">\n              <svg class=\"animate-spin w-4 h-4\" fill=\"none\" viewBox=\"0 0 24 24\">\n                <circle class=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"4\" />\n                <path class=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z\" />\n              </svg>\n              Procesando...\n            </span>\n            } @else if (!startTime || !endTime) {\n            Elige el horario\n            } @else if (checkingAvailability) {\n            Verificando...\n            } @else if (availabilityOk === false) {\n            No disponible\n            } @else {\n            Pagar ${{ totalPrice | number }} COP\n            }\n          </button>\n        </div>\n      </div>\n      }\n\n      <!-- PASO 3: PAGO SEGURO STRIPE -->\n      @if (mobileStep === 3) {\n      <div class=\"px-5 pt-4 pb-6 flex flex-col gap-5\">\n        <div>\n          <p class=\"text-white/40 text-[10px] uppercase tracking-widest mb-3\">\n            Resumen de Reserva\n          </p>\n          <div class=\"bg-[#6E2A35]/15 border border-[#A72027]/30 rounded-2xl px-4 py-4 mb-4\">\n            <div class=\"flex items-center justify-between\">\n              <span class=\"text-sm text-white/70\">{{ selectedDateLabel }}</span>\n              <span class=\"font-bold text-[#c8a97e]\">${{ totalPrice | number }}</span>\n            </div>\n            <div class=\"text-xs text-white/40 mt-1\">{{ startTime }} \u2192 {{ endTime }} ({{ totalHours }}h)</div>\n          </div>\n\n          <p class=\"text-white/40 text-[10px] uppercase tracking-widest mb-3 mt-4\">\n            Pago Seguro\n          </p>\n\n          <!-- Contenedor Stripe Elements -->\n          <div class=\"bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 min-h-[150px]\">\n            <div id=\"payment-element-mobile\">\n              <!-- Stripe inyecta el UI aqu\u00ED -->\n            </div>\n          </div>\n\n          @if (paymentError) {\n          <div\n            class=\"mt-3 flex items-center gap-2 bg-red-900/20 border border-red-600/30 rounded-xl px-3 py-2.5 text-xs text-red-400\">\n            <svg class=\"w-3.5 h-3.5 shrink-0\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\" />\n            </svg>\n            {{ paymentError }}\n          </div>\n          }\n\n          @if (paymentSuccess) {\n          <div\n            class=\"mt-3 flex items-center gap-2 bg-green-900/20 border border-green-600/30 rounded-xl px-3 py-2.5 text-xs text-green-400\">\n            <svg class=\"w-3.5 h-3.5 shrink-0\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 13l4 4L19 7\" />\n            </svg>\n            Pago exitoso. Confirmando reserva...\n          </div>\n          }\n        </div>\n\n        <!-- Botones Paso 3 -->\n        <div class=\"flex gap-3\">\n          <button type=\"button\" (click)=\"close()\"\n            class=\"px-5 py-3.5 rounded-2xl border border-white/10 text-white/50 text-sm hover:border-white/25 transition-all\"\n            [disabled]=\"processingPayment || paymentSuccess\">\n            Cancelar\n          </button>\n          <button type=\"button\" (click)=\"confirmPayment()\" [disabled]=\"processingPayment || paymentSuccess || !elements\"\n            class=\"flex-1 py-3.5 rounded-2xl text-sm font-semibold bg-gradient-to-r from-[#6E2A35] to-[#A72027] text-white shadow-lg shadow-[#6E2A35]/30 disabled:opacity-25 disabled:cursor-not-allowed transition-all\">\n            @if (processingPayment) {\n            <span class=\"flex items-center justify-center gap-2\">\n              <svg class=\"animate-spin w-4 h-4\" fill=\"none\" viewBox=\"0 0 24 24\">\n                <circle class=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"4\" />\n                <path class=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z\" />\n              </svg>\n              Procesando...\n            </span>\n            } @else if (paymentSuccess) {\n            Pago Completo\n            } @else {\n            Confirmar Pago\n            }\n          </button>\n        </div>\n      </div>\n      }\n    </div>\n  <!-- FIN MOBILE -->\n\n  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 DESKTOP \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <div class=\"hidden md:flex\" style=\"height: calc(min(88vh, 620px) - 68px)\">\n    <!-- COL 1: Calendario -->\n    <div class=\"w-[285px] shrink-0 border-r border-white/[0.06] flex flex-col overflow-y-auto\">\n      <div class=\"px-4 pt-4 pb-2 flex items-center justify-between shrink-0\">\n        <p class=\"text-[#c8a97e] text-[10px] tracking-[0.3em] uppercase\">Fecha</p>\n        <div class=\"flex bg-white/5 rounded-lg p-0.5\">\n          <button type=\"button\" (click)=\"calendarView = 'month'\"\n            class=\"px-2.5 py-1 rounded-md text-[10px] transition-all\" [ngClass]=\"\n                calendarView === 'month'\n                  ? 'bg-white/10 text-white'\n                  : 'text-white/35 hover:text-white'\n              \">\n            Mes\n          </button>\n          <button type=\"button\" (click)=\"calendarView = 'week'\"\n            class=\"px-2.5 py-1 rounded-md text-[10px] transition-all\" [ngClass]=\"\n                calendarView === 'week'\n                  ? 'bg-white/10 text-white'\n                  : 'text-white/35 hover:text-white'\n              \">\n            Semana\n          </button>\n        </div>\n      </div>\n\n      <!-- Mes desktop -->\n      @if (calendarView === 'month') {\n      <div class=\"px-4 pb-3\">\n        <div class=\"flex items-center justify-between mb-2\">\n          <button type=\"button\" (click)=\"prevMonth()\"\n            class=\"w-6 h-6 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all\">\n            <svg class=\"w-3 h-3\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 19l-7-7 7-7\" />\n            </svg>\n          </button>\n          <p class=\"text-xs font-semibold text-white/70\">{{ monthLabel }}</p>\n          <button type=\"button\" (click)=\"nextMonth()\"\n            class=\"w-6 h-6 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all\">\n            <svg class=\"w-3 h-3\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 5l7 7-7 7\" />\n            </svg>\n          </button>\n        </div>\n        <div class=\"grid grid-cols-7\">\n          @for (d of dayNames; track d) {\n          <div class=\"text-center text-[9px] text-white/20 py-0.5\">{{ d }}</div>\n          }\n        </div>\n        <div class=\"grid grid-cols-7 gap-0.5\">\n          @for (day of calendarDays; track $index) {\n          <button type=\"button\" [disabled]=\"!day.day || day.isPast\" (click)=\"selectDate(day)\"\n            class=\"aspect-square flex items-center justify-center text-[11px] rounded-lg transition-all relative\"\n            [ngClass]=\"{\n                    invisible: !day.day,\n                    'text-white/15 cursor-not-allowed': day.day && day.isPast,\n                    'hover:bg-white/8 text-white/60 cursor-pointer':\n                      day.day && !day.isPast && !isSelectedDate(day) && !isEndDate(day),\n                    'bg-gradient-to-br from-[#6E2A35] to-[#A72027] text-white font-bold shadow-md':\n                      day.day && isSelectedDate(day),\n                    'bg-indigo-900/50 border border-indigo-500/40 text-indigo-200 font-semibold':\n                      day.day && isEndDate(day),\n                  }\">\n            {{ day.day || '' }}\n            @if (day.day && isEndDate(day)) {\n            <span class=\"absolute -top-0.5 -right-0.5 text-[7px]\">\uD83C\uDF19</span>\n            }\n          </button>\n          }\n        </div>\n      </div>\n      }\n\n      <!-- Semana desktop -->\n      @if (calendarView === 'week') {\n      <div class=\"px-4 pb-3\">\n        <div class=\"flex items-center justify-between mb-3\">\n          <button type=\"button\" (click)=\"prevWeek()\"\n            class=\"w-6 h-6 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white\">\n            <svg class=\"w-3 h-3\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 19l-7-7 7-7\" />\n            </svg>\n          </button>\n          <p class=\"text-[10px] text-white/55 font-medium\">{{ weekRangeLabel }}</p>\n          <button type=\"button\" (click)=\"nextWeek()\"\n            class=\"w-6 h-6 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white\">\n            <svg class=\"w-3 h-3\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 5l7 7-7 7\" />\n            </svg>\n          </button>\n        </div>\n        <div class=\"grid grid-cols-7 gap-1\">\n          @for (wd of weekDaysView; track wd.label) {\n          <button type=\"button\" (click)=\"selectWeekDay(wd)\" [disabled]=\"wd.isPast\"\n            class=\"flex flex-col items-center py-2.5 rounded-xl border transition-all gap-0.5\" [ngClass]=\"{\n                    'opacity-20 cursor-not-allowed border-transparent': wd.isPast,\n                    'border-[#A72027] bg-gradient-to-b from-[#6E2A35]/50 to-[#A72027]/20':\n                      weekDayMark(wd) === 'start',\n                    'border-indigo-500/50 bg-indigo-900/25': weekDayMark(wd) === 'end',\n                    'border-white/8 hover:border-white/25 hover:bg-white/5':\n                      !wd.isPast && !weekDayMark(wd),\n                  }\">\n            <span class=\"text-[8px] uppercase tracking-wide\"\n              [ngClass]=\"weekDayMark(wd) ? 'text-white/50' : 'text-white/25'\">{{ wd.label }}</span>\n            <span class=\"text-sm font-bold leading-none\" [ngClass]=\"{\n                      'text-white': weekDayMark(wd) === 'start',\n                      'text-indigo-300': weekDayMark(wd) === 'end',\n                      'text-white/60': !weekDayMark(wd),\n                    }\">{{ wd.num }}</span>\n            @if (weekDayMark(wd) === 'start') {\n            <span class=\"text-[7px] text-[#c8a97e]\">In</span>\n            }\n            @if (weekDayMark(wd) === 'end') {\n            <span class=\"text-[7px] text-indigo-400\">\uD83C\uDF19</span>\n            }\n          </button>\n          }\n        </div>\n      </div>\n      }\n\n      @if (selectedDate) {\n      <div class=\"px-4 py-2 border-t border-white/[0.06] mt-auto shrink-0\">\n        <p class=\"text-[10px] text-white/40\">\uD83D\uDCC5 {{ selectedDateLabel }}</p>\n        @if (crossesMidnight) {\n        <p class=\"text-[10px] text-indigo-400/70 mt-0.5\">\uD83C\uDF19 Salida: {{ nextDayLabel }}</p>\n        }\n      </div>\n      }\n    </div>\n\n    <!-- COL 2: Horario + Precio -->\n    <div class=\"w-[290px] shrink-0 border-r border-white/[0.06] flex flex-col overflow-y-auto\">\n      <div class=\"px-5 pt-4 pb-2 shrink-0\">\n        <p class=\"text-[#c8a97e] text-[10px] tracking-[0.3em] uppercase\">Horario y precio</p>\n      </div>\n\n      @if (!selectedDate) {\n      <div class=\"flex-1 flex items-center justify-center px-6\">\n        <p class=\"text-white/20 text-xs text-center\">Selecciona una fecha primero</p>\n      </div>\n      } @else {\n      <div class=\"px-4 flex flex-col gap-4 pb-4\">\n        <!-- Entrada desktop -->\n        <div>\n          <p class=\"text-white/40 text-[10px] uppercase tracking-widest mb-2\">\n            Hora de entrada\n          </p>\n          <div class=\"grid grid-cols-4 gap-1\">\n            @for (slot of entrySlots; track slot.time) {\n            <button type=\"button\" (click)=\"selectStartTime(slot)\" [disabled]=\"!slot.available\"\n              class=\"py-2 rounded-lg text-[11px] border transition-all relative\" [ngClass]=\"\n                      startTime === slot.time\n                        ? 'bg-gradient-to-br from-[#6E2A35] to-[#A72027] border-[#A72027] text-white font-bold'\n                        : slot.available\n                          ? 'bg-white/[0.03] border-white/10 text-white/50 hover:border-white/25 hover:text-white/80'\n                          : 'bg-red-900/15 border-red-800/25 text-red-400/40 cursor-not-allowed opacity-50'\n                    \">\n              {{ slot.time }}\n              @if (!slot.available) {\n              <span\n                class=\"absolute -top-0.5 -right-0.5 text-[6px] bg-red-600 text-white rounded-full w-2.5 h-2.5 flex items-center justify-center\">\u2715</span>\n              }\n            </button>\n            }\n          </div>\n        </div>\n\n        <!-- Salida desktop -->\n        @if (startTime) {\n        <div>\n          <p class=\"text-white/40 text-[10px] uppercase tracking-widest mb-2\">\n            Hora de salida\n          </p>\n\n          @if (exitSameDaySlots.length > 0) {\n          <p class=\"text-[9px] text-white/20 uppercase tracking-widest mb-1.5\">Mismo d\u00EDa</p>\n          <div class=\"grid grid-cols-4 gap-1 mb-3\">\n            @for (slot of exitSameDaySlots; track slot.time) {\n            <button type=\"button\" (click)=\"selectEndTime(slot, false)\" [disabled]=\"!slot.available\"\n              class=\"py-2 rounded-lg text-[11px] border transition-all relative\" [ngClass]=\"\n                          endTime === slot.time && !crossesMidnight\n                            ? 'bg-gradient-to-br from-[#6E2A35] to-[#A72027] border-[#A72027] text-white font-bold'\n                            : slot.available\n                              ? 'bg-white/[0.03] border-white/10 text-white/50 hover:border-white/25 hover:text-white/80'\n                              : 'bg-red-900/15 border-red-800/25 text-red-400/40 cursor-not-allowed opacity-50'\n                        \">\n              {{ slot.time }}\n              @if (!slot.available) {\n              <span\n                class=\"absolute -top-0.5 -right-0.5 text-[6px] bg-red-600 text-white rounded-full w-2.5 h-2.5 flex items-center justify-center\">\u2715</span>\n              }\n            </button>\n            }\n          </div>\n          }\n\n          <div class=\"flex items-center gap-2 mb-2\">\n            <div class=\"h-px flex-1 bg-white/10\"></div>\n            <span class=\"text-[9px] text-[#c8a97e] uppercase tracking-widest px-1\">\uD83C\uDF19 D\u00EDa siguiente</span>\n            <div class=\"h-px flex-1 bg-white/10\"></div>\n          </div>\n          <div class=\"grid grid-cols-4 gap-1\">\n            @for (slot of exitNextDaySlots; track slot.time) {\n            <button type=\"button\" (click)=\"selectEndTime(slot, true)\"\n              class=\"py-2 rounded-lg text-[11px] border transition-all\" [ngClass]=\"\n                        endTime === slot.time && crossesMidnight\n                          ? 'bg-gradient-to-br from-[#6E2A35] to-[#A72027] border-[#A72027] text-white font-bold'\n                          : 'bg-indigo-950/40 border-indigo-800/30 text-indigo-300/60 hover:border-indigo-500/40 hover:text-indigo-200'\n                      \">\n              {{ slot.time }}\n            </button>\n            }\n          </div>\n        </div>\n\n        <!-- Feedback -->\n        @if (checkingAvailability) {\n        <div class=\"flex items-center gap-2 text-white/40 text-xs\">\n          <svg class=\"animate-spin w-3.5 h-3.5\" fill=\"none\" viewBox=\"0 0 24 24\">\n            <circle class=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"4\" />\n            <path class=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z\" />\n          </svg>\n          Verificando...\n        </div>\n        }\n        @if (!checkingAvailability && availabilityOk === false) {\n        <div\n          class=\"flex items-center gap-2 bg-red-900/20 border border-red-600/30 rounded-xl px-3 py-2 text-xs text-red-400\">\n          <svg class=\"w-3.5 h-3.5 shrink-0\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\" />\n          </svg>\n          No disponible{{ availabilityMsg ? '. ' + availabilityMsg : '' }}\n        </div>\n        }\n        @if (!checkingAvailability && availabilityOk === true) {\n        <div\n          class=\"flex items-center gap-2 bg-green-900/20 border border-green-600/30 rounded-xl px-3 py-2 text-xs text-green-400\">\n          <svg class=\"w-3.5 h-3.5 shrink-0\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 13l4 4L19 7\" />\n          </svg>\n          \u00A1Disponible!\n        </div>\n        }\n\n        <!-- Precio desktop -->\n        @if (endTime && totalHours > 0) {\n        <div class=\"bg-[#6E2A35]/15 border border-[#A72027]/25 rounded-xl px-3 py-3\">\n          <div class=\"flex justify-between items-center mb-1\">\n            <span class=\"text-xs text-white/50 font-medium\">{{ startTime }} \u2192 {{ endTime }}</span>\n            <span class=\"text-xs text-white/35 bg-white/5 px-2 py-0.5 rounded-full\">{{ totalHours }}h</span>\n          </div>\n          @if (crossesMidnight) {\n          <p class=\"text-[10px] text-indigo-400/70 mb-1.5\">\n            \uD83C\uDF19 {{ selectedDateLabel }} \u2192 {{ nextDayLabel }}\n          </p>\n          }\n          <div class=\"flex justify-between items-baseline\">\n            <span class=\"text-[10px] text-white/35\">{{ totalHours }}h \u00D7 ${{ room.price | number }}</span>\n            <span class=\"text-xl font-['Cormorant_Garamond',serif] font-bold text-[#c8a97e]\">${{ totalPrice | number\n              }}</span>\n          </div>\n        </div>\n        }\n        }\n      </div>\n      }\n    </div>\n\n    <!-- COL 3: Confirmar y Pagar -->\n    <div class=\"flex-1 flex flex-col overflow-y-auto min-w-0\">\n      <div class=\"px-5 pt-4 pb-2 shrink-0\">\n        <p class=\"text-[#c8a97e] text-[10px] tracking-[0.3em] uppercase\">Confirmar y pagar</p>\n      </div>\n      <div class=\"flex-1 flex flex-col px-4 pb-4 gap-3\">\n        <div class=\"mt-auto flex flex-col gap-3\">\n          @if (startTime && endTime && totalHours > 0) {\n          <div class=\"bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3\">\n            <div class=\"flex justify-between text-xs text-white/35 mb-1\">\n              <span>{{ selectedDateLabel }}\n                @if (crossesMidnight) {\n                <span class=\"text-indigo-400/60\"> \u2192 {{ nextDayLabel }}</span>\n                }\n              </span>\n              <span>{{ startTime }} \u2013 {{ endTime }}</span>\n            </div>\n            <div class=\"flex justify-between items-baseline\">\n              <span class=\"text-xs text-white/35\">{{ totalHours }}h \u00D7 ${{ room.price | number }}/h</span>\n              <span class=\"text-[#c8a97e] font-bold font-['Cormorant_Garamond',serif] text-2xl\">${{ totalPrice | number }}</span>\n            </div>\n          </div>\n          }\n\n          <!-- UI de Stripe para Desktop -->\n          @if (mobileStep === 3) {\n          <div class=\"bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 mt-2 mb-2\">\n            <p class=\"text-white/40 text-[10px] uppercase tracking-widest mb-3\">Pago Seguro</p>\n            <div id=\"payment-element-desktop\"></div>\n          </div>\n\n          @if (paymentError) {\n          <div class=\"flex items-center gap-2 bg-red-900/20 border border-red-600/30 rounded-xl px-3 py-2 text-xs text-red-400\">\n            <svg class=\"w-3.5 h-3.5 shrink-0\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\" />\n            </svg>\n            {{ paymentError }}\n          </div>\n          }\n          @if (paymentSuccess) {\n          <div class=\"flex items-center gap-2 bg-green-900/20 border border-green-600/30 rounded-xl px-3 py-2 text-xs text-green-400\">\n            <svg class=\"w-3.5 h-3.5 shrink-0\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 13l4 4L19 7\" />\n            </svg>\n            Pago exitoso. \u00A1Reserva confirmada!\n          </div>\n          }\n          }\n\n          <!-- PAYMENT ERROR DESKTOP (antes de step 3) -->\n          @if (paymentError && mobileStep !== 3) {\n          <div class=\"mb-2 flex items-center gap-2 bg-red-900/20 border border-red-600/30 rounded-xl px-3 py-2 text-xs text-red-400\">\n            <svg class=\"w-3.5 h-3.5 shrink-0\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\" />\n            </svg>\n            {{ paymentError }}\n          </div>\n          }\n\n          <div class=\"flex gap-2\">\n            <button type=\"button\" (click)=\"close()\"\n              class=\"px-4 py-2.5 border border-[#8B0000] text-[#cc3a3a] rounded-xl text-sm hover:bg-[#6E2A35]/15 transition-all\"\n              [disabled]=\"processingPayment || paymentSuccess\">\n              Cancelar\n            </button>\n\n            @if (mobileStep !== 3) {\n            <button type=\"button\" (click)=\"reserve()\" [disabled]=\"!canReserve || reserving\"\n              class=\"flex-1 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#6E2A35] to-[#A72027] text-white shadow-lg shadow-[#6E2A35]/25 disabled:opacity-25 disabled:cursor-not-allowed transition-all\">\n              @if (reserving) {\n              <span class=\"flex items-center justify-center gap-2\">\n                <svg class=\"animate-spin w-4 h-4\" fill=\"none\" viewBox=\"0 0 24 24\">\n                  <circle class=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"4\" />\n                  <path class=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z\" />\n                </svg>\n                Generando cobro...\n              </span>\n              } @else if (!selectedDate) {\n              Selecciona fecha y hora\n              } @else if (!startTime || !endTime) {\n              Elige el horario\n              } @else if (checkingAvailability) {\n              Verificando...\n              } @else if (availabilityOk === false) {\n              No disponible\n              } @else {\n              Continuar al Pago\n              }\n            </button>\n            } @else {\n            <button type=\"button\" (click)=\"confirmPayment()\"\n              [disabled]=\"processingPayment || paymentSuccess || !elements\"\n              class=\"flex-1 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#6E2A35] to-[#A72027] text-white shadow-lg shadow-[#6E2A35]/25 disabled:opacity-25 disabled:cursor-not-allowed transition-all\">\n              @if (processingPayment) {\n              <span class=\"flex items-center justify-center gap-2\">\n                <svg class=\"animate-spin w-4 h-4\" fill=\"none\" viewBox=\"0 0 24 24\">\n                  <circle class=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"4\" />\n                  <path class=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z\" />\n                </svg>\n                Procesando...\n              </span>\n              } @else if (paymentSuccess) {\n              Pago Completo\n              } @else {\n              Confirmar Pago\n              }\n            </button>\n            }\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- FIN DESKTOP -->\n  }\n</div>" }]
    }], () => [{ type: i1.DialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DIALOG_DATA]
            }] }, { type: i2.RoomService }, { type: i3.PaymentService }, { type: i4.HttpClient }, { type: i0.ChangeDetectorRef }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaymentModal, { className: "PaymentModal", filePath: "src/app/components/payment-modal/payment-modal.ts", lineNumber: 37 }); })();
