import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef, PLATFORM_ID } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ConfirmModal } from '../../../components/confirm-modal/confirm-modal';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, switchMap, take, tap, catchError, of, finalize } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';

import { UsersService, UpdateUserProfileDto } from '../../../core/services/user.service';
import { Users } from '../../../core/models/users.model';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProfileComponent {
  private fb = inject(FormBuilder);
  private usersService = inject(UsersService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private AuthService = inject(AuthService);
  private platformId = inject(PLATFORM_ID);
  private dialog = inject(Dialog);

  loading = true;
  saving = false;
  errorMsg: string | null = null;
  successMsg: string | null = null;
  deleting = false;

  // Form (sin password ni roleId)
  form = this.fb.nonNullable.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: [''],
    anonymous: [false],
    birthDate: [null as Date | null],
    longitude: [null as number | null],
    latitude: [null as number | null],
  });

  // Para usar en template si quieres mostrar datos actuales
  profile: Users | null = null;

  //location 
  gettingLocation = false;
  locationStatus: string | null = null;

  error: string | null = null;

  constructor() {
    // Precarga: si hay cache úsalo; si no, loadProfile()
    this.usersService.profile$
      .pipe(
        take(1),
        switchMap((p) => (p ? of(p) : this.usersService.loadProfile().pipe(take(1)))),
        tap((p) => {
          this.profile = p;
          this.patchForm(p);
          this.loading = false;
        }),
        catchError((err) => {
          this.loading = false;
          this.errorMsg = 'No se pudo cargar el perfil.';
          return of(null);
        }),
      )
      .subscribe();
  }

  private patchForm(p: Users) {
    // Ojo: birthDate a veces viene string del backend
    const birth = p.birthDate ? new Date(p.birthDate as any) : null;

    this.form.patchValue({
      username: p.username ?? '',
      email: p.email ?? '',
      phoneNumber: p.phoneNumber ?? '',
      anonymous: !!p.anonymous,
      birthDate: birth,
      longitude: p.longitude ?? null,
      latitude: p.latitude ?? null,
    });
  }

  get f() {
    return this.form.controls;
  }

  onSave() {
    this.errorMsg = null;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.saving = true;

    const dto: UpdateUserProfileDto = {
      username: this.form.value.username!,
      email: this.form.value.email!,
      phoneNumber: this.form.value.phoneNumber || '',
      anonymous: !!this.form.value.anonymous,
      birthDate: this.form.value.birthDate ?? null,
      longitude: this.form.value.longitude ?? null,
      latitude: this.form.value.latitude ?? null,
    };

    this.usersService
      .updateProfile(dto)
      .pipe(
        take(1),
        finalize(() => {
          this.saving = false;
          this.cdr.markForCheck(); // 🔥 importante si estás zoneless/OnPush estricto
        }),
        tap(() => {
          this.router.navigate(['/userProfile']);
        }),
        catchError(() => {
          this.errorMsg = 'No se pudo guardar. Intenta de nuevo.';
          return of(null);
        }),
      )
      .subscribe();
  }

  onBirthDateChange(event: Event) {
    const input = event.target as HTMLInputElement;

    this.form.patchValue({ birthDate: input.valueAsDate });
  }

  onDeleteProfile() {
    this.errorMsg = null;

    const dialogRef = this.dialog.open(ConfirmModal, {
      data: {
        title: 'Eliminar cuenta',
        message: '¿Estás seguro de que deseas eliminar tu perfil permanentemente? Esta acción borrará todos tus datos y no se puede deshacer.',
        confirmText: 'Sí, eliminar cuenta',
        cancelText: 'Cancelar',
      },
      panelClass: ['!rounded-2xl'],
    });

    dialogRef.closed.subscribe((confirmed) => {
      if (!confirmed) return;

      this.deleting = true;
      this.executeDeleteProfile();
    });
  }

  private executeDeleteProfile() {
    this.usersService
      .deleteProfile()
      .pipe(
        take(1),
        finalize(() => {
          this.deleting = false;
          this.cdr.markForCheck();
        }),
        catchError((err) => {
          console.error('Error delete profile', err);
          this.errorMsg = 'No se pudo eliminar el perfil.';
          return of(false);
        }),
      )
      .subscribe((res) => {
        if (res === false) return;

        this.successMsg = 'Tu cuenta ha sido eliminada exitosamente. Serás redirigido en breve.';
        this.cdr.markForCheck();

        if (isPlatformBrowser(this.platformId)) {
          setTimeout(() => {
            // ✅ limpia cache del perfil en el front
            this.usersService.clearProfile();
            this.AuthService.logout();
            this.router.navigate(['']);
          }, 3000);
        }
      });
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
        this.form.patchValue({ latitude, longitude });
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
    const lat = this.form.get('latitude')?.value;
    const lng = this.form.get('longitude')?.value;
    return typeof lat === 'number' && typeof lng === 'number';
  }

  get locationText(): string {
    const lat = this.form.get('latitude')?.value;
    const lng = this.form.get('longitude')?.value;
    if (typeof lat !== 'number' || typeof lng !== 'number') return '';
    return `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  }

  onCancel() {
    this.router.navigate(['/userProfile']);
  }
}
