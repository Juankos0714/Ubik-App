import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';

import { finalize, switchMap } from 'rxjs/operators';
import { throwError, forkJoin, of } from 'rxjs';

import { RoomService } from '../../../../core/services/room.service';
import { CloudinaryService } from '../../../../core/services/Cloudinary.service';
import { Room } from '../../../../core/models/room.model';
import { AlertModal } from '../../../../components/alert-modal/alert-modal';
import { ConfirmModal } from '../../../../components/confirm-modal/confirm-modal';


import type { Service, RoomType } from '../../create-room/types/create-room.type';

@Component({
  selector: 'app-edit-room',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-room.component.html',
})
export class EditRoomComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private roomService = inject(RoomService);
  private cloudinary = inject(CloudinaryService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private dialog = inject(Dialog);

  form: FormGroup;
  loading = false;
  loadingData = false;
  loadingServices = false;
  error: string | null = null;
  
  roomId!: number;
  room: Room | null = null;

  // Servicios
  availableServices: Service[] = [];
  selectedServiceIds: Set<number> = new Set();

  // Imágenes (nuevas)
  newRoomImages: File[] = [];
  newImagePreviews: string[] = [];
  
  // Imágenes actuales (URL)
  existingImageUrls: string[] = [];

  readonly roomTypes: RoomType[] = ['STANDARD', 'SUITE', 'DELUXE', 'VIP'];
  private readonly MAX_IMAGE_MB = 5;

  constructor() {
    this.form = this.fb.group({
      number:      ['', [Validators.required]],
      roomType:    ['STANDARD', [Validators.required]],
      price:       [null, [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required]],
      isAvailable: [true, [Validators.required]],
      latitude:    [null],
      longitude:   [null],
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.error = 'No se encontró el ID de la habitación.';
      return;
    }
    this.roomId = id;
    this.loadData();
  }

  ngOnDestroy(): void {
    this.newImagePreviews.forEach((url) => this.cloudinary.revokePreview(url));
  }

  private loadData(): void {
    this.loadingData = true;
    this.loadingServices = true;

    forkJoin({
      room: this.roomService.getRoomById(this.roomId),
      services: this.roomService.getAllServices()
    }).pipe(
      finalize(() => {
        this.loadingData = false;
        this.loadingServices = false;
      })
    ).subscribe({
      next: (res) => {
        this.room = res.room;
        this.availableServices = res.services;
        this.fillForm(res.room);
      },
      error: () => {
        this.error = 'Error cargando los datos de la habitación.';
      }
    });
  }

  private fillForm(room: Room): void {
    this.form.patchValue({
      number: room.number,
      roomType: room.roomType,
      price: room.price,
      description: room.description,
      isAvailable: room.isAvailable,
      latitude: room.latitude,
      longitude: room.longitude
    });

    this.existingImageUrls = [...(room.imageUrls || [])];
    this.selectedServiceIds = new Set(room.serviceIds || []);
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

    this.newRoomImages.push(...valid);
    this.newImagePreviews.push(...valid.map((f) => this.cloudinary.createPreview(f)));

    if (rejected.length > 0) {
      this.error = `Algunas imágenes se ignoraron: ${rejected.join(', ')}`;
    }
  }

  removeNewImage(index: number): void {
    const preview = this.newImagePreviews[index];
    if (preview) this.cloudinary.revokePreview(preview);

    this.newRoomImages.splice(index, 1);
    this.newImagePreviews.splice(index, 1);
  }

  removeExistingImage(index: number): void {
    this.existingImageUrls.splice(index, 1);
  }

  // ─── Submit ─────────────────────────────────────────────────────────────────
  submit(): void {
    this.error = null;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.existingImageUrls.length === 0 && this.newRoomImages.length === 0) {
      this.error = 'La habitación debe tener al menos una imagen.';
      return;
    }

    if (this.selectedServiceIds.size === 0) {
      this.error = 'Selecciona al menos 1 servicio.';
      return;
    }

    this.loading = true;

    const v = this.form.getRawValue();
    const folderSuffix = `motel_${this.room?.motelId}/room_${v.number.replace(/\s+/g, '_')}`;

    const uploadObs = this.newRoomImages.length > 0 
      ? this.cloudinary.uploadMultiple(this.newRoomImages, folderSuffix)
      : of([]);

    uploadObs.pipe(
      switchMap((newUrls: string[]) => {
        const finalImageUrls = [...this.existingImageUrls, ...newUrls];
        
        const payload = {
          number: v.number.trim(),
          roomType: v.roomType,
          price: Number(v.price),
          description: v.description?.trim() ?? '',
          isAvailable: v.isAvailable,
          latitude: v.latitude,
          longitude: v.longitude,
          imageUrls: finalImageUrls,
          serviceIds: Array.from(this.selectedServiceIds),
        };

        return this.roomService.updateRoom(this.roomId, payload);
      }),
      finalize(() => (this.loading = false))
    ).subscribe({
      next: () => {
        this.router.navigate(['/roominfo'], { queryParams: { id: this.roomId } });
      },
      error: (err) => {
        this.error = err?.error?.message ?? 'Error al actualizar la habitación.';
      }
    });
  }

  deleteRoom(): void {
    this.loading = true;
    this.error = null;

    this.roomService.getActiveReservations(this.roomId).pipe(
      switchMap(reservations => {
        this.loading = false;

        if (reservations && reservations.length > 0) {
          this.dialog.open(AlertModal, {
            data: {
              title: 'No se puede eliminar',
              message: `Esta habitación tiene ${reservations.length} reserva${reservations.length > 1 ? 's' : ''} activa${reservations.length > 1 ? 's' : ''}. Cancélalas primero antes de eliminar la habitación.`,
              type: 'warning',
              closeText: 'Entendido',
            },
            backdropClass: 'bg-black/60',
          });
          return throwError(() => new Error('active_reservations'));
        }

        const confirmRef = this.dialog.open(ConfirmModal, {
          data: {
            title: 'Eliminar habitación',
            message: '¿Estás seguro de que deseas eliminar esta habitación? Esta acción no se puede deshacer.',
            confirmText: 'Sí, eliminar',
            cancelText: 'Cancelar'
          },
          panelClass: ['!rounded-2xl'],
        });

        return confirmRef.closed.pipe(
          switchMap(confirmed => {
            if (!confirmed) return throwError(() => new Error('cancelled'));
            this.loading = true;
            return this.roomService.deleteRoom(this.roomId);
          })
        );

      }),
      finalize(() => this.loading = false)
    ).subscribe({
      next: () => {
        this.router.navigate(['/dashboard/owner']);
      },
      error: (err) => {
        if (err?.message === 'active_reservations' || err?.message === 'cancelled') return;
        this.error = err?.error?.message ?? 'No se pudo eliminar la habitación.';
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/roominfo'], { queryParams: { id: this.roomId } });
  }
}
