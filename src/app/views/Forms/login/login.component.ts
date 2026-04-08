import { Component, signal, AfterViewInit, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../../core/services/login.service';
import { LoginFormData, ValidationError } from './types/login.types';
import { FormsModule } from '@angular/forms';
import { Inputcomponent } from '../../../components/input/input';
import { AuthService } from '../../../core/services/auth.service';
import { validateLoginForm } from './utils/login-validation.utils';
import { environment } from '../../../../environments/environment';

declare const google: any;

import { ROLE_IDS } from '../../../core/models/roles.model';
import { UsersService } from '../../../core/services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, Inputcomponent],
  templateUrl: './login.component.html',
})
export class LoginComponent implements AfterViewInit {
  formData = signal<Partial<LoginFormData>>({ username: '', password: '' });
  errors = signal<ValidationError[]>([]);
  isSubmitting = signal(false);
  rememberMe = signal(false);

  constructor(
    private loginService: LoginService,
    private usersService: UsersService,
    private auth: AuthService,
    private router: Router,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  private redirectByRole(): void {
    const role = Number(this.auth.role());
    if (!role) return;
    switch (role) {
      case ROLE_IDS.ADMIN: this.router.navigate(['/dashboard/admin']); break;
      case ROLE_IDS.OWNER: this.router.navigate(['/dashboard/owner']); break;
      default: this.router.navigate(['/']); break;
    }
  }

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
      this.errors.set([{ field: 'form', message: 'Error al cargar el autenticador de Google. Por favor, recarga la página.' }]);
      return;
    }
    try {
      google.accounts.id.initialize({
        client_id: environment.googleClientId,
        callback: (response: any) => this.ngZone.run(() => this.handleGoogleCredential(response)),
        auto_select: false,
        cancel_on_tap_outside: true,
      });
      const container = document.getElementById('g-signin-login');
      if (container) {
        google.accounts.id.renderButton(container, {
          type: 'standard', size: 'large', theme: 'outline',
          text: 'signin_with', shape: 'rectangular', logo_alignment: 'left',
        });
      }
    } catch (error) {
      console.error('Error inicializando Google Sign-In:', error);
    }
  }

  triggerGoogleSignIn(): void {
    const btn = document.querySelector('#g-signin-login div[role="button"]') as HTMLElement;
    if (btn) btn.click();
    else if (typeof google !== 'undefined') google.accounts.id.prompt();
  }

  handleGoogleCredential(response: any): void {
    this.isSubmitting.set(true);
    this.errors.set([]);
    this.loginService.loginWithGoogle(response.credential).subscribe({
      next: () => {
        this.usersService.loadProfile().subscribe({
          next: (user) => { 
            this.auth.setUser(user);
            this.isSubmitting.set(false); 
            this.redirectByRole(); 
          },
          error: () => { this.isSubmitting.set(false); this.errors.set([{ field: 'form', message: 'Iniciaste sesión con Google, pero no se pudo cargar tu perfil.' }]); },
        });
      },
      error: () => { this.isSubmitting.set(false); this.errors.set([{ field: 'form', message: 'No se pudo iniciar sesión con Google. Intenta de nuevo.' }]); },
    });
  }

  updateField(field: keyof LoginFormData, value: string): void {
    this.formData.set({ ...this.formData(), [field]: value });
  }

  onRememberMeChange(event: Event): void {
    this.rememberMe.set((event.target as HTMLInputElement).checked);
  }

  onFormSubmit(): void {
    const data = this.formData();
    const validationErrors = validateLoginForm(data);
    this.errors.set(validationErrors);
    if (validationErrors.length > 0) return;

    this.isSubmitting.set(true);
    this.loginService.login({ username: data.username!, password: data.password! }, this.rememberMe()).subscribe({
      next: () => {
        this.usersService.loadProfile().subscribe({
          next: (user) => { 
            this.auth.setUser(user);
            this.isSubmitting.set(false); 
            this.errors.set([]); 
            this.redirectByRole(); 
          },
          error: (err: any) => { this.isSubmitting.set(false); this.errors.set([{ field: 'form', message: 'Iniciaste sesión, pero no se pudo cargar tu perfil.' }]); },
        });
      },
      error: () => { this.isSubmitting.set(false); this.errors.set([{ field: 'form', message: 'Credenciales incorrectas' }]); },
    });
  }

  hasFieldError(field: string): boolean {
    return this.errors().some((e) => e.field === field);
  }

  getFieldError(field: string): string | null {
    return this.errors().find((e) => e.field === field)?.message || null;
  }

  navigateToPasswordReset(): void { this.router.navigate(['/forgot-password']); }
  navigateToRecoverAccount(): void { this.router.navigate(['/recover-account']); }
}