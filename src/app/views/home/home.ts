import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { RoomService } from '../../core/services/room.service';
import { MotelService } from '../../core/services/motel.service';
import { Room } from '../../core/models/room.model';
import { Motel } from '../../core/models/motel.model';
import { Card } from '../../components/card/card';
import { LoadingCard } from '../../components/loading-card/loading-card';
import { CardMotel } from '../../components/card-motel/card-motel';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  imports: [Card, LoadingCard, CardMotel],
})
export class Home implements OnInit {
  private roomService = inject(RoomService);
  private motelService = inject(MotelService);
  private router = inject(Router);

  loading = true;
  skeletonItems = Array.from({ length: 5 });

  mejoresOfertas: Room[] = [];
  motelesCercanos: Motel[] = [];
  destinosPopulares: Room[] = [];

  ngOnInit(): void {
    this.loadHomeData();
  }

  loadHomeData(): void {
    this.loading = true;

    forkJoin({
      rooms: this.roomService.getRooms(),
      motels: this.motelService.getMotels(),
    }).subscribe({
      next: ({ rooms, motels }) => {
        this.mejoresOfertas = rooms.slice(0, 5);
        this.destinosPopulares = rooms.slice(5, 10);
        this.motelesCercanos = motels.slice(0, 5);
        this.loading = false;
      },
      error: (err) => {
        console.error('Error cargando datos del home:', err);
        this.loading = false;
      },
    });
  }

  goToExplore() {
    this.router.navigate(['/explore']);
  }

  scrollLeft(el: HTMLElement) {
    el.scrollBy({ left: -320, behavior: 'smooth' });
  }

  scrollRight(el: HTMLElement) {
    el.scrollBy({ left: 320, behavior: 'smooth' });
  }
}