import { Component, OnInit, AfterViewInit, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { finalize } from 'rxjs/operators';

import { Inputcomponent } from '../../../../components/input/input';
import { RegisterServiceOwner } from '../../../../core/services/register-user-est.service';
import { ValidationError } from '../register-user-client/types/register-user.types';
import { environment } from '../../../../../environments/environment';

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

declare const google: any;

function matchFields(field1: string, field2: string): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const a = group.get(field1)?.value;
    const b = group.get(field2)?.value;
    if (!a || !b) return null;
    return a === b ? null : { fieldsMismatch: true };
  };
}

@Component({
  selector: 'app-register-propertyEst',
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


  //location 
  loading = false;
  gettingLocation = false;
  locationStatus: string | null = null;

  error: string | null = null;
  


  constructor(
    private fb: FormBuilder,
    private registerService: RegisterServiceOwner,
    private router: Router,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.registerForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: [
          '',
          [
            Validators.required,
            // + opcional, 7 a 15 dígitos
            Validators.pattern(/^\+?\d{7,15}$/),
          ],
        ],
        birthDate: ['', [adultValidator(18)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        comfirmPassword: ['', [Validators.required]],
        anonymous: [false],
        latitude: [null as number | null],
        longitude: [null as number | null],
      },
      { validators: matchFields('password', 'comfirmPassword') }
    );
  }

  ngOnInit(): void {
  this.registerForm.get('username')?.valueChanges.subscribe(() => {
      const c = this.registerForm.get('username');
      if (!c) return;

      // quita solo el error usernameTaken, no todos
      if (c.hasError('usernameTaken')) {
        const errors = { ...(c.errors || {}) };
        delete errors['usernameTaken'];
        c.setErrors(Object.keys(errors).length ? errors : null);
      }
    });
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
    let completed = 0;
    const totalFields = 6;

    if (values.username?.trim()) completed++;
    if (values.email?.trim()) completed++;
    if (values.phoneNumber?.trim()) completed++;
    if (values.birthDate) completed++;
    if (values.password?.trim()) completed++;
    if (values.comfirmPassword?.trim()) completed++; // ✅ FIX REAL

    this.progress = Math.round((completed / totalFields) * 100);
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

    if (c.hasError('required')) return 'Este campo es obligatorio';
    if (fieldName === 'email' && c.hasError('email')) return 'Correo inválido';
    if (c.hasError('minlength')) {
      const req = c.getError('minlength')?.requiredLength;
      return `Mínimo ${req} caracteres`;
    }
    if (c.hasError('pattern')) return 'Formato inválido';
    if (c.hasError('invalidDate')) return 'Fecha inválida';
    if (c.hasError('underAge')) return 'Debes ser mayor de 18 años';

    // Error de contraseñas (validator a nivel grupo)
    if (
      fieldName === 'comfirmPassword' &&
      this.registerForm.hasError('fieldsMismatch')
    ) {
      return 'Las contraseñas no coinciden';
    }

    return null;
  }


  getUserLocation() {
    if (!isPlatformBrowser(this.platformId)) return;
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
          err.code === err.PERMISSION_DENIED ? 'Permiso de ubicación denegado.' :
          err.code === err.POSITION_UNAVAILABLE ? 'Ubicación no disponible.' :
          err.code === err.TIMEOUT ? 'Timeout obteniendo ubicación.' :
          'Error obteniendo ubicación.';
      },
      { enableHighAccuracy: true, timeout: 10000 }
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
    if (this.isSubmitting) return;

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
      roleId: "3847261094857362",
      birthDate: form.birthDate,
      latitude: form.latitude,
      longitude: form.longitude,
    };

    this.isSubmitting = true;

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
      }
    });
  }

  private handleRegisterError(err: any) {
      // Reset mensajes si usas banner
    this.serverError = null;

    // 🔌 Sin conexión / CORS
    if (err?.status === 0) {
      this.serverError = 'No se pudo conectar con el servidor. Revisa tu internet e intenta nuevamente.';
      return;
    }

    const raw = err?.error; // 👈 en tu caso es un string
    const msg = typeof raw === 'string' ? raw : (raw?.message ?? '');

    // ✅ Caso exacto: username repetido
    if (msg.includes('Username already exists')) {
      const control = this.registerForm.get('username');
      control?.setErrors({ usernameTaken: true });
      control?.markAsTouched();

      // opcional: también banner arriba
      this.serverError = 'El nombre de usuario ya está en uso.';
      return;
    }

    // ✅ (Opcional) Caso email repetido si el backend lo manda similar
    if (msg.toLowerCase().includes('email') && msg.toLowerCase().includes('exists')) {
      const control = this.registerForm.get('email');
      control?.setErrors({ emailTaken: true });
      control?.markAsTouched();
      this.serverError = 'El correo ya está registrado.';
      return;
    }

    // Fallback
    this.serverError = msg || 'Ocurrió un error al registrarse. Intenta de nuevo.';
  }

  clearFieldError(fieldName: string): void {
    this.validationErrors = this.validationErrors.filter((e) => e.field !== fieldName);
  }
}
