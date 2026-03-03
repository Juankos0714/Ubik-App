import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NonNullableFormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin, of, throwError } from 'rxjs';
import { switchMap, map, finalize } from 'rxjs/operators';

import { MotelService } from '../../../../core/services/motel.service';
import { CloudinaryService } from '../../../../core/services/Cloudinary.service'; 
import { AuthService } from '../../../../core/services/auth.service';
import { CreateMotelRequest, DocumentType } from '../types/create-motel.types';
import { Motel } from '../../../../core/models/motel.model';

@Component({
  selector: 'app-create-motel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-motel.component.html',
})
export class CreateMotelComponent implements OnInit {
  form: FormGroup;

  loading = false;
  gettingLocation = false;
  error: string | null = null;
  locationStatus: string | null = null;

  readonly documentTypes: DocumentType[] = ['CC', 'NIT', 'CE', 'PASAPORTE'];

  profileImage: File | null = null;
  motelImages: File[] = [];
  rntFile: File | null = null;
  ruesFile: File | null = null;
  legalDocumentFile: File | null = null;

  constructor(
    private fb: NonNullableFormBuilder,
    private motelService: MotelService,
    private cloudinary: CloudinaryService,
    private auth: AuthService,
    private router: Router,
  ) {
    // NonNullable para que TS no te ponga "payload" en rojo con string|null
    this.form = this.fb.group({
      name: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      address: this.fb.control('', { validators: [Validators.required] }),
      city: this.fb.control('', { validators: [Validators.required] }),

      phoneNumber: this.fb.control<string | null>(null),
      description: this.fb.control<string | null>(null),
      latitude: this.fb.control<number | null>(null),
      longitude: this.fb.control<number | null>(null),

      ownerDocumentType: this.fb.control<DocumentType>('CC', {
        validators: [Validators.required],
      }),
      ownerDocumentNumber: this.fb.control('', { validators: [Validators.required] }),
      ownerFullName: this.fb.control('', { validators: [Validators.required] }),
      legalRepresentativeName: this.fb.control<string | null>(null),
    });
  }

  ngOnInit(): void {}

  // ─────────────────────────────────────────────────────────────
  // Template methods
  // ─────────────────────────────────────────────────────────────
  getUserLocation(): void {
    this.error = null;

    if (!navigator.geolocation) {
      this.error = 'Tu navegador no soporta geolocalización.';
      return;
    }

    this.gettingLocation = true;
    this.locationStatus = 'Obteniendo ubicación...';

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        this.form.patchValue({ latitude: lat, longitude: lng });
        this.locationStatus = `Ubicación lista: ${lat.toFixed(6)}, ${lng.toFixed(6)}`;
        this.gettingLocation = false;
      },
      (err) => {
        this.gettingLocation = false;
        this.locationStatus = null;

        if (err.code === err.PERMISSION_DENIED) this.error = 'Permiso de ubicación denegado.';
        else if (err.code === err.POSITION_UNAVAILABLE) this.error = 'No se pudo obtener tu ubicación.';
        else if (err.code === err.TIMEOUT) this.error = 'Tiempo de espera agotado al obtener ubicación.';
        else this.error = 'Error obteniendo ubicación.';
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  }

  onProfileImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.profileImage = input.files?.[0] ?? null;
  }

  onMotelImagesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.motelImages = Array.from(input.files ?? []);
  }

  clearGallery(input: HTMLInputElement): void {
    this.motelImages = [];
    input.value = '';
  }

  removeMotelImage(index: number): void {
    this.motelImages.splice(index, 1);
  }

  onRntSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.rntFile = input.files?.[0] ?? null;
  }

  onRuesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.ruesFile = input.files?.[0] ?? null;
  }

  onLegalDocSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.legalDocumentFile = input.files?.[0] ?? null;
  }

  // ─────────────────────────────────────────────────────────────
  // Submit
  // ─────────────────────────────────────────────────────────────
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

    if (!this.profileImage) {
      this.error = 'Debes subir la foto de perfil del motel.';
      return;
    }

    const userId: number | undefined = this.auth.user()?.id;
    if (!userId) {
      this.error = 'No hay usuario logueado.';
      return;
    }

    this.loading = true;

    const v = this.form.getRawValue();

    // 1) Subir a Cloudinary
    const rnt$ = this.cloudinary.uploadFile(this.rntFile, 'motels/legal');
    const rues$ = this.cloudinary.uploadFile(this.ruesFile, 'motels/legal');

    const legalDoc$ = this.legalDocumentFile
      ? this.cloudinary.uploadFile(this.legalDocumentFile, 'motels/legal')
      : of(null as string | null);

    const profile$ = this.cloudinary.uploadFile(this.profileImage, 'motels/profile');

    const gallery$ = this.motelImages?.length
      ? this.cloudinary.uploadMultiple(this.motelImages, 'motels/gallery')
      : of([] as string[]);

    forkJoin({
      rntUrl: rnt$,
      ruesUrl: rues$,
      legalUrl: legalDoc$,
      profileUrl: profile$,
      galleryUrls: gallery$,
    })
      .pipe(
        // 2) Crear motel con JSON (SEGÚN TU DOC)
        switchMap(({ rntUrl, ruesUrl, legalUrl, profileUrl, galleryUrls }) => {
          const payload: CreateMotelRequest = {
            name: v.name,
            address: v.address,
            city: v.city,
            phoneNumber: v.phoneNumber ?? null,
            description: v.description ?? null,
            propertyId: userId,

            latitude: v.latitude ?? null,
            longitude: v.longitude ?? null,

            rues: ruesUrl,
            rnt: rntUrl,

            ownerDocumentType: v.ownerDocumentType,
            ownerDocumentNumber: v.ownerDocumentNumber,
            ownerFullName: v.ownerFullName,
            legalRepresentativeName: v.legalRepresentativeName ?? null,
            legalDocumentUrl: legalUrl,

            imageUrls: galleryUrls ?? [],
          };

          return this.motelService.createMotelWithImages(payload).pipe(
            map((createdMotel: Motel) => ({ createdMotel, profileUrl })),
          );
        }),

        // 3) Setear imagen de perfil (PUT /motels/{id}/images/profile)
        switchMap(({ createdMotel, profileUrl }) => {
          const motelId = Number((createdMotel as any)?.id);
          if (!motelId || Number.isNaN(motelId)) {
            return throwError(() => new Error('El backend no devolvió un id válido del motel.'));
          }

          return this.motelService.setProfileImage(motelId, profileUrl).pipe(map(() => createdMotel));
        }),

        finalize(() => (this.loading = false)),
      )
      .subscribe({
        next: () => this.router.navigate(['/listProperty']),
        error: (err) => {
          this.error = err?.error?.message ?? err?.message ?? 'Error creando el motel.';
        },
      });
  }
}