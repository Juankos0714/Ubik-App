import { Component, OnInit, AfterViewInit, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { finalize } from 'rxjs/operators';

import { Inputcomponent } from '../../../../components/input/input';
import { RegisterService } from '../../../../core/services/register-user.service';
import { ValidationError } from '../register-user-client/types/register-user.types';
import { environment } from '../../../../../environments/environment';

import {
  toValidatorFn,
  validatePassword,
  validatePasswordConfirmation,
} from '../../../../core/utils/validation.utils';

declare const google: any;

function adultValidator(minAge = 18): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return { required: true };

    const birthDate = new Date(value);
    if (isNaN(birthDate.getTime())) return { invalidDate: true };

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

    return age >= minAge ? null : { underAge: true };
  };
}

/**
 * Validador a nivel de FormGroup para confirmar contraseña
 * usando validatePasswordCocrea lo que te dnfirmation() (de tus utils).
 */
function passwordConfirmationValidator(passwordField: string, confirmField: string): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const passwordCtrl = group.get(passwordField);
    const confirmCtrl = group.get(confirmField);

    if (!passwordCtrl || !confirmCtrl) return null;

    const password = passwordCtrl.value ?? '';
    const confirm = confirmCtrl.value ?? '';

    // Si no han escrito password todavía, no mostramos mismatch.
    // (El error de password ya lo da validatePassword)
    if (!password) return null;

    const errorMsg = validatePasswordConfirmation(password, confirm);
    return errorMsg ? { passwordMismatch: errorMsg } : null;
  };
}

@Component({
  selector: 'app-register-owner',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Inputcomponent],
  templateUrl: './register-owner.html',
})
export class RegisterOwner implements OnInit, AfterViewInit {
  registerForm: FormGroup;

  // Errores backend por campo
  validationErrors: ValidationError[] = [];

  // Error general (red/500/etc)
  serverError: string | null = null;

  isSubmitting = false;
  progress = 0;
  currentStep = 1;

