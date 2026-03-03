import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';

export interface Department {
  id: number;
  name: string;
  municipalities: string[];
}

@Injectable({ providedIn: 'root' })
export class ColombiaService {

  private http = inject(HttpClient);

  // JSON cargado UNA vez y cacheado en memoria (shareReplay)
  private data$: Observable<Department[]> = this.http
    .get<Department[]>('/assets/data/colombia.json')
    .pipe(shareReplay(1));

  /** Todos los departamentos con sus municipios */
  getAll(): Observable<Department[]> {
    return this.data$;
  }

  /** Solo nombres de departamentos */
  getDepartments(): Observable<string[]> {
    return this.data$.pipe(map(deps => deps.map(d => d.name)));
  }

  /** Municipios de un departamento específico */
  getMunicipalities(departmentName: string): Observable<string[]> {
    return this.data$.pipe(
      map(deps => {
        const dep = deps.find(d => d.name === departmentName);
        return dep?.municipalities ?? [];
      })
    );
  }
}