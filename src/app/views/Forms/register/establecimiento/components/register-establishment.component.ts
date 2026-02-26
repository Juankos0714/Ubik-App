import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

import { ImagePickerComponent } from '../../../../../components/image-picker/image-picker.component';
import { MotelRegisterService } from '../../../../../core/services/register-motel.service';
import { AuthService } from '../../../../../core/middleware/auth.service';
import { CreateMotelRequest, Motel } from '../types/register-establishment.types';

@Component({
  selector: 'app-register-establishment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ImagePickerComponent],
  template: `
    <div class="register-wrapper">
      <div class="register-card">
        <h2 class="title">Registrar Establecimiento</h2>
        <p class="subtitle">Completa la información de tu motel</p>

        <form [formGroup]="form" (ngSubmit)="submit()">

          <!-- ══════════ SECCIÓN 1: Datos básicos ══════════ -->
          <fieldset>
            <legend>Información General</legend>

            <div class="field">
              <label>Nombre *</label>
              <input formControlName="name" placeholder="Nombre del establecimiento" />
              <span class="err" *ngIf="f['name'].touched && f['name'].invalid">
                El nombre es requerido (3–100 caracteres)
              </span>
            </div>

            <div class="field">
              <label>Dirección *</label>
              <input formControlName="address" placeholder="Calle 10 #15-20" />
              <span class="err" *ngIf="f['address'].touched && f['address'].invalid">
                La dirección es requerida
              </span>
            </div>

            <div class="row">
              <div class="field">
                <label>Ciudad *</label>
                <input formControlName="city" placeholder="Medellín" />
                <span class="err" *ngIf="f['city'].touched && f['city'].invalid">
                  La ciudad es requerida
                </span>
              </div>
              <div class="field">
                <label>Teléfono</label>
                <input formControlName="phoneNumber" placeholder="555-0100" />
              </div>
            </div>

            <div class="field">
              <label>Descripción</label>
              <textarea formControlName="description" rows="3" placeholder="Describe tu establecimiento..."></textarea>
            </div>
          </fieldset>

          <!-- ══════════ SECCIÓN 2: Imágenes ══════════ -->
          <fieldset>
            <legend>Imágenes del Establecimiento</legend>

            <!-- ✅ Componente de subida — emite las URLs ya subidas a Cloudinary -->
            <app-image-picker
              label="Fotos del motel (máx. 10)"
              folder="motels"
              [maxImages]="10"
              (urlsChange)="onImagesUploaded($event)"
            ></app-image-picker>

            <span class="err" *ngIf="submitAttempted && imageUrls.length === 0">
              Debes subir al menos una imagen
            </span>
          </fieldset>

          <!-- ══════════ SECCIÓN 3: Información Legal ══════════ -->
          <fieldset>
            <legend>Información Legal</legend>

            <div class="row">
              <div class="field">
                <label>RUES *</label>
                <input formControlName="rues" placeholder="Registro Único Empresarial" />
                <span class="err" *ngIf="f['rues'].touched && f['rues'].invalid">Requerido</span>
              </div>
              <div class="field">
                <label>RNT *</label>
                <input formControlName="rnt" placeholder="Registro Nacional de Turismo" />
                <span class="err" *ngIf="f['rnt'].touched && f['rnt'].invalid">Requerido</span>
              </div>
            </div>

            <div class="row">
              <div class="field">
                <label>Tipo de Documento *</label>
                <select formControlName="ownerDocumentType">
                  <option value="">Seleccionar...</option>
                  <option value="CC">Cédula de Ciudadanía (CC)</option>
                  <option value="NIT">NIT</option>
                  <option value="CE">Cédula de Extranjería (CE)</option>
                  <option value="PASAPORTE">Pasaporte</option>
                </select>
                <span class="err" *ngIf="f['ownerDocumentType'].touched && f['ownerDocumentType'].invalid">Requerido</span>
              </div>
              <div class="field">
                <label>Número de Documento *</label>
                <input formControlName="ownerDocumentNumber" placeholder="1234567890" />
                <span class="err" *ngIf="f['ownerDocumentNumber'].touched && f['ownerDocumentNumber'].invalid">Requerido</span>
              </div>
            </div>

            <div class="field">
              <label>Nombre Completo del Propietario *</label>
              <input formControlName="ownerFullName" placeholder="Juan García López" />
              <span class="err" *ngIf="f['ownerFullName'].touched && f['ownerFullName'].invalid">Requerido</span>
            </div>

            <div class="field">
              <label>Representante Legal (opcional)</label>
              <input formControlName="legalRepresentativeName" placeholder="Nombre del representante legal" />
            </div>

            <div class="field">
              <label>URL Documento Legal (opcional)</label>
              <input formControlName="legalDocumentUrl" placeholder="https://..." />
              <!-- Nota: puedes usar un ImagePickerComponent con folder="legal-docs" para PDFs -->
            </div>
          </fieldset>

          <!-- ══════════ SUBMIT ══════════ -->
          <div class="actions">
            <button
              type="submit"
              class="btn-primary"
              [disabled]="loading || hasUploadingImages"
            >
              <span *ngIf="loading">Registrando...</span>
              <span *ngIf="!loading && hasUploadingImages">Esperando imágenes...</span>
              <span *ngIf="!loading && !hasUploadingImages">Registrar Establecimiento</span>
            </button>
          </div>

          <div class="success-msg" *ngIf="successMsg">{{ successMsg }}</div>
          <div class="error-msg" *ngIf="errorMsg">{{ errorMsg }}</div>

        </form>
      </div>
    </div>
  `,
  styles: [`
    .register-wrapper {
      min-height: 100vh;
      background: #f3f4f6;
      padding: 32px 16px;
      display: flex;
      justify-content: center;
    }

    .register-card {
      background: white;
      border-radius: 16px;
      padding: 32px;
      width: 100%;
      max-width: 700px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .title {
      font-size: 24px;
      font-weight: 700;
      color: #111827;
      margin: 0 0 4px;
    }

    .subtitle {
      color: #6b7280;
      margin: 0 0 24px;
    }

    fieldset {
      border: 1px solid #e5e7eb;
      border-radius: 10px;
      padding: 20px;
      margin-bottom: 20px;

      legend {
        font-weight: 600;
        font-size: 15px;
        color: #374151;
        padding: 0 8px;
      }
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-bottom: 14px;

      label { font-size: 13px; font-weight: 600; color: #374151; }

      input, textarea, select {
        padding: 9px 12px;
        border: 1px solid #d1d5db;
        border-radius: 8px;
        font-size: 14px;
        outline: none;
        transition: border-color 0.2s;
        &:focus { border-color: #6366f1; }
        &.ng-invalid.ng-touched { border-color: #ef4444; }
      }

      textarea { resize: vertical; }
    }

    .row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .err { color: #ef4444; font-size: 12px; }

    .actions { margin-top: 8px; }

    .btn-primary {
      width: 100%;
      padding: 12px;
      background: #6366f1;
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;

      &:hover:not(:disabled) { background: #4f46e5; }
      &:disabled { background: #a5b4fc; cursor: not-allowed; }
    }

    .success-msg {
      margin-top: 12px;
      padding: 10px 14px;
      background: #dcfce7;
      color: #166534;
      border-radius: 8px;
      font-size: 14px;
    }

    .error-msg {
      margin-top: 12px;
      padding: 10px 14px;
      background: #fee2e2;
      color: #991b1b;
      border-radius: 8px;
      font-size: 14px;
    }
  `]
})
export class RegisterEstablishmentComponent implements OnInit {
  form!: FormGroup;
  imageUrls: string[] = [];          // ✅ URLs de Cloudinary recibidas del ImagePickerComponent
  hasUploadingImages = false;        // true mientras alguna imagen sigue subiendo
  loading = false;
  submitAttempted = false;
  successMsg = '';
  errorMsg = '';

