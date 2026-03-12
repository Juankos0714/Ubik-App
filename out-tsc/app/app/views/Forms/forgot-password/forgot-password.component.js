import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { toValidatorFn, validateEmail, validatePassword } from '../../../core/utils/validation.utils';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/forgot.service";
import * as i2 from "@angular/forms";
function ForgotPasswordComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "div");
    i0.ɵɵelement(2, "input", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 6);
    i0.ɵɵlistener("click", function ForgotPasswordComponent_Conditional_5_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.sendEmail()); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.loading());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.loading() ? "Enviando..." : "Enviar codigo", " ");
} }
function ForgotPasswordComponent_Conditional_6_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1, "El token es obligatorio.");
    i0.ɵɵelementEnd();
} }
function ForgotPasswordComponent_Conditional_6_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1, "La contrase\u00F1a no cumple los requisitos.");
    i0.ɵɵelementEnd();
} }
function ForgotPasswordComponent_Conditional_6_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function ForgotPasswordComponent_Conditional_6_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.success());
} }
function ForgotPasswordComponent_Conditional_6_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function ForgotPasswordComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "input", 7);
    i0.ɵɵconditionalCreate(2, ForgotPasswordComponent_Conditional_6_Conditional_2_Template, 2, 0, "p", 8);
    i0.ɵɵelement(3, "input", 9);
    i0.ɵɵconditionalCreate(4, ForgotPasswordComponent_Conditional_6_Conditional_4_Template, 2, 0, "p", 8);
    i0.ɵɵconditionalCreate(5, ForgotPasswordComponent_Conditional_6_Conditional_5_Template, 2, 1, "p", 8);
    i0.ɵɵconditionalCreate(6, ForgotPasswordComponent_Conditional_6_Conditional_6_Template, 2, 1, "p", 10);
    i0.ɵɵconditionalCreate(7, ForgotPasswordComponent_Conditional_6_Conditional_7_Template, 2, 1, "p", 8);
    i0.ɵɵelementStart(8, "button", 6);
    i0.ɵɵlistener("click", function ForgotPasswordComponent_Conditional_6_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetPassword()); });
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.form.controls.token.touched && ctx_r1.form.controls.token.invalid ? 2 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.form.controls.newPassword.touched && ctx_r1.form.controls.newPassword.invalid ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.error() ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.success() ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.error() ? 7 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.loading());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.loading() ? "Cambiando..." : "Cambiar contrase\u00F1a", " ");
} }
export class ForgotPasswordComponent {
    forgotService;
    step = signal(1, ...(ngDevMode ? [{ debugName: "step" }] : []));
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    error = signal(null, ...(ngDevMode ? [{ debugName: "error" }] : []));
    success = signal(null, ...(ngDevMode ? [{ debugName: "success" }] : [])); // ✅ NUEVO
    fb = new FormBuilder();
    constructor(forgotService) {
        this.forgotService = forgotService;
    }
    form = this.fb.nonNullable.group({
        email: ['', [toValidatorFn(validateEmail, 'email')]],
        token: ['', [Validators.required]],
        newPassword: ['', [toValidatorFn(validatePassword, 'newPassword')]],
    });
    sendEmail() {
        const emailCtrl = this.form.controls.email;
        emailCtrl.markAsTouched();
        if (emailCtrl.invalid || this.loading())
            return;
        this.loading.set(true);
        this.error.set(null);
        this.success.set(null); // ✅ limpiar éxito
        this.forgotService.requestReset(emailCtrl.value).subscribe({
            next: (res) => {
                console.log('requestReset OK', res);
                this.step.set(2);
                this.loading.set(false);
            },
            error: (err) => {
                console.error('requestReset ERROR FULL:', err);
                this.loading.set(false);
                this.error.set('No se pudo enviar el correo');
            }
        });
    }
    resetPassword() {
        const tokenCtrl = this.form.controls.token;
        const passCtrl = this.form.controls.newPassword;
        tokenCtrl.markAsTouched();
        passCtrl.markAsTouched();
        const token = tokenCtrl.value.trim();
        const newPassword = passCtrl.value.trim();
        this.form.patchValue({ token, newPassword });
        if (tokenCtrl.invalid || passCtrl.invalid) {
            this.success.set(null);
            this.error.set('Revisa el token y la contraseña (no cumplen validación).');
            return;
        }
        if (this.loading())
            return;
        this.loading.set(true);
        this.error.set(null);
        this.success.set(null); // ✅ limpiar éxito antes de enviar
        this.forgotService.resetPassword(token, newPassword).subscribe({
            next: (res) => {
                console.log('resetPassword OK', res);
                this.loading.set(false);
                this.error.set(null);
                this.success.set('¡Listo! Tu contraseña fue cambiada. Ya puedes iniciar sesión.'); // ✅ AVISO OK
                // Opcional: limpiar campos
                // this.form.patchValue({ token: '', newPassword: '' });
            },
            error: (err) => {
                console.error('resetPassword ERROR FULL:', err);
                this.loading.set(false);
                this.success.set(null);
                this.error.set('No se pudo cambiar la contraseña. Token inválido/expirado o contraseña no válida.'); // ✅ AVISO FAIL
            }
        });
    }
    static ɵfac = function ForgotPasswordComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ForgotPasswordComponent)(i0.ɵɵdirectiveInject(i1.ForgotService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 7, vars: 3, consts: [[1, "mb-28", "mt-28", "flex", "items-center", "justify-center"], [1, "w-full", "max-w-md", "bg-white/10", "backdrop-blur-md", "rounded-2xl", "shadow-2xl", "p-8", "border", "border-white/20"], [1, "text-3xl", "font-bold", "mb-6", "tracking-wider", "text-center"], [3, "submit", "formGroup"], [1, "space-y-4", "flex", "items-center", "flex-col"], ["type", "email", "formControlName", "email", "placeholder", "Correo electr\u00F3nico", 1, "w-full", "px-3", "py-2", "rounded-lg", "bg-gray-700", "border", "border-gray-600"], ["type", "button", 1, "bg-linear-to-r", "from-[#6E2A35]", "to-[#A72027]", "text-white", "font-medium", "rounded-lg", "text-center", "hover:from-[#7E3A45]", "hover:to-[#B73037]", "transition-colors", "cursor-pointer", "flex", "items-center", "justify-between", "gap-2", "p-2.5", "text-overflow:", "ellipsis;", "text-clip", 3, "click", "disabled"], ["type", "text", "formControlName", "token", "placeholder", "Token", 1, "w-full", "px-3", "py-2", "rounded-lg", "bg-gray-700", "border", "border-gray-600"], [1, "text-red-400", "text-sm"], ["type", "password", "formControlName", "newPassword", "placeholder", "Nueva contrase\u00F1a", 1, "w-full", "px-3", "py-2", "rounded-lg", "bg-gray-700", "border", "border-gray-600"], [1, "text-green-400", "text-sm"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
            i0.ɵɵtext(3, "RECUPERAR CONTRASE\u00D1A");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "form", 3);
            i0.ɵɵlistener("submit", function ForgotPasswordComponent_Template_form_submit_4_listener($event) { return $event.preventDefault(); });
            i0.ɵɵconditionalCreate(5, ForgotPasswordComponent_Conditional_5_Template, 5, 2, "div", 4);
            i0.ɵɵconditionalCreate(6, ForgotPasswordComponent_Conditional_6_Template, 10, 7, "div", 4);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.step() === 1 ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.step() === 2 ? 6 : -1);
        } }, dependencies: [CommonModule, ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ForgotPasswordComponent, [{
        type: Component,
        args: [{ selector: 'app-forgot-password', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "\n<div class=\"mb-28 mt-28 flex items-center justify-center \">\n\n  <!-- Card -->\n  <div class=\"w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20\">\n\n    <h1 class=\"text-3xl font-bold mb-6 tracking-wider text-center\">RECUPERAR CONTRASE\u00D1A</h1>\n\n    <form [formGroup]=\"form\" (submit)=\"$event.preventDefault()\">\n\n      <!-- STEP 1 -->\n      @if (step() === 1) {\n        <div class=\"space-y-4 flex items-center flex-col \">\n          <div>\n            <input\n              type=\"email\"\n              formControlName=\"email\"\n              placeholder=\"Correo electr\u00F3nico\"\n              class=\"w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600\"\n            />\n          </div>\n\n          <button\n            type=\"button\"\n            (click)=\"sendEmail()\"\n            [disabled]=\"loading()\"\n            class=\"\n              bg-linear-to-r from-[#6E2A35] to-[#A72027]\n              text-white \n              font-medium \n              rounded-lg\n              text-center \n              hover:from-[#7E3A45]\n              hover:to-[#B73037] \n              transition-colors \n              cursor-pointer\n              flex items-center \n              justify-between \n              gap-2\n              p-2.5\n              text-overflow: ellipsis;\n              text-clip\n            \"\n          >\n            {{ loading() ? 'Enviando...' : 'Enviar codigo' }}\n          </button>\n        </div>\n      }\n\n      <!-- STEP 2 -->\n      @if (step() === 2) {\n        <div class=\"space-y-4 flex items-center flex-col\">\n\n          <input type=\"text\" formControlName=\"token\" placeholder=\"Token\"\n            class=\"w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600\" />\n\n          @if (form.controls.token.touched && form.controls.token.invalid) {\n            <p class=\"text-red-400 text-sm\">El token es obligatorio.</p>\n          }\n\n          <input type=\"password\" formControlName=\"newPassword\" placeholder=\"Nueva contrase\u00F1a\"\n            class=\"w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600\" />\n\n          @if (form.controls.newPassword.touched && form.controls.newPassword.invalid) {\n            <p class=\"text-red-400 text-sm\">La contrase\u00F1a no cumple los requisitos.</p>\n          }\n\n          @if (error()) {\n            <p class=\"text-red-400 text-sm\">{{ error() }}</p>\n          }\n\n          @if (success()) {\n            <p class=\"text-green-400 text-sm\">{{ success() }}</p>\n          }\n\n          @if (error()) {\n            <p class=\"text-red-400 text-sm\">{{ error() }}</p>\n          }\n\n\n          <button type=\"button\" (click)=\"resetPassword()\" [disabled]=\"loading()\"\n            class=\"\n              bg-linear-to-r from-[#6E2A35] to-[#A72027]\n              text-white \n              font-medium \n              rounded-lg\n              text-center \n              hover:from-[#7E3A45]\n              hover:to-[#B73037] \n              transition-colors \n              cursor-pointer\n              flex items-center \n              justify-between \n              gap-2\n              p-2.5\n              text-overflow: ellipsis;\n              text-clip\n            \">\n            {{ loading() ? 'Cambiando...' : 'Cambiar contrase\u00F1a' }}\n          </button>\n\n        </div>\n      }\n\n    </form>\n\n\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.ForgotService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/views/Forms/forgot-password/forgot-password.component.ts", lineNumber: 14 }); })();
