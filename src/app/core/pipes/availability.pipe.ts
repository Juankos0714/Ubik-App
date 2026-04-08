import { Pipe, PipeTransform } from '@angular/core';
import { Room } from '../models/room.model';

@Pipe({
  name: 'filterByAvailability',
  standalone: true
})
export class FilterByAvailabilityPipe implements PipeTransform {
  transform(rooms: Room[], available: boolean | null): Room[] {
    if (available === null || rooms === null) return rooms;
    return rooms.filter(r => r.isAvailable === available);
  }
}
