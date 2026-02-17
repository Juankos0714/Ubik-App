import { Component, OnInit, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';

import { RoomService } from '../../core/services/room.service';
import { Room } from '../../core/models/room.model';

import { FilterModal } from '../../components/filter-modal/filter-modal';
import { Button02 } from '../../components/button-02/button-02';
import { Card3, Card3Informacion } from '../../components/card-3/card-3';
import { Map } from '../../components/map/map';

@Component({
  selector: 'app-explore',
  standalone: true,
  templateUrl: './explore.html',
  imports: [Button02, Card3, Map],
})
export class Explore implements OnInit {
  private roomService = inject(RoomService);
  private dialog = inject(Dialog);

  cards: Card3Informacion[] = [];

  loading = false;
  error = false;

  ngOnInit(): void {
    this.loadRooms();
  }

  openModal() {
    this.dialog.open(FilterModal);
  }

  loadRooms(): void {
    this.loading = true;

    this.roomService.getRooms().subscribe({
      next: (rooms: Room[]) => {
        this.cards = rooms.map((room) => ({
          id: room.id,
          motelId: room.motel_id,
          numberHab: room.num_or_name,
          type: room.room_type,
          descripcion: room.description,
          image: room.photos?.[0]?.url ?? './assets/images/ubikLogo.jpg',
          title: room.room_type,
          location: room.city,
          adress: room.address,
          price: room.price,
          hours: room.hours,
        }));

        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
    });
  }
}
