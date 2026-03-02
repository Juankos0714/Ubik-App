import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Service } from '../../core/models/services.model';
import { ColombiaService } from '../../core/services/colombia.service';

export interface Filters {
  priceMin: number | null;
  priceMax: number | null;
  roomTypes: string[];
  cities: string[];
  department: string[] | null;
  onlyAvailable: boolean;
  serviceIds: number[];
  sortBy: 'priceAsc' | 'priceDesc' | null;
  showType: 'rooms' | 'motels' | 'all';
}

interface DialogData {
  roomTypes: string[];
  cities: string[];
  services: Service[];
  filters: Filters;
}

@Component({
  selector: 'app-filter-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-modal.html',
})
export class FilterModal implements OnInit {

  private dialogData    = inject<DialogData>(DIALOG_DATA);
  private dialogRef     = inject(DialogRef<Filters>);
  private colombiaService = inject(ColombiaService);

  roomTypes: string[] = [];
  services: Service[] = [];

  departments: string[] = [];
  municipalities: string[] = [];
  loadingMunicipalities = false;

  showTypeOptions = [
    { value: 'all',    label: 'Todo' },
    { value: 'rooms',  label: 'Habitaciones' },
    { value: 'motels', label: 'Moteles' },
  ];

  sortOptions = [
    { value: '',          label: 'Sin orden' },
    { value: 'priceAsc',  label: 'Menor ↑' },
    { value: 'priceDesc', label: 'Mayor ↓' },
  ];

  filters: Filters = {
    priceMin: null,
    priceMax: null,
    roomTypes: [],
    cities: [],
    department: null,
    onlyAvailable: true,
    serviceIds: [],
    sortBy: null,
    showType: 'all',
  };

  ngOnInit() {
    this.roomTypes = this.dialogData?.roomTypes ?? [];
    this.services  = this.dialogData?.services  ?? [];

    // Restaurar filtros previos al reabrir
    if (this.dialogData?.filters) {
      this.filters = { ...this.dialogData.filters };
    }

    // Cargar departamentos desde JSON local — sin red externa
    this.colombiaService.getDepartments().subscribe(deps => {
      this.departments = deps;
    });

    // Si ya había departamento seleccionado, restaurar municipios
    const dep = this.filters.department?.[0];
    if (dep) {
      this.loadMunicipalities(dep);
    }
  }

  onDepartmentChange(e: Event) {
    const value = (e.target as HTMLSelectElement).value;
    this.filters.department = value ? [value] : [];
    this.filters.cities = [];
    this.municipalities = [];

    if (value) this.loadMunicipalities(value);
  }

  private loadMunicipalities(departmentName: string) {
    this.loadingMunicipalities = true;
    this.colombiaService.getMunicipalities(departmentName).subscribe({
      next: (cities) => {
        this.municipalities = cities;
        this.loadingMunicipalities = false;
      },
      error: () => {
        this.municipalities = [];
        this.loadingMunicipalities = false;
      }
    });
  }

  onMunicipalityChange(e: Event) {
    const value = (e.target as HTMLSelectElement).value;
    this.filters.cities = value ? [value] : [];
  }

  private toggleArrayValue(array: any[], value: any) {
    const i = array.indexOf(value);
    i >= 0 ? array.splice(i, 1) : array.push(value);
  }

  onRoomTypeChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.toggleArrayValue(this.filters.roomTypes, value);
  }

  onServiceChange(e: Event) {
    const value = Number((e.target as HTMLInputElement).value);
    this.toggleArrayValue(this.filters.serviceIds, value);
  }

  onPriceMinChange(e: Event) {
    const v = Number((e.target as HTMLInputElement).value);
    this.filters.priceMin = v || null;
  }

  onPriceMaxChange(e: Event) {
    const v = Number((e.target as HTMLInputElement).value);
    this.filters.priceMax = v || null;
  }

  onAvailabilityChange(e: Event) {
    this.filters.onlyAvailable = (e.target as HTMLInputElement).checked;
  }

  onSortChange(e: Event) {
    const v = (e.target as HTMLInputElement).value;
    this.filters.sortBy = (v as 'priceAsc' | 'priceDesc') || null;
  }

  onShowTypeChange(e: Event) {
    const v = (e.target as HTMLInputElement).value;
    this.filters.showType = (v as 'rooms' | 'motels' | 'all') || 'all';
  }

  reset() {
    this.filters = {
      priceMin: null,
      priceMax: null,
      roomTypes: [],
      cities: [],
      department: null,
      onlyAvailable: true,
      serviceIds: [],
      sortBy: null,
      showType: 'all',
    };
    this.municipalities = [];
  }

  apply() {
    this.dialogRef.close(this.filters);
  }

  close() {
    this.dialogRef.close();
  }
}