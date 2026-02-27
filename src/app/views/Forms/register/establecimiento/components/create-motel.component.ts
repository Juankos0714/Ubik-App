import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { MotelRegisterService } from '../../../../../core/services/register-motel.service';
import { CloudinaryService } from '../../../../../core/services/Cloudinary.service';
import { AuthService } from '../../../../../core/middleware/auth.service';
import {
  CreateMotelRequest,
  DocumentType,
} from '../types/register-establishment.types';

@Component({
  selector: 'app-create-motel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-motel.component.html',
})
export class CreateMotelComponent implements OnInit {
  form: FormGroup;

  loading       = false;
  gettingLocation = false;
  error: string | null   = null;
  locationStatus: string | null = null;

  readonly documentTypes: DocumentType[] = ['CC', 'NIT', 'CE', 'PASAPORTE'];

  motelImages: File[]        = [];
  rntFile: File | null       = null;
  ruesFile: File | null      = null;
  legalDocumentFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private motelService: MotelRegisterService,
    private cloudinary: CloudinaryService,
    private auth: AuthService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      name:                    ['', [Validators.required, Validators.minLength(3)]],
      address:                 ['', [Validators.required]],
      phoneNumber:             [null],
      description:             [null],
      city:                    ['', [Validators.required]],
      latitude:                [null as number | null],
      longitude:               [null as number | null],
      ownerDocumentType:       ['CC', [Validators.required]],
      ownerDocumentNumber:     ['', [Validators.required]],
      ownerFullName:           ['', [Validators.required]],
      legalRepresentativeName: [null],
    });
  }

  ngOnInit(): void {}

  // ─── Geolocalización ────────────────────────────────────────────────────────
  getUserLocation(): void {
    if (!navigator.geolocation) {
      this.locationStatus = 'Geolocalización no soportada.';
      return;
    }

    this.gettingLocation = true;
    this.locationStatus  = 'Solicitando permiso...';
    this.error           = null;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.gettingLocation = false;
        this.form.patchValue({
          latitude:  pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
        this.locationStatus = 'Ubicación obtenida.';
      },
      (err) => {
        this.gettingLocation = false;
        this.locationStatus  = null;
        const msg: Record<number, string> = {
          1: 'Permiso de ubicación denegado.',
          2: 'Ubicación no disponible.',
          3: 'Timeout obteniendo ubicación.',
        };
        this.error = msg[err.code] || 'Error obteniendo ubicación.';
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  }

  // ─── File handlers ──────────────────────────────────────────────────────────
  onMotelImagesSelected(evt: Event): void {
    const input = evt.target as HTMLInputElement;
    this.motelImages = input.files ? Array.from(input.files) : [];
  }

  onRntSelected(evt: Event): void {
    this.rntFile = this.extractFirstFile(evt);
  }

  onRuesSelected(evt: Event): void {
    this.ruesFile = this.extractFirstFile(evt);
  }

  onLegalDocSelected(evt: Event): void {
    this.legalDocumentFile = this.extractFirstFile(evt);
  }

  private extractFirstFile(evt: Event): File | null {
    const input = evt.target as HTMLInputElement;
    return input.files && input.files.length > 0 ? input.files[0] : null;
  }

  // ─── Submit ─────────────────────────────────────────────────────────────────
  submit(): void {
    this.error = null;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (!this.rntFile || !this.ruesFile) {
      this.error = 'Debes subir los archivos de RNT y RUES.';
      return;
    }

    const userId: number | undefined = this.auth.user()?.id;
    if (!userId) {
      this.error = 'No hay usuario logueado.';
      return;
    }

    this.loading = true;
    const v = this.form.getRawValue();

    const rnt$      = this.cloudinary.uploadFile(this.rntFile, 'legal');
    const rues$     = this.cloudinary.uploadFile(this.ruesFile, 'legal');
    const images$   = this.motelImages.length
      ? this.cloudinary.uploadMultiple(this.motelImages, 'gallery')
      : of([] as string[]);
    const legalDoc$ = this.legalDocumentFile
      ? this.cloudinary.uploadFile(this.legalDocumentFile, 'legal')
      : of(null as string | null);

    forkJoin({ rntUrl: rnt$, ruesUrl: rues$, imageUrls: images$, legalUrl: legalDoc$ })
      .pipe(
        switchMap(({ rntUrl, ruesUrl, imageUrls, legalUrl }) => {
          const payload: CreateMotelRequest = {
            name:                    v.name,
            address:                 v.address,
            city:                    v.city,
            phoneNumber:             v.phoneNumber || null,
            description:             v.description || null,
            propertyId:              userId,
            latitude:                v.latitude !== undefined ? v.latitude : null,
            longitude:               v.longitude !== undefined ? v.longitude : null,
            imageUrls:               imageUrls,
            rnt:                     rntUrl,
            rues:                    ruesUrl,
            ownerDocumentType:       v.ownerDocumentType as DocumentType,
            ownerDocumentNumber:     v.ownerDocumentNumber,
            ownerFullName:           v.ownerFullName,
            legalRepresentativeName: v.legalRepresentativeName || null,
            legalDocumentUrl:        legalUrl,
          };
          return this.motelService.createMotel(payload);
        }),
      )
      .subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/listProperty']);
        },
        error: (err) => {
          this.loading = false;
          this.error   = (err && err.error && err.error.message)
            ? err.error.message
            : 'Error creando el motel.';
        },
      });
  }
}