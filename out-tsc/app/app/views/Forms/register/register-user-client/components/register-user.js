import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs/operators';
import { Inputcomponent } from '../../../../../components/input/input';
import { toValidatorFn, validatePassword, validatePasswordConfirmation, } from '../../../../../core/utils/validation.utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../../../../core/services/register-user.service";
import * as i3 from "@angular/router";
function RegisterUser_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.serverError, " ");
} }
function RegisterUser_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1, " Este nombre de usuario ya est\u00E1 en uso. ");
    i0.ɵɵelementEnd();
} }
function RegisterUser_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.getUiError("email"));
} }
function RegisterUser_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.getUiError("phoneNumber"));
} }
function RegisterUser_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.getUiError("birthDate"));
} }
function RegisterUser_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.getUiError("password"));
} }
function RegisterUser_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.getUiError("comfirmPassword"));
} }
function RegisterUser_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 25);
    i0.ɵɵtext(1, " Obteniendo... ");
} }
function RegisterUser_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1, " \u2713 ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2, " Ubicaci\u00F3n correcta ");
} }
function RegisterUser_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Obtener ubicaci\u00F3n actual ");
} }
function RegisterUser_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Coords: ", ctx_r0.locationText);
} }
function RegisterUser_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error);
} }
function RegisterUser_Conditional_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Registrando... ");
} }
function RegisterUser_Conditional_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Registrarse ");
} }
function adultValidator(minAge = 18) {
    return (control) => {
        const value = control.value;
        if (!value)
            return { required: true };
        const birthDate = new Date(value);
        if (isNaN(birthDate.getTime()))
            return { invalidDate: true };
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
            age--;
        return age >= minAge ? null : { underAge: true };
    };
}
/**
 * Validador a nivel de FormGroup para confirmar contraseña
 * usando validatePasswordConfirmation() (de tus utils).
 */