  //location
  loading = false;
  gettingLocation = false;
  locationStatus: string | null = null;

  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.registerForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?\d{7,15}$/)]],
        birthDate: ['', [adultValidator(18)]],

        // ✅ Password con tus validations (mensaje exacto desde validatePassword)
        password: ['', [toValidatorFn(validatePassword, 'passwordInvalid')]],

        // Confirm requerida (y match lo hace el validador de grupo)
        comfirmPassword: ['', [Validators.required]],

        anonymous: [false],
      },
      { validators: passwordConfirmationValidator('password', 'comfirmPassword') },
    );
  }

  ngOnInit(): void {
    // Limpia el error usernameTaken al escribir
    this.registerForm.get('username')?.valueChanges.subscribe(() => {
      const c = this.registerForm.get('username');
      if (!c) return;

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

  /* =======================
     GOOGLE SIGN-IN
     ======================= */

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.loadGoogleScript().then(() => this.initGoogleSignIn());
  }

  private loadGoogleScript(): Promise<void> {
    return new Promise((resolve) => {
      if (document.getElementById('google-gsi-script')) {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.id = 'google-gsi-script';
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      document.head.appendChild(script);
    });
  }

  private initGoogleSignIn(): void {
    if (typeof google === 'undefined' || !google.accounts) {
      console.error('La librería de Google Sign-In no está cargada correctamente.');
      this.serverError = 'Error al cargar el autenticador de Google. Por favor, recarga la página.';
      return;
    }

    try {
      google.accounts.id.initialize({
        client_id: environment.googleClientId,
        callback: (response: any) => this.ngZone.run(() => this.handleGoogleCredential(response)),
        auto_select: false,
        cancel_on_tap_outside: true,
      });

      const container = document.getElementById('g-signin-register');
      if (container) {
        google.accounts.id.renderButton(container, {
          type: 'standard',
          size: 'large',
          theme: 'outline',
          text: 'signin_with',
          shape: 'rectangular',
          logo_alignment: 'left',
        });
      }
    } catch (error) {
      console.error('Error inicializando Google Sign-In en registro:', error);
    }
  }

  triggerGoogleSignIn(): void {
    const btn = document.querySelector('#g-signin-register div[role="button"]') as HTMLElement;
    if (btn) {
      btn.click();
    } else {
      console.warn('Botón de Google no encontrado en el registro, intentando prompt...');
      google.accounts.id.prompt();
    }
  }

  handleGoogleCredential(response: any): void {
    this.isSubmitting = true;
    this.serverError = null;
    this.registerService.registerWithGoogle(response.credential).subscribe({
      next: () => {
        this.router.navigate(['/']);
        this.isSubmitting = false;
      },
      error: () => {
        this.serverError = 'No se pudo registrar con Google. Intenta de nuevo.';
        this.isSubmitting = false;
      },
    });
  }

  updateProgress(): void {
    const values = this.registerForm.value;
    let fieldCompleted = 0;
    const totalFields = 6;

    if (values.username?.trim()) fieldCompleted++;
    if (values.email?.trim()) fieldCompleted++;
    if (values.phoneNumber?.trim()) fieldCompleted++;
    if (values.birthDate) fieldCompleted++;
    if (values.password?.trim()) fieldCompleted++;
    if (values.comfirmPassword?.trim()) fieldCompleted++;

    const fieldProgress = (fieldCompleted / totalFields) * 40; // 40% fields
    const stepProgress = ((this.currentStep - 1) / 3) * 60; // 60% steps
    this.progress = Math.round(stepProgress + fieldProgress);
  }

  /** Error backend por campo */
  getFieldError(fieldName: string): string | null {
    const error = this.validationErrors.find((e) => e.field === fieldName);
    return error ? error.message : null;
  }

  /** Error UI (prioriza backend; luego validación local) */
  getUiError(fieldName: string): string | null {
    const backend = this.getFieldError(fieldName);
    if (backend) return backend;

    const c = this.registerForm.get(fieldName);
    if (!c || !c.touched) return null;

    // ✅ Password: mensaje viene de validatePassword()
    if (fieldName === 'password' && c.hasError('passwordInvalid')) {
      return c.getError('passwordInvalid');
    }

    // Angular standard
    if (c.hasError('required')) {
      // ✅ Confirm: muestra el mensaje de tu validation (no el genérico)
      if (fieldName === 'comfirmPassword') return 'Debe confirmar la contraseña';
      return 'Este campo es obligatorio';
    }

    if (fieldName === 'email' && c.hasError('email')) return 'Correo inválido';

    if (c.hasError('minlength')) {
      const req = c.getError('minlength')?.requiredLength;
      return `Mínimo ${req} caracteres`;
    }

    if (c.hasError('pattern')) return 'Formato inválido';
    if (c.hasError('invalidDate')) return 'Fecha inválida';
    if (c.hasError('underAge')) return 'Debes ser mayor de 18 años';

    // ✅ Confirmación: mensaje viene de validatePasswordConfirmation()
    if (fieldName === 'comfirmPassword' && this.registerForm.hasError('passwordMismatch')) {
      return this.registerForm.getError('passwordMismatch');
    }

    return null;
  }
  validateStep(step: number): boolean {
    const stepFields: { [key: number]: string[] } = {
      1: ['username' , 'birthDate'],
      2: ['email', 'phoneNumber'],
      3: ['password', 'comfirmPassword'],
      4: [],
    };

    const fields = stepFields[step];
    let isValid = true;

    fields.forEach((field) => {
      const control = this.registerForm.get(field);
      if (control) {
        control.markAsTouched();
        if (control.invalid) isValid = false;
      }
    });

    return isValid;
  }

  validateCurrentStep(): boolean {
    return this.validateStep(this.currentStep);
  }

  nextStep(): void {
    if (this.validateCurrentStep()) {
      this.currentStep++;
      this.updateProgress();
    }
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.updateProgress();
    }
  }

  getUserLocation() {
    if (!navigator.geolocation) {
      this.locationStatus = 'Geolocalización no soportada.';
      return;
    }
    this.gettingLocation = true;
    this.locationStatus = 'Solicitando permiso...';
    this.error = null;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.gettingLocation = false;
        const { latitude, longitude } = pos.coords;
        this.registerForm.patchValue({ latitude, longitude });
        this.locationStatus = 'Ubicación obtenida.';
      },
      (err) => {
        this.gettingLocation = false;
        this.locationStatus = null;
        this.error =
          err.code === err.PERMISSION_DENIED
            ? 'Permiso de ubicación denegado.'
            : err.code === err.POSITION_UNAVAILABLE
              ? 'Ubicación no disponible.'
              : err.code === err.TIMEOUT
                ? 'Timeout obteniendo ubicación.'
                : 'Error obteniendo ubicación.';
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  }

  get hasLocation(): boolean {
    const lat = this.registerForm.get('latitude')?.value;
    const lng = this.registerForm.get('longitude')?.value;
    return typeof lat === 'number' && typeof lng === 'number';
  }

  get locationText(): string {
    const lat = this.registerForm.get('latitude')?.value;
    const lng = this.registerForm.get('longitude')?.value;
    if (typeof lat !== 'number' || typeof lng !== 'number') return '';
    return `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  }

  onSubmit(): void {
    if (this.currentStep !== 3 || this.isSubmitting) return;

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
      roleId: '3847261094857362',
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
        error: (err: any) => {
          // ✅ TS7006 fix
          console.error('🔴 REGISTER ERROR', err);
          this.handleRegisterError(err);
        },
      });
  }

  private handleRegisterError(err: any) {
    this.serverError = null;

    if (err?.status === 0) {
      this.serverError =
        'No se pudo conectar con el servidor. Revisa tu internet e intenta nuevamente.';
      return;
    }

    const raw = err?.error;
    const msg = typeof raw === 'string' ? raw : (raw?.message ?? '');

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

  clearFieldError(fieldName: string): void {
    this.validationErrors = this.validationErrors.filter((e) => e.field !== fieldName);
  }
}
