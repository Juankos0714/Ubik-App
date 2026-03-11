import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators, } from '@angular/forms';
import { forkJoin, of } from 'rxjs';
import { switchMap, finalize } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../../../core/services/motel.service";
import * as i3 from "../../../../core/services/Cloudinary.service";
import * as i4 from "../../../../core/services/auth.service";
import * as i5 from "@angular/router";
const _forTrack0 = ($index, $item) => $item.name;
function CreateMotelComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.error, " ");
} }
function CreateMotelComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.locationStatus, " ");
} }
function CreateMotelComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1, "Nombre requerido (m\u00EDnimo 3).");
    i0.ɵɵelementEnd();
} }
function CreateMotelComponent_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1, "Direcci\u00F3n requerida.");
    i0.ɵɵelementEnd();
} }
function CreateMotelComponent_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1, "Ciudad requerida.");
    i0.ɵɵelementEnd();
} }
function CreateMotelComponent_Conditional_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 39);
    i0.ɵɵtext(1, " Obteniendo... ");
} }
function CreateMotelComponent_Conditional_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Obtener ubicaci\u00F3n actual ");
} }
function CreateMotelComponent_Conditional_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" Listo: ", (tmp_2_0 = ctx_r1.form.get("latitude")) == null ? null : tmp_2_0.value, ", ", (tmp_2_0 = ctx_r1.form.get("longitude")) == null ? null : tmp_2_0.value, " ");
} }
function CreateMotelComponent_Conditional_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.profileImage.name);
} }
function CreateMotelComponent_Conditional_68_For_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42)(1, "span", 43);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 44);
    i0.ɵɵlistener("click", function CreateMotelComponent_Conditional_68_For_7_Template_button_click_3_listener() { const ɵ$index_147_r5 = i0.ɵɵrestoreView(_r4).$index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.removeMotelImage(ɵ$index_147_r5)); });
    i0.ɵɵtext(4, " Quitar ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const img_r6 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(img_r6.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.loading);
} }
function CreateMotelComponent_Conditional_68_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29)(1, "div", 40);
    i0.ɵɵtext(2, " Seleccionadas: ");
    i0.ɵɵelementStart(3, "b");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 41);
    i0.ɵɵrepeaterCreate(6, CreateMotelComponent_Conditional_68_For_7_Template, 5, 2, "div", 42, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.motelImages.length);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.motelImages);
} }
function CreateMotelComponent_Conditional_76_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.rntFile.name);
} }
function CreateMotelComponent_Conditional_81_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.ruesFile.name);
} }
function CreateMotelComponent_Conditional_86_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.legalDocumentFile.name);
} }
function CreateMotelComponent_For_95_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", t_r7);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(t_r7);
} }
function CreateMotelComponent_Conditional_110_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 39);
    i0.ɵɵtext(1, " Creando... ");
} }
function CreateMotelComponent_Conditional_111_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Crear motel ");
} }
export class CreateMotelComponent {
    fb;
    motelService;
    cloudinary;
    auth;
    router;
    form;
    loading = false;
    gettingLocation = false;
    error = null;
    locationStatus = null;
    documentTypes = ['CC', 'NIT', 'CE', 'PASAPORTE'];
    profileImage = null;
    motelImages = [];
    rntFile = null;
    ruesFile = null;
    legalDocumentFile = null;
    constructor(fb, motelService, cloudinary, auth, router) {
        this.fb = fb;
        this.motelService = motelService;
        this.cloudinary = cloudinary;
        this.auth = auth;
        this.router = router;
        this.form = this.fb.group({
            name: this.fb.control('', {
                validators: [Validators.required, Validators.minLength(3)],
            }),
            address: this.fb.control('', { validators: [Validators.required] }),
            city: this.fb.control('', { validators: [Validators.required] }),
            phoneNumber: this.fb.control(null),
            description: this.fb.control(null),
            latitude: this.fb.control(null),
            longitude: this.fb.control(null),
            ownerDocumentType: this.fb.control('CC', {
                validators: [Validators.required],
            }),
            ownerDocumentNumber: this.fb.control('', { validators: [Validators.required] }),
            ownerFullName: this.fb.control('', { validators: [Validators.required] }),
            legalRepresentativeName: this.fb.control(null),
        });
    }
    ngOnInit() { }
    getUserLocation() {
        this.error = null;
        if (!navigator.geolocation) {
            this.error = 'Tu navegador no soporta geolocalización.';
            return;
        }
        this.gettingLocation = true;
        this.locationStatus = 'Obteniendo ubicación...';
        navigator.geolocation.getCurrentPosition((pos) => {
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            this.form.patchValue({ latitude: lat, longitude: lng });
            this.locationStatus = `Ubicación lista: ${lat.toFixed(6)}, ${lng.toFixed(6)}`;
            this.gettingLocation = false;
        }, (err) => {
            this.gettingLocation = false;
            this.locationStatus = null;
            if (err.code === err.PERMISSION_DENIED)
                this.error = 'Permiso de ubicación denegado.';
            else if (err.code === err.POSITION_UNAVAILABLE)
                this.error = 'No se pudo obtener tu ubicación.';
            else if (err.code === err.TIMEOUT)
                this.error = 'Tiempo de espera agotado al obtener ubicación.';
            else
                this.error = 'Error obteniendo ubicación.';
        }, { enableHighAccuracy: true, timeout: 10000 });
    }
    onProfileImageSelected(event) {
        const input = event.target;
        this.profileImage = input.files?.[0] ?? null;
    }
    onMotelImagesSelected(event) {
        const input = event.target;
        this.motelImages = Array.from(input.files ?? []);
    }
    clearGallery(input) {
        this.motelImages = [];
        input.value = '';
    }
    removeMotelImage(index) {
        this.motelImages.splice(index, 1);
    }
    onRntSelected(event) {
        const input = event.target;
        this.rntFile = input.files?.[0] ?? null;
    }
    onRuesSelected(event) {
        const input = event.target;
        this.ruesFile = input.files?.[0] ?? null;
    }
    onLegalDocSelected(event) {
        const input = event.target;
        this.legalDocumentFile = input.files?.[0] ?? null;
    }
    submit() {
        this.error = null;
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        if (!this.rntFile || !this.ruesFile) {
            this.error = 'Debes subir los archivos de RNT y RUES.';
            return;
        }
        if (!this.profileImage) {
            this.error = 'Debes subir la foto de perfil del motel.';
            return;
        }
        const userId = this.auth.user()?.id;
        if (!userId) {
            this.error = 'No hay usuario logueado.';
            return;
        }
        this.loading = true;
        const v = this.form.getRawValue();
        // 1) Subir a Cloudinary
        const rnt$ = this.cloudinary.uploadFile(this.rntFile, 'motels/legal');
        const rues$ = this.cloudinary.uploadFile(this.ruesFile, 'motels/legal');
        const legalDoc$ = this.legalDocumentFile
            ? this.cloudinary.uploadFile(this.legalDocumentFile, 'motels/legal')
            : of(null);
        const profile$ = this.cloudinary.uploadFile(this.profileImage, 'motels/profile');
        const gallery$ = this.motelImages?.length
            ? this.cloudinary.uploadMultiple(this.motelImages, 'motels/gallery')
            : of([]);
        forkJoin({
            rntUrl: rnt$,
            ruesUrl: rues$,
            legalUrl: legalDoc$,
            profileUrl: profile$,
            galleryUrls: gallery$,
        })
            .pipe(
        // 2) Crear motel enviando PERFIL + GALERÍA en la MISMA imageUrls[]
        switchMap(({ rntUrl, ruesUrl, legalUrl, profileUrl, galleryUrls }) => {
            const payload = {
                name: v.name,
                address: v.address,
                city: v.city,
                phoneNumber: v.phoneNumber ?? null,
                description: v.description ?? null,
                propertyId: userId,
                latitude: v.latitude ?? null,
                longitude: v.longitude ?? null,
                rues: ruesUrl,
                rnt: rntUrl,
                ownerDocumentType: v.ownerDocumentType,
                ownerDocumentNumber: v.ownerDocumentNumber,
                ownerFullName: v.ownerFullName,
                legalRepresentativeName: v.legalRepresentativeName ?? null,
                legalDocumentUrl: legalUrl,
                imageUrls: [...(galleryUrls ?? []), profileUrl],
            };
            return this.motelService.createMotelWithImages(payload);
        }), finalize(() => (this.loading = false)))
            .subscribe({
            next: () => this.router.navigate(['/listProperty']),
            error: (err) => {
                this.error = err?.error?.message ?? err?.message ?? 'Error creando el motel.';
            },
        });
    }
    static ɵfac = function CreateMotelComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CreateMotelComponent)(i0.ɵɵdirectiveInject(i1.NonNullableFormBuilder), i0.ɵɵdirectiveInject(i2.MotelService), i0.ɵɵdirectiveInject(i3.CloudinaryService), i0.ɵɵdirectiveInject(i4.AuthService), i0.ɵɵdirectiveInject(i5.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CreateMotelComponent, selectors: [["app-create-motel"]], decls: 112, vars: 17, consts: [["galleryInput", ""], [1, "min-h-screen", "text-white", "px-5", "py-10"], [1, "mx-auto", "w-full", "max-w-5xl"], [1, "flex", "flex-col", "gap-4", "sm:flex-row", "sm:items-center", "sm:justify-between", "mb-8"], [1, "text-3xl", "md:text-4xl", "font-bold"], [1, "mb-6", "rounded-xl", "border", "border-red-500/30", "bg-red-500/10", "px-4", "py-3", "text-red-200"], [1, "mb-6", "rounded-xl", "border", "border-sky-500/30", "bg-sky-500/10", "px-4", "py-3", "text-sky-100"], [1, "rounded-2xl", "border", "border-white/10", "bg-white/5", "backdrop-blur", "p-6", "md:p-8", "shadow-[0_10px_35px_rgba(0,0,0,0.45)]", "grid", "grid-cols-1", "md:grid-cols-2", "gap-6", 3, "ngSubmit", "formGroup"], [1, "md:col-span-2", "text-lg", "font-semibold", "tracking-wide", "text-white/90"], [1, "flex", "flex-col", "gap-2"], [1, "text-sm", "text-white/80"], ["formControlName", "name", 1, "w-full", "rounded-xl", "bg-black/30", "border", "border-white/10", "px-4", "py-3", "text-white", "placeholder-white/35", "outline-none", "transition", "focus:border-red-500/40", "focus:ring-2", "focus:ring-red-500/40"], [1, "text-xs", "text-red-300"], ["formControlName", "phoneNumber", 1, "w-full", "rounded-xl", "bg-black/30", "border", "border-white/10", "px-4", "py-3", "text-white", "placeholder-white/35", "outline-none", "transition", "focus:border-red-500/40", "focus:ring-2", "focus:ring-red-500/40"], [1, "md:col-span-2", "flex", "flex-col", "gap-2"], ["formControlName", "address", 1, "w-full", "rounded-xl", "bg-black/30", "border", "border-white/10", "px-4", "py-3", "text-white", "placeholder-white/35", "outline-none", "transition", "focus:border-red-500/40", "focus:ring-2", "focus:ring-red-500/40"], ["formControlName", "city", 1, "w-full", "rounded-xl", "bg-black/30", "border", "border-white/10", "px-4", "py-3", "text-white", "placeholder-white/35", "outline-none", "transition", "focus:border-red-500/40", "focus:ring-2", "focus:ring-red-500/40"], ["rows", "3", "formControlName", "description", 1, "w-full", "min-h-110px", "rounded-xl", "bg-black/30", "border", "border-white/10", "px-4", "py-3", "text-white", "placeholder-white/35", "outline-none", "transition", "focus:border-red-500/40", "focus:ring-2", "focus:ring-red-500/40"], [1, "md:col-span-2", "border-white/10", "my-2"], [1, "md:col-span-2", "flex", "flex-col", "sm:flex-row", "sm:items-center", "gap-3"], ["type", "button", 1, "inline-flex", "items-center", "justify-center", "rounded-xl", "border", "border-white/15", "bg-white/5", "px-4", "py-3", "text-sm", "font-medium", "text-white/90", "hover:bg-white/10", "active:scale-[0.99]", "transition", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "text-sm", "text-white/70"], ["type", "number", "formControlName", "latitude", 1, "w-full", "rounded-xl", "bg-black/30", "border", "border-white/10", "px-4", "py-3", "text-white", "placeholder-white/35", "outline-none", "transition", "focus:border-red-500/40", "focus:ring-2", "focus:ring-red-500/40"], ["type", "number", "formControlName", "longitude", 1, "w-full", "rounded-xl", "bg-black/30", "border", "border-white/10", "px-4", "py-3", "text-white", "placeholder-white/35", "outline-none", "transition", "focus:border-red-500/40", "focus:ring-2", "focus:ring-red-500/40"], ["type", "file", "accept", "image/*", 1, "w-full", "rounded-xl", "bg-black/30", "border", "border-white/10", "px-4", "py-3", "text-white", "file:mr-4", "file:rounded-lg", "file:border-0", "file:bg-red-600", "file:px-4", "file:py-2", "file:text-sm", "file:font-semibold", "file:text-white", "hover:file:bg-red-500", "transition", 3, "change"], [1, "text-sm", "text-white/60"], [1, "flex", "flex-col", "sm:flex-row", "gap-3"], ["type", "file", "accept", "image/*", "multiple", "", 1, "w-full", "rounded-xl", "bg-black/30", "border", "border-white/10", "px-4", "py-3", "text-white", "file:mr-4", "file:rounded-lg", "file:border-0", "file:bg-white/10", "file:px-4", "file:py-2", "file:text-sm", "file:font-semibold", "file:text-white", "hover:file:bg-white/15", "transition", 3, "change"], ["type", "button", 1, "inline-flex", "items-center", "justify-center", "rounded-xl", "border", "border-white/15", "bg-white/5", "px-4", "py-3", "text-sm", "font-medium", "text-white/90", "hover:bg-white/10", "transition", "disabled:opacity-50", 3, "click", "disabled"], [1, "mt-2", "rounded-xl", "border", "border-white/10", "bg-black/20", "p-3"], ["type", "file", "accept", "image/*", 1, "w-full", "rounded-xl", "bg-black/30", "border", "border-white/10", "px-4", "py-3", "text-white", "file:mr-4", "file:rounded-lg", "file:border-0", "file:bg-white/10", "file:px-4", "file:py-2", "file:text-sm", "file:font-semibold", "file:text-white", "hover:file:bg-white/15", "transition", 3, "change"], ["type", "file", "accept", "image/*,application/pdf", 1, "w-full", "rounded-xl", "bg-black/30", "border", "border-white/10", "px-4", "py-3", "text-white", "file:mr-4", "file:rounded-lg", "file:border-0", "file:bg-white/10", "file:px-4", "file:py-2", "file:text-sm", "file:font-semibold", "file:text-white", "hover:file:bg-white/15", "transition", 3, "change"], ["formControlName", "ownerDocumentType", 1, "w-full", "rounded-xl", "bg-black/30", "border", "border-white/10", "px-4", "py-3", "text-white", "outline-none", "transition", "focus:border-red-500/40", "focus:ring-2", "focus:ring-red-500/40"], [3, "value"], ["formControlName", "ownerDocumentNumber", 1, "w-full", "rounded-xl", "bg-black/30", "border", "border-white/10", "px-4", "py-3", "text-white", "placeholder-white/35", "outline-none", "transition", "focus:border-red-500/40", "focus:ring-2", "focus:ring-red-500/40"], ["formControlName", "ownerFullName", 1, "w-full", "rounded-xl", "bg-black/30", "border", "border-white/10", "px-4", "py-3", "text-white", "placeholder-white/35", "outline-none", "transition", "focus:border-red-500/40", "focus:ring-2", "focus:ring-red-500/40"], ["formControlName", "legalRepresentativeName", 1, "w-full", "rounded-xl", "bg-black/30", "border", "border-white/10", "px-4", "py-3", "text-white", "placeholder-white/35", "outline-none", "transition", "focus:border-red-500/40", "focus:ring-2", "focus:ring-red-500/40"], [1, "md:col-span-2", "flex", "gap-3", "mt-2"], ["type", "submit", 1, "flex-1", "inline-flex", "items-center", "justify-center", "rounded-xl", "bg-red-600", "px-4", "py-3", "text-sm", "font-semibold", "text-white", "hover:bg-red-500", "active:scale-[0.99]", "transition", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], [1, "mr-2", "inline-block", "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-white/30", "border-t-white"], [1, "text-sm", "text-white/70", "mb-2"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-2"], [1, "flex", "items-center", "justify-between", "gap-3", "rounded-lg", "border", "border-white/10", "bg-white/5", "px-3", "py-2"], [1, "text-sm", "text-white/70", "truncate"], ["type", "button", 1, "text-xs", "px-3", "py-1", "rounded-lg", "bg-red-600/80", "hover:bg-red-600", "transition", 3, "click", "disabled"]], template: function CreateMotelComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h2", 4);
            i0.ɵɵtext(4, "CREAR MOTEL");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(5, CreateMotelComponent_Conditional_5_Template, 2, 1, "div", 5);
            i0.ɵɵconditionalCreate(6, CreateMotelComponent_Conditional_6_Template, 2, 1, "div", 6);
            i0.ɵɵelementStart(7, "form", 7);
            i0.ɵɵlistener("ngSubmit", function CreateMotelComponent_Template_form_ngSubmit_7_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.submit()); });
            i0.ɵɵelementStart(8, "h4", 8);
            i0.ɵɵtext(9, " Datos b\u00E1sicos ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 9)(11, "label", 10);
            i0.ɵɵtext(12, "Nombre");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(13, "input", 11);
            i0.ɵɵconditionalCreate(14, CreateMotelComponent_Conditional_14_Template, 2, 0, "div", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 9)(16, "label", 10);
            i0.ɵɵtext(17, "Tel\u00E9fono");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(18, "input", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 14)(20, "label", 10);
            i0.ɵɵtext(21, "Direcci\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(22, "input", 15);
            i0.ɵɵconditionalCreate(23, CreateMotelComponent_Conditional_23_Template, 2, 0, "div", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "div", 9)(25, "label", 10);
            i0.ɵɵtext(26, "Ciudad");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(27, "input", 16);
            i0.ɵɵconditionalCreate(28, CreateMotelComponent_Conditional_28_Template, 2, 0, "div", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "div", 14)(30, "label", 10);
            i0.ɵɵtext(31, "Descripci\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(32, "textarea", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(33, "hr", 18);
            i0.ɵɵelementStart(34, "h4", 8);
            i0.ɵɵtext(35, " Ubicaci\u00F3n ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "div", 19)(37, "button", 20);
            i0.ɵɵlistener("click", function CreateMotelComponent_Template_button_click_37_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.getUserLocation()); });
            i0.ɵɵconditionalCreate(38, CreateMotelComponent_Conditional_38_Template, 2, 0)(39, CreateMotelComponent_Conditional_39_Template, 1, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(40, CreateMotelComponent_Conditional_40_Template, 2, 2, "span", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "div", 9)(42, "label", 10);
            i0.ɵɵtext(43, "Latitud");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(44, "input", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "div", 9)(46, "label", 10);
            i0.ɵɵtext(47, "Longitud");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(48, "input", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(49, "hr", 18);
            i0.ɵɵelementStart(50, "h4", 8);
            i0.ɵɵtext(51, " Foto de perfil (obligatoria) ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "div", 14)(53, "label", 10);
            i0.ɵɵtext(54, "Subir foto de perfil");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "input", 24);
            i0.ɵɵlistener("change", function CreateMotelComponent_Template_input_change_55_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onProfileImageSelected($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(56, CreateMotelComponent_Conditional_56_Template, 2, 1, "small", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(57, "hr", 18);
            i0.ɵɵelementStart(58, "h4", 8);
            i0.ɵɵtext(59, " Galer\u00EDa (opcional) ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "div", 14)(61, "label", 10);
            i0.ɵɵtext(62, "Subir im\u00E1genes para la galer\u00EDa (puedes seleccionar varias)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "div", 26)(64, "input", 27, 0);
            i0.ɵɵlistener("change", function CreateMotelComponent_Template_input_change_64_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onMotelImagesSelected($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "button", 28);
            i0.ɵɵlistener("click", function CreateMotelComponent_Template_button_click_66_listener() { i0.ɵɵrestoreView(_r1); const galleryInput_r3 = i0.ɵɵreference(65); return i0.ɵɵresetView(ctx.clearGallery(galleryInput_r3)); });
            i0.ɵɵtext(67, " Limpiar ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(68, CreateMotelComponent_Conditional_68_Template, 8, 1, "div", 29);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(69, "hr", 18);
            i0.ɵɵelementStart(70, "h4", 8);
            i0.ɵɵtext(71, " Documentos (RNT / RUES) ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(72, "div", 9)(73, "label", 10);
            i0.ɵɵtext(74, "RNT (imagen)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(75, "input", 30);
            i0.ɵɵlistener("change", function CreateMotelComponent_Template_input_change_75_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onRntSelected($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(76, CreateMotelComponent_Conditional_76_Template, 2, 1, "small", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(77, "div", 9)(78, "label", 10);
            i0.ɵɵtext(79, "RUES (imagen)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "input", 30);
            i0.ɵɵlistener("change", function CreateMotelComponent_Template_input_change_80_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onRuesSelected($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(81, CreateMotelComponent_Conditional_81_Template, 2, 1, "small", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(82, "div", 14)(83, "label", 10);
            i0.ɵɵtext(84, "Documento legal (opcional)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(85, "input", 31);
            i0.ɵɵlistener("change", function CreateMotelComponent_Template_input_change_85_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onLegalDocSelected($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(86, CreateMotelComponent_Conditional_86_Template, 2, 1, "small", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(87, "hr", 18);
            i0.ɵɵelementStart(88, "h4", 8);
            i0.ɵɵtext(89, " Propietario ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(90, "div", 9)(91, "label", 10);
            i0.ɵɵtext(92, "Tipo documento");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(93, "select", 32);
            i0.ɵɵrepeaterCreate(94, CreateMotelComponent_For_95_Template, 2, 2, "option", 33, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(96, "div", 9)(97, "label", 10);
            i0.ɵɵtext(98, "N\u00FAmero documento");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(99, "input", 34);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(100, "div", 9)(101, "label", 10);
            i0.ɵɵtext(102, "Nombre propietario");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(103, "input", 35);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(104, "div", 14)(105, "label", 10);
            i0.ɵɵtext(106, "Representante legal (opcional)");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(107, "input", 36);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(108, "div", 37)(109, "button", 38);
            i0.ɵɵconditionalCreate(110, CreateMotelComponent_Conditional_110_Template, 2, 0)(111, CreateMotelComponent_Conditional_111_Template, 1, 0);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            let tmp_4_0;
            let tmp_5_0;
            let tmp_6_0;
            let tmp_9_0;
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(ctx.error ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.locationStatus ? 6 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(((tmp_4_0 = ctx.form.get("name")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.form.get("name")) == null ? null : tmp_4_0.invalid) ? 14 : -1);
            i0.ɵɵadvance(9);
            i0.ɵɵconditional(((tmp_5_0 = ctx.form.get("address")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.form.get("address")) == null ? null : tmp_5_0.invalid) ? 23 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(((tmp_6_0 = ctx.form.get("city")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx.form.get("city")) == null ? null : tmp_6_0.invalid) ? 28 : -1);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("disabled", ctx.loading || ctx.gettingLocation);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.gettingLocation ? 38 : 39);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(((tmp_9_0 = ctx.form.get("latitude")) == null ? null : tmp_9_0.value) && ((tmp_9_0 = ctx.form.get("longitude")) == null ? null : tmp_9_0.value) ? 40 : -1);
            i0.ɵɵadvance(16);
            i0.ɵɵconditional(ctx.profileImage ? 56 : -1);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("disabled", !ctx.motelImages.length || ctx.loading);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.motelImages.length ? 68 : -1);
            i0.ɵɵadvance(8);
            i0.ɵɵconditional(ctx.rntFile ? 76 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(ctx.ruesFile ? 81 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(ctx.legalDocumentFile ? 86 : -1);
            i0.ɵɵadvance(8);
            i0.ɵɵrepeater(ctx.documentTypes);
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("disabled", ctx.loading || ctx.form.invalid);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading ? 110 : 111);
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CreateMotelComponent, [{
        type: Component,
        args: [{ selector: 'app-create-motel', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<div class=\"min-h-screen text-white px-5 py-10\">\n  <div class=\"mx-auto w-full max-w-5xl\">\n    <div class=\"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8\">\n      <h2 class=\"text-3xl md:text-4xl font-bold \">CREAR MOTEL</h2>\n    </div>\n\n    @if (error) {\n      <div class=\"mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-200\">\n        {{ error }}\n      </div>\n    }\n\n    @if (locationStatus) {\n      <div class=\"mb-6 rounded-xl border border-sky-500/30 bg-sky-500/10 px-4 py-3 text-sky-100\">\n        {{ locationStatus }}\n      </div>\n    }\n\n    <form\n      [formGroup]=\"form\"\n      (ngSubmit)=\"submit()\"\n      class=\"rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.45)] grid grid-cols-1 md:grid-cols-2 gap-6\"\n    >\n      <!-- Datos b\u00E1sicos -->\n      <h4 class=\"md:col-span-2 text-lg font-semibold tracking-wide text-white/90\">\n        Datos b\u00E1sicos\n      </h4>\n\n      <div class=\"flex flex-col gap-2\">\n        <label class=\"text-sm text-white/80\">Nombre</label>\n        <input\n          class=\"w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/35 outline-none transition focus:border-red-500/40 focus:ring-2 focus:ring-red-500/40\"\n          formControlName=\"name\"\n        />\n        @if (form.get('name')?.touched && form.get('name')?.invalid) {\n          <div class=\"text-xs text-red-300\">Nombre requerido (m\u00EDnimo 3).</div>\n        }\n      </div>\n\n      <div class=\"flex flex-col gap-2\">\n        <label class=\"text-sm text-white/80\">Tel\u00E9fono</label>\n        <input\n          class=\"w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/35 outline-none transition focus:border-red-500/40 focus:ring-2 focus:ring-red-500/40\"\n          formControlName=\"phoneNumber\"\n        />\n      </div>\n\n      <div class=\"md:col-span-2 flex flex-col gap-2\">\n        <label class=\"text-sm text-white/80\">Direcci\u00F3n</label>\n        <input\n          class=\"w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/35 outline-none transition focus:border-red-500/40 focus:ring-2 focus:ring-red-500/40\"\n          formControlName=\"address\"\n        />\n        @if (form.get('address')?.touched && form.get('address')?.invalid) {\n          <div class=\"text-xs text-red-300\">Direcci\u00F3n requerida.</div>\n        }\n      </div>\n\n      <div class=\"flex flex-col gap-2\">\n        <label class=\"text-sm text-white/80\">Ciudad</label>\n        <input\n          class=\"w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/35 outline-none transition focus:border-red-500/40 focus:ring-2 focus:ring-red-500/40\"\n          formControlName=\"city\"\n        />\n        @if (form.get('city')?.touched && form.get('city')?.invalid) {\n          <div class=\"text-xs text-red-300\">Ciudad requerida.</div>\n        }\n      </div>\n\n      <div class=\"md:col-span-2 flex flex-col gap-2\">\n        <label class=\"text-sm text-white/80\">Descripci\u00F3n</label>\n        <textarea\n          class=\"w-full min-h-110px rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/35 outline-none transition focus:border-red-500/40 focus:ring-2 focus:ring-red-500/40\"\n          rows=\"3\"\n          formControlName=\"description\"\n        ></textarea>\n      </div>\n\n      <hr class=\"md:col-span-2 border-white/10 my-2\" />\n\n      <!-- Ubicaci\u00F3n (lat/long desde geolocalizaci\u00F3n) -->\n      <h4 class=\"md:col-span-2 text-lg font-semibold tracking-wide text-white/90\">\n        Ubicaci\u00F3n\n      </h4>\n\n      <div class=\"md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3\">\n        <button\n          type=\"button\"\n          class=\"inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 active:scale-[0.99] transition disabled:opacity-50 disabled:cursor-not-allowed\"\n          [disabled]=\"loading || gettingLocation\"\n          (click)=\"getUserLocation()\"\n        >\n          @if (gettingLocation) {\n            <span\n              class=\"mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white\"\n            ></span>\n            Obteniendo...\n          } @else {\n            Obtener ubicaci\u00F3n actual\n          }\n        </button>\n\n        @if (form.get('latitude')?.value && form.get('longitude')?.value) {\n          <span class=\"text-sm text-white/70\">\n            Listo: {{ form.get('latitude')?.value }}, {{ form.get('longitude')?.value }}\n          </span>\n        }\n      </div>\n\n      <div class=\"flex flex-col gap-2\">\n        <label class=\"text-sm text-white/80\">Latitud</label>\n        <input\n          type=\"number\"\n          class=\"w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/35 outline-none transition focus:border-red-500/40 focus:ring-2 focus:ring-red-500/40\"\n          formControlName=\"latitude\"\n        />\n      </div>\n\n      <div class=\"flex flex-col gap-2\">\n        <label class=\"text-sm text-white/80\">Longitud</label>\n        <input\n          type=\"number\"\n          class=\"w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/35 outline-none transition focus:border-red-500/40 focus:ring-2 focus:ring-red-500/40\"\n          formControlName=\"longitude\"\n        />\n      </div>\n\n      <hr class=\"md:col-span-2 border-white/10 my-2\" />\n\n      <!-- Foto de perfil -->\n      <h4 class=\"md:col-span-2 text-lg font-semibold tracking-wide text-white/90\">\n        Foto de perfil (obligatoria)\n      </h4>\n\n      <div class=\"md:col-span-2 flex flex-col gap-2\">\n        <label class=\"text-sm text-white/80\">Subir foto de perfil</label>\n        <input\n          class=\"w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white file:mr-4 file:rounded-lg file:border-0 file:bg-red-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-red-500 transition\"\n          type=\"file\"\n          accept=\"image/*\"\n          (change)=\"onProfileImageSelected($event)\"\n        />\n\n        @if (profileImage) {\n          <small class=\"text-sm text-white/60\">{{ profileImage.name }}</small>\n        }\n      </div>\n\n      <hr class=\"md:col-span-2 border-white/10 my-2\" />\n\n      <!-- Galer\u00EDa (opcional) -->\n      <h4 class=\"md:col-span-2 text-lg font-semibold tracking-wide text-white/90\">\n        Galer\u00EDa (opcional)\n      </h4>\n\n      <div class=\"md:col-span-2 flex flex-col gap-2\">\n        <label class=\"text-sm text-white/80\">Subir im\u00E1genes para la galer\u00EDa (puedes seleccionar varias)</label>\n\n        <div class=\"flex flex-col sm:flex-row gap-3\">\n          <input\n            #galleryInput\n            class=\"w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white file:mr-4 file:rounded-lg file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-white/15 transition\"\n            type=\"file\"\n            accept=\"image/*\"\n            multiple\n            (change)=\"onMotelImagesSelected($event)\"\n          />\n\n          <button\n            type=\"button\"\n            class=\"inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition disabled:opacity-50\"\n            [disabled]=\"!motelImages.length || loading\"\n            (click)=\"clearGallery(galleryInput)\"\n          >\n            Limpiar\n          </button>\n        </div>\n\n        @if (motelImages.length) {\n          <div class=\"mt-2 rounded-xl border border-white/10 bg-black/20 p-3\">\n            <div class=\"text-sm text-white/70 mb-2\">\n              Seleccionadas: <b>{{ motelImages.length }}</b>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-2\">\n              @for (img of motelImages; track img.name; let i = $index) {\n                <div class=\"flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2\">\n                  <span class=\"text-sm text-white/70 truncate\">{{ img.name }}</span>\n                  <button\n                    type=\"button\"\n                    class=\"text-xs px-3 py-1 rounded-lg bg-red-600/80 hover:bg-red-600 transition\"\n                    [disabled]=\"loading\"\n                    (click)=\"removeMotelImage(i)\"\n                  >\n                    Quitar\n                  </button>\n                </div>\n              }\n            </div>\n          </div>\n        }\n      </div>\n\n      <hr class=\"md:col-span-2 border-white/10 my-2\" />\n\n      <!-- Documentos RNT / RUES -->\n      <h4 class=\"md:col-span-2 text-lg font-semibold tracking-wide text-white/90\">\n        Documentos (RNT / RUES)\n      </h4>\n\n      <div class=\"flex flex-col gap-2\">\n        <label class=\"text-sm text-white/80\">RNT (imagen)</label>\n        <input\n          class=\"w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white file:mr-4 file:rounded-lg file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-white/15 transition\"\n          type=\"file\"\n          accept=\"image/*\"\n          (change)=\"onRntSelected($event)\"\n        />\n        @if (rntFile) {\n          <small class=\"text-sm text-white/60\">{{ rntFile.name }}</small>\n        }\n      </div>\n\n      <div class=\"flex flex-col gap-2\">\n        <label class=\"text-sm text-white/80\">RUES (imagen)</label>\n        <input\n          class=\"w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white file:mr-4 file:rounded-lg file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-white/15 transition\"\n          type=\"file\"\n          accept=\"image/*\"\n          (change)=\"onRuesSelected($event)\"\n        />\n        @if (ruesFile) {\n          <small class=\"text-sm text-white/60\">{{ ruesFile.name }}</small>\n        }\n      </div>\n\n      <div class=\"md:col-span-2 flex flex-col gap-2\">\n        <label class=\"text-sm text-white/80\">Documento legal (opcional)</label>\n        <input\n          class=\"w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white file:mr-4 file:rounded-lg file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-white/15 transition\"\n          type=\"file\"\n          accept=\"image/*,application/pdf\"\n          (change)=\"onLegalDocSelected($event)\"\n        />\n        @if (legalDocumentFile) {\n          <small class=\"text-sm text-white/60\">{{ legalDocumentFile.name }}</small>\n        }\n      </div>\n\n      <hr class=\"md:col-span-2 border-white/10 my-2\" />\n\n      <!-- Propietario -->\n      <h4 class=\"md:col-span-2 text-lg font-semibold tracking-wide text-white/90\">\n        Propietario\n      </h4>\n\n      <div class=\"flex flex-col gap-2\">\n        <label class=\"text-sm text-white/80\">Tipo documento</label>\n        <select\n          class=\"w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white outline-none transition focus:border-red-500/40 focus:ring-2 focus:ring-red-500/40\"\n          formControlName=\"ownerDocumentType\"\n        >\n          @for (t of documentTypes; track t) {\n            <option [value]=\"t\">{{ t }}</option>\n          }\n        </select>\n      </div>\n\n      <div class=\"flex flex-col gap-2\">\n        <label class=\"text-sm text-white/80\">N\u00FAmero documento</label>\n        <input\n          class=\"w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/35 outline-none transition focus:border-red-500/40 focus:ring-2 focus:ring-red-500/40\"\n          formControlName=\"ownerDocumentNumber\"\n        />\n      </div>\n\n      <div class=\"flex flex-col gap-2\">\n        <label class=\"text-sm text-white/80\">Nombre propietario</label>\n        <input\n          class=\"w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/35 outline-none transition focus:border-red-500/40 focus:ring-2 focus:ring-red-500/40\"\n          formControlName=\"ownerFullName\"\n        />\n      </div>\n\n      <div class=\"md:col-span-2 flex flex-col gap-2\">\n        <label class=\"text-sm text-white/80\">Representante legal (opcional)</label>\n        <input\n          class=\"w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/35 outline-none transition focus:border-red-500/40 focus:ring-2 focus:ring-red-500/40\"\n          formControlName=\"legalRepresentativeName\"\n        />\n      </div>\n\n      <div class=\"md:col-span-2 flex gap-3 mt-2\">\n        <button\n          class=\"flex-1 inline-flex items-center justify-center rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-500 active:scale-[0.99] transition disabled:opacity-50 disabled:cursor-not-allowed\"\n          type=\"submit\"\n          [disabled]=\"loading || form.invalid\"\n        >\n          @if (loading) {\n            <span\n              class=\"mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white\"\n            ></span>\n            Creando...\n          } @else {\n            Crear motel\n          }\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.NonNullableFormBuilder }, { type: i2.MotelService }, { type: i3.CloudinaryService }, { type: i4.AuthService }, { type: i5.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CreateMotelComponent, { className: "CreateMotelComponent", filePath: "src/app/views/Forms/create-motel/components/create-motel.component.ts", lineNumber: 24 }); })();
