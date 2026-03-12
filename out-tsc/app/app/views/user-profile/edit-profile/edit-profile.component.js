import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap, take, tap, catchError, of, finalize } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { UsersService } from '../../../core/services/user.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
function EditProfileComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6);
    i0.ɵɵelement(2, "div", 7)(3, "div", 8);
    i0.ɵɵelementStart(4, "div", 9)(5, "div", 10);
    i0.ɵɵelement(6, "div", 11)(7, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 10);
    i0.ɵɵelement(9, "div", 11)(10, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 10);
    i0.ɵɵelement(12, "div", 11)(13, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 10);
    i0.ɵɵelement(15, "div", 13)(16, "div", 12);
    i0.ɵɵelementEnd()()()();
} }
function EditProfileComponent_Conditional_9_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 55);
    i0.ɵɵelement(2, "div", 56);
    i0.ɵɵelementStart(3, "div")(4, "p", 57);
    i0.ɵɵtext(5, "Ocurri\u00F3 un problema");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 58);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.errorMsg);
} }
function EditProfileComponent_Conditional_9_Conditional_15_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " El username es requerido. ");
} }
function EditProfileComponent_Conditional_9_Conditional_15_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " M\u00EDnimo 3 caracteres. ");
} }
function EditProfileComponent_Conditional_9_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵconditionalCreate(1, EditProfileComponent_Conditional_9_Conditional_15_Conditional_1_Template, 1, 0);
    i0.ɵɵconditionalCreate(2, EditProfileComponent_Conditional_9_Conditional_15_Conditional_2_Template, 1, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const c_r3 = i0.ɵɵreadContextLet(1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((c_r3.username.errors == null ? null : c_r3.username.errors["required"]) ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((c_r3.username.errors == null ? null : c_r3.username.errors["minlength"]) ? 2 : -1);
} }
function EditProfileComponent_Conditional_9_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 26);
    i0.ɵɵtext(1, "Ej: ubikapp3");
    i0.ɵɵelementEnd();
} }
function EditProfileComponent_Conditional_9_Conditional_21_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " El email es requerido. ");
} }
function EditProfileComponent_Conditional_9_Conditional_21_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Formato de email inv\u00E1lido. ");
} }
function EditProfileComponent_Conditional_9_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵconditionalCreate(1, EditProfileComponent_Conditional_9_Conditional_21_Conditional_1_Template, 1, 0);
    i0.ɵɵconditionalCreate(2, EditProfileComponent_Conditional_9_Conditional_21_Conditional_2_Template, 1, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const c_r3 = i0.ɵɵreadContextLet(1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((c_r3.email.errors == null ? null : c_r3.email.errors["required"]) ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((c_r3.email.errors == null ? null : c_r3.email.errors["email"]) ? 2 : -1);
} }
function EditProfileComponent_Conditional_9_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 26);
    i0.ɵɵtext(1, "Debe ser un correo v\u00E1lido.");
    i0.ɵɵelementEnd();
} }
function EditProfileComponent_Conditional_9_Conditional_67_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 59);
    i0.ɵɵtext(1, " Eliminando\u2026 ");
} }
function EditProfileComponent_Conditional_9_Conditional_68_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Eliminar perfil ");
} }
function EditProfileComponent_Conditional_9_Conditional_73_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 60);
    i0.ɵɵtext(1, " Guardando\u2026 ");
} }
function EditProfileComponent_Conditional_9_Conditional_74_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Guardar cambios ");
} }
function EditProfileComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵconditionalCreate(0, EditProfileComponent_Conditional_9_Conditional_0_Template, 8, 1, "div", 14);
    i0.ɵɵdeclareLet(1);
    i0.ɵɵelementStart(2, "form", 15);
    i0.ɵɵlistener("ngSubmit", function EditProfileComponent_Conditional_9_Template_form_ngSubmit_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSave()); });
    i0.ɵɵelementStart(3, "div", 16)(4, "div", 17)(5, "h2", 18);
    i0.ɵɵtext(6, " Informaci\u00F3n b\u00E1sica ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 19);
    i0.ɵɵtext(8, " Estos datos se reflejan en tu perfil. ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 20)(10, "div", 21)(11, "div", 22)(12, "label", 23);
    i0.ɵɵtext(13, " Username ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(14, "input", 24);
    i0.ɵɵconditionalCreate(15, EditProfileComponent_Conditional_9_Conditional_15_Template, 3, 2, "p", 25)(16, EditProfileComponent_Conditional_9_Conditional_16_Template, 2, 0, "p", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 22)(18, "label", 27);
    i0.ɵɵtext(19, " Email ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(20, "input", 28);
    i0.ɵɵconditionalCreate(21, EditProfileComponent_Conditional_9_Conditional_21_Template, 3, 2, "p", 25)(22, EditProfileComponent_Conditional_9_Conditional_22_Template, 2, 0, "p", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 22)(24, "label", 29);
    i0.ɵɵtext(25, " Tel\u00E9fono ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(26, "input", 30);
    i0.ɵɵelementStart(27, "p", 26);
    i0.ɵɵtext(28, "Opcional.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 22)(30, "label", 31);
    i0.ɵɵtext(31, " Fecha de nacimiento ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "input", 32);
    i0.ɵɵpipe(33, "date");
    i0.ɵɵlistener("change", function EditProfileComponent_Conditional_9_Template_input_change_32_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onBirthDateChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "p", 26);
    i0.ɵɵtext(35, "Opcional.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "div", 33)(37, "div", 34)(38, "div")(39, "p", 35);
    i0.ɵɵtext(40, "Perfil an\u00F3nimo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "p", 36);
    i0.ɵɵtext(42, " Oculta tu identidad en secciones p\u00FAblicas (si aplica). ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(43, "label", 37);
    i0.ɵɵelement(44, "input", 38)(45, "div", 39)(46, "div", 40);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(47, "div", 33)(48, "div", 41)(49, "div", 42)(50, "div")(51, "p", 43);
    i0.ɵɵtext(52, "Ubicaci\u00F3n");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "p", 44);
    i0.ɵɵtext(54, " Si tu app lo usa, puedes guardar longitud/latitud manualmente. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(55, "span", 45);
    i0.ɵɵtext(56, " Opcional ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(57, "div", 46)(58, "div")(59, "label", 47);
    i0.ɵɵtext(60, " Longitud ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(61, "input", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "div")(63, "label", 49);
    i0.ɵɵtext(64, " Latitud ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(65, "input", 50);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(66, "button", 51);
    i0.ɵɵlistener("click", function EditProfileComponent_Conditional_9_Template_button_click_66_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onDeleteProfile()); });
    i0.ɵɵconditionalCreate(67, EditProfileComponent_Conditional_9_Conditional_67_Template, 2, 0)(68, EditProfileComponent_Conditional_9_Conditional_68_Template, 1, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "div", 52)(70, "button", 53);
    i0.ɵɵlistener("click", function EditProfileComponent_Conditional_9_Template_button_click_70_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onCancel()); });
    i0.ɵɵtext(71, " Cancelar ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "button", 54);
    i0.ɵɵconditionalCreate(73, EditProfileComponent_Conditional_9_Conditional_73_Template, 2, 0)(74, EditProfileComponent_Conditional_9_Conditional_74_Template, 1, 0);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r1.errorMsg ? 0 : -1);
    i0.ɵɵadvance();
    const c_r4 = i0.ɵɵstoreLet(ctx_r1.form.controls);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r1.form);
    i0.ɵɵadvance(12);
    i0.ɵɵclassProp("border-red-300", c_r4.username.touched && c_r4.username.invalid)("focus:ring-red-100", c_r4.username.touched && c_r4.username.invalid);
    i0.ɵɵadvance();
    i0.ɵɵconditional(c_r4.username.touched && c_r4.username.invalid ? 15 : 16);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("border-red-300", c_r4.email.touched && c_r4.email.invalid)("focus:ring-red-100", c_r4.email.touched && c_r4.email.invalid);
    i0.ɵɵadvance();
    i0.ɵɵconditional(c_r4.email.touched && c_r4.email.invalid ? 21 : 22);
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("value", ctx_r1.form.value.birthDate ? i0.ɵɵpipeBind2(33, 19, ctx_r1.form.value.birthDate, "yyyy-MM-dd") : "");
    i0.ɵɵadvance(34);
    i0.ɵɵproperty("disabled", ctx_r1.saving || ctx_r1.deleting);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.deleting ? 67 : 68);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.saving);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.saving || ctx_r1.form.invalid);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.saving ? 73 : 74);
} }
export class EditProfileComponent {
    fb = inject(FormBuilder);
    usersService = inject(UsersService);
    router = inject(Router);
    cdr = inject(ChangeDetectorRef);
    AuthService = inject(AuthService);
    loading = true;
    saving = false;
    errorMsg = null;
    deleting = false;
    // Form (sin password ni roleId)
    form = this.fb.nonNullable.group({
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: [''],
        anonymous: [false],
        birthDate: [null],
        longitude: [null],
        latitude: [null],
    });
    // Para usar en template si quieres mostrar datos actuales
    profile = null;
    constructor() {
        // Precarga: si hay cache úsalo; si no, loadProfile()
        this.usersService.profile$
            .pipe(take(1), switchMap((p) => (p ? of(p) : this.usersService.loadProfile().pipe(take(1)))), tap((p) => {
            this.profile = p;
            this.patchForm(p);
            this.loading = false;
        }), catchError((err) => {
            this.loading = false;
            this.errorMsg = 'No se pudo cargar el perfil.';
            return of(null);
        }))
            .subscribe();
    }
    patchForm(p) {
        // Ojo: birthDate a veces viene string del backend
        const birth = p.birthDate ? new Date(p.birthDate) : null;
        this.form.patchValue({
            username: p.username ?? '',
            email: p.email ?? '',
            phoneNumber: p.phoneNumber ?? '',
            anonymous: !!p.anonymous,
            birthDate: birth,
            longitude: p.longitude ?? null,
            latitude: p.latitude ?? null,
        });
    }
    get f() {
        return this.form.controls;
    }
    onSave() {
        this.errorMsg = null;
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.saving = true;
        const dto = {
            username: this.form.value.username,
            email: this.form.value.email,
            phoneNumber: this.form.value.phoneNumber || '',
            anonymous: !!this.form.value.anonymous,
            birthDate: this.form.value.birthDate ?? null,
            longitude: this.form.value.longitude ?? null,
            latitude: this.form.value.latitude ?? null,
        };
        this.usersService
            .updateProfile(dto)
            .pipe(take(1), finalize(() => {
            this.saving = false;
            this.cdr.markForCheck(); // 🔥 importante si estás zoneless/OnPush estricto
        }), tap(() => {
            this.router.navigate(['/userProfile']);
        }), catchError(() => {
            this.errorMsg = 'No se pudo guardar. Intenta de nuevo.';
            return of(null);
        }))
            .subscribe();
    }
    onBirthDateChange(event) {
        const input = event.target;
        this.form.patchValue({ birthDate: input.valueAsDate });
    }
    onDeleteProfile() {
        this.errorMsg = null;
        const ok = confirm('¿Seguro que deseas eliminar tu perfil? Esta acción no se puede deshacer.');
        if (!ok)
            return;
        this.deleting = true;
        this.usersService
            .deleteProfile()
            .pipe(take(1), finalize(() => {
            this.deleting = false;
            this.cdr.markForCheck();
        }), catchError((err) => {
            console.error('Error delete profile', err);
            this.errorMsg = 'No se pudo eliminar el perfil.';
            return of(null);
        }))
            .subscribe((res) => {
            if (res === null)
                return;
            // ✅ limpia cache del perfil en el front
            this.usersService.clearProfile();
            this.AuthService.logout();
            this.router.navigate(['/login']);
        });
    }
    onCancel() {
        this.router.navigate(['/profile']);
    }
    static ɵfac = function EditProfileComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EditProfileComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EditProfileComponent, selectors: [["app-edit-profile"]], decls: 10, vars: 1, consts: [[1, "mx-auto", "w-full", "max-w-5xl", "px-4", "py-6", "sm:py-10"], [1, "flex", "flex-col", "gap-4", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-white"], [1, "mt-1", "text-sm", "text-white"], [1, "mt-6", "space-y-4"], [1, "rounded-2xl", "border", "border-slate-200", "bg-white", "p-5", "shadow-sm"], [1, "animate-pulse", "space-y-4"], [1, "h-5", "w-40", "rounded", "bg-slate-200"], [1, "h-4", "w-72", "rounded", "bg-slate-200"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2"], [1, "space-y-2"], [1, "h-3", "w-20", "rounded", "bg-slate-200"], [1, "h-10", "w-full", "rounded-xl", "bg-slate-200"], [1, "h-3", "w-24", "rounded", "bg-slate-200"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-red-800"], ["id", "editProfileForm", "novalidate", "", 1, "border", "bg-white/10", "backdrop-blur-md", "rounded-2xl", "p-8", "border-white/20", "shadow-sm", 3, "ngSubmit", "formGroup"], [1, "border-b", "border-slate-100", "p-5", "sm:p-6"], [1, "flex", "flex-col", "gap-1"], [1, "text-base", "font-semibold", "text-white"], [1, "text-sm", "text-white"], [1, "p-5", "sm:p-6"], [1, "grid", "grid-cols-1", "gap-5", "sm:grid-cols-2"], [1, "sm:col-span-1"], ["for", "username", 1, "text-sm", "font-medium", "text-white"], ["id", "username", "type", "text", "formControlName", "username", "autocomplete", "username", 1, "mt-2", "w-full", "rounded-xl", "border", "border-slate-200", "bg-white", "px-3", "py-2.5", "text-sm", "text-black", "shadow-sm", "outline-none", "transition", "focus:border-slate-400", "focus:ring-2", "focus:ring-slate-200"], [1, "mt-2", "text-xs", "text-red-600"], [1, "mt-2", "text-xs", "text-white"], ["for", "email", 1, "text-sm", "font-medium", "text-white"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", 1, "mt-2", "w-full", "rounded-xl", "border", "border-slate-200", "bg-white", "px-3", "py-2.5", "text-sm", "text-black", "shadow-sm", "outline-none", "transition", "focus:border-slate-400", "focus:ring-2", "focus:ring-slate-200"], ["for", "phoneNumber", 1, "text-sm", "font-medium", "text-white"], ["id", "phoneNumber", "type", "tel", "formControlName", "phoneNumber", "autocomplete", "tel", 1, "mt-2", "w-full", "rounded-xl", "border", "border-slate-200", "bg-white", "px-3", "py-2.5", "text-sm", "text-black", "shadow-sm", "outline-none", "transition", "focus:border-slate-400", "focus:ring-2", "focus:ring-slate-200"], ["for", "birthDate", 1, "text-sm", "font-medium", "text-white"], ["id", "birthDate", "type", "date", 1, "mt-2", "w-full", "rounded-xl", "border", "border-slate-200", "bg-white", "px-3", "py-2.5", "text-sm", "text-black", "shadow-sm", "outline-none", "transition", "focus:border-slate-400", "focus:ring-2", "focus:ring-slate-200", 3, "change", "value"], [1, "sm:col-span-2"], [1, "flex", "items-center", "justify-between", "rounded-2xl", "border", "border-slate-200", "bg-slate-50", "px-4", "py-3"], [1, "text-sm", "font-medium", "text-black"], [1, "text-xs", "text-black"], [1, "relative", "inline-flex", "cursor-pointer", "items-center"], ["type", "checkbox", "formControlName", "anonymous", 1, "peer", "sr-only"], [1, "h-6", "w-11", "rounded-full", "bg-slate-300", "transition", "peer-checked:bg-slate-900", "peer-focus:outline-none", "peer-focus:ring-2", "peer-focus:ring-slate-200"], [1, "pointer-events-none", "absolute", "left-1", "top-1", "h-4", "w-4", "rounded-full", "bg-white", "transition", "peer-checked:translate-x-5"], [1, "rounded-2xl", "border", "border-slate-200", "bg-white", "p-4"], [1, "flex", "items-start", "justify-between", "gap-4"], [1, "text-sm", "font-semibold", "text-black"], [1, "mt-1", "text-xs", "text-slate-500"], [1, "rounded-full", "bg-slate-100", "px-2", "py-1", "text-xs", "font-medium", "text-slate-700"], [1, "mt-4", "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2"], ["for", "longitude", 1, "text-sm", "font-medium", "text-black"], ["id", "longitude", "type", "number", "step", "any", "formControlName", "longitude", 1, "mt-2", "w-full", "rounded-xl", "border", "border-slate-200", "bg-white", "px-3", "py-2.5", "text-sm", "text-black", "shadow-sm", "outline-none", "transition", "focus:border-slate-400", "focus:ring-2", "focus:ring-slate-200"], ["for", "latitude", 1, "text-sm", "font-medium", "text-black"], ["id", "latitude", "type", "number", "step", "any", "formControlName", "latitude", 1, "mt-2", "w-full", "rounded-xl", "border", "border-slate-200", "bg-white", "px-3", "py-2.5", "text-sm", "text-black", "shadow-sm", "outline-none", "transition", "focus:border-slate-400", "focus:ring-2", "focus:ring-slate-200"], ["type", "button", 1, "mt-2", "w-full", "rounded-xl", "px-3", "py-2.5", "text-sm", "text-white", "shadow-sm", "outline-none", "transition", "bg-linear-to-r", "from-[#6E2A35]", "to-[#A72027]", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "mt-6", "flex", "flex-col-reverse", "gap-2", "sm:flex-row", "sm:justify-end"], ["type", "button", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-slate-200", "bg-white", "px-4", "py-2", "text-sm", "font-medium", "text-black", "shadow-sm", "transition", "hover:bg-slate-50", "disabled:cursor-not-allowed", "disabled:opacity-50", 3, "click", "disabled"], ["type", "submit", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "bg-slate-900", "px-4", "py-2", "text-sm", "font-medium", "text-white", "shadow-sm", "transition", "hover:bg-slate-800", "disabled:cursor-not-allowed", "disabled:opacity-50", 3, "disabled"], [1, "flex", "items-start", "gap-3"], [1, "mt-0.5", "h-5", "w-5", "rounded-full", "bg-red-600"], [1, "text-sm", "font-semibold"], [1, "mt-1", "text-sm", "text-red-700"], [1, "mt-2", "inline-block", "h-4", "w-1", "animate-spin", "rounded-full", "border-2", "border-black/30", "border-t-black"], [1, "mr-2", "inline-block", "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-white/30", "border-t-white"]], template: function EditProfileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, " Editar perfil ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6, " Actualiza tu informaci\u00F3n p\u00FAblica y de contacto. ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(7, "div", 4);
            i0.ɵɵconditionalCreate(8, EditProfileComponent_Conditional_8_Template, 17, 0, "div", 5)(9, EditProfileComponent_Conditional_9_Template, 75, 22);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵconditional(ctx.loading ? 8 : 9);
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i2.DatePipe], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EditProfileComponent, [{
        type: Component,
        args: [{ selector: 'app-edit-profile', standalone: true, imports: [CommonModule, ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"mx-auto w-full max-w-5xl px-4 py-6 sm:py-10\">\n  <!-- Header -->\n  <div class=\"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between\">\n    <div>\n      <h1 class=\"text-2xl font-semibold tracking-tight text-white\">\n        Editar perfil\n      </h1>\n      <p class=\"mt-1 text-sm text-white\">\n        Actualiza tu informaci\u00F3n p\u00FAblica y de contacto.\n      </p>\n    </div>\n\n  </div>\n\n  <div class=\"mt-6 space-y-4\">\n    <!-- Loading skeleton -->\n    @if (loading) {\n      <div class=\"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm\">\n        <div class=\"animate-pulse space-y-4\">\n          <div class=\"h-5 w-40 rounded bg-slate-200\"></div>\n          <div class=\"h-4 w-72 rounded bg-slate-200\"></div>\n\n          <div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2\">\n            <div class=\"space-y-2\">\n              <div class=\"h-3 w-20 rounded bg-slate-200\"></div>\n              <div class=\"h-10 w-full rounded-xl bg-slate-200\"></div>\n            </div>\n            <div class=\"space-y-2\">\n              <div class=\"h-3 w-20 rounded bg-slate-200\"></div>\n              <div class=\"h-10 w-full rounded-xl bg-slate-200\"></div>\n            </div>\n            <div class=\"space-y-2\">\n              <div class=\"h-3 w-20 rounded bg-slate-200\"></div>\n              <div class=\"h-10 w-full rounded-xl bg-slate-200\"></div>\n            </div>\n            <div class=\"space-y-2\">\n              <div class=\"h-3 w-24 rounded bg-slate-200\"></div>\n              <div class=\"h-10 w-full rounded-xl bg-slate-200\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    } @else {\n      <!-- Error alert -->\n      @if (errorMsg) {\n        <div class=\"rounded-2xl border border-red-200 bg-red-50 p-4 text-red-800\">\n          <div class=\"flex items-start gap-3\">\n            <div class=\"mt-0.5 h-5 w-5 rounded-full bg-red-600\"></div>\n            <div>\n              <p class=\"text-sm font-semibold\">Ocurri\u00F3 un problema</p>\n              <p class=\"mt-1 text-sm text-red-700\">{{ errorMsg }}</p>\n            </div>\n          </div>\n        </div>\n      }\n\n      @let c = form.controls;\n\n      <!-- Form card -->\n      <form\n        id=\"editProfileForm\"\n        class=\"border bg-white/10 backdrop-blur-md rounded-2xl p-8 border-white/20 shadow-sm\"\n        [formGroup]=\"form\"\n        (ngSubmit)=\"onSave()\"\n        novalidate\n      >\n        <!-- Card header -->\n        <div class=\"border-b border-slate-100 p-5 sm:p-6\">\n          <div class=\"flex flex-col gap-1\">\n            <h2 class=\"text-base font-semibold text-white\">\n              Informaci\u00F3n b\u00E1sica\n            </h2>\n            <p class=\"text-sm text-white\">\n              Estos datos se reflejan en tu perfil.\n            </p>\n          </div>\n        </div>\n\n        <!-- Card body -->\n        <div class=\"p-5 sm:p-6\">\n          <div class=\"grid grid-cols-1 gap-5 sm:grid-cols-2\">\n            <!-- Username -->\n            <div class=\"sm:col-span-1\">\n              <label for=\"username\" class=\"text-sm font-medium text-white\">\n                Username\n              </label>\n              <input\n                id=\"username\"\n                type=\"text\"\n                formControlName=\"username\"\n                autocomplete=\"username\"\n                class=\"mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-black shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200\"\n                [class.border-red-300]=\"c.username.touched && c.username.invalid\"\n                [class.focus:ring-red-100]=\"c.username.touched && c.username.invalid\"\n              />\n              @if (c.username.touched && c.username.invalid) {\n                <p class=\"mt-2 text-xs text-red-600\">\n                  @if (c.username.errors?.['required']) { El username es requerido. }\n                  @if (c.username.errors?.['minlength']) { M\u00EDnimo 3 caracteres. }\n                </p>\n              } @else {\n                <p class=\"mt-2 text-xs text-white\">Ej: ubikapp3</p>\n              }\n            </div>\n\n            <!-- Email -->\n            <div class=\"sm:col-span-1\">\n              <label for=\"email\" class=\"text-sm font-medium text-white\">\n                Email\n              </label>\n              <input\n                id=\"email\"\n                type=\"email\"\n                formControlName=\"email\"\n                autocomplete=\"email\"\n                class=\"mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-black shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200\"\n                [class.border-red-300]=\"c.email.touched && c.email.invalid\"\n                [class.focus:ring-red-100]=\"c.email.touched && c.email.invalid\"\n              />\n              @if (c.email.touched && c.email.invalid) {\n                <p class=\"mt-2 text-xs text-red-600\">\n                  @if (c.email.errors?.['required']) { El email es requerido. }\n                  @if (c.email.errors?.['email']) { Formato de email inv\u00E1lido. }\n                </p>\n              } @else {\n                <p class=\"mt-2 text-xs text-white\">Debe ser un correo v\u00E1lido.</p>\n              }\n            </div>\n\n            <!-- Phone -->\n            <div class=\"sm:col-span-1\">\n              <label for=\"phoneNumber\" class=\"text-sm font-medium text-white\">\n                Tel\u00E9fono\n              </label>\n              <input\n                id=\"phoneNumber\"\n                type=\"tel\"\n                formControlName=\"phoneNumber\"\n                autocomplete=\"tel\"\n                class=\"mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-black shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200\"\n              />\n              <p class=\"mt-2 text-xs text-white\">Opcional.</p>\n            </div>\n\n            <!-- Birth date -->\n            <div class=\"sm:col-span-1\">\n              <label for=\"birthDate\" class=\"text-sm font-medium text-white\">\n                Fecha de nacimiento\n              </label>\n\n              <!-- Manejo de Date con input date (string yyyy-MM-dd) -->\n              <input\n                id=\"birthDate\"\n                type=\"date\"\n                class=\"mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-black shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200\"\n                [value]=\"form.value.birthDate ? (form.value.birthDate | date:'yyyy-MM-dd') : ''\"\n                (change)=\"onBirthDateChange($event)\"\n              />\n              <p class=\"mt-2 text-xs text-white\">Opcional.</p>\n            </div>\n\n            <!-- Anonymous toggle -->\n            <div class=\"sm:col-span-2\">\n              <div class=\"flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3\">\n                <div>\n                  <p class=\"text-sm font-medium text-black\">Perfil an\u00F3nimo</p>\n                  <p class=\"text-xs text-black\">\n                    Oculta tu identidad en secciones p\u00FAblicas (si aplica).\n                  </p>\n                </div>\n\n                <label class=\"relative inline-flex cursor-pointer items-center\">\n                  <input\n                    type=\"checkbox\"\n                    class=\"peer sr-only\"\n                    formControlName=\"anonymous\"\n                  />\n                  <div\n                    class=\"h-6 w-11 rounded-full bg-slate-300 transition peer-checked:bg-slate-900 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-slate-200\"\n                  ></div>\n                  <div\n                    class=\"pointer-events-none absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5\"\n                  ></div>\n                </label>\n              </div>\n            </div>\n\n            <!-- Location -->\n            <div class=\"sm:col-span-2\">\n              <div class=\"rounded-2xl border border-slate-200 bg-white p-4\">\n                <div class=\"flex items-start justify-between gap-4\">\n                  <div>\n                    <p class=\"text-sm font-semibold text-black\">Ubicaci\u00F3n</p>\n                    <p class=\"mt-1 text-xs text-slate-500\">\n                      Si tu app lo usa, puedes guardar longitud/latitud manualmente.\n                    </p>\n                  </div>\n                  <span class=\"rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700\">\n                    Opcional\n                  </span>\n                </div>\n\n                <div class=\"mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2\">\n                  <div>\n                    <label for=\"longitude\" class=\"text-sm font-medium text-black\">\n                      Longitud\n                    </label>\n                    <input\n                      id=\"longitude\"\n                      type=\"number\"\n                      step=\"any\"\n                      formControlName=\"longitude\"\n                      class=\"mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-black shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200\"\n                    />\n                  </div>\n\n                  <div>\n                    <label for=\"latitude\" class=\"text-sm font-medium text-black\">\n                      Latitud\n                    </label>\n                    <input\n                      id=\"latitude\"\n                      type=\"number\"\n                      step=\"any\"\n                      formControlName=\"latitude\"\n                      class=\"mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-black shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200\"\n                    />\n                  </div>\n\n                  \n                </div>\n                \n              </div>\n            </div>\n            \n            </div>\n            <button\n                type=\"button\"\n                class=\"inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50\"\n                class=\"mt-2 w-full rounded-xl px-3 py-2.5 text-sm text-white shadow-sm outline-none transition bg-linear-to-r from-[#6E2A35] to-[#A72027] disabled:opacity-50 disabled:cursor-not-allowed\"\n                (click)=\"onDeleteProfile()\"\n                [disabled]=\"saving || deleting\"\n              >\n                @if (deleting) {\n                  <span class=\"mt-2 inline-block h-4 w-1 animate-spin rounded-full border-2 border-black/30 border-t-black\"></span>\n                  Eliminando\u2026\n                } @else {\n                  Eliminar perfil\n                }\n              </button>\n            \n\n          <!-- Footer actions (mobile-friendly) -->\n          <div class=\"mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end\">\n            <button\n              type=\"button\"\n              class=\"inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-black shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50\"\n              (click)=\"onCancel()\"\n              [disabled]=\"saving\"\n            >\n              Cancelar\n            </button>\n\n            <button\n              type=\"submit\"\n              class=\"inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50\"\n              [disabled]=\"saving || form.invalid\"\n            >\n              @if (saving) {\n                <span class=\"mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white\"></span>\n                Guardando\u2026\n              } @else {\n                Guardar cambios\n              }\n            </button>\n          </div>\n        </div>\n      </form>\n    }\n  </div>\n</section>" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EditProfileComponent, { className: "EditProfileComponent", filePath: "src/app/views/user-profile/edit-profile/edit-profile.component.ts", lineNumber: 18 }); })();
