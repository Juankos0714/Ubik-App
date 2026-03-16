import { Component, signal, AfterViewInit, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../../core/services/login.service';
import { LoginFormData, ValidationError } from './types/login.types';
import { FormsModule } from '@angular/forms';
import { Inputcomponent } from '../../../components/input/input';
import { AuthService } from '../../../core/services/auth.service';
import { validateLoginForm } from './utils/login-validation.utils';
import { environment } from '../../../../environments/environment';

declare const google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, Inputcomponent],
  templateUrl: './login.component.html',
})
export class LoginComponent implements AfterViewInit {
  formData = signal<Partial<LoginFormData>>({
    username: '',
    password: '',
  });

  showPassword = signal(false);

  togglePassword() {
    this.showPassword.update((v) => !v);
  }

  errors = signal<ValidationError[]>([]);
  isSubmitting = signal(false);
  rememberMe = signal(false);

  constructor(
    private loginService: LoginService,
    private auth: AuthService,
    private router: Router,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  /* =======================
     GOOGLE SIGN-IN
     ======================= */

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.loadGoogleScript().then(() => this.initGoogleSignIn());
  }

  private loadGoogleScript(): Promise<void> {
    return new Promise((resolve) => {
      if (document.getElementById('google-gsi-script')) { resolve(); return; }
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
      this.errors.set([{ field: 'form', message: 'Error al cargar el autenticador de Google. Por favor, recarga la página.' }]);
      return;
    }

    try {
      google.accounts.id.initialize({
        client_id: environment.googleClientId,
        callback: (response: any) =>
          this.ngZone.run(() => this.handleGoogleCredential(response)),
        auto_select: false,
        cancel_on_tap_outside: true
      });

      const container = document.getElementById('g-signin-login');
      if (container) {
        google.accounts.id.renderButton(container, {
          type: 'standard',
          size: 'large',
          theme: 'outline',
          text: 'signin_with',
          shape: 'rectangular',
          logo_alignment: 'left'
        });
      }
    } catch (error) {
      console.error('Error inicializando Google Sign-In:', error);
    }
  }

  triggerGoogleSignIn(): void {
    // Intentar primero el trigger programático si el botón oculto falla
    const btn = document.querySelector('#g-signin-login div[role="button"]') as HTMLElement;
    if (btn) {
      btn.click();
    } else {
      // Fallback: intentar abrir el prompt de One Tap o re-inicializar si es necesario
      console.warn('Botón de Google no encontrado en el DOM, intentando prompt...');
      google.accounts.id.prompt();
    }
  }

  handleGoogleCredential(response: any): void {
    const idToken: string = response.credential;
    this.isSubmitting.set(true);
    this.errors.set([]);
    this.loginService.loginWithGoogle(idToken).subscribe({
      next: () => {
        this.loginService.getProfile().subscribe({
          next: () => {
            this.isSubmitting.set(false);
            this.router.navigate(['/']);
          },
          error: () => {
            this.isSubmitting.set(false);
            this.errors.set([{ field: 'form', message: 'Iniciaste sesión con Google, pero no se pudo cargar tu perfil.' }]);
          },
        });
      },
      error: () => {
        this.isSubmitting.set(false);
        this.errors.set([{ field: 'form', message: 'No se pudo iniciar sesión con Google. Intenta de nuevo.' }]);
      },
    });
  }

  /* =======================
     FORM UPDATES
     ======================= */

  updateField(field: keyof LoginFormData, value: string): void {
    this.formData.set({
      ...this.formData(),
      [field]: value,
    });
  }

  onUsernameInput(event: Event): void {
    this.updateField('username', (event.target as HTMLInputElement).value);
  }

  onPasswordInput(event: Event): void {
    this.updateField('password', (event.target as HTMLInputElement).value);
  }

  onRememberMeChange(event: Event): void {
    this.rememberMe.set((event.target as HTMLInputElement).checked);
  }

  /* =======================
     SUBMIT
     ======================= */

  onFormSubmit(): void {
    const data = this.formData();

    // ✅ 1) Validación front: llena errores por campo
    const validationErrors = validateLoginForm(data);
    this.errors.set(validationErrors);

    if (validationErrors.length > 0) {
      return;
    }

    this.isSubmitting.set(true);

    this.loginService
      .login(
        {
          username: data.username!, // ya pasó validación
          password: data.password!,
        },
        this.rememberMe(),
      )
      .subscribe({
        next: () => {
          this.loginService.getProfile().subscribe({
            next: () => {
              this.isSubmitting.set(false);
              this.errors.set([]); // ✅ limpia errores al éxito
              this.router.navigate(['/']);
            },
            error: (err: any) => {
              console.error('Error cargando perfil', err);
              this.isSubmitting.set(false);
              this.errors.set([
                { field: 'form', message: 'Iniciaste sesión, pero no se pudo cargar tu perfil.' },
              ]);
            },
          });
        },
        error: (err: any) => {
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

  hasFieldError(field: string): boolean {
    return this.errors().some((e) => e.field === field);
  }

  getFieldError(field: string): string | null {
    return this.errors().find((e) => e.field === field)?.message || null;
  }

  /* =======================
     NAVIGATION
     ======================= */

  navigateToRegister(): void {
    this.router.navigate(['/']);
  }

  navigateToPasswordReset(): void {
    this.router.navigate(['/forgot-password']); // Recuperacion de contraseña
  }

}
