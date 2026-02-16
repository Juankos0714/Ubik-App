import { Component, OnInit, inject } from '@angular/core';
import { RoomService } from '../../core/services/room.service';
import { Room } from '../../core/models/room.model';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  imports: [Card],
})
export class Home implements OnInit {

  private roomService = inject(RoomService);

  mejoresOfertas: Room[] = [];
  motelesCercanos: Room[] = [];
  destinosPopulares: Room[] = [];

  ngOnInit(): void {
    this.roomService.getRooms().subscribe({
      next: (data) => {
        this.mejoresOfertas = data.slice(0, 5);
        this.motelesCercanos = data.slice(5, 10);
        this.destinosPopulares = data.slice(10, 15);
      }
    });
  }
}