function passwordConfirmationValidator(passwordField, confirmField) {
    return (group) => {
        const passwordCtrl = group.get(passwordField);
        const confirmCtrl = group.get(confirmField);
        if (!passwordCtrl || !confirmCtrl)
            return null;
        const password = passwordCtrl.value ?? '';
        const confirm = confirmCtrl.value ?? '';
        // Si no han escrito password todavía, no mostramos mismatch.
        // (El error de password ya lo da validatePassword)
        if (!password)
            return null;
        const errorMsg = validatePasswordConfirmation(password, confirm);
        return errorMsg ? { passwordMismatch: errorMsg } : null;
    };
}
export class RegisterUser {
    fb;
    registerService;
    router;
    registerForm;
    // Errores backend por campo
    validationErrors = [];
    // Error general (red/500/etc)
    serverError = null;
    isSubmitting = false;
    progress = 0;
    //location 
    loading = false;
    gettingLocation = false;
    locationStatus = null;
    error = null;
    constructor(fb, registerService, router) {
        this.fb = fb;
        this.registerService = registerService;
        this.router = router;
        this.registerForm = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            phoneNumber: [
                '',
                [
                    Validators.required,
                    Validators.pattern(/^\+?\d{7,15}$/),
                ],
            ],
            birthDate: ['', [adultValidator(18)]],
            // ✅ Password con tus validations (mensaje exacto desde validatePassword)
            password: ['', [toValidatorFn(validatePassword, 'passwordInvalid')]],
            // Confirm requerida (y match lo hace el validador de grupo)
            comfirmPassword: ['', [Validators.required]],
            anonymous: [false],
        }, { validators: passwordConfirmationValidator('password', 'comfirmPassword') });
    }
    ngOnInit() {
        // Limpia el error usernameTaken al escribir
        this.registerForm.get('username')?.valueChanges.subscribe(() => {
            const c = this.registerForm.get('username');
            if (!c)
                return;
            if (c.hasError('usernameTaken')) {
                const errors = { ...(c.errors || {}) };
                delete errors['usernameTaken'];
                c.setErrors(Object.keys(errors).length ? errors : null);
            }
        });
        // ✅ Progreso
        this.updateProgress();
        this.registerForm.valueChanges.subscribe(() => this.updateProgress());
    }
    updateProgress() {
        const values = this.registerForm.value;
        let completed = 0;
        const totalFields = 6;
        if (values.username?.trim())
            completed++;
        if (values.email?.trim())
            completed++;
        if (values.phoneNumber?.trim())
            completed++;
        if (values.birthDate)
            completed++;
        if (values.password?.trim())
            completed++;
        if (values.comfirmPassword?.trim())
            completed++;
        this.progress = Math.round((completed / totalFields) * 100);
    }
    /** Error backend por campo */
    getFieldError(fieldName) {
        const error = this.validationErrors.find((e) => e.field === fieldName);
        return error ? error.message : null;
    }
    /** Error UI (prioriza backend; luego validación local) */
    getUiError(fieldName) {
        const backend = this.getFieldError(fieldName);
        if (backend)
            return backend;
        const c = this.registerForm.get(fieldName);
        if (!c || !c.touched)
            return null;
        // ✅ Password: mensaje viene de validatePassword()
        if (fieldName === 'password' && c.hasError('passwordInvalid')) {
            return c.getError('passwordInvalid');
        }
        // Angular standard
        if (c.hasError('required')) {
            // ✅ Confirm: muestra el mensaje de tu validation (no el genérico)
            if (fieldName === 'comfirmPassword')
                return 'Debe confirmar la contraseña';
            return 'Este campo es obligatorio';
        }
        if (fieldName === 'email' && c.hasError('email'))
            return 'Correo inválido';
        if (c.hasError('minlength')) {
            const req = c.getError('minlength')?.requiredLength;
            return `Mínimo ${req} caracteres`;
        }
        if (c.hasError('pattern'))
            return 'Formato inválido';
        if (c.hasError('invalidDate'))
            return 'Fecha inválida';
        if (c.hasError('underAge'))
            return 'Debes ser mayor de 18 años';
        // ✅ Confirmación: mensaje viene de validatePasswordConfirmation()
        if (fieldName === 'comfirmPassword' &&
            this.registerForm.hasError('passwordMismatch')) {
            return this.registerForm.getError('passwordMismatch');
        }
        return null;
    }
    getUserLocation() {
        if (!navigator.geolocation) {
            this.locationStatus = 'Geolocalización no soportada.';
            return;
        }
        this.gettingLocation = true;
        this.locationStatus = 'Solicitando permiso...';
        this.error = null;
        navigator.geolocation.getCurrentPosition((pos) => {
            this.gettingLocation = false;
            const { latitude, longitude } = pos.coords;
            this.registerForm.patchValue({ latitude, longitude });
            this.locationStatus = 'Ubicación obtenida.';
        }, (err) => {
            this.gettingLocation = false;
            this.locationStatus = null;
            this.error =
                err.code === err.PERMISSION_DENIED ? 'Permiso de ubicación denegado.' :
                    err.code === err.POSITION_UNAVAILABLE ? 'Ubicación no disponible.' :
                        err.code === err.TIMEOUT ? 'Timeout obteniendo ubicación.' :
                            'Error obteniendo ubicación.';
        }, { enableHighAccuracy: true, timeout: 10000 });
    }
    get hasLocation() {
        const lat = this.registerForm.get('latitude')?.value;
        const lng = this.registerForm.get('longitude')?.value;
        return typeof lat === 'number' && typeof lng === 'number';
    }
    get locationText() {
        const lat = this.registerForm.get('latitude')?.value;
        const lng = this.registerForm.get('longitude')?.value;
        if (typeof lat !== 'number' || typeof lng !== 'number')
            return '';
        return `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
    }
    onSubmit() {
        if (this.isSubmitting)
            return;
        this.serverError = null;
        this.validationErrors = [];
        if (this.registerForm.invalid) {
            this.registerForm.markAllAsTouched();
            return;
        }
        const form = this.registerForm.value;
        const payload = {
            username: form.username?.trim(),
            email: form.email?.trim(),
            password: form.password,
            comfirmPassword: form.comfirmPassword,
            phoneNumber: form.phoneNumber?.trim(),
            anonymous: false,
            roleId: "9182736450192837",
            birthDate: form.birthDate,
            latitude: form.latitude,
            longitude: form.longitude,
        };
        this.isSubmitting = true;
        // ✅ Método real de tu service (no .register)
        this.registerService
            .submitClientRegistration(payload)
            .pipe(finalize(() => (this.isSubmitting = false)))
            .subscribe({
            next: () => {
                console.log('🟢 REGISTER OK');
                this.router.navigate(['/login']);
            },
            error: (err) => {
                console.error('🔴 REGISTER ERROR', err);
                this.handleRegisterError(err);
            },
        });
    }
    handleRegisterError(err) {
        this.serverError = null;
        if (err?.status === 0) {
            this.serverError =
                'No se pudo conectar con el servidor. Revisa tu internet e intenta nuevamente.';
            return;
        }
        const raw = err?.error;
        const msg = typeof raw === 'string' ? raw : raw?.message ?? '';
        if (msg.includes('Username already exists')) {
            const control = this.registerForm.get('username');
            control?.setErrors({ usernameTaken: true });
            control?.markAsTouched();
            this.serverError = 'El nombre de usuario ya está en uso.';
            return;
        }
        if (msg.toLowerCase().includes('email') && msg.toLowerCase().includes('exists')) {
            const control = this.registerForm.get('email');
            control?.setErrors({ emailTaken: true });
            control?.markAsTouched();
            this.serverError = 'El correo ya está registrado.';
            return;
        }
        this.serverError = msg || 'Ocurrió un error al registrarse. Intenta de nuevo.';
    }
    clearFieldError(fieldName) {
        this.validationErrors = this.validationErrors.filter((e) => e.field !== fieldName);
    }
    static ɵfac = function RegisterUser_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RegisterUser)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.RegisterService), i0.ɵɵdirectiveInject(i3.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RegisterUser, selectors: [["app-register-user"]], decls: 41, vars: 17, consts: [[1, "mb-28", "mt-28", "flex", "items-center", "justify-center"], [1, "w-full", "max-w-md", "bg-white/10", "backdrop-blur-md", "rounded-2xl", "shadow-2xl", "p-8", "border", "border-white/20"], [1, "flex", "items-center", "justify-center", "px-5", "text-white"], [1, "w-full", "max-w-md"], [1, "text-4xl", "font-bold", "mb-6", "tracking-wider", "text-center"], [1, "mb-4"], [1, "flex", "justify-between", "text-xs", "opacity-70", "mb-1"], [1, "w-full", "h-2", "bg-white/10", "rounded-full", "overflow-hidden"], [1, "h-2", "bg-red-600", "rounded-full"], [1, "mb-4", "rounded-lg", "border", "border-red-500/40", "bg-red-500/10", "px-4", "py-3", "text-sm", "text-red-200"], [1, "flex", "flex-col", "gap-3", 3, "ngSubmit", "formGroup"], ["label", "Nombre de Usuario", "placeholder", "Ingrese su nombre de usuario", "type", "text", "formControlName", "username"], [1, "text-xs", "text-red-300", "-mt-3"], ["label", "Correo electr\u00F3nico", "placeholder", "Ingrese su correo", "type", "email", "formControlName", "email"], [1, "text-red-300", "text-xs", "-mt-1"], ["label", "N\u00FAmero de tel\u00E9fono", "placeholder", "Ingrese su n\u00FAmero de tel\u00E9fono", "type", "tel", "formControlName", "phoneNumber"], [1, "mb-1", "text-white", "text-sm"], ["type", "date", "formControlName", "birthDate", 1, "rounded-full", "p-3", "text-black", "focus:outline-none", "focus:ring-2", "focus:ring-red-600", "w-full", "bg-white", "text-center"], ["label", "Contrase\u00F1a", "formControlName", "password", "placeholder", "Ingrese su contrase\u00F1a", "type", "password"], ["label", "Confirmar contrase\u00F1a", "formControlName", "comfirmPassword", "placeholder", "Confirme su contrase\u00F1a", "type", "password"], [1, "mb-1", "text-white", "text-base"], ["type", "button", 1, "inline-flex", "items-center", "justify-center", "rounded-xl", "border", "border-white/15", "bg-white/5", "px-4", "py-3", "text-sm", "font-medium", "text-white/90", "hover:bg-white/10", "active:scale-[0.99]", "transition", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "mt-1", "text-xs", "text-white/70"], [1, "mt-1", "text-xs", "text-red-300"], ["type", "submit", 1, "bg-linear-to-r", "from-[#6E2A35]", "to-[#A72027]", "text-white", "font-medium", "rounded-lg", "text-center", "hover:from-[#7E3A45]", "hover:to-[#B73037]", "transition-colors", "cursor-pointer", "justify-between", "gap-2", "p-2.5", "text-overflow:", "ellipsis;", "text-clip", 3, "disabled"], [1, "mr-2", "inline-block", "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-white/30", "border-t-white"], [1, "mr-2", "inline-flex", "h-5", "w-5", "items-center", "justify-center", "rounded-full", "border", "border-white/30"]], template: function RegisterUser_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
            i0.ɵɵtext(5, "CUENTA CLIENTE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 5)(7, "div", 6)(8, "span");
            i0.ɵɵtext(9, "Progreso");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "span");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 7);
            i0.ɵɵelement(13, "div", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(14, RegisterUser_Conditional_14_Template, 2, 1, "div", 9);
            i0.ɵɵelementStart(15, "form", 10);
            i0.ɵɵlistener("ngSubmit", function RegisterUser_Template_form_ngSubmit_15_listener() { return ctx.onSubmit(); });
            i0.ɵɵelement(16, "app-input", 11);
            i0.ɵɵconditionalCreate(17, RegisterUser_Conditional_17_Template, 2, 0, "p", 12);
            i0.ɵɵelement(18, "app-input", 13);
            i0.ɵɵconditionalCreate(19, RegisterUser_Conditional_19_Template, 2, 1, "p", 14);
            i0.ɵɵelement(20, "app-input", 15);
            i0.ɵɵconditionalCreate(21, RegisterUser_Conditional_21_Template, 2, 1, "p", 14);
            i0.ɵɵelementStart(22, "label", 16);
            i0.ɵɵtext(23, "Fecha de nacimiento");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(24, "input", 17);
            i0.ɵɵconditionalCreate(25, RegisterUser_Conditional_25_Template, 2, 1, "p", 14);
            i0.ɵɵelement(26, "app-input", 18);
            i0.ɵɵconditionalCreate(27, RegisterUser_Conditional_27_Template, 2, 1, "p", 14);
            i0.ɵɵelement(28, "app-input", 19);
            i0.ɵɵconditionalCreate(29, RegisterUser_Conditional_29_Template, 2, 1, "p", 14);
            i0.ɵɵelementStart(30, "label", 20);
            i0.ɵɵtext(31, "Ubicaci\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "button", 21);
            i0.ɵɵlistener("click", function RegisterUser_Template_button_click_32_listener() { return ctx.getUserLocation(); });
            i0.ɵɵconditionalCreate(33, RegisterUser_Conditional_33_Template, 2, 0)(34, RegisterUser_Conditional_34_Template, 3, 0)(35, RegisterUser_Conditional_35_Template, 1, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(36, RegisterUser_Conditional_36_Template, 2, 1, "p", 22);
            i0.ɵɵconditionalCreate(37, RegisterUser_Conditional_37_Template, 2, 1, "p", 23);
            i0.ɵɵelementStart(38, "button", 24);
            i0.ɵɵconditionalCreate(39, RegisterUser_Conditional_39_Template, 1, 0)(40, RegisterUser_Conditional_40_Template, 1, 0);
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            let tmp_4_0;
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate1("", ctx.progress, "%");
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("width", ctx.progress, "%");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.serverError ? 14 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.registerForm);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(((tmp_4_0 = ctx.registerForm.get("username")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.registerForm.get("username")) == null ? null : tmp_4_0.hasError("usernameTaken")) ? 17 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.getUiError("email") ? 19 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.getUiError("phoneNumber") ? 21 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.getUiError("birthDate") ? 25 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.getUiError("password") ? 27 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.getUiError("comfirmPassword") ? 29 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.loading || ctx.gettingLocation);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.gettingLocation ? 33 : ctx.hasLocation ? 34 : 35);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(!ctx.gettingLocation && ctx.hasLocation ? 36 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error ? 37 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.isSubmitting || ctx.registerForm.invalid);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isSubmitting ? 39 : 40);
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, Inputcomponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegisterUser, [{
        type: Component,
        args: [{ selector: 'app-register-user', standalone: true, imports: [CommonModule, ReactiveFormsModule, Inputcomponent], template: "\n<div class=\"mb-28 mt-28 flex items-center justify-center \">\n\n  <!-- Card -->\n  <div class=\"w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20\">\n    \n    <div class=\"flex items-center justify-center px-5 text-white\">\n      <div class=\"w-full max-w-md\">\n        <h1 class=\"text-4xl font-bold mb-6 tracking-wider text-center\">CUENTA CLIENTE</h1>\n\n        <!-- Progreso -->\n        <div class=\"mb-4\">\n          <div class=\"flex justify-between text-xs opacity-70 mb-1\">\n            <span>Progreso</span>\n            <span>{{ progress }}%</span>\n          </div>\n          <div class=\"w-full h-2 bg-white/10 rounded-full overflow-hidden\">\n            <div class=\"h-2 bg-red-600 rounded-full\" [style.width.%]=\"progress\"></div>\n          </div>\n        </div>\n\n        <!-- Error general -->\n        @if (serverError) {\n          <div class=\"mb-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200\">\n            {{ serverError }}\n          </div>\n        }\n\n        <form\n          [formGroup]=\"registerForm\"\n          (ngSubmit)=\"onSubmit()\"\n          class=\"flex flex-col gap-3\"\n        >\n          <!-- Usuario -->\n          <app-input \n            label=\"Nombre de Usuario\" \n            placeholder=\"Ingrese su nombre de usuario\"\n            type=\"text\"\n            formControlName=\"username\">\n          </app-input>\n\n          @if (registerForm.get('username')?.touched && registerForm.get('username')?.hasError('usernameTaken')) {\n            <p class=\"text-xs text-red-300 -mt-3\">\n              Este nombre de usuario ya est\u00E1 en uso.\n            </p>\n          }\n\n          <!-- Email -->\n          <app-input\n            label=\"Correo electr\u00F3nico\"\n            placeholder=\"Ingrese su correo\"\n            type=\"email\"\n            formControlName=\"email\">\n          </app-input>\n          @if (getUiError('email')) {\n            <p class=\"text-red-300 text-xs -mt-1\">{{ getUiError('email') }}</p>\n          }\n\n          <!-- Tel\u00E9fono -->\n          <app-input\n            label=\"N\u00FAmero de tel\u00E9fono\"\n            placeholder=\"Ingrese su n\u00FAmero de tel\u00E9fono\"\n            type=\"tel\"\n            formControlName=\"phoneNumber\">\n          </app-input>\n          @if (getUiError('phoneNumber')) {\n            <p class=\"text-red-300 text-xs -mt-1\">{{ getUiError('phoneNumber') }}</p>\n          }\n\n          <!-- Birthdate -->\n          <label class=\"mb-1 text-white text-sm\">Fecha de nacimiento</label>\n          <input\n            type=\"date\"\n            formControlName=\"birthDate\"\n            class=\"rounded-full p-3 text-black focus:outline-none focus:ring-2 focus:ring-red-600 w-full bg-white text-center\"\n          />\n          @if (getUiError('birthDate')) {\n            <p class=\"text-red-300 text-xs -mt-1\">{{ getUiError('birthDate') }}</p>\n          }\n\n          <!-- Password -->\n          <app-input\n            label=\"Contrase\u00F1a\"\n            formControlName=\"password\"\n            placeholder=\"Ingrese su contrase\u00F1a\"\n            type=\"password\">\n          </app-input>\n          @if (getUiError('password')) {\n            <p class=\"text-red-300 text-xs -mt-1\">{{ getUiError('password') }}</p>\n          }\n\n          <!-- Confirm Password -->\n          <app-input\n            label=\"Confirmar contrase\u00F1a\"\n            formControlName=\"comfirmPassword\"\n            placeholder=\"Confirme su contrase\u00F1a\"\n            type=\"password\">\n          </app-input>\n          @if (getUiError('comfirmPassword')) {\n            <p class=\"text-red-300 text-xs -mt-1\">{{ getUiError('comfirmPassword') }}</p>\n          }\n\n           <!-- Ubication  -->\n          <label class=\"mb-1 text-white text-base\">Ubicaci\u00F3n</label>\n\n          <button\n            type=\"button\"\n            class=\"inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 active:scale-[0.99] transition disabled:opacity-50 disabled:cursor-not-allowed\"\n            [disabled]=\"loading || gettingLocation\"\n            (click)=\"getUserLocation()\"\n          >\n            @if (gettingLocation) {\n              <span\n                class=\"mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white\"\n              ></span>\n              Obteniendo...\n            } @else if (hasLocation) {\n              <span class=\"mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/30\">\n                \u2713\n              </span>\n              Ubicaci\u00F3n correcta\n            } @else {\n              Obtener ubicaci\u00F3n actual\n            }\n          </button>\n\n          @if (!gettingLocation && hasLocation) {\n            <p class=\"mt-1 text-xs text-white/70\">Coords: {{ locationText }}</p>\n          }\n\n          @if (error) {\n            <p class=\"mt-1 text-xs text-red-300\">{{ error }}</p>\n          }\n\n\n          <!-- Submit -->\n          <button\n            type=\"submit\"\n            [disabled]=\"isSubmitting || registerForm.invalid\"\n            class=\"\n            bg-linear-to-r from-[#6E2A35] to-[#A72027]\n              text-white \n              font-medium \n              rounded-lg\n              text-center \n              hover:from-[#7E3A45]\n              hover:to-[#B73037] \n              transition-colors \n              cursor-pointer\n              justify-between \n              gap-2\n              p-2.5\n              text-overflow: ellipsis;\n              text-clip\n            \"\n          >\n            @if (isSubmitting) { Registrando... } @else { Registrarse }\n          </button>\n        </form>\n      </div>\n    </div>\n\n  </div>\n</div>" }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.RegisterService }, { type: i3.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RegisterUser, { className: "RegisterUser", filePath: "src/app/views/Forms/register/register-user-client/components/register-user.ts", lineNumber: 74 }); })();
