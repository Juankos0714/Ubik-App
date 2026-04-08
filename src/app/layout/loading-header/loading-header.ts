import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-loading-header',
  imports: [],
  templateUrl: './loading-header.html',
})
export class LoadingHeader {

    // ── Ruta actual ───────────────────────────────────────────────
  currentUrl = signal<string>('/');

  /** True solo cuando estamos en home (path '/') */
  isHome = computed(() => this.currentUrl() === '/');

}
