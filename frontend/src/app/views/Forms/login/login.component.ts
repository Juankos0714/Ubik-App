import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { LoginFormData, ValidationError } from './types/login.types';
import { FormsModule } from '@angular/forms';
import { Button01 } from '../../../components/button-01/button-01';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, Button01],
  templateUrl: './login.component.html',
})
export class LoginComponent {

  formData = signal<Partial<LoginFormData>>({
    username: '',
    password: '',
  });

  errors = signal<ValidationError[]>([]);
  isSubmitting = signal(false);
  rememberMe = signal(false);

  constructor(
    
    private loginService: LoginService,
    private router: Router
  ) {}

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

    if (!data.username || !data.password) {
      return;
    }


    this.isSubmitting.set(true);

    this.loginService
      .login(
        {
          username: data.username,
          password: data.password,
        },
        this.rememberMe()
      )
      .subscribe({
        next: () => {
          this.isSubmitting.set(false);
          this.router.navigateByUrl('');
        },
        error: (err: unknown) => {
          console.error('❌ Error en login:', err);
          this.isSubmitting.set(false);
        },
      });
  }
  /* =======================
     ERRORS
     ======================= */

  hasFieldError(field: string): boolean {
    return this.errors().some(e => e.field === field);
  }

  getFieldError(field: string): string | null {
    return this.errors().find(e => e.field === field)?.message || null;
  }

  /* =======================
     NAVIGATION
     ======================= */

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }

  navigateToPasswordReset(): void {
    this.router.navigate(['/forgot-password']);
  }
}