import { Component, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ForgotService } from './services/forgot.service';
import { toValidatorFn, validateEmail,validatePassword, } from '../register/register-user/utils/validation.utils';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {

  step = signal(1);
  loading = signal(false);
  error = signal<string | null>(null);
  private fb: FormBuilder = new FormBuilder();

  constructor(
    private forgotService: ForgotService
  ) {}

    form = this.fb.nonNullable.group({
    email: ['', [toValidatorFn(validateEmail, 'email')]],
    token: ['', []],
    newPassword: ['', []]
    });

  

  // STEP 1 → enviar email
sendEmail() {
    if (this.form.controls.email.invalid) return;

    this.loading.set(true);
    this.error.set(null);

    const email = this.form.controls.email.value; // ← string seguro

    this.forgotService.requestReset(email).subscribe({
        next: () => {
        this.loading.set(false);
        this.step.set(2);
        },
        error: () => {
        this.loading.set(false);
        this.error.set('No se pudo enviar el correo');
        }
    });
    }

  // STEP 2 → reset password
  resetPassword() {
    if (
        this.form.controls.token.invalid ||
        this.form.controls.newPassword.invalid
    ) return;

    this.loading.set(true);
    this.error.set(null);

    const { token, newPassword } = this.form.getRawValue();

    this.forgotService.resetPassword(token, newPassword).subscribe({
    next: () => {
        this.loading.set(false);
        this.step.set(3);
    },
    error: () => {
        this.loading.set(false);
        this.error.set('Token inválido o expirado');
    }
    });
    }
}
