import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
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

    this.roomService.getRooms().subscribe({
      next: (rooms) => {
        this.mejoresOfertas = rooms.slice(0, 5);
        this.destinosPopulares = rooms.slice(5, 10);
      },
      error: (err) => {
        console.error('Error cargando rooms:', err);
        this.loading = false;
      },
    });

    this.motelService.getMotels().subscribe({
      next: (motels) => {
        this.motelesCercanos = motels.slice(0, 5);
      },
      error: (err) => {
        console.error('Error cargando moteles:', err);
        this.loading = false;
      },
      complete: () => {
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