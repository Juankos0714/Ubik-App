import { Injectable, signal, computed } from '@angular/core';

export interface SearchState {
  department: string;
  city:       string;
  query:      string;
}

/**
 * Servicio compartido entre Header y Explore.
 *
 * El Header escribe con set().
 * El Explore lee con state() y llama clear() solo cuando ya procesó los datos.
 *
 * El flag `pending` evita que el estado se limpie antes de que
 * explore haya terminado de cargar sus cards.
 */
@Injectable({ providedIn: 'root' })
export class SearchService {

  private _state = signal<SearchState>({ department: '', city: '', query: '' });

  readonly state    = this._state.asReadonly();
  readonly hasPending = computed(() => {
    const s = this._state();
    return !!(s.department || s.city || s.query);
  });

  set(partial: Partial<SearchState>) {
    this._state.update(prev => ({ ...prev, ...partial }));
  }

  /** Llamar solo DESPUÉS de haber aplicado el estado a los filtros */
  clear() {
    this._state.set({ department: '', city: '', query: '' });
  }
}