  constructor(
    private fb: FormBuilder,
    private motelService: MotelRegisterService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      address: ['', [Validators.required, Validators.maxLength(255)]],
      city: ['', [Validators.required, Validators.maxLength(100)]],
      phoneNumber: ['', Validators.maxLength(20)],
      description: ['', Validators.maxLength(500)],
      rues: ['', [Validators.required, Validators.maxLength(100)]],
      rnt: ['', [Validators.required, Validators.maxLength(100)]],
      ownerDocumentType: ['', Validators.required],
      ownerDocumentNumber: ['', [Validators.required, Validators.maxLength(50)]],
      ownerFullName: ['', [Validators.required, Validators.maxLength(200)]],
      legalRepresentativeName: ['', Validators.maxLength(200)],
      legalDocumentUrl: ['', Validators.maxLength(500)],
    });
  }

  get f() {
    return this.form.controls;
  }

  /**
   * ✅ Callback del ImagePickerComponent.
   * Recibe las URLs de Cloudinary una vez que todas las imágenes están subidas.
   */
  onImagesUploaded(urls: string[]): void {
    this.imageUrls = urls;
    // Si el picker emite antes de que todas terminen, hasUploadingImages
    // se maneja internamente desde el picker (el botón se deshabilita vía [disabled])
  }

  submit(): void {
    this.submitAttempted = true;
    this.successMsg = '';
    this.errorMsg = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const userId = this.auth.user()?.id;
    if (!userId) {
      this.errorMsg = 'No se pudo identificar el usuario. Por favor, inicia sesión nuevamente.';
      return;
    }

    // ✅ El formulario solo se envía cuando hay URLs (imágenes ya subidas)
    // Si quieres permitir sin imágenes, elimina esta validación
    // if (this.imageUrls.length === 0) return;

    const payload: CreateMotelRequest = {
      ...this.form.value,
      propertyId: userId,
      latitude: null,
      longitude: null,
      imageUrls: this.imageUrls,  // ✅ URLs de Cloudinary
    };

    this.loading = true;

    this.motelService.createMotel(payload).subscribe({
      next: (motel: Motel) => {
        this.loading = false;
        this.successMsg = `✅ Motel "${motel.name}" registrado. Estado: ${motel.approvalStatus}`;
        // Opcional: navegar a otra ruta
        // this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        this.loading = false;
        this.errorMsg = err?.error?.message ?? 'Error al registrar el motel. Intenta nuevamente.';
        console.error('Error creando motel:', err);
      },
    });
  }
}