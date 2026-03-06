import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { PropertyUserService } from '../../core/services/list-motel.service';
import { Motel, MotelImage } from '../../core/models/motel.model';
import { Button01 } from "../button-01/button-01";

export type MotelListItem = Motel & {
  // ✅ url lista para pintar en la card/lista
  mainImageUrl: string | null;
};

@Component({
  selector: 'app-property-user',
  standalone: true,
  imports: [CommonModule, RouterModule, Button01],
  templateUrl: './property-user.component.html',
})
export class PropertyUserComponent implements OnInit {
  properties: MotelListItem[] = [];
  loading = false;
  errorMsg: string | null = null;

  // ✅ fallback local
  readonly defaultImg = 'assets/images/motel-placeholder.png';

  private isBrowser: boolean;

  constructor(
    private propertyUserService: PropertyUserService,
    @Inject(PLATFORM_ID) platformId: Object,
    private router: Router,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) this.loadProperties();
  }

  // ✅ COVER → GALLERY → primera → null
  private pickMainImage(images: MotelImage[] | null | undefined): string | null {
    const imgs = images ?? [];

    const cover = imgs.find(i => (i.role ?? '').toUpperCase() === 'COVER')?.url;
    if (cover) return cover;

    const gallery = imgs.find(i => (i.role ?? '').toUpperCase() === 'GALLERY')?.url;
    if (gallery) return gallery;

    return imgs[0]?.url ?? null;
  }

  loadProperties() {
    this.loading = true;
    this.errorMsg = null;

    this.propertyUserService
      .getMyMotels()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data: Motel[] | null | undefined) => {
          this.properties = (data ?? []).map((p: Motel) => ({
            ...p,
            mainImageUrl: this.pickMainImage(p.imageUrls),
          }));
        },
        error: (err) => {
          console.error('Error cargando moteles:', err);
          this.errorMsg = 'No se pudieron cargar tus moteles. Revisa sesión/token.';
        },
      });
  }

  // ✅ reemplaza la imagen si falla la carga
  onImgError(ev: Event) {
    (ev.target as HTMLImageElement).src = this.defaultImg;
  }

  deleteProperty(id: number) {
    if (!confirm('¿Eliminar esta propiedad?')) return;

    this.propertyUserService.deleteProperty(id).subscribe({
      next: () => {
        this.properties = this.properties.filter(p => p.id !== id);
      },
      error: (err) => {
        console.error('Error eliminando motel:', err);
        alert('No se pudo eliminar. Revisa permisos o el endpoint.');
      },
    });
  }

  createRoom(motelId: number) {
    this.router.navigate(['/create-room'], { queryParams: { motelId } });
  }

  trackById(_index: number, item: MotelListItem) {
    return item.id;
  }
}