import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../../core/services/room.service';
import { Room } from '../../core/models/room.model';
import { Map as AppMap } from '../../components/map/map';

@Component({
  selector: 'app-product-room',
  standalone: true,
  templateUrl: './product-room.html',
  imports: [CommonModule, AppMap],
})
export class ProductRoom implements OnInit {
  private roomService = inject(RoomService);
  private route = inject(ActivatedRoute);

  room: Room | null = null;
  loading = false;
  error = false;

  // Points to pass to <app-map> (map component expects {lat,lng,name})
  points: { lat: number; lng: number; name: string }[] = [];

  ngOnInit(): void {
    const idFromQuery = Number(this.route.snapshot.queryParamMap.get('id'));
    const idFromParam = Number(this.route.snapshot.paramMap.get('id'));
    const id = idFromQuery || idFromParam;

    if (id) this.loadRoom(id);
  }

  loadRoom(id: number) {
    this.loading = true;
    this.roomService.getRoomById(id).subscribe({
      next: (r: Room) => {
        this.room = r;
        if (r.lat != null && r.lng != null) {
          this.points = [{ lat: r.lat, lng: r.lng, name: r.num_or_name }];
        } else {
          this.points = [];
        }
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
    });
  }
}
