import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { finalize, switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { RoomService } from '../../../../core/services/room.service';
import { CloudinaryService } from '../../../../core/services/Cloudinary.service';

import type { Service, RoomCreatePayload, RoomType } from '../types/create-room.type';

@Component({
  selector: 'app-create-room',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-room.component.html',
})
export class CreateRoomComponent implements OnInit, OnDestroy {
  form: FormGroup;

  loading = false;
  loadingServices = false;
  error: string | null = null;

  motelId!: number;

  // Servicios (API)
  availableServices: Service[] = [];
  selectedServiceIds: Set<number> = new Set();

  // Imágenes (frontend)
  roomImages: File[] = [];
  imagePreviews: string[] = []; // object URLs

  readonly roomTypes: RoomType[] = ['STANDARD', 'SUITE', 'DELUXE', 'VIP'];

  private readonly MAX_IMAGE_MB = 5;

  constructor(
    private fb: FormBuilder,
    private roomService: RoomService,
    private cloudinary: CloudinaryService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.form = this.fb.group({
      number:      ['', [Validators.required]],
      roomType:    ['STANDARD', [Validators.required]],
      price:       [null, [Validators.required, Validators.min(1)]], // > 0
      description: ['', [Validators.required]],
      latitude:  [null as number | null, ],
      longitude: [null as number | null,],
    });
  }

  ngOnInit(): void {
    const paramId =
      this.route.snapshot.paramMap.get('motelId') ??
      this.route.snapshot.queryParamMap.get('motelId');

    if (!paramId) {
      this.error = 'No se encontró el ID del motel.';
      return;
    }

    this.motelId = Number(paramId);
    this.loadServices();
  }

  ngOnDestroy(): void {
    // liberar object URLs
    this.imagePreviews.forEach((url) => this.cloudinary.revokePreview(url));
  }

  // ─── Navegación ─────────────────────────────────────────────────────────────
  cancel(): void {
    this.router.navigate(['/motelProfile', this.motelId]);
  }

  // ─── Cargar servicios ───────────────────────────────────────────────────────
  private loadServices(): void {
    this.loadingServices = true;

    // Debes tener en RoomService: getAllServices(): Observable<Service[]>
    this.roomService.getAllServices().subscribe({
      next: (services: Service[]) => {
        this.availableServices = services;
        this.loadingServices = false;
      },
      error: () => {
        this.error = 'Error cargando los servicios disponibles.';
        this.loadingServices = false;
      },
    });
  }

  // ─── Servicios ──────────────────────────────────────────────────────────────
  toggleService(id: number): void {
    if (this.selectedServiceIds.has(id)) this.selectedServiceIds.delete(id);
    else this.selectedServiceIds.add(id);
  }

  isServiceSelected(id: number): boolean {
    return this.selectedServiceIds.has(id);
  }

  // ─── Imágenes ───────────────────────────────────────────────────────────────
  onImagesSelected(evt: Event): void {
    const input = evt.target as HTMLInputElement;
    if (!input.files) return;

    // limpiar previews anteriores
    this.imagePreviews.forEach((url) => this.cloudinary.revokePreview(url));
    this.imagePreviews = [];
    this.roomImages = [];

    const files = Array.from(input.files);

    const valid: File[] = [];
    const rejected: string[] = [];

    for (const f of files) {
      if (!this.cloudinary.isValidImage(f)) {
        rejected.push(`${f.name} (tipo no soportado)`);
        continue;
      }
      if (!this.cloudinary.isValidSize(f, this.MAX_IMAGE_MB)) {
        rejected.push(`${f.name} (> ${this.MAX_IMAGE_MB}MB)`);
        continue;
      }
      valid.push(f);
    }

    this.roomImages = valid;
    this.imagePreviews = valid.map((f) => this.cloudinary.createPreview(f));

    if (rejected.length > 0) {
      this.error = `Algunas imágenes se ignoraron: ${rejected.join(', ')}`;
    }
  }

  removeImage(index: number): void {
    const preview = this.imagePreviews[index];
    if (preview) this.cloudinary.revokePreview(preview);

    this.roomImages.splice(index, 1);
    this.imagePreviews.splice(index, 1);
  }

  // ─── Submit ─────────────────────────────────────────────────────────────────
  submit(): void {
    this.error = null;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.roomImages.length === 0) {
      this.error = 'Debes subir al menos una imagen de la habitación.';
      return;
    }

    if (this.selectedServiceIds.size === 0) {
      this.error = 'Selecciona al menos 1 servicio.';
      return;
    }

    const v = this.form.getRawValue() as {
      number: string;
      roomType: RoomType;
      price: number;
      description: string;
      latitude: number | null;
      longitude: number | null;
    };

    const folderSuffix = this.buildFolderSuffix(v.number);

    this.loading = true;

    this.cloudinary
      .uploadMultiple(this.roomImages, folderSuffix)
      .pipe(
        switchMap((imageUrls: string[]) => {
          if (!imageUrls || imageUrls.length === 0) {
            return throwError(() => new Error('No se pudieron subir las imágenes a Cloudinary.'));
          }

          const payload: RoomCreatePayload = {
            motelId: this.motelId,
            number: v.number.trim(),
            roomType: v.roomType,
            price: Number(v.price),
            description: v.description?.trim() ?? '',
            latitude: null,
            longitude: null,
            imageUrls,
            serviceIds: Array.from(this.selectedServiceIds),
          };

          // Debes tener en RoomService: createRoom(payload: RoomCreatePayload)
          return this.roomService.createRoom(payload);
        }),
        finalize(() => (this.loading = false)),
      )
      .subscribe({
        next: () => {
          this.router.navigate(['/listProperty']);
        },
        error: (err) => {
          this.error = err?.message ?? err?.error?.message ?? 'Error creando la habitación.';
        },
      });
  }

  private buildFolderSuffix(roomNumber: string): string {
    const safeRoom = (roomNumber ?? '')
      .trim()
      .replace(/\s+/g, '_')
      .replace(/[^a-zA-Z0-9_-]/g, '');

    return `motel_${this.motelId}/room_${safeRoom || 'room'}`;
  }
}