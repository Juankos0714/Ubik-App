import { Component, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ForgotService } from '../../../core/services/forgot.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toValidatorFn, validateEmail, validatePassword } from '../../../core/utils/validation.utils';
import { Inputcomponent } from '../../../components/input/input';

@Component({
  selector: 'app-recover-account',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, Inputcomponent],
  templateUrl: './recover-account.component.html',
})
export class RecoverAccountComponent implements OnInit {
  step = signal(1);
  loading = signal(false);
  error = signal<string | null>(null);
  success = signal<string | null>(null);
  showPassword = signal(false);

  togglePassword() {
    this.showPassword.update((v) => !v);
  }

  private fb = new FormBuilder();

  private platformId = inject(PLATFORM_ID);

  constructor(
    private forgotService: ForgotService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.route.queryParamMap.subscribe(params => {
        const token = params.get('token');
        if (token) {
          this.form.patchValue({ token });
          this.step.set(2);
        }
      });
    }
  }

  form = this.fb.nonNullable.group({
    email: ['', [toValidatorFn(validateEmail, 'email')]],
    token: ['', [Validators.required]],
    newPassword: ['', [toValidatorFn(validatePassword, 'newPassword')]],
  });

  sendEmail() {
    const emailCtrl = this.form.controls.email;
    emailCtrl.markAsTouched();

    if (emailCtrl.invalid || this.loading()) return;

    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);

    this.forgotService.requestReset(emailCtrl.value).subscribe({
      next: (res) => {
        console.log('requestReset OK', res);
        this.step.set(2);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('requestReset ERROR FULL:', err);
        this.loading.set(false);
        this.error.set('No se pudo enviar el correo de activación. Verifica si el correo es correcto.');
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
      this.error.set('Revisa el código de recuperación y la contraseña.');
      return;
    }

    if (this.loading()) return;

    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);

    this.forgotService.resetPassword(token, newPassword).subscribe({
      next: (res) => {
        console.log('resetPassword OK', res);
        this.loading.set(false);
        this.error.set(null);
        this.success.set('¡Tu cuenta ha sido reactivada exitosamente! Ya puedes iniciar sesión con tu nueva contraseña.');
      },
      error: (err) => {
        console.error('resetPassword ERROR FULL:', err);
        this.loading.set(false);
        this.success.set(null);
        this.error.set('No se pudo reactivar la cuenta. Es posible que el código sea inválido o haya expirado.');
      }
    });
  }
}
