import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { ColombiaService } from '../../core/services/colombia.service';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.value;
const _forTrack1 = ($index, $item) => $item.id;
function FilterModal_For_13_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "label", 29)(1, "input", 30);
    i0.ɵɵdomListener("change", function FilterModal_For_13_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onShowTypeChange($event)); });
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.filters.showType === opt_r3.value ? "bg-[#6E2A35]/20 border-[#8B0000] text-[#cc3a3a]" : "bg-white/3 border-white/10 text-white/50 hover:border-white/20 hover:text-white");
    i0.ɵɵadvance();
    i0.ɵɵdomProperty("value", opt_r3.value)("checked", ctx_r1.filters.showType === opt_r3.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", opt_r3.label, " ");
} }
function FilterModal_Conditional_36_For_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "label", 32)(1, "input", 33);
    i0.ɵɵdomListener("change", function FilterModal_Conditional_36_For_5_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onRoomTypeChange($event)); });
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const type_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r1.filters.roomTypes.includes(type_r5) ? "bg-red-900/25 border-red-700/70 text-red-400" : "bg-white/3 border-white/10 text-white/50 hover:border-white/20 hover:text-white");
    i0.ɵɵadvance();
    i0.ɵɵdomProperty("value", type_r5)("checked", ctx_r1.filters.roomTypes.includes(type_r5));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", type_r5, " ");
} }
function FilterModal_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "section", 6)(1, "h3", 7);
    i0.ɵɵtext(2, "Tipo de habitaci\u00F3n");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "div", 8);
    i0.ɵɵrepeaterCreate(4, FilterModal_Conditional_36_For_5_Template, 3, 5, "label", 31, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r1.roomTypes);
} }
function FilterModal_Conditional_37_For_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "label", 32)(1, "input", 33);
    i0.ɵɵdomListener("change", function FilterModal_Conditional_37_For_5_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onServiceChange($event)); });
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const service_r7 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r1.filters.serviceIds.includes(service_r7.id) ? "bg-red-900/25 border-red-700/70 text-red-400" : "bg-white/[0.03] border-white/10 text-white/50 hover:border-white/20 hover:text-white");
    i0.ɵɵadvance();
    i0.ɵɵdomProperty("value", service_r7.id)("checked", ctx_r1.filters.serviceIds.includes(service_r7.id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", service_r7.name, " ");
} }
function FilterModal_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "section", 6)(1, "h3", 7);
    i0.ɵɵtext(2, "Servicios");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "div", 8);
    i0.ɵɵrepeaterCreate(4, FilterModal_Conditional_37_For_5_Template, 3, 5, "label", 31, _forTrack1);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r1.services);
} }
function FilterModal_For_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const dep_r8 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵdomProperty("value", dep_r8)("selected", ctx_r1.filters.department && ctx_r1.filters.department.includes(dep_r8));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", dep_r8, " ");
} }
function FilterModal_Conditional_46_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const city_r10 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵdomProperty("value", city_r10)("selected", ctx_r1.filters.cities.includes(city_r10));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", city_r10, " ");
} }
function FilterModal_Conditional_46_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "section", 6)(1, "h3", 7);
    i0.ɵɵtext(2, "Municipio");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "select", 34);
    i0.ɵɵdomListener("change", function FilterModal_Conditional_46_Template_select_change_3_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onMunicipalityChange($event)); });
    i0.ɵɵdomElementStart(4, "option", 24);
    i0.ɵɵtext(5, "Seleccionar municipio");
    i0.ɵɵdomElementEnd();
    i0.ɵɵrepeaterCreate(6, FilterModal_Conditional_46_For_7_Template, 2, 3, "option", 25, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(ctx_r1.municipalities);
} }
function FilterModal_For_52_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "label", 29)(1, "input", 35);
    i0.ɵɵdomListener("change", function FilterModal_For_52_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSortChange($event)); });
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const opt_r12 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.filters.sortBy === (opt_r12.value || null) ? "bg-amber-400/15 border-amber-500 text-amber-300" : "bg-white/[0.03] border-white/10 text-white/50 hover:border-white/20 hover:text-white");
    i0.ɵɵadvance();
    i0.ɵɵdomProperty("value", opt_r12.value)("checked", ctx_r1.filters.sortBy === (opt_r12.value || null));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", opt_r12.label, " ");
} }
export class FilterModal {
    dialogData = inject(DIALOG_DATA);
    dialogRef = inject((DialogRef));
    colombiaService = inject(ColombiaService);
    roomTypes = [];
    services = [];
    departments = [];
    municipalities = [];
    loadingMunicipalities = false;
    showTypeOptions = [
        { value: 'all', label: 'Todo' },
        { value: 'rooms', label: 'Habitaciones' },
        { value: 'motels', label: 'Moteles' },
    ];
    sortOptions = [
        { value: '', label: 'Sin orden' },
        { value: 'priceAsc', label: 'Menor ↑' },
        { value: 'priceDesc', label: 'Mayor ↓' },
    ];
    filters = {
        priceMin: null,
        priceMax: null,
        roomTypes: [],
        cities: [],
        department: null,
        onlyAvailable: true,
        serviceIds: [],
        sortBy: null,
        showType: 'all',
    };
    ngOnInit() {
        this.roomTypes = this.dialogData?.roomTypes ?? [];
        this.services = this.dialogData?.services ?? [];
        // Restaurar filtros previos al reabrir
        if (this.dialogData?.filters) {
            this.filters = { ...this.dialogData.filters };
        }
        // Cargar departamentos desde JSON local — sin red externa
        this.colombiaService.getDepartments().subscribe(deps => {
            this.departments = deps;
        });
        // Si ya había departamento seleccionado, restaurar municipios
        const dep = this.filters.department?.[0];
        if (dep) {
            this.loadMunicipalities(dep);
        }
    }
    onDepartmentChange(e) {
        const value = e.target.value;
        this.filters.department = value ? [value] : [];
        this.filters.cities = [];
        this.municipalities = [];
        if (value)
            this.loadMunicipalities(value);
    }
    loadMunicipalities(departmentName) {
        this.loadingMunicipalities = true;
        this.colombiaService.getMunicipalities(departmentName).subscribe({
            next: (cities) => {
                this.municipalities = cities;
                this.loadingMunicipalities = false;
            },
            error: () => {
                this.municipalities = [];
                this.loadingMunicipalities = false;
            }
        });
    }
    onMunicipalityChange(e) {
        const value = e.target.value;
        this.filters.cities = value ? [value] : [];
    }
    toggleArrayValue(array, value) {
        const i = array.indexOf(value);
        i >= 0 ? array.splice(i, 1) : array.push(value);
    }
    onRoomTypeChange(e) {
        const value = e.target.value;
        this.toggleArrayValue(this.filters.roomTypes, value);
    }
    onServiceChange(e) {
        const value = Number(e.target.value);
        this.toggleArrayValue(this.filters.serviceIds, value);
    }
    onPriceMinChange(e) {
        const v = Number(e.target.value);
        this.filters.priceMin = v || null;
    }
    onPriceMaxChange(e) {
        const v = Number(e.target.value);
        this.filters.priceMax = v || null;
    }
    onAvailabilityChange(e) {
        this.filters.onlyAvailable = e.target.checked;
    }
    onSortChange(e) {
        const v = e.target.value;
        this.filters.sortBy = v || null;
    }
    onShowTypeChange(e) {
        const v = e.target.value;
        this.filters.showType = v || 'all';
    }
    reset() {
        this.filters = {
            priceMin: null,
            priceMax: null,
            roomTypes: [],
            cities: [],
            department: null,
            onlyAvailable: true,
            serviceIds: [],
            sortBy: null,
            showType: 'all',
        };
        this.municipalities = [];
    }
    apply() {
        this.dialogRef.close(this.filters);
    }
    close() {
        this.dialogRef.close();
    }
    static ɵfac = function FilterModal_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FilterModal)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterModal, selectors: [["app-filter-modal"]], decls: 58, vars: 6, consts: [[1, "flex", "flex-col", "w-[360px]", "max-h-[85vh]", "bg-[#0f1014]", "border", "border-white/10", "rounded-2xl", "overflow-hidden", "text-[#f0ece4]", "shadow-2xl", "lg:w-4xl"], [1, "flex", "items-center", "justify-between", "px-6", "py-5", "border-b", "border-white/5", "bg-white/2", "shrink-0"], [1, "flex", "items-center", "gap-2"], [1, "text-lg", "font-semibold", "tracking-tight", "text-white"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-full", "bg-white/5", "text-white/40", "hover:bg-white/10", "hover:text-white", "transition-colors", "text-sm", "cursor-pointer", 3, "click"], [1, "flex-1", "overflow-y-auto", "px-6", "divide-y", "divide-white/5"], [1, "py-4"], [1, "text-[11px]", "font-semibold", "uppercase", "tracking-widest", "text-white/30", "mb-3"], [1, "flex", "flex-wrap", "gap-2"], [1, "px-4", "py-1.5", "rounded-full", "border", "text-sm", "cursor-pointer", "transition-all", "select-none", 3, "class"], [1, "flex", "items-center", "justify-between", "cursor-pointer", "group"], [1, "text-sm", "text-white/80", "group-hover:text-white", "transition-colors"], [1, "relative"], ["type", "checkbox", 1, "sr-only", "peer", 3, "change", "checked"], [1, "w-11", "h-6", "rounded-full", "border", "border-white/10", "bg-white/5", "peer-checked:bg-linear-to-r", "from-[#6E2A35]", "to-[#A72027]", "peer-checked:border-[#8B0000]", "transition-all", "duration-200"], [1, "absolute", "top-[3px]", "left-[3px]", "w-[18px]", "h-[18px]", "bg-white", "rounded-full", "shadow-md", "transition-transform", "duration-200", "peer-checked:translate-x-5"], [1, "flex", "items-center", "gap-3"], [1, "flex-1", "flex", "items-center", "gap-1.5", "bg-white/4", "border", "border-white/8", "rounded-xl", "px-3", "py-2.5", "focus-within:border-amber-500/50", "transition-colors"], [1, "text-xs", "text-white/25", "shrink-0"], ["type", "number", "placeholder", "M\u00EDnimo", 1, "w-full", "bg-transparent", "outline-none", "text-sm", "text-white", "placeholder-white/20", 3, "input", "value"], [1, "text-white/20", "text-base", "shrink-0"], [1, "flex-1", "flex", "items-center", "gap-1.5", "bg-white/4", "border", "border-white/8", "rounded-xl", "px-3", "py-2.5", "focus-within:bg-[#6E2A35]", "transition-colors"], ["type", "number", "placeholder", "M\u00E1ximo", 1, "w-full", "bg-transparent", "outline-none", "text-sm", "text-white", "placeholder-white/20", 3, "input", "value"], [1, "w-full", "px-3", "py-2.5", "bg-white/4", "border", "border-white/10", "rounded-xl", "text-sm", "text-white/80", "outline-none", "focus:bg-[#6E2A35]", "transition-colors", "cursor-pointer", "appearance-none", 3, "change"], ["value", "", 1, "bg-[#1a1c22]"], [1, "bg-[#1a1c22]", 3, "value", "selected"], [1, "flex", "gap-3", "px-6", "py-4", "border-t", "border-white/5", "bg-black/20", "shrink-0"], [1, "flex-1", "py-2.5", "rounded-xl", "border", "border-white/10", "text-sm", "text-white/40", "hover:bg-white/5", "hover:text-white", "hover:border-white/20", "transition-all", "cursor-pointer", 3, "click"], [1, "flex-[2]", "py-2.5", "rounded-xl", "bg-linear-to-r", "from-[#6E2A35]", "to-[#A72027]", "text-white", "text-black", "text-sm", "font-semibold", "hover:opacity-90", "hover:-translate-y-px", "active:translate-y-0", "transition-all", "cursor-pointer", 3, "click"], [1, "px-4", "py-1.5", "rounded-full", "border", "text-sm", "cursor-pointer", "transition-all", "select-none"], ["type", "radio", "name", "showType", 1, "hidden", 3, "change", "value", "checked"], [1, "px-3", "py-1.5", "rounded-lg", "border", "text-sm", "cursor-pointer", "transition-all", "select-none", 3, "class"], [1, "px-3", "py-1.5", "rounded-lg", "border", "text-sm", "cursor-pointer", "transition-all", "select-none"], ["type", "checkbox", 1, "hidden", 3, "change", "value", "checked"], [1, "w-full", "px-3", "py-2.5", "bg-white/[0.04]", "border", "border-white/10", "rounded-xl", "text-sm", "text-white/80", "outline-none", "focus:border-amber-500/50", "transition-colors", "cursor-pointer", "appearance-none", 3, "change"], ["type", "radio", "name", "sortBy", 1, "hidden", 3, "change", "value", "checked"]], template: function FilterModal_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "aside", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
            i0.ɵɵtext(4, "Filtros");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(5, "button", 4);
            i0.ɵɵdomListener("click", function FilterModal_Template_button_click_5_listener() { return ctx.close(); });
            i0.ɵɵtext(6, " \u2715 ");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(7, "div", 5)(8, "section", 6)(9, "h3", 7);
            i0.ɵɵtext(10, "Mostrar");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(11, "div", 8);
            i0.ɵɵrepeaterCreate(12, FilterModal_For_13_Template, 3, 5, "label", 9, _forTrack0);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(14, "section", 6)(15, "label", 10)(16, "span", 11);
            i0.ɵɵtext(17, "Solo disponibles");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(18, "div", 12)(19, "input", 13);
            i0.ɵɵdomListener("change", function FilterModal_Template_input_change_19_listener($event) { return ctx.onAvailabilityChange($event); });
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElement(20, "div", 14)(21, "div", 15);
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(22, "section", 6)(23, "h3", 7);
            i0.ɵɵtext(24, "Rango de precio");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(25, "div", 16)(26, "div", 17)(27, "span", 18);
            i0.ɵɵtext(28, "$");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(29, "input", 19);
            i0.ɵɵdomListener("input", function FilterModal_Template_input_input_29_listener($event) { return ctx.onPriceMinChange($event); });
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(30, "span", 20);
            i0.ɵɵtext(31, "\u2014");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(32, "div", 21)(33, "span", 18);
            i0.ɵɵtext(34, "$");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(35, "input", 22);
            i0.ɵɵdomListener("input", function FilterModal_Template_input_input_35_listener($event) { return ctx.onPriceMaxChange($event); });
            i0.ɵɵdomElementEnd()()()();
            i0.ɵɵconditionalCreate(36, FilterModal_Conditional_36_Template, 6, 0, "section", 6);
            i0.ɵɵconditionalCreate(37, FilterModal_Conditional_37_Template, 6, 0, "section", 6);
            i0.ɵɵdomElementStart(38, "section", 6)(39, "h3", 7);
            i0.ɵɵtext(40, "Departamento");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(41, "select", 23);
            i0.ɵɵdomListener("change", function FilterModal_Template_select_change_41_listener($event) { return ctx.onDepartmentChange($event); });
            i0.ɵɵdomElementStart(42, "option", 24);
            i0.ɵɵtext(43, "Seleccionar departamento");
            i0.ɵɵdomElementEnd();
            i0.ɵɵrepeaterCreate(44, FilterModal_For_45_Template, 2, 3, "option", 25, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵconditionalCreate(46, FilterModal_Conditional_46_Template, 8, 0, "section", 6);
            i0.ɵɵdomElementStart(47, "section", 6)(48, "h3", 7);
            i0.ɵɵtext(49, "Ordenar por precio");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(50, "div", 8);
            i0.ɵɵrepeaterCreate(51, FilterModal_For_52_Template, 3, 5, "label", 9, _forTrack0);
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(53, "div", 26)(54, "button", 27);
            i0.ɵɵdomListener("click", function FilterModal_Template_button_click_54_listener() { return ctx.reset(); });
            i0.ɵɵtext(55, " Reiniciar ");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(56, "button", 28);
            i0.ɵɵdomListener("click", function FilterModal_Template_button_click_56_listener() { return ctx.apply(); });
            i0.ɵɵtext(57, " Aplicar filtros ");
            i0.ɵɵdomElementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(12);
            i0.ɵɵrepeater(ctx.showTypeOptions);
            i0.ɵɵadvance(7);
            i0.ɵɵdomProperty("checked", ctx.filters.onlyAvailable);
            i0.ɵɵadvance(10);
            i0.ɵɵdomProperty("value", ctx.filters.priceMin ?? "");
            i0.ɵɵadvance(6);
            i0.ɵɵdomProperty("value", ctx.filters.priceMax ?? "");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.roomTypes.length ? 36 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.services.length ? 37 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵrepeater(ctx.departments);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.municipalities.length ? 46 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵrepeater(ctx.sortOptions);
        } }, dependencies: [CommonModule], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterModal, [{
        type: Component,
        args: [{ selector: 'app-filter-modal', standalone: true, imports: [CommonModule], template: "<aside class=\"flex flex-col w-[360px] max-h-[85vh] bg-[#0f1014] border border-white/10 rounded-2xl overflow-hidden text-[#f0ece4] shadow-2xl lg:w-4xl\">\n\n  <!-- Header -->\n  <div class=\"flex items-center justify-between px-6 py-5 border-b border-white/5 bg-white/2 shrink-0\">\n    <div class=\"flex items-center gap-2\">\n      <h2 class=\"text-lg font-semibold tracking-tight text-white\">Filtros</h2>\n    </div>\n    <button\n      (click)=\"close()\"\n      class=\"w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-colors text-sm cursor-pointer\">\n      \u2715\n    </button>\n  </div>\n\n  <!-- Body -->\n  <div class=\"flex-1 overflow-y-auto px-6 divide-y divide-white/5\">\n\n    <!-- MOSTRAR -->\n    <section class=\"py-4\">\n      <h3 class=\"text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-3\">Mostrar</h3>\n      <div class=\"flex flex-wrap gap-2\">\n        @for (opt of showTypeOptions; track opt.value) {\n          <label\n            class=\"px-4 py-1.5 rounded-full border text-sm cursor-pointer transition-all select-none\"\n            [class]=\"filters.showType === opt.value\n              ? 'bg-[#6E2A35]/20 border-[#8B0000] text-[#cc3a3a]'\n              : 'bg-white/3 border-white/10 text-white/50 hover:border-white/20 hover:text-white'\">\n            <input type=\"radio\" name=\"showType\" [value]=\"opt.value\"\n              class=\"hidden\"\n              [checked]=\"filters.showType === opt.value\"\n              (change)=\"onShowTypeChange($event)\" />\n            {{ opt.label }}\n          </label>\n        }\n      </div>\n    </section>\n\n    <!-- DISPONIBILIDAD -->\n    <section class=\"py-4\">\n      <label class=\"flex items-center justify-between cursor-pointer group\">\n        <span class=\"text-sm text-white/80 group-hover:text-white transition-colors\">Solo disponibles</span>\n        <div class=\"relative\">\n          <input type=\"checkbox\"\n            class=\"sr-only peer\"\n            [checked]=\"filters.onlyAvailable\"\n            (change)=\"onAvailabilityChange($event)\" />\n          <div class=\"w-11 h-6 rounded-full border border-white/10 bg-white/5\n                      peer-checked:bg-linear-to-r from-[#6E2A35] to-[#A72027] peer-checked:border-[#8B0000]\n                      transition-all duration-200\"></div>\n          <div class=\"absolute top-[3px] left-[3px] w-[18px] h-[18px] bg-white rounded-full shadow-md\n                      transition-transform duration-200 peer-checked:translate-x-5\"></div>\n        </div>\n      </label>\n    </section>\n\n    <!-- PRECIO -->\n    <section class=\"py-4\">\n      <h3 class=\"text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-3\">Rango de precio</h3>\n      <div class=\"flex items-center gap-3\">\n        <div class=\"flex-1 flex items-center gap-1.5 bg-white/4 border border-white/8 rounded-xl px-3 py-2.5\n                    focus-within:border-amber-500/50 transition-colors\">\n          <span class=\"text-xs text-white/25 shrink-0\">$</span>\n          <input type=\"number\"\n            placeholder=\"M\u00EDnimo\"\n            class=\"w-full bg-transparent outline-none text-sm text-white placeholder-white/20\"\n            [value]=\"filters.priceMin ?? ''\"\n            (input)=\"onPriceMinChange($event)\" />\n        </div>\n        <span class=\"text-white/20 text-base shrink-0\">\u2014</span>\n        <div class=\"flex-1 flex items-center gap-1.5 bg-white/4 border border-white/8 rounded-xl px-3 py-2.5\n                    focus-within:bg-[#6E2A35] transition-colors\">\n          <span class=\"text-xs text-white/25 shrink-0\">$</span>\n          <input type=\"number\"\n            placeholder=\"M\u00E1ximo\"\n            class=\"w-full bg-transparent outline-none text-sm text-white placeholder-white/20\"\n            [value]=\"filters.priceMax ?? ''\"\n            (input)=\"onPriceMaxChange($event)\" />\n        </div>\n      </div>\n    </section>\n\n    <!-- TIPO HABITACI\u00D3N -->\n    @if (roomTypes.length) {\n      <section class=\"py-4\">\n        <h3 class=\"text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-3\">Tipo de habitaci\u00F3n</h3>\n        <div class=\"flex flex-wrap gap-2\">\n          @for (type of roomTypes; track type) {\n            <label\n              class=\"px-3 py-1.5 rounded-lg border text-sm cursor-pointer transition-all select-none\"\n              [class]=\"filters.roomTypes.includes(type)\n                ? 'bg-red-900/25 border-red-700/70 text-red-400'\n                : 'bg-white/3 border-white/10 text-white/50 hover:border-white/20 hover:text-white'\">\n              <input type=\"checkbox\"\n                class=\"hidden\"\n                [value]=\"type\"\n                [checked]=\"filters.roomTypes.includes(type)\"\n                (change)=\"onRoomTypeChange($event)\" />\n              {{ type }}\n            </label>\n          }\n        </div>\n      </section>\n    }\n\n    <!-- SERVICIOS -->\n    @if (services.length) {\n      <section class=\"py-4\">\n        <h3 class=\"text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-3\">Servicios</h3>\n        <div class=\"flex flex-wrap gap-2\">\n          @for (service of services; track service.id) {\n            <label\n              class=\"px-3 py-1.5 rounded-lg border text-sm cursor-pointer transition-all select-none\"\n              [class]=\"filters.serviceIds.includes(service.id)\n                ? 'bg-red-900/25 border-red-700/70 text-red-400'\n                : 'bg-white/[0.03] border-white/10 text-white/50 hover:border-white/20 hover:text-white'\">\n              <input type=\"checkbox\"\n                class=\"hidden\"\n                [value]=\"service.id\"\n                [checked]=\"filters.serviceIds.includes(service.id)\"\n                (change)=\"onServiceChange($event)\" />\n              {{ service.name }}\n            </label>\n          }\n        </div>\n      </section>\n    }\n\n    <!-- DEPARTAMENTO -->\n    <section class=\"py-4\">\n      <h3 class=\"text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-3\">Departamento</h3>\n      <select\n        class=\"w-full px-3 py-2.5 bg-white/4 border border-white/10 rounded-xl text-sm text-white/80\n               outline-none focus:bg-[#6E2A35] transition-colors cursor-pointer appearance-none\"\n        (change)=\"onDepartmentChange($event)\">\n        <option value=\"\" class=\"bg-[#1a1c22]\">Seleccionar departamento</option>\n        @for (dep of departments; track dep) {\n          <option [value]=\"dep\" class=\"bg-[#1a1c22]\"\n            [selected]=\"filters.department && filters.department.includes(dep)\">\n            {{ dep }}\n          </option>\n        }\n      </select>\n    </section>\n\n    <!-- MUNICIPIO -->\n    @if (municipalities.length) {\n      <section class=\"py-4\">\n        <h3 class=\"text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-3\">Municipio</h3>\n        <select\n          class=\"w-full px-3 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-sm text-white/80\n                 outline-none focus:border-amber-500/50 transition-colors cursor-pointer appearance-none\"\n          (change)=\"onMunicipalityChange($event)\">\n          <option value=\"\" class=\"bg-[#1a1c22]\">Seleccionar municipio</option>\n          @for (city of municipalities; track city) {\n            <option [value]=\"city\" class=\"bg-[#1a1c22]\"\n              [selected]=\"filters.cities.includes(city)\">\n              {{ city }}\n            </option>\n          }\n        </select>\n      </section>\n    }\n\n    <!-- ORDENAR -->\n    <section class=\"py-4\">\n      <h3 class=\"text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-3\">Ordenar por precio</h3>\n      <div class=\"flex flex-wrap gap-2\">\n        @for (opt of sortOptions; track opt.value) {\n          <label\n            class=\"px-4 py-1.5 rounded-full border text-sm cursor-pointer transition-all select-none\"\n            [class]=\"filters.sortBy === (opt.value || null)\n              ? 'bg-amber-400/15 border-amber-500 text-amber-300'\n              : 'bg-white/[0.03] border-white/10 text-white/50 hover:border-white/20 hover:text-white'\">\n            <input type=\"radio\" name=\"sortBy\" [value]=\"opt.value\"\n              class=\"hidden\"\n              [checked]=\"filters.sortBy === (opt.value || null)\"\n              (change)=\"onSortChange($event)\" />\n            {{ opt.label }}\n          </label>\n        }\n      </div>\n    </section>\n\n  </div>\n\n  <!-- Footer -->\n  <div class=\"flex gap-3 px-6 py-4 border-t border-white/5 bg-black/20 shrink-0\">\n    <button\n      (click)=\"reset()\"\n      class=\"flex-1 py-2.5 rounded-xl border border-white/10 text-sm text-white/40\n             hover:bg-white/5 hover:text-white hover:border-white/20 transition-all cursor-pointer\">\n      Reiniciar\n    </button>\n    <button\n      (click)=\"apply()\"\n      class=\"flex-[2] py-2.5 rounded-xl bg-linear-to-r from-[#6E2A35] to-[#A72027] text-white\n             text-black text-sm font-semibold hover:opacity-90 hover:-translate-y-px\n             active:translate-y-0 transition-all cursor-pointer\">\n      Aplicar filtros\n    </button>\n  </div>\n\n</aside>" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FilterModal, { className: "FilterModal", filePath: "src/app/components/filter-modal/filter-modal.ts", lineNumber: 32 }); })();
