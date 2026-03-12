import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Inputcomponent } from '../../../components/input/input';
import { validateLoginForm } from './utils/login-validation.utils';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/login.service";
import * as i2 from "../../../core/services/auth.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/forms";
function LoginComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getFieldError("form"), " ");
} }
function LoginComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getFieldError("username"), " ");
} }
function LoginComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getFieldError("password"), " ");
} }
function LoginComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 19);
    i0.ɵɵelement(2, "circle", 20)(3, "path", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Ingresando... ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Ingresar ");
} }
export class LoginComponent {
    loginService;
    auth;
    router;
    formData = signal({
        username: '',
        password: '',
    }, ...(ngDevMode ? [{ debugName: "formData" }] : []));
    showPassword = signal(false, ...(ngDevMode ? [{ debugName: "showPassword" }] : []));
    togglePassword() {
        this.showPassword.update((v) => !v);
    }
    errors = signal([], ...(ngDevMode ? [{ debugName: "errors" }] : []));
    isSubmitting = signal(false, ...(ngDevMode ? [{ debugName: "isSubmitting" }] : []));
    rememberMe = signal(false, ...(ngDevMode ? [{ debugName: "rememberMe" }] : []));
    constructor(loginService, auth, router) {
        this.loginService = loginService;
        this.auth = auth;
        this.router = router;
    }
    /* =======================
       FORM UPDATES
       ======================= */
    updateField(field, value) {
        this.formData.set({
            ...this.formData(),
            [field]: value,
        });
    }
    onUsernameInput(event) {
        this.updateField('username', event.target.value);
    }
    onPasswordInput(event) {
        this.updateField('password', event.target.value);
    }
    onRememberMeChange(event) {
        this.rememberMe.set(event.target.checked);
    }
    /* =======================
       SUBMIT
       ======================= */
    onFormSubmit() {
        const data = this.formData();
        // ✅ 1) Validación front: llena errores por campo
        const validationErrors = validateLoginForm(data);
        this.errors.set(validationErrors);
        if (validationErrors.length > 0) {
            return;
        }
        this.isSubmitting.set(true);
        this.loginService
            .login({
            username: data.username, // ya pasó validación
            password: data.password,
        }, this.rememberMe())
            .subscribe({
            next: () => {
                this.loginService.getProfile().subscribe({
                    next: () => {
                        this.isSubmitting.set(false);
                        this.errors.set([]); // ✅ limpia errores al éxito
                        this.router.navigate(['/']);
                    },
                    error: (err) => {
                        console.error('Error cargando perfil', err);
                        this.isSubmitting.set(false);
                        this.errors.set([
                            { field: 'form', message: 'Iniciaste sesión, pero no se pudo cargar tu perfil.' },
                        ]);
                    },
                });
            },
            error: (err) => {
                console.error('Error login', err);
                this.isSubmitting.set(false);
                // ✅ 2) Error backend (fallback seguro)
                const status = err?.status;
                const apiMsg = err?.error?.message || err?.message;
                // Si tu API NO diferencia usuario/password (lo normal), muestra genérico:
                const msg = 'Credenciales incorrectas';
                this.errors.set([{ field: 'form', message: msg }]);
                // Si quieres que salga debajo de contraseña en vez de arriba:
                // this.errors.set([{ field: 'password', message: msg }]);
            },
        });
    }
    /* =======================
       ERRORS
       ======================= */
    hasFieldError(field) {
        return this.errors().some((e) => e.field === field);
    }
    getFieldError(field) {
        return this.errors().find((e) => e.field === field)?.message || null;
    }
    /* =======================
       NAVIGATION
       ======================= */
    navigateToRegister() {
        this.router.navigate(['/']);
    }
    navigateToPasswordReset() {
        this.router.navigate(['/forgot-password']); // Recuperacion de contraseña
    }
    static ɵfac = function LoginComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoginComponent)(i0.ɵɵdirectiveInject(i1.LoginService), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], decls: 26, vars: 13, consts: [[1, "mb-28", "mt-28", "flex", "items-center", "justify-center"], [1, "w-full", "max-w-md", "bg-white/10", "backdrop-blur-md", "rounded-2xl", "shadow-2xl", "p-8", "border", "border-white/20"], [1, "flex", "flex-col", "gap-6", 3, "ngSubmit"], [1, "text-center"], [1, "text-2xl", "font-semibold", "text-white"], [1, "text-gray-400", "text-sm", "mt-1"], [1, "rounded-lg", "border", "border-red-500/30", "bg-red-500/10", "px-3", "py-2", "text-sm", "text-red-200", "mt-5"], [1, "flex", "flex-col", "gap-5"], [1, "w-full"], ["label", "Usuario", "placeholder", "Ingresa tu usuario", "name", "username", 3, "ngModelChange", "ngModel", "disabled"], [1, "text-red-400", "text-xs", "mt-1.5"], ["label", "Contrase\u00F1a", "type", "password", "placeholder", "Ingresa tu contrase\u00F1a", "name", "password", 3, "ngModelChange", "toggle", "ngModel", "disabled", "hasToggle", "visible"], [1, "flex", "items-center", "justify-between", "text-sm"], [1, "flex", "items-center", "gap-2", "cursor-pointer", "select-none"], ["type", "checkbox", 1, "w-4", "h-4", "rounded", "border-gray-300", "text-red-500", "focus:ring-2", "focus:ring-red-400", "focus:ring-offset-0", "cursor-pointer", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "change", "checked", "disabled"], [1, "text-gray-300"], ["type", "button", 1, "text-red-400", "hover:text-red-300", "hover:underline", "transition-colors", 3, "click"], ["type", "submit", 1, "w-full", "py-3", "mt-2", "bg-gradient-to-r", "from-[#6E2A35]", "to-[#A72027]", "text-white", "font-medium", "rounded-lg", "hover:shadow-lg", "hover:scale-[1.02]", "active:scale-[0.98]", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", "disabled:hover:scale-100", 3, "disabled"], [1, "flex", "items-center", "justify-center", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-5", "w-5"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "form", 2);
            i0.ɵɵlistener("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() { return ctx.onFormSubmit(); });
            i0.ɵɵelementStart(3, "div", 3)(4, "h2", 4);
            i0.ɵɵtext(5, "Iniciar Sesi\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p", 5);
            i0.ɵɵtext(7, "Ingresa tus credenciales para continuar");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(8, LoginComponent_Conditional_8_Template, 2, 1, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 7)(10, "div", 8)(11, "app-input", 9);
            i0.ɵɵlistener("ngModelChange", function LoginComponent_Template_app_input_ngModelChange_11_listener($event) { return ctx.updateField("username", $event); });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(12, LoginComponent_Conditional_12_Template, 2, 1, "p", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 8)(14, "app-input", 11);
            i0.ɵɵlistener("ngModelChange", function LoginComponent_Template_app_input_ngModelChange_14_listener($event) { return ctx.updateField("password", $event); })("toggle", function LoginComponent_Template_app_input_toggle_14_listener() { return ctx.togglePassword(); });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(15, LoginComponent_Conditional_15_Template, 2, 1, "p", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 12)(17, "label", 13)(18, "input", 14);
            i0.ɵɵlistener("change", function LoginComponent_Template_input_change_18_listener($event) { return ctx.onRememberMeChange($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "span", 15);
            i0.ɵɵtext(20, "Recordarme");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "button", 16);
            i0.ɵɵlistener("click", function LoginComponent_Template_button_click_21_listener() { return ctx.navigateToPasswordReset(); });
            i0.ɵɵtext(22, " \u00BFOlvidaste tu contrase\u00F1a? ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(23, "button", 17);
            i0.ɵɵconditionalCreate(24, LoginComponent_Conditional_24_Template, 5, 0, "span", 18)(25, LoginComponent_Conditional_25_Template, 1, 0);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵconditional(ctx.hasFieldError("form") ? 8 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.formData().username)("disabled", ctx.isSubmitting());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.hasFieldError("username") ? 12 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.formData().password)("disabled", ctx.isSubmitting())("hasToggle", true)("visible", ctx.showPassword());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.hasFieldError("password") ? 15 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("checked", ctx.rememberMe())("disabled", ctx.isSubmitting());
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("disabled", ctx.isSubmitting());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isSubmitting() ? 24 : 25);
        } }, dependencies: [CommonModule, FormsModule, i4.ɵNgNoValidate, i4.NgControlStatus, i4.NgControlStatusGroup, i4.NgModel, i4.NgForm, Inputcomponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'app-login', standalone: true, imports: [CommonModule, FormsModule, Inputcomponent], template: "<!-- Layout Container -->\n<div class=\"mb-28 mt-28 flex items-center justify-center\">\n  <!-- Card -->\n  <div\n    class=\"w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20\"\n  >\n    <form class=\"flex flex-col gap-6\" (ngSubmit)=\"onFormSubmit()\">\n      <!-- Title -->\n      <div class=\"text-center\">\n        <h2 class=\"text-2xl font-semibold text-white\">Iniciar Sesi\u00F3n</h2>\n        <p class=\"text-gray-400 text-sm mt-1\">Ingresa tus credenciales para continuar</p>\n\n        \n\n        @if (hasFieldError('form')) {\n          <div class=\"rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200 mt-5\">\n            {{ getFieldError('form') }}\n          </div>\n        }\n          \n\n      </div>\n\n      <!-- Inputs -->\n      <div class=\"flex flex-col gap-5\">\n        <!-- Username -->\n        <div class=\"w-full\">\n          <app-input\n            label=\"Usuario\"\n            placeholder=\"Ingresa tu usuario\"\n            name=\"username\"\n            [ngModel]=\"formData().username\"\n            (ngModelChange)=\"updateField('username', $event)\"\n            [disabled]=\"isSubmitting()\"\n          ></app-input>\n\n          @if (hasFieldError('username')) {\n            <p class=\"text-red-400 text-xs mt-1.5\">\n              {{ getFieldError('username') }}\n            </p>\n          }\n        </div>\n\n        <!-- Password -->\n        <div class=\"w-full\">\n          <app-input\n            label=\"Contrase\u00F1a\"\n            type=\"password\"\n            placeholder=\"Ingresa tu contrase\u00F1a\"\n            name=\"password\"\n            [ngModel]=\"formData().password\"\n            (ngModelChange)=\"updateField('password', $event)\"\n            [disabled]=\"isSubmitting()\"\n            [hasToggle]=\"true\"\n            [visible]=\"showPassword()\"\n            (toggle)=\"togglePassword()\"\n          ></app-input>\n\n          @if (hasFieldError('password')) {\n            <p class=\"text-red-400 text-xs mt-1.5\">\n              {{ getFieldError('password') }}\n            </p>\n          }\n        </div>\n\n        <!-- Remember + Forgot -->\n        <div class=\"flex items-center justify-between text-sm\">\n          <label class=\"flex items-center gap-2 cursor-pointer select-none\">\n            <input\n              type=\"checkbox\"\n              [checked]=\"rememberMe()\"\n              (change)=\"onRememberMeChange($event)\"\n              class=\"w-4 h-4 rounded border-gray-300 text-red-500 focus:ring-2 focus:ring-red-400 focus:ring-offset-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed\"\n              [disabled]=\"isSubmitting()\"\n            />\n            <span class=\"text-gray-300\">Recordarme</span>\n          </label>\n\n          <button\n            type=\"button\"\n            (click)=\"navigateToPasswordReset()\"\n            class=\"text-red-400 hover:text-red-300 hover:underline transition-colors\"\n          >\n            \u00BFOlvidaste tu contrase\u00F1a?\n          </button>\n        </div>\n      </div>\n\n      <!-- Submit -->\n      <button\n        type=\"submit\"\n        [disabled]=\"isSubmitting()\"\n        class=\"w-full py-3 mt-2 bg-gradient-to-r from-[#6E2A35] to-[#A72027] text-white font-medium rounded-lg hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100\"\n      >\n        @if (isSubmitting()) {\n          <span class=\"flex items-center justify-center gap-2\">\n            <svg\n              class=\"animate-spin h-5 w-5\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              fill=\"none\"\n              viewBox=\"0 0 24 24\"\n            >\n              <circle\n                class=\"opacity-25\"\n                cx=\"12\"\n                cy=\"12\"\n                r=\"10\"\n                stroke=\"currentColor\"\n                stroke-width=\"4\"\n              ></circle>\n              <path\n                class=\"opacity-75\"\n                fill=\"currentColor\"\n                d=\"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\"\n              ></path>\n            </svg>\n            Ingresando...\n          </span>\n        } @else {\n          Ingresar\n        }\n      </button>\n    </form>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LoginService }, { type: i2.AuthService }, { type: i3.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/views/Forms/login/login.component.ts", lineNumber: 18 }); })();
