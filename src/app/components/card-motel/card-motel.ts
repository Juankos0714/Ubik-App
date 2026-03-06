import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Motel } from '../../core/models/motel.model';
import { Button01 } from '../button-01/button-01';

@Component({
  selector: 'app-card-motel',
  imports: [RouterLink],
  templateUrl: './card-motel.html',
})
export class CardMotel {

  @Input() motel!: Motel;

  get coverImage(): string {
    const cover = this.motel.imageUrls.find(img => img.role === 'COVER');
    return cover?.url ?? this.motel.imageUrls[0]?.url ?? '';
  }

  get profileImage(): string | null {
    const profile = this.motel.imageUrls.find(img => img.role === 'PROFILE');
    return profile?.url ?? null;
  }

  get formattedMinPrice(): string | null {
    if (!this.motel.rooms?.length) return null;
    const min = Math.min(...this.motel.rooms.map(r => r.price));
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(min);
  }

  get availableRoomsCount(): number {
    return this.motel.rooms?.filter(r => r.isAvailable).length ?? 0;
  }

  get totalRooms(): number {
    return this.motel.rooms?.length ?? 0;
  }
}
