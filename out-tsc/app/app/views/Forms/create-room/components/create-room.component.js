import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize, switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../../../core/services/room.service";
import * as i3 from "../../../../core/services/Cloudinary.service";
import * as i4 from "@angular/router";
const _forTrack0 = ($index, $item) => $item.id;
function CreateRoomComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 30);
    i0.ɵɵtext(1, " Creando... ");
} }
function CreateRoomComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Crear habitaci\u00F3n ");
} }
function CreateRoomComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.error, " ");
} }
function CreateRoomComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtext(1, "El n\u00FAmero es obligatorio.");
    i0.ɵɵelementEnd();
} }
function CreateRoomComponent_For_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", t_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(t_r2);
} }
function CreateRoomComponent_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtext(1, "El tipo es obligatorio.");
    i0.ɵɵelementEnd();
} }
function CreateRoomComponent_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtext(1, "El precio es obligatorio.");
    i0.ɵɵelementEnd();
} }
function CreateRoomComponent_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtext(1, "El precio debe ser mayor a 0.");
    i0.ɵɵelementEnd();
} }
function CreateRoomComponent_Conditional_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtext(1, "La descripci\u00F3n es obligatoria.");
    i0.ɵɵelementEnd();
} }
function CreateRoomComponent_Conditional_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Seleccionadas: ", ctx_r0.roomImages.length, " imagen(es) ");
} }
function CreateRoomComponent_Conditional_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1, " A\u00FAn no has seleccionado im\u00E1genes. ");
    i0.ɵɵelementEnd();
} }
function CreateRoomComponent_Conditional_52_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 32);
    i0.ɵɵelement(2, "img", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 34)(4, "span", 35);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 36);
    i0.ɵɵlistener("click", function CreateRoomComponent_Conditional_52_For_2_Template_button_click_6_listener() { const ɵ$index_115_r4 = i0.ɵɵrestoreView(_r3).$index; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.removeImage(ɵ$index_115_r4)); });
    i0.ɵɵtext(7, " Quitar ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const url_r5 = ctx.$implicit;
    const ɵ$index_115_r4 = ctx.$index;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("alt", i0.ɵɵinterpolate1("preview ", ɵ$index_115_r4 + 1))("src", url_r5, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Imagen ", ɵ$index_115_r4 + 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.loading);
} }
function CreateRoomComponent_Conditional_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵrepeaterCreate(1, CreateRoomComponent_Conditional_52_For_2_Template, 8, 5, "div", 31, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.imagePreviews);
} }
function CreateRoomComponent_Conditional_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵtext(1, " Cargando servicios... ");
    i0.ɵɵelementEnd();
} }
function CreateRoomComponent_Conditional_58_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵtext(1, " No hay servicios disponibles. ");
    i0.ɵɵelementEnd();
} }
function CreateRoomComponent_Conditional_58_Conditional_1_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 41)(1, "div", 42)(2, "input", 43);
    i0.ɵɵlistener("change", function CreateRoomComponent_Conditional_58_Conditional_1_For_2_Template_input_change_2_listener() { const s_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.toggleService(s_r7.id)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 44)(4, "div", 45)(5, "span", 46);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 47);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "p", 48);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const s_r7 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("border-red-500/40", ctx_r0.isServiceSelected(s_r7.id))("bg-red-500/10", ctx_r0.isServiceSelected(s_r7.id));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", ctx_r0.isServiceSelected(s_r7.id))("disabled", ctx_r0.loading);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(s_r7.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r7.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", s_r7.description, " ");
} }
function CreateRoomComponent_Conditional_58_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵrepeaterCreate(1, CreateRoomComponent_Conditional_58_Conditional_1_For_2_Template, 11, 9, "label", 38, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 39);
    i0.ɵɵtext(4, " Seleccionados: ");
    i0.ɵɵelementStart(5, "span", 40);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.availableServices);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.selectedServiceIds.size);
} }
function CreateRoomComponent_Conditional_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, CreateRoomComponent_Conditional_58_Conditional_0_Template, 2, 0, "div", 26)(1, CreateRoomComponent_Conditional_58_Conditional_1_Template, 7, 1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r0.availableServices.length === 0 ? 0 : 1);
} }
function CreateRoomComponent_Conditional_63_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 30);
    i0.ɵɵtext(1, " Creando... ");
} }
function CreateRoomComponent_Conditional_64_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Crear habitaci\u00F3n ");
} }
export class CreateRoomComponent {
    fb;
    roomService;
    cloudinary;
    route;
    router;
    form;
    loading = false;
    loadingServices = false;
    error = null;
    motelId;
    // Servicios (API)
    availableServices = [];
    selectedServiceIds = new Set();
    // Imágenes (frontend)
    roomImages = [];
    imagePreviews = []; // object URLs
    roomTypes = ['STANDARD', 'SUITE', 'DELUXE', 'VIP'];
    MAX_IMAGE_MB = 5;
    constructor(fb, roomService, cloudinary, route, router) {
        this.fb = fb;
        this.roomService = roomService;
        this.cloudinary = cloudinary;
        this.route = route;
        this.router = router;
        this.form = this.fb.group({
            number: ['', [Validators.required]],
            roomType: ['STANDARD', [Validators.required]],
            price: [null, [Validators.required, Validators.min(1)]], // > 0
            description: ['', [Validators.required]],
            latitude: [null,],
            longitude: [null,],
        });
    }
    ngOnInit() {
        const paramId = this.route.snapshot.paramMap.get('motelId') ??
            this.route.snapshot.queryParamMap.get('motelId');
        if (!paramId) {
            this.error = 'No se encontró el ID del motel.';
            return;
        }
        this.motelId = Number(paramId);
        this.loadServices();
    }
    ngOnDestroy() {
        // liberar object URLs
        this.imagePreviews.forEach((url) => this.cloudinary.revokePreview(url));
    }
    // ─── Navegación ─────────────────────────────────────────────────────────────
    cancel() {
        this.router.navigate(['/listProperty']);
    }
    // ─── Cargar servicios ───────────────────────────────────────────────────────
    loadServices() {
        this.loadingServices = true;
        // Debes tener en RoomService: getAllServices(): Observable<Service[]>
        this.roomService.getAllServices().subscribe({
            next: (services) => {
                this.availableServices = services;
                this.loadingServices = false;
            },
            error: () => {
                this.error = 'Error cargando los servicios disponibles.';
                this.loadingServices = false;
            },
        });
    }
    // ─── Servicios ──────────────────────────────────────────────────────────────
    toggleService(id) {
        if (this.selectedServiceIds.has(id))
            this.selectedServiceIds.delete(id);
        else
            this.selectedServiceIds.add(id);
    }
    isServiceSelected(id) {
        return this.selectedServiceIds.has(id);
    }
    // ─── Imágenes ───────────────────────────────────────────────────────────────
    onImagesSelected(evt) {
        const input = evt.target;
        if (!input.files)
            return;
        // limpiar previews anteriores
        this.imagePreviews.forEach((url) => this.cloudinary.revokePreview(url));
        this.imagePreviews = [];
        this.roomImages = [];
        const files = Array.from(input.files);
        const valid = [];
        const rejected = [];
        for (const f of files) {
            if (!this.cloudinary.isValidImage(f)) {
                rejected.push(`${f.name} (tipo no soportado)`);
                continue;
            }
            if (!this.cloudinary.isValidSize(f, this.MAX_IMAGE_MB)) {
                rejected.push(`${f.name} (> ${this.MAX_IMAGE_MB}MB)`);
                continue;
            }
            valid.push(f);
        }
        this.roomImages = valid;
        this.imagePreviews = valid.map((f) => this.cloudinary.createPreview(f));
        if (rejected.length > 0) {
            this.error = `Algunas imágenes se ignoraron: ${rejected.join(', ')}`;
        }
    }
    removeImage(index) {
        const preview = this.imagePreviews[index];
        if (preview)
            this.cloudinary.revokePreview(preview);
        this.roomImages.splice(index, 1);
        this.imagePreviews.splice(index, 1);
    }
    // ─── Submit ─────────────────────────────────────────────────────────────────
    submit() {
        this.error = null;
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        if (this.roomImages.length === 0) {
            this.error = 'Debes subir al menos una imagen de la habitación.';
            return;
        }
        if (this.selectedServiceIds.size === 0) {
            this.error = 'Selecciona al menos 1 servicio.';
            return;
        }
        const v = this.form.getRawValue();
        const folderSuffix = this.buildFolderSuffix(v.number);
        this.loading = true;
        this.cloudinary
            .uploadMultiple(this.roomImages, folderSuffix)
            .pipe(switchMap((imageUrls) => {
            if (!imageUrls || imageUrls.length === 0) {
                return throwError(() => new Error('No se pudieron subir las imágenes a Cloudinary.'));
            }
            const payload = {
                motelId: this.motelId,
                number: v.number.trim(),
                roomType: v.roomType,
                price: Number(v.price),
                description: v.description?.trim() ?? '',
                latitude: null,
                longitude: null,
                imageUrls,
                serviceIds: Array.from(this.selectedServiceIds),
            };
            // Debes tener en RoomService: createRoom(payload: RoomCreatePayload)
            return this.roomService.createRoom(payload);
        }), finalize(() => (this.loading = false)))
            .subscribe({
            next: () => {
                this.router.navigate(['/listProperty']);
            },
            error: (err) => {
                this.error = err?.message ?? err?.error?.message ?? 'Error creando la habitación.';
            },
        });
    }
    buildFolderSuffix(roomNumber) {
        const safeRoom = (roomNumber ?? '')
            .trim()
            .replace(/\s+/g, '_')
            .replace(/[^a-zA-Z0-9_-]/g, '');
        return `motel_${this.motelId}/room_${safeRoom || 'room'}`;
    }
    static ɵfac = function CreateRoomComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CreateRoomComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.RoomService), i0.ɵɵdirectiveInject(i3.CloudinaryService), i0.ɵɵdirectiveInject(i4.ActivatedRoute), i0.ɵɵdirectiveInject(i4.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CreateRoomComponent, selectors: [["app-create-room"]], decls: 65, vars: 18, consts: [[1, "min-h-screen", "text-white", "px-5", "py-10"], [1, "mx-auto", "w-full", "max-w-5xl"], [1, "flex", "flex-col", "gap-4", "sm:flex-row", "sm:items-center", "sm:justify-between", "mb-8"], [1, "text-3xl", "md:text-4xl", "font-bold"], [1, "text-white/60", "mt-1"], [1, "text-white/90", "font-semibold"], [1, "flex", "gap-3"], ["type", "button", 1, "inline-flex", "items-center", "justify-center", "rounded-xl", "border", "border-white/15", "bg-white/5", "px-4", "py-3", "text-sm", "font-medium", "text-white/90", "hover:bg-white/10", "active:scale-[0.99]", "transition", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["type", "button", 1, "inline-flex", "items-center", "justify-center", "rounded-xl", "bg-red-600", "px-4", "py-3", "text-sm", "font-semibold", "text-white", "hover:bg-red-500", "active:scale-[0.99]", "transition", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "mb-6", "rounded-xl", "border", "border-red-500/30", "bg-red-500/10", "px-4", "py-3", "text-red-200"], [1, "rounded-2xl", "border", "border-white/10", "bg-white/5", "backdrop-blur", "p-6", "md:p-8", "shadow-[0_10px_35px_rgba(0,0,0,0.45)]", "grid", "grid-cols-1", "md:grid-cols-2", "gap-6", 3, "ngSubmit", "formGroup"], [1, "md:col-span-2", "text-lg", "font-semibold", "tracking-wide", "text-white/90"], [1, "flex", "flex-col", "gap-2"], [1, "text-sm", "text-white/80"], ["formControlName", "number", "placeholder", "Ej: A-101", 1, "w-full", "rounded-xl", "bg-black/30", "border", "border-white/10", "px-4", "py-3", "text-white", "placeholder-white/35", "outline-none", "transition", "focus:border-red-500/40", "focus:ring-2", "focus:ring-red-500/40"], [1, "text-xs", "text-red-300"], ["formControlName", "roomType", 1, "w-full", "rounded-xl", "bg-black/30", "border", "border-white/10", "px-4", "py-3", "text-white", "outline-none", "transition", "focus:border-red-500/40", "focus:ring-2", "focus:ring-red-500/40"], [3, "value"], ["type", "number", "min", "1", "formControlName", "price", "placeholder", "Ej: 120000", 1, "w-full", "rounded-xl", "bg-black/30", "border", "border-white/10", "px-4", "py-3", "text-white", "placeholder-white/35", "outline-none", "transition", "focus:border-red-500/40", "focus:ring-2", "focus:ring-red-500/40"], [1, "md:col-span-2", "flex", "flex-col", "gap-2"], ["rows", "3", "formControlName", "description", "placeholder", "Ej: Suite amplia con jacuzzi...", 1, "w-full", "min-h-110px", "rounded-xl", "bg-black/30", "border", "border-white/10", "px-4", "py-3", "text-white", "placeholder-white/35", "outline-none", "transition", "focus:border-red-500/40", "focus:ring-2", "focus:ring-red-500/40"], [1, "md:col-span-2", "border-white/10", "my-2"], ["type", "file", "accept", "image/*", "multiple", "", 1, "w-full", "rounded-xl", "bg-black/30", "border", "border-white/10", "px-4", "py-3", "text-white", "file:mr-4", "file:rounded-lg", "file:border-0", "file:bg-red-600", "file:px-4", "file:py-2", "file:text-sm", "file:font-semibold", "file:text-white", "hover:file:bg-red-500", "transition", 3, "change", "disabled"], [1, "text-sm", "text-white/60"], [1, "md:col-span-2", "grid", "grid-cols-2", "sm:grid-cols-3", "md:grid-cols-4", "gap-4"], [1, "md:col-span-2"], [1, "rounded-xl", "border", "border-white/10", "bg-black/20", "px-4", "py-3", "text-white/70"], [1, "md:col-span-2", "flex", "gap-3", "mt-2"], ["type", "button", 1, "flex-1", "inline-flex", "items-center", "justify-center", "rounded-xl", "border", "border-white/15", "bg-white/5", "px-4", "py-3", "text-sm", "font-medium", "text-white/90", "hover:bg-white/10", "active:scale-[0.99]", "transition", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["type", "submit", 1, "flex-1", "inline-flex", "items-center", "justify-center", "rounded-xl", "bg-red-600", "px-4", "py-3", "text-sm", "font-semibold", "text-white", "hover:bg-red-500", "active:scale-[0.99]", "transition", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], [1, "mr-2", "inline-block", "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-white/30", "border-t-white"], [1, "rounded-xl", "border", "border-white/10", "bg-black/20", "overflow-hidden"], [1, "aspect-square"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "p-3", "flex", "items-center", "justify-between", "gap-2"], [1, "text-xs", "text-white/60", "truncate"], ["type", "button", 1, "rounded-lg", "border", "border-white/15", "bg-white/5", "px-3", "py-1.5", "text-xs", "text-white/80", "hover:bg-white/10", "transition", 3, "click", "disabled"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "gap-4"], [1, "cursor-pointer", "rounded-xl", "border", "border-white/10", "bg-black/20", "p-4", "transition", "hover:bg-black/25", 3, "border-red-500/40", "bg-red-500/10"], [1, "mt-3", "text-sm", "text-white/70"], [1, "text-white", "font-semibold"], [1, "cursor-pointer", "rounded-xl", "border", "border-white/10", "bg-black/20", "p-4", "transition", "hover:bg-black/25"], [1, "flex", "items-start", "gap-3"], ["type", "checkbox", 1, "mt-1", "h-4", "w-4", "accent-red-500", 3, "change", "checked", "disabled"], [1, "min-w-0"], [1, "flex", "items-center", "gap-2"], [1, "text-white/70", "text-sm"], [1, "font-semibold", "text-white/90", "truncate"], [1, "mt-1", "text-xs", "text-white/60", "leading-relaxed"]], template: function CreateRoomComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h2", 3);
            i0.ɵɵtext(5, "CREAR HABITACI\u00D3N");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p", 4);
            i0.ɵɵtext(7, "Motel ID: ");
            i0.ɵɵelementStart(8, "span", 5);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 6)(11, "button", 7);
            i0.ɵɵlistener("click", function CreateRoomComponent_Template_button_click_11_listener() { return ctx.cancel(); });
            i0.ɵɵtext(12, " Cancelar ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "button", 8);
            i0.ɵɵlistener("click", function CreateRoomComponent_Template_button_click_13_listener() { return ctx.submit(); });
            i0.ɵɵconditionalCreate(14, CreateRoomComponent_Conditional_14_Template, 2, 0)(15, CreateRoomComponent_Conditional_15_Template, 1, 0);
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(16, CreateRoomComponent_Conditional_16_Template, 2, 1, "div", 9);
            i0.ɵɵelementStart(17, "form", 10);
            i0.ɵɵlistener("ngSubmit", function CreateRoomComponent_Template_form_ngSubmit_17_listener() { return ctx.submit(); });
            i0.ɵɵelementStart(18, "h4", 11);
            i0.ɵɵtext(19, " Datos b\u00E1sicos ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "div", 12)(21, "label", 13);
            i0.ɵɵtext(22, "N\u00FAmero / C\u00F3digo");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(23, "input", 14);
            i0.ɵɵconditionalCreate(24, CreateRoomComponent_Conditional_24_Template, 2, 0, "div", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div", 12)(26, "label", 13);
            i0.ɵɵtext(27, "Tipo de habitaci\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "select", 16);
            i0.ɵɵrepeaterCreate(29, CreateRoomComponent_For_30_Template, 2, 2, "option", 17, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(31, CreateRoomComponent_Conditional_31_Template, 2, 0, "div", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "div", 12)(33, "label", 13);
            i0.ɵɵtext(34, "Precio");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(35, "input", 18);
            i0.ɵɵconditionalCreate(36, CreateRoomComponent_Conditional_36_Template, 2, 0, "div", 15);
            i0.ɵɵconditionalCreate(37, CreateRoomComponent_Conditional_37_Template, 2, 0, "div", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "div", 19)(39, "label", 13);
            i0.ɵɵtext(40, "Descripci\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(41, "textarea", 20);
            i0.ɵɵconditionalCreate(42, CreateRoomComponent_Conditional_42_Template, 2, 0, "div", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(43, "hr", 21);
            i0.ɵɵelementStart(44, "h4", 11);
            i0.ɵɵtext(45, " Im\u00E1genes (obligatorias) ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "div", 19)(47, "label", 13);
            i0.ɵɵtext(48, "Subir im\u00E1genes (jpg/png/webp) - M\u00E1x 5MB c/u");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "input", 22);
            i0.ɵɵlistener("change", function CreateRoomComponent_Template_input_change_49_listener($event) { return ctx.onImagesSelected($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(50, CreateRoomComponent_Conditional_50_Template, 2, 1, "small", 23)(51, CreateRoomComponent_Conditional_51_Template, 2, 0, "small", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(52, CreateRoomComponent_Conditional_52_Template, 3, 0, "div", 24);
            i0.ɵɵelement(53, "hr", 21);
            i0.ɵɵelementStart(54, "h4", 11);
            i0.ɵɵtext(55, " Servicios (selecciona al menos 1) ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "div", 25);
            i0.ɵɵconditionalCreate(57, CreateRoomComponent_Conditional_57_Template, 2, 0, "div", 26)(58, CreateRoomComponent_Conditional_58_Template, 2, 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "div", 27)(60, "button", 28);
            i0.ɵɵlistener("click", function CreateRoomComponent_Template_button_click_60_listener() { return ctx.cancel(); });
            i0.ɵɵtext(61, " Cancelar ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "button", 29);
            i0.ɵɵconditionalCreate(63, CreateRoomComponent_Conditional_63_Template, 2, 0)(64, CreateRoomComponent_Conditional_64_Template, 1, 0);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            let tmp_6_0;
            let tmp_8_0;
            let tmp_9_0;
            let tmp_10_0;
            let tmp_11_0;
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.motelId);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.loading);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.loading || ctx.form.invalid);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading ? 14 : 15);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.error ? 16 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(((tmp_6_0 = ctx.form.get("number")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx.form.get("number")) == null ? null : tmp_6_0.hasError("required")) ? 24 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵrepeater(ctx.roomTypes);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(((tmp_8_0 = ctx.form.get("roomType")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = ctx.form.get("roomType")) == null ? null : tmp_8_0.hasError("required")) ? 31 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(((tmp_9_0 = ctx.form.get("price")) == null ? null : tmp_9_0.touched) && ((tmp_9_0 = ctx.form.get("price")) == null ? null : tmp_9_0.hasError("required")) ? 36 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(((tmp_10_0 = ctx.form.get("price")) == null ? null : tmp_10_0.touched) && ((tmp_10_0 = ctx.form.get("price")) == null ? null : tmp_10_0.hasError("min")) ? 37 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(((tmp_11_0 = ctx.form.get("description")) == null ? null : tmp_11_0.touched) && ((tmp_11_0 = ctx.form.get("description")) == null ? null : tmp_11_0.hasError("required")) ? 42 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("disabled", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.roomImages.length > 0 ? 50 : 51);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.imagePreviews.length > 0 ? 52 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(ctx.loadingServices ? 57 : 58);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.loading);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.loading || ctx.form.invalid);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading ? 63 : 64);
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MinValidator, i1.FormGroupDirective, i1.FormControlName], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CreateRoomComponent, [{
        type: Component,
        args: [{ selector: 'app-create-room', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<div class=\"min-h-screen text-white px-5 py-10\">\n  <div class=\"mx-auto w-full max-w-5xl\">\n    <div class=\"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8\">\n      <div>\n        <h2 class=\"text-3xl md:text-4xl font-bold\">CREAR HABITACI\u00D3N</h2>\n        <p class=\"text-white/60 mt-1\">Motel ID: <span class=\"text-white/90 font-semibold\">{{ motelId }}</span></p>\n      </div>\n\n      <div class=\"flex gap-3\">\n        <button\n          type=\"button\"\n          class=\"inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 active:scale-[0.99] transition disabled:opacity-50 disabled:cursor-not-allowed\"\n          (click)=\"cancel()\"\n          [disabled]=\"loading\"\n        >\n          Cancelar\n        </button>\n\n        <button\n          type=\"button\"\n          class=\"inline-flex items-center justify-center rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-500 active:scale-[0.99] transition disabled:opacity-50 disabled:cursor-not-allowed\"\n          (click)=\"submit()\"\n          [disabled]=\"loading || form.invalid\"\n        >\n          @if (loading) {\n            <span class=\"mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white\"></span>\n            Creando...\n          } @else {\n            Crear habitaci\u00F3n\n          }\n        </button>\n      </div>\n    </div>\n\n    @if (error) {\n      <div class=\"mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-200\">\n        {{ error }}\n      </div>\n    }\n\n    <form\n      [formGroup]=\"form\"\n      (ngSubmit)=\"submit()\"\n      class=\"rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.45)] grid grid-cols-1 md:grid-cols-2 gap-6\"\n    >\n      <!-- Datos b\u00E1sicos -->\n      <h4 class=\"md:col-span-2 text-lg font-semibold tracking-wide text-white/90\">\n        Datos b\u00E1sicos\n      </h4>\n\n      <div class=\"flex flex-col gap-2\">\n        <label class=\"text-sm text-white/80\">N\u00FAmero / C\u00F3digo</label>\n        <input\n          class=\"w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/35 outline-none transition focus:border-red-500/40 focus:ring-2 focus:ring-red-500/40\"\n          formControlName=\"number\"\n          placeholder=\"Ej: A-101\"\n        />\n        @if (form.get('number')?.touched && form.get('number')?.hasError('required')) {\n          <div class=\"text-xs text-red-300\">El n\u00FAmero es obligatorio.</div>\n        }\n      </div>\n\n      <div class=\"flex flex-col gap-2\">\n        <label class=\"text-sm text-white/80\">Tipo de habitaci\u00F3n</label>\n        <select\n          class=\"w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white outline-none transition focus:border-red-500/40 focus:ring-2 focus:ring-red-500/40\"\n          formControlName=\"roomType\"\n        >\n          @for (t of roomTypes; track t) {\n            <option [value]=\"t\">{{ t }}</option>\n          }\n        </select>\n        @if (form.get('roomType')?.touched && form.get('roomType')?.hasError('required')) {\n          <div class=\"text-xs text-red-300\">El tipo es obligatorio.</div>\n        }\n      </div>\n\n      <div class=\"flex flex-col gap-2\">\n        <label class=\"text-sm text-white/80\">Precio</label>\n        <input\n          type=\"number\"\n          min=\"1\"\n          class=\"w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/35 outline-none transition focus:border-red-500/40 focus:ring-2 focus:ring-red-500/40\"\n          formControlName=\"price\"\n          placeholder=\"Ej: 120000\"\n        />\n        @if (form.get('price')?.touched && form.get('price')?.hasError('required')) {\n          <div class=\"text-xs text-red-300\">El precio es obligatorio.</div>\n        }\n        @if (form.get('price')?.touched && form.get('price')?.hasError('min')) {\n          <div class=\"text-xs text-red-300\">El precio debe ser mayor a 0.</div>\n        }\n      </div>\n\n      <div class=\"md:col-span-2 flex flex-col gap-2\">\n        <label class=\"text-sm text-white/80\">Descripci\u00F3n</label>\n        <textarea\n          rows=\"3\"\n          class=\"w-full min-h-110px rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/35 outline-none transition focus:border-red-500/40 focus:ring-2 focus:ring-red-500/40\"\n          formControlName=\"description\"\n          placeholder=\"Ej: Suite amplia con jacuzzi...\"\n        ></textarea>\n        @if (form.get('description')?.touched && form.get('description')?.hasError('required')) {\n          <div class=\"text-xs text-red-300\">La descripci\u00F3n es obligatoria.</div>\n        }\n      </div>\n\n      <hr class=\"md:col-span-2 border-white/10 my-2\" />\n\n      <!-- Im\u00E1genes -->\n      <h4 class=\"md:col-span-2 text-lg font-semibold tracking-wide text-white/90\">\n        Im\u00E1genes (obligatorias)\n      </h4>\n\n      <div class=\"md:col-span-2 flex flex-col gap-2\">\n        <label class=\"text-sm text-white/80\">Subir im\u00E1genes (jpg/png/webp) - M\u00E1x 5MB c/u</label>\n        <input\n          class=\"w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white\n                 file:mr-4 file:rounded-lg file:border-0 file:bg-red-600 file:px-4 file:py-2\n                 file:text-sm file:font-semibold file:text-white hover:file:bg-red-500 transition\"\n          type=\"file\"\n          accept=\"image/*\"\n          multiple\n          (change)=\"onImagesSelected($event)\"\n          [disabled]=\"loading\"\n        />\n\n        @if (roomImages.length > 0) {\n          <small class=\"text-sm text-white/60\">\n            Seleccionadas: {{ roomImages.length }} imagen(es)\n          </small>\n        } @else {\n          <small class=\"text-sm text-white/60\">\n            A\u00FAn no has seleccionado im\u00E1genes.\n          </small>\n        }\n      </div>\n\n      @if (imagePreviews.length > 0) {\n        <div class=\"md:col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4\">\n          @for (url of imagePreviews; track url; let i = $index) {\n            <div class=\"rounded-xl border border-white/10 bg-black/20 overflow-hidden\">\n              <div class=\"aspect-square\">\n                <img [src]=\"url\" class=\"h-full w-full object-cover\" alt=\"preview {{ i + 1 }}\" />\n              </div>\n              <div class=\"p-3 flex items-center justify-between gap-2\">\n                <span class=\"text-xs text-white/60 truncate\">Imagen {{ i + 1 }}</span>\n                <button\n                  type=\"button\"\n                  class=\"rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10 transition\"\n                  (click)=\"removeImage(i)\"\n                  [disabled]=\"loading\"\n                >\n                  Quitar\n                </button>\n              </div>\n            </div>\n          }\n        </div>\n      }\n\n      <hr class=\"md:col-span-2 border-white/10 my-2\" />\n\n      <!-- Servicios -->\n      <h4 class=\"md:col-span-2 text-lg font-semibold tracking-wide text-white/90\">\n        Servicios (selecciona al menos 1)\n      </h4>\n\n      <div class=\"md:col-span-2\">\n        @if (loadingServices) {\n          <div class=\"rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white/70\">\n            Cargando servicios...\n          </div>\n        } @else {\n          @if (availableServices.length === 0) {\n            <div class=\"rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white/70\">\n              No hay servicios disponibles.\n            </div>\n          } @else {\n            <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4\">\n              @for (s of availableServices; track s.id) {\n                <label\n                  class=\"cursor-pointer rounded-xl border border-white/10 bg-black/20 p-4 transition hover:bg-black/25\"\n                  [class.border-red-500/40]=\"isServiceSelected(s.id)\"\n                  [class.bg-red-500/10]=\"isServiceSelected(s.id)\"\n                >\n                  <div class=\"flex items-start gap-3\">\n                    <input\n                      type=\"checkbox\"\n                      class=\"mt-1 h-4 w-4 accent-red-500\"\n                      [checked]=\"isServiceSelected(s.id)\"\n                      (change)=\"toggleService(s.id)\"\n                      [disabled]=\"loading\"\n                    />\n                    <div class=\"min-w-0\">\n                      <div class=\"flex items-center gap-2\">\n                        <!-- Si tu icon es Material Icons name -->\n                        <span class=\"text-white/70 text-sm\">{{ s.icon }}</span>\n                        <span class=\"font-semibold text-white/90 truncate\">{{ s.name }}</span>\n                      </div>\n                      <p class=\"mt-1 text-xs text-white/60 leading-relaxed\">\n                        {{ s.description }}\n                      </p>\n                    </div>\n                  </div>\n                </label>\n              }\n            </div>\n\n            <div class=\"mt-3 text-sm text-white/70\">\n              Seleccionados: <span class=\"text-white font-semibold\">{{ selectedServiceIds.size }}</span>\n            </div>\n          }\n        }\n      </div>\n\n      <div class=\"md:col-span-2 flex gap-3 mt-2\">\n        <button\n          type=\"button\"\n          class=\"flex-1 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 active:scale-[0.99] transition disabled:opacity-50 disabled:cursor-not-allowed\"\n          (click)=\"cancel()\"\n          [disabled]=\"loading\"\n        >\n          Cancelar\n        </button>\n\n        <button\n          class=\"flex-1 inline-flex items-center justify-center rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-500 active:scale-[0.99] transition disabled:opacity-50 disabled:cursor-not-allowed\"\n          type=\"submit\"\n          [disabled]=\"loading || form.invalid\"\n        >\n          @if (loading) {\n            <span class=\"mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white\"></span>\n            Creando...\n          } @else {\n            Crear habitaci\u00F3n\n          }\n        </button>\n      </div>\n    </form>\n  </div>\n</div>" }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.RoomService }, { type: i3.CloudinaryService }, { type: i4.ActivatedRoute }, { type: i4.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CreateRoomComponent, { className: "CreateRoomComponent", filePath: "src/app/views/Forms/create-room/components/create-room.component.ts", lineNumber: 20 }); })();
