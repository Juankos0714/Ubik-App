import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { PropertyUserService } from '../../core/services/list-motel.service';
import { Motel } from '../../core/models/motel.model';

@Component({
  selector: 'app-property-user',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './property-user.component.html',
})
export class PropertyUserComponent implements OnInit {
  properties: Motel[] = [];
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
    // ✅ Evita disparar la llamada en SSR (401 por no mandar Authorization)
    if (this.isBrowser) {
      this.loadProperties();
    }
  }

  loadProperties() {
    this.loading = true;
    this.errorMsg = null;

    this.propertyUserService
      .getMyMotels()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data) => {
          this.properties = data ?? [];
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

  trackById(_index: number, item: Motel) {
    return item.id;
  }
}