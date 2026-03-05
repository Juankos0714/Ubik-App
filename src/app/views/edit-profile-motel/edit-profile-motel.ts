import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs/operators';

import { Inputcomponent } from '../../components/input/input';
import { Button01 } from '../../components/button-01/button-01';
import { Motel } from '../../core/models/motel.model';
import { MotelService } from '../../core/services/motel.service';
import { CreateMotelRequest } from '../Forms/create-motel/types/create-motel.types'; // ajusta ruta si no coincide

@Component({
  selector: 'app-edit-profile-motel',
  standalone: true,
  imports: [CommonModule, Inputcomponent, Button01],
  templateUrl: './edit-profile-motel.html',
})
export class EditProfileMotel implements OnInit {
  private motelService = inject(MotelService);

  profile!: Motel;
  loading = false;
  error: string | null = null;
  success = false;

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    this.loading = true;
    this.error = null;

    this.motelService.getProfile()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data: Motel) => {
          this.profile = structuredClone(data);
        },
        error: (err: any) => {
          console.error('Error cargando perfil', err);
          this.error = err?.error?.message ?? 'No se pudo cargar el perfil';
        },
      });
  }

  saveProfile(): void {
    this.loading = true;
    this.success = false;
    this.error = null;

    const id = (this.profile as any)?.id as number | undefined;
    if (!id) {
      this.error = 'No se encontró el id del motel';
      this.loading = false;
      return;
    }

    // Construye SOLO lo editable/permitido por tu backend
    const payload: Partial<CreateMotelRequest> = {
      name: this.profile.name,
      address: this.profile.address,
      city: this.profile.city,
      phoneNumber: (this.profile as any).phoneNumber ?? null,
      description: (this.profile as any).description ?? null,
      latitude: (this.profile as any).latitude ?? null,
      longitude: (this.profile as any).longitude ?? null,

      ownerDocumentType: (this.profile as any).ownerDocumentType,
      ownerDocumentNumber: (this.profile as any).ownerDocumentNumber,
      ownerFullName: (this.profile as any).ownerFullName,
      legalRepresentativeName: (this.profile as any).legalRepresentativeName ?? null,
    };

    this.motelService.updateMotel(id, payload)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (updated: Motel) => {
          this.profile = structuredClone(updated);
          this.success = true;
        },
        error: (err: any) => {
          console.error('Error guardando perfil', err);
          this.error = err?.error?.message ?? 'No se pudo guardar el perfil';
        },
      });
  }
}