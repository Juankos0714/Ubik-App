import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
// ── Servicios ────────────────────────────────────────────────────────────────
import { MotelService } from '../../core/services/motel.service';
import { RoomService } from '../../core/services/room.service';
import { AuthService } from '../../core/services/auth.service';
import { ServiceService } from '../../core/services/services.service';
// ── Modal de pago ─────────────────────────────────────────────────────────────
import { PaymentModal } from '../../components/payment-modal/payment-modal';
import { Card } from '../../components/card/card';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.id;
function MotelProfile_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "button", 45);
    i0.ɵɵlistener("click", function MotelProfile_Conditional_25_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleEditMode()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 46);
    i0.ɵɵelement(3, "path", 47);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.editMode ? "bg-[#6E2A35] border-[#A72027] text-white shadow-lg shadow-[#6E2A35]/40" : "bg-black/40 border-white/20 text-white/80 hover:border-white/50 backdrop-blur-sm");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.editMode ? "Guardando..." : "Editar Motel", " ");
} }
function MotelProfile_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 48);
    i0.ɵɵelement(2, "path", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.motel == null ? null : ctx_r1.motel.phoneNumber, " ");
} }
function MotelProfile_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", (ctx_r1.motel == null ? null : ctx_r1.motel.description) || "Sin descripci\u00F3n.", " ");
} }
function MotelProfile_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea", 50);
    i0.ɵɵtwoWayListener("ngModelChange", function MotelProfile_Conditional_37_Template_textarea_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.editForm.description, $event) || (ctx_r1.editForm.description = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.editForm.description);
} }
function MotelProfile_Conditional_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "div", 51)(2, "span");
    i0.ɵɵtext(3, "Direcci\u00F3n");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 52);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(6, "div", 53);
    i0.ɵɵelementStart(7, "div", 51)(8, "span");
    i0.ɵɵtext(9, "Ciudad");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 8);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(12, "div", 53);
    i0.ɵɵelementStart(13, "div", 51)(14, "span");
    i0.ɵɵtext(15, "Tel\u00E9fono");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span", 8);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(18, "div", 53);
    i0.ɵɵelementStart(19, "div", 51)(20, "span");
    i0.ɵɵtext(21, "Habitaciones");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span", 54);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.motel == null ? null : ctx_r1.motel.address);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.motel == null ? null : ctx_r1.motel.city);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.motel == null ? null : ctx_r1.motel.phoneNumber);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.rooms.length);
} }
function MotelProfile_Conditional_42_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33)(1, "div")(2, "label", 55);
    i0.ɵɵtext(3, "Direcci\u00F3n");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 56);
    i0.ɵɵtwoWayListener("ngModelChange", function MotelProfile_Conditional_42_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.editForm.address, $event) || (ctx_r1.editForm.address = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div")(6, "label", 55);
    i0.ɵɵtext(7, "Ciudad");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 56);
    i0.ɵɵtwoWayListener("ngModelChange", function MotelProfile_Conditional_42_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.editForm.city, $event) || (ctx_r1.editForm.city = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div")(10, "label", 55);
    i0.ɵɵtext(11, "Tel\u00E9fono");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 56);
    i0.ɵɵtwoWayListener("ngModelChange", function MotelProfile_Conditional_42_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.editForm.phoneNumber, $event) || (ctx_r1.editForm.phoneNumber = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "button", 57);
    i0.ɵɵlistener("click", function MotelProfile_Conditional_42_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveMotelInfo()); });
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 58);
    i0.ɵɵlistener("click", function MotelProfile_Conditional_42_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.cancelEdit()); });
    i0.ɵɵtext(16, " Cancelar ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.editForm.address);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.editForm.city);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.editForm.phoneNumber);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.savingMotel);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.savingMotel ? "Guardando..." : "Guardar cambios", " ");
} }
function MotelProfile_Conditional_43_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵelement(1, "img", 61);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const img_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", img_r5.url, i0.ɵɵsanitizeUrl);
} }
function MotelProfile_Conditional_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34)(1, "h3", 27);
    i0.ɵɵtext(2, "Galer\u00EDa");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 59);
    i0.ɵɵrepeaterCreate(4, MotelProfile_Conditional_43_For_5_Template, 2, 1, "div", 60, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r1.motel.imageUrls.slice(0, 6));
} }
function MotelProfile_Conditional_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 62);
    i0.ɵɵelement(2, "circle", 63)(3, "path", 64);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Cargando habitaciones... ");
    i0.ɵɵelementEnd();
} }
function MotelProfile_For_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-card", 43);
} if (rf & 2) {
    const room_r6 = ctx.$implicit;
    i0.ɵɵproperty("card", room_r6);
} }
function MotelProfile_Conditional_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 65);
    i0.ɵɵelement(2, "path", 66);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "No hay habitaciones con este filtro.");
    i0.ɵɵelementEnd()();
} }
export class MotelProfile {
    route = inject(ActivatedRoute);
    motelService = inject(MotelService);
    router = inject(Router);
    roomService = inject(RoomService);
    authService = inject(AuthService);
    svcService = inject(ServiceService);
    dialog = inject(Dialog);
    motel = null;
    rooms = [];
    services = [];
    loading = false;
    savingMotel = false;
    filterAvailable = null;
    editMode = false;
    editForm = { description: '', address: '', city: '', phoneNumber: '' };
    get isOwner() { return this.authService.isOwner(); }
    calendarStates = new Map();
    weekDays = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
    timeSlots = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
    // ── Helper: obtiene la URL de una imagen del motel por índice ─────────────
    motelImgUrl(index, fallback = './assets/images/ubikLogo.jpg') {
        return this.motel?.imageUrls?.[index]?.url ?? fallback;
    }
    // ── Helper: estado de aprobación en español ───────────────────────────────
    get statusLabel() {
        const map = {
            APPROVED: 'Aprobado',
            PENDING: 'Pendiente',
            UNDER_REVIEW: 'En revisión',
            REJECTED: 'Rechazado',
        };
        return map[this.motel?.approvalStatus ?? ''] ?? '—';
    }
    // ── Helper: clase CSS para el badge de estado ─────────────────────────────
    get statusClass() {
        const map = {
            APPROVED: 'bg-green-900/40 border-green-600/50 text-green-400',
            PENDING: 'bg-yellow-900/40 border-yellow-600/50 text-yellow-400',
            UNDER_REVIEW: 'bg-yellow-900/40 border-yellow-600/50 text-yellow-400',
            REJECTED: 'bg-red-900/40 border-red-600/50 text-red-400',
        };
        return map[this.motel?.approvalStatus ?? ''] ?? 'bg-white/5 border-white/10 text-white/40';
    }
    ngOnInit() {
        const motelId = Number(this.route.snapshot.paramMap.get('id') ??
            this.route.snapshot.queryParamMap.get('id'));
        if (motelId) {
            this.loadMotel(motelId);
            this.loadRooms(motelId);
        }
        this.loadServices();
    }
    // ══════════════════════════════════════════════════════════════════════════
    // Carga de datos
    // ══════════════════════════════════════════════════════════════════════════
    loadMotel(id) {
        this.motelService.getMotelById(id).subscribe({
            next: (m) => {
                // Cast a nuestro modelo local — la forma del objeto viene del backend
                this.motel = m;
                this.editForm = {
                    description: m.description ?? '',
                    address: m.address ?? '',
                    city: m.city ?? '',
                    phoneNumber: m.phoneNumber ?? '',
                };
            },
            error: (err) => console.error('Error cargando motel', err),
        });
    }
    loadRooms(motelId) {
        this.loading = true;
        // Usamos getRooms() público y filtramos por motelId en el cliente,
        // ya que getRoomsByMotel() puede requerir autenticación.
        this.roomService.getRooms().subscribe({
            next: (allRooms) => {
                this.rooms = allRooms.filter(r => r.motelId === motelId);
                const now = new Date();
                this.rooms.forEach((r) => this.calendarStates.set(r.id, {
                    year: now.getFullYear(), month: now.getMonth(),
                    selectedDay: null, selectedTime: null,
                }));
                this.loading = false;
            },
            error: () => { this.loading = false; },
        });
    }
    loadServices() {
        this.svcService.getServices().subscribe({
            next: (svcs) => { this.services = svcs; },
        });
    }
    getServiceName(id) {
        return this.services.find((s) => s.id === id)?.name ?? `Servicio ${id}`;
    }
    getServiceIcon(id) {
        return this.services.find((s) => s.id === id)?.icon ?? '';
    }
    // ══════════════════════════════════════════════════════════════════════════
    // Filtrado
    // ══════════════════════════════════════════════════════════════════════════
    get filteredRooms() {
        if (this.filterAvailable === null)
            return this.rooms;
        return this.rooms.filter((r) => r.isAvailable === this.filterAvailable);
    }
    // ══════════════════════════════════════════════════════════════════════════
    // Edición (solo owner)
    // ══════════════════════════════════════════════════════════════════════════
    toggleEditMode() { this.editMode = !this.editMode; }
    saveMotelInfo() {
        if (!this.motel || this.savingMotel)
            return;
        this.savingMotel = true;
        this.motelService.updateMotel(this.motel.id, {
            description: this.editForm.description,
            address: this.editForm.address,
            city: this.editForm.city,
            phoneNumber: this.editForm.phoneNumber,
        }).subscribe({
            next: (updated) => {
                this.motel = { ...this.motel, ...updated };
                this.editMode = false;
                this.savingMotel = false;
            },
            error: (err) => { console.error('Error actualizando motel', err); this.savingMotel = false; },
        });
    }
    cancelEdit() {
        if (!this.motel)
            return;
        this.editForm = {
            description: this.motel.description ?? '',
            address: this.motel.address,
            city: this.motel.city,
            phoneNumber: this.motel.phoneNumber ?? '',
        };
        this.editMode = false;
    }
    // ══════════════════════════════════════════════════════════════════════════
    // Calendario
    // ══════════════════════════════════════════════════════════════════════════
    calState(roomId) {
        if (!this.calendarStates.has(roomId)) {
            const now = new Date();
            this.calendarStates.set(roomId, {
                year: now.getFullYear(), month: now.getMonth(),
                selectedDay: null, selectedTime: null,
            });
        }
        return this.calendarStates.get(roomId);
    }
    getCalendarMonth(roomId) {
        const s = this.calState(roomId);
        return new Date(s.year, s.month, 1)
            .toLocaleDateString('es-CO', { month: 'long', year: 'numeric' })
            .replace(/^\w/, (c) => c.toUpperCase());
    }
    prevMonth(roomId) {
        const s = this.calState(roomId);
        s.month === 0 ? (s.month = 11, s.year--) : s.month--;
        s.selectedDay = null;
        s.selectedTime = null;
    }
    nextMonth(roomId) {
        const s = this.calState(roomId);
        s.month === 11 ? (s.month = 0, s.year++) : s.month++;
        s.selectedDay = null;
        s.selectedTime = null;
    }
    getCalendarDays(roomId) {
        const s = this.calState(roomId);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const firstDay = new Date(s.year, s.month, 1).getDay();
        const daysInMonth = new Date(s.year, s.month + 1, 0).getDate();
        const days = [];
        for (let i = 0; i < firstDay; i++)
            days.push({ day: null, date: null, available: false, isPast: false });
        for (let d = 1; d <= daysInMonth; d++) {
            const date = new Date(s.year, s.month, d);
            date.setHours(0, 0, 0, 0);
            const isPast = date < today;
            const isWeekend = date.getDay() === 0 || date.getDay() === 6;
            days.push({ day: d, date, available: !isPast && !isWeekend, isPast });
        }
        return days;
    }
    selectDay(roomId, day) {
        const s = this.calState(roomId);
        s.selectedDay = day;
        s.selectedTime = null;
    }
    selectTime(roomId, time) {
        this.calState(roomId).selectedTime = time;
    }
    isSelectedDay(roomId, day) {
        const s = this.calState(roomId);
        return !!s.selectedDay && s.selectedDay.day === day.day && !!day.day;
    }
    getSelectedDay(roomId) { return this.calState(roomId).selectedDay; }
    getSelectedTime(roomId) { return this.calState(roomId).selectedTime; }
    getSelectedDayLabel(roomId) {
        const date = this.calState(roomId).selectedDay?.date;
        if (!date)
            return '';
        return date.toLocaleDateString('es-CO', { weekday: 'short', day: 'numeric', month: 'short' });
    }
    // ══════════════════════════════════════════════════════════════════════════
    // Reserva
    // ══════════════════════════════════════════════════════════════════════════
    reserveRoom(room) {
        const s = this.calState(room.id);
        if (!s.selectedDay?.date || !s.selectedTime)
            return;
        if (!this.authService.isLogged())
            return;
        const dialogRef = this.dialog.open(PaymentModal, {
            data: {
                id: room.id,
                date: s.selectedDay.date.toISOString().split('T')[0],
                time: s.selectedTime,
            },
            // Mobile: panel inferior full-width sin border-radius propio (el html lo pone)
            // Desktop: centrado con max-width
            panelClass: window.innerWidth < 768
                ? ['!p-0', '!m-0', '!max-w-full', '!w-full', 'fixed', 'bottom-0', 'left-0', 'right-0']
                : ['!rounded-3xl'],
            positionStrategy: undefined,
        });
        dialogRef.closed.subscribe((result) => {
            if (result?.success) {
                this.router.navigate(['/payment/success'], { state: { paymentDetails: result.details } });
            }
        });
    }
    static ɵfac = function MotelProfile_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MotelProfile)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MotelProfile, selectors: [["app-motel-profile"]], decls: 62, vars: 23, consts: [[1, "min-h-screen", "text-white", "font-['Cormorant_Garamond',serif]"], [1, "relative", "h-[420px]", "w-full", "overflow-hidden"], [1, "w-full", "h-full", "object-cover", "scale-105", "transition-transform", "duration-700", 3, "src", "alt"], [1, "absolute", "inset-0", "bg-gradient-to-b", "from-black/30", "via-black/40", "to-[#0d0d0f]"], [1, "absolute", "inset-0", "bg-gradient-to-r", "from-black/50", "to-transparent"], [1, "absolute", "top-6", "left-6", "flex", "items-center", "gap-2", "text-sm", "text-white/60", "tracking-widest", "uppercase", "font-['DM_Sans',sans-serif]"], [1, "text-white/80"], [1, "text-white/30"], [1, "text-white"], [1, "absolute", "bottom-0", "left-0", "p-8", "md:p-12"], [1, "flex", "items-end", "gap-6"], [1, "w-24", "h-24", "md:w-32", "md:h-32", "rounded-2xl", "overflow-hidden", "border-2", "border-white/20", "shadow-2xl", "shrink-0", "backdrop-blur-sm"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "pb-1"], [1, "text-[#c8a97e]", "text-xs", "tracking-[0.3em]", "uppercase", "font-['DM_Sans',sans-serif]", "mb-1"], [1, "text-4xl", "md:text-6xl", "font-bold", "leading-none", "tracking-tight", "drop-shadow-lg"], [1, "text-white/60", "text-sm", "md:text-base", "font-['DM_Sans',sans-serif]", "mt-2", "flex", "items-center", "gap-2"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-[#c8a97e]"], ["d", "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"], [1, "absolute", "top-6", "right-6"], [1, "px-6", "md:px-12", "-mt-2", "mb-6"], [1, "flex", "items-center", "gap-3", "flex-wrap"], [1, "px-3", "py-1", "rounded-full", "text-xs", "tracking-widest", "uppercase", "font-['DM_Sans',sans-serif]", "border"], [1, "text-white/40", "text-sm", "font-['DM_Sans',sans-serif]", "flex", "items-center", "gap-1"], [1, "px-6", "md:px-12", "grid", "grid-cols-1", "lg:grid-cols-3", "gap-10", "pb-20"], [1, "lg:col-span-1", "flex", "flex-col", "gap-6"], [1, "bg-white/3", "border", "border-white/[0.07]", "rounded-2xl", "p-6"], [1, "text-[#c8a97e]", "text-xs", "tracking-[0.25em]", "uppercase", "font-['DM_Sans',sans-serif]", "mb-3"], [1, "text-white/70", "text-sm", "leading-relaxed", "font-['DM_Sans',sans-serif]"], ["rows", "5", "placeholder", "Descripci\u00F3n del motel...", 1, "w-full", "bg-white/5", "border", "border-white/20", "rounded-xl", "p-3", "text-white", "text-sm", "resize-none", "focus:outline-none", "focus:border-[#A72027]", "transition-colors", "font-['DM_Sans',sans-serif]", 3, "ngModel"], [1, "bg-white/3", "border", "border-white/7", "rounded-2xl", "p-6", "flex", "flex-col", "gap-4"], [1, "text-[#c8a97e]", "text-xs", "tracking-[0.25em]", "uppercase", "font-['DM_Sans',sans-serif]"], [1, "flex", "flex-col", "gap-3", "font-['DM_Sans',sans-serif]", "text-sm"], [1, "flex", "flex-col", "gap-3"], [1, "bg-white/[0.03]", "border", "border-white/[0.07]", "rounded-2xl", "p-6"], [1, "lg:col-span-2", "flex", "flex-col", "gap-6"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-bold", "tracking-tight"], [1, "text-white/30", "text-lg", "ml-2"], [1, "flex", "gap-2", "font-['DM_Sans',sans-serif]", "text-sm"], [1, "px-3", "py-1.5", "rounded-lg", "border", "transition-all", 3, "click", "ngClass"], [1, "flex", "items-center", "justify-center", "py-20", "text-white/40", "font-['DM_Sans',sans-serif]"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "xl:grid-cols-3", "gap-5"], [3, "card"], [1, "text-center", "py-16", "text-white/30", "font-['DM_Sans',sans-serif]"], [1, "flex", "items-center", "gap-2", "px-4", "py-2", "rounded-xl", "border", "transition-all", "duration-300", "font-['DM_Sans',sans-serif]", "text-sm", "tracking-wide", 3, "click", "ngClass"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5"], ["d", "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"], ["rows", "5", "placeholder", "Descripci\u00F3n del motel...", 1, "w-full", "bg-white/5", "border", "border-white/20", "rounded-xl", "p-3", "text-white", "text-sm", "resize-none", "focus:outline-none", "focus:border-[#A72027]", "transition-colors", "font-['DM_Sans',sans-serif]", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-between", "text-white/60"], [1, "text-white", "text-right", "max-w-[60%]"], [1, "w-full", "h-px", "bg-white/5"], [1, "text-white", "font-bold"], [1, "text-white/40", "text-xs", "font-['DM_Sans',sans-serif]", "mb-1", "block"], ["type", "text", 1, "w-full", "bg-white/5", "border", "border-white/20", "rounded-lg", "px-3", "py-2", "text-white", "text-sm", "focus:outline-none", "focus:border-[#A72027]", "transition-colors", "font-['DM_Sans',sans-serif]", 3, "ngModelChange", "ngModel"], [1, "mt-2", "w-full", "bg-gradient-to-r", "from-[#6E2A35]", "to-[#A72027]", "text-white", "text-sm", "font-semibold", "py-2.5", "rounded-xl", "hover:from-[#7E3A45]", "hover:to-[#B73037]", "transition-all", "duration-300", "font-['DM_Sans',sans-serif]", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "w-full", "border", "border-white/10", "text-white/50", "text-sm", "py-2", "rounded-xl", "hover:border-white/25", "hover:text-white/80", "transition-all", "font-['DM_Sans',sans-serif]", 3, "click"], [1, "grid", "grid-cols-3", "gap-2"], [1, "aspect-square", "rounded-lg", "overflow-hidden"], [1, "w-full", "h-full", "object-cover", "hover:scale-110", "transition-transform", "duration-300", "cursor-pointer", 3, "src"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-6", "h-6", "mr-3"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "mx-auto", "mb-4", "opacity-30"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1", "d", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"]], template: function MotelProfile_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵelement(2, "img", 2)(3, "div", 3)(4, "div", 4);
            i0.ɵɵelementStart(5, "nav", 5)(6, "span", 6);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "span", 7);
            i0.ɵɵtext(9, "\u203A");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "span", 8);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 9)(13, "div", 10)(14, "div", 11);
            i0.ɵɵelement(15, "img", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 13)(17, "p", 14);
            i0.ɵɵtext(18, "Motel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "h1", 15);
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "p", 16);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(22, "svg", 17);
            i0.ɵɵelement(23, "path", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵconditionalCreate(25, MotelProfile_Conditional_25_Template, 5, 2, "div", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(26, "div", 20)(27, "div", 21)(28, "span", 22);
            i0.ɵɵtext(29);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(30, MotelProfile_Conditional_30_Template, 4, 1, "span", 23);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(31, "div", 24)(32, "div", 25)(33, "div", 26)(34, "h3", 27);
            i0.ɵɵtext(35, "Sobre el motel");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(36, MotelProfile_Conditional_36_Template, 2, 1, "p", 28)(37, MotelProfile_Conditional_37_Template, 1, 1, "textarea", 29);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "div", 30)(39, "h3", 31);
            i0.ɵɵtext(40, "Informaci\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(41, MotelProfile_Conditional_41_Template, 24, 4, "div", 32)(42, MotelProfile_Conditional_42_Template, 17, 5, "div", 33);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(43, MotelProfile_Conditional_43_Template, 6, 0, "div", 34);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "div", 35)(45, "div", 36)(46, "h2", 37);
            i0.ɵɵtext(47, " Habitaciones ");
            i0.ɵɵelementStart(48, "span", 38);
            i0.ɵɵtext(49);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(50, "div", 39)(51, "button", 40);
            i0.ɵɵlistener("click", function MotelProfile_Template_button_click_51_listener() { return ctx.filterAvailable = null; });
            i0.ɵɵtext(52, "Todas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "button", 40);
            i0.ɵɵlistener("click", function MotelProfile_Template_button_click_53_listener() { return ctx.filterAvailable = true; });
            i0.ɵɵtext(54, "Disponibles");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "button", 40);
            i0.ɵɵlistener("click", function MotelProfile_Template_button_click_55_listener() { return ctx.filterAvailable = false; });
            i0.ɵɵtext(56, "Ocupadas");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(57, MotelProfile_Conditional_57_Template, 5, 0, "div", 41);
            i0.ɵɵelementStart(58, "div", 42);
            i0.ɵɵrepeaterCreate(59, MotelProfile_For_60_Template, 1, 1, "app-card", 43, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(61, MotelProfile_Conditional_61_Template, 5, 0, "div", 44);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("src", ctx.motelImgUrl(0), i0.ɵɵsanitizeUrl)("alt", ctx.motel == null ? null : ctx.motel.name);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.motel == null ? null : ctx.motel.city);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.motel == null ? null : ctx.motel.name);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("src", ctx.motelImgUrl(1) || ctx.motelImgUrl(0), i0.ɵɵsanitizeUrl)("alt", ctx.motel == null ? null : ctx.motel.name);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ctx.motel == null ? null : ctx.motel.name, " ");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate2(" ", ctx.motel == null ? null : ctx.motel.address, ", ", ctx.motel == null ? null : ctx.motel.city, " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isOwner ? 25 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵclassMap(ctx.statusClass);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.statusLabel, " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional((ctx.motel == null ? null : ctx.motel.phoneNumber) ? 30 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵconditional(!ctx.editMode ? 36 : 37);
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(!ctx.editMode ? 41 : 42);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional((ctx.motel == null ? null : ctx.motel.imageUrls == null ? null : ctx.motel.imageUrls.length) && ctx.motel.imageUrls.length > 1 ? 43 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("(", ctx.rooms.length, ")");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.filterAvailable === null ? "bg-white/15 border-white/30 text-white" : "border-white/10 text-white/40 hover:text-white/70");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.filterAvailable === true ? "bg-green-900/50 border-green-600/50 text-green-400" : "border-white/10 text-white/40 hover:text-white/70");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.filterAvailable === false ? "bg-white/5 border-white/20 text-white/50" : "border-white/10 text-white/40 hover:text-white/70");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.loading ? 57 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.filteredRooms);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(!ctx.loading && ctx.filteredRooms.length === 0 ? 61 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, FormsModule, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, Card], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MotelProfile, [{
        type: Component,
        args: [{ selector: 'app-motel-profile', standalone: true, imports: [CommonModule, FormsModule, Card], template: "<div class=\"min-h-screen text-white font-['Cormorant_Garamond',serif]\">\n\n  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n       HERO HEADER\n  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <div class=\"relative h-[420px] w-full overflow-hidden\">\n    <img\n      [src]=\"motelImgUrl(0)\"\n      [alt]=\"motel?.name\"\n      class=\"w-full h-full object-cover scale-105 transition-transform duration-700\"\n    />\n    <!-- Gradient overlay -->\n    <div class=\"absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#0d0d0f]\"></div>\n    <div class=\"absolute inset-0 bg-gradient-to-r from-black/50 to-transparent\"></div>\n\n    <!-- Breadcrumb -->\n    <nav class=\"absolute top-6 left-6 flex items-center gap-2 text-sm text-white/60 tracking-widest uppercase font-['DM_Sans',sans-serif]\">\n      <span class=\"text-white/80\">{{ motel?.city }}</span>\n      <span class=\"text-white/30\">\u203A</span>\n      <span class=\"text-white\">{{ motel?.name }}</span>\n    </nav>\n\n    <!-- Hero content bottom-left -->\n    <div class=\"absolute bottom-0 left-0 p-8 md:p-12\">\n      <div class=\"flex items-end gap-6\">\n        <!-- Logo circular -->\n        <div class=\"w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl shrink-0 backdrop-blur-sm\">\n          <img\n            [src]=\"motelImgUrl(1) || motelImgUrl(0)\"\n            [alt]=\"motel?.name\"\n            class=\"w-full h-full object-cover\"\n          />\n        </div>\n        <div class=\"pb-1\">\n          <p class=\"text-[#c8a97e] text-xs tracking-[0.3em] uppercase font-['DM_Sans',sans-serif] mb-1\">Motel</p>\n          <h1 class=\"text-4xl md:text-6xl font-bold leading-none tracking-tight drop-shadow-lg\">\n            {{ motel?.name }}\n          </h1>\n          <p class=\"text-white/60 text-sm md:text-base font-['DM_Sans',sans-serif] mt-2 flex items-center gap-2\">\n            <svg class=\"w-4 h-4 text-[#c8a97e]\" fill=\"currentColor\" viewBox=\"0 0 24 24\">\n              <path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"/>\n            </svg>\n            {{ motel?.address }}, {{ motel?.city }}\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <!-- Owner edit button \u2014 top right -->\n    @if (isOwner) {\n      <div class=\"absolute top-6 right-6\">\n        <button\n          (click)=\"toggleEditMode()\"\n          class=\"flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 font-['DM_Sans',sans-serif] text-sm tracking-wide\"\n          [ngClass]=\"editMode\n            ? 'bg-[#6E2A35] border-[#A72027] text-white shadow-lg shadow-[#6E2A35]/40'\n            : 'bg-black/40 border-white/20 text-white/80 hover:border-white/50 backdrop-blur-sm'\"\n        >\n          <svg class=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"\n              d=\"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z\"/>\n          </svg>\n          {{ editMode ? 'Guardando...' : 'Editar Motel' }}\n        </button>\n      </div>\n    }\n  </div>\n\n  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n       APPROVAL BADGE\n  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <div class=\"px-6 md:px-12 -mt-2 mb-6\">\n    <div class=\"flex items-center gap-3 flex-wrap\">\n      <span\n        class=\"px-3 py-1 rounded-full text-xs tracking-widest uppercase font-['DM_Sans',sans-serif] border\"\n        [class]=\"statusClass\"\n      >\n        {{ statusLabel }}\n      </span>\n      @if (motel?.phoneNumber) {\n        <span class=\"text-white/40 text-sm font-['DM_Sans',sans-serif] flex items-center gap-1\">\n          <svg class=\"w-3.5 h-3.5\" fill=\"currentColor\" viewBox=\"0 0 24 24\">\n            <path d=\"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z\"/>\n          </svg>\n          {{ motel?.phoneNumber }}\n        </span>\n      }\n    </div>\n  </div>\n\n  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n       MAIN CONTENT GRID\n  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <div class=\"px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-10 pb-20\">\n\n    <!-- LEFT COLUMN: Info + descripci\u00F3n -->\n    <div class=\"lg:col-span-1 flex flex-col gap-6\">\n\n      <!-- Descripci\u00F3n -->\n      <div class=\"bg-white/3 border border-white/[0.07] rounded-2xl p-6\">\n        <h3 class=\"text-[#c8a97e] text-xs tracking-[0.25em] uppercase font-['DM_Sans',sans-serif] mb-3\">Sobre el motel</h3>\n        @if (!editMode) {\n          <p class=\"text-white/70 text-sm leading-relaxed font-['DM_Sans',sans-serif]\">\n            {{ motel?.description || 'Sin descripci\u00F3n.' }}\n          </p>\n        } @else {\n          <textarea\n            [(ngModel)]=\"editForm.description\"\n            rows=\"5\"\n            class=\"w-full bg-white/5 border border-white/20 rounded-xl p-3 text-white text-sm resize-none focus:outline-none focus:border-[#A72027] transition-colors font-['DM_Sans',sans-serif]\"\n            placeholder=\"Descripci\u00F3n del motel...\"\n          ></textarea>\n        }\n      </div>\n\n      <!-- Info r\u00E1pida (solo owner en edit) -->\n      <div class=\"bg-white/3 border border-white/7 rounded-2xl p-6 flex flex-col gap-4\">\n        <h3 class=\"text-[#c8a97e] text-xs tracking-[0.25em] uppercase font-['DM_Sans',sans-serif]\">Informaci\u00F3n</h3>\n\n        @if (!editMode) {\n          <div class=\"flex flex-col gap-3 font-['DM_Sans',sans-serif] text-sm\">\n            <div class=\"flex justify-between text-white/60\">\n              <span>Direcci\u00F3n</span><span class=\"text-white text-right max-w-[60%]\">{{ motel?.address }}</span>\n            </div>\n            <div class=\"w-full h-px bg-white/5\"></div>\n            <div class=\"flex justify-between text-white/60\">\n              <span>Ciudad</span><span class=\"text-white\">{{ motel?.city }}</span>\n            </div>\n            <div class=\"w-full h-px bg-white/5\"></div>\n            <div class=\"flex justify-between text-white/60\">\n              <span>Tel\u00E9fono</span><span class=\"text-white\">{{ motel?.phoneNumber }}</span>\n            </div>\n            <div class=\"w-full h-px bg-white/5\"></div>\n            <div class=\"flex justify-between text-white/60\">\n              <span>Habitaciones</span><span class=\"text-white font-bold\">{{ rooms.length }}</span>\n            </div>\n          </div>\n        } @else {\n          <div class=\"flex flex-col gap-3\">\n            <div>\n              <label class=\"text-white/40 text-xs font-['DM_Sans',sans-serif] mb-1 block\">Direcci\u00F3n</label>\n              <input [(ngModel)]=\"editForm.address\" type=\"text\"\n                class=\"w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#A72027] transition-colors font-['DM_Sans',sans-serif]\"/>\n            </div>\n            <div>\n              <label class=\"text-white/40 text-xs font-['DM_Sans',sans-serif] mb-1 block\">Ciudad</label>\n              <input [(ngModel)]=\"editForm.city\" type=\"text\"\n                class=\"w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#A72027] transition-colors font-['DM_Sans',sans-serif]\"/>\n            </div>\n            <div>\n              <label class=\"text-white/40 text-xs font-['DM_Sans',sans-serif] mb-1 block\">Tel\u00E9fono</label>\n              <input [(ngModel)]=\"editForm.phoneNumber\" type=\"text\"\n                class=\"w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#A72027] transition-colors font-['DM_Sans',sans-serif]\"/>\n            </div>\n            <button\n              (click)=\"saveMotelInfo()\"\n              [disabled]=\"savingMotel\"\n              class=\"mt-2 w-full bg-gradient-to-r from-[#6E2A35] to-[#A72027] text-white text-sm font-semibold py-2.5 rounded-xl hover:from-[#7E3A45] hover:to-[#B73037] transition-all duration-300 font-['DM_Sans',sans-serif] disabled:opacity-50 disabled:cursor-not-allowed\"\n            >\n              {{ savingMotel ? 'Guardando...' : 'Guardar cambios' }}\n            </button>\n            <button\n              (click)=\"cancelEdit()\"\n              class=\"w-full border border-white/10 text-white/50 text-sm py-2 rounded-xl hover:border-white/25 hover:text-white/80 transition-all font-['DM_Sans',sans-serif]\"\n            >\n              Cancelar\n            </button>\n          </div>\n        }\n      </div>\n\n      <!-- Galer\u00EDa de im\u00E1genes -->\n      @if (motel?.imageUrls?.length && motel!.imageUrls.length > 1) {\n        <div class=\"bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6\">\n          <h3 class=\"text-[#c8a97e] text-xs tracking-[0.25em] uppercase font-['DM_Sans',sans-serif] mb-3\">Galer\u00EDa</h3>\n          <div class=\"grid grid-cols-3 gap-2\">\n            @for (img of motel!.imageUrls.slice(0,6); track $index) {\n              <div class=\"aspect-square rounded-lg overflow-hidden\">\n                <img [src]=\"img.url\" class=\"w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer\"/>\n              </div>\n            }\n          </div>\n        </div>\n      }\n\n    </div>\n\n    <!-- RIGHT COLUMN: Habitaciones con calendario -->\n    <div class=\"lg:col-span-2 flex flex-col gap-6\">\n\n      <div class=\"flex items-center justify-between\">\n        <h2 class=\"text-2xl font-bold tracking-tight\">\n          Habitaciones\n          <span class=\"text-white/30 text-lg ml-2\">({{ rooms.length }})</span>\n        </h2>\n        <!-- Filtro disponibilidad -->\n        <div class=\"flex gap-2 font-['DM_Sans',sans-serif] text-sm\">\n          <button\n            (click)=\"filterAvailable = null\"\n            class=\"px-3 py-1.5 rounded-lg border transition-all\"\n            [ngClass]=\"filterAvailable === null ? 'bg-white/15 border-white/30 text-white' : 'border-white/10 text-white/40 hover:text-white/70'\"\n          >Todas</button>\n          <button\n            (click)=\"filterAvailable = true\"\n            class=\"px-3 py-1.5 rounded-lg border transition-all\"\n            [ngClass]=\"filterAvailable === true ? 'bg-green-900/50 border-green-600/50 text-green-400' : 'border-white/10 text-white/40 hover:text-white/70'\"\n          >Disponibles</button>\n          <button\n            (click)=\"filterAvailable = false\"\n            class=\"px-3 py-1.5 rounded-lg border transition-all\"\n            [ngClass]=\"filterAvailable === false ? 'bg-white/5 border-white/20 text-white/50' : 'border-white/10 text-white/40 hover:text-white/70'\"\n          >Ocupadas</button>\n        </div>\n      </div>\n\n      @if (loading) {\n        <div class=\"flex items-center justify-center py-20 text-white/40 font-['DM_Sans',sans-serif]\">\n          <svg class=\"animate-spin w-6 h-6 mr-3\" fill=\"none\" viewBox=\"0 0 24 24\">\n            <circle class=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"4\"/>\n            <path class=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z\"/>\n          </svg>\n          Cargando habitaciones...\n        </div>\n      }\n\n      <!-- Grid de cards de habitaciones -->\n      <div class=\"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5\">\n        @for (room of filteredRooms; track room.id) {\n          <app-card [card]=\"room\"></app-card>\n        }\n      </div>\n\n      @if (!loading && filteredRooms.length === 0) {\n        <div class=\"text-center py-16 text-white/30 font-['DM_Sans',sans-serif]\">\n          <svg class=\"w-12 h-12 mx-auto mb-4 opacity-30\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"/>\n          </svg>\n          <p>No hay habitaciones con este filtro.</p>\n        </div>\n      }\n\n    </div>\n  </div>\n</div>" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MotelProfile, { className: "MotelProfile", filePath: "src/app/views/motel-profile/motel-profile.ts", lineNumber: 52 }); })();
