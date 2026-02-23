import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRef } from '@angular/cdk/dialog';
import { RoomService } from '../../core/services/room.service';

@Component({
  selector: 'app-filter-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-modal.html',
})
export class FilterModal {
  private dialog = inject(DialogRef<any>);
  private roomService = inject(RoomService);

  services: { id: number; name: string }[] = [];
  categories: { id: number; name: string }[] = [];
  locations: { id: number; city: string }[] = [];

  filters = {
    priceMax: 50000,
  };

  constructor() {
    // placeholder - could fetch filter options from RoomService
  }

  close() {
    this.dialog.close();
  }

  onFeatureChange(_e: Event) {}
  onCategoryChange(_e: Event) {}
  onLocationChange(_e: Event) {}
  onPriceChange(e: Event) {
    const v = Number((e.target as HTMLInputElement).value || 0);
    this.filters.priceMax = v;
  }

  reset() {
    this.filters.priceMax = 50000;
  }

  apply() {
    // apply filters (to be implemented)
    this.dialog.close(this.filters);
  }
}
