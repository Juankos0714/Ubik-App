import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { PropertyUserService } from '../../core/services/list-motel.service';
import { Motel } from '../../core/models/motel.model';

type MotelListItem = Motel & { mainImageUrl?: string | null };

@Component({
  selector: 'app-property-user',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './property-user.component.html',
})
export class PropertyUserComponent implements OnInit {
  properties: MotelListItem[] = [];
  loading = false;
  errorMsg: string | null = null;

  private isBrowser: boolean;

  constructor(
    private propertyUserService: PropertyUserService,
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) this.loadProperties();
  }

  loadProperties() {
    this.loading = true;
    this.errorMsg = null;

    this.propertyUserService
      .getMyMotels()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data) => {
          this.properties = (data ?? []).map((p: any) => ({
            ...p,

            mainImageUrl:
              p.imageUrls?.[0] ??     //  lo que te devuelve la API
              p.imagesUrls?.[0] ??    // por si alguna vez lo envías así
              p.imagesUrl ??          //  lo que tu modelo dice que existe (singular)
              null,
          }));
        },
        error: (err) => {
          console.error('Error cargando moteles:', err);
          this.errorMsg = 'No se pudieron cargar tus moteles. Revisa sesión/token.';
        },
      });
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

  trackById(_index: number, item: MotelListItem) {
    return item.id;
  }
}