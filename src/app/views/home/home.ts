import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from '../../core/services/room.service';
import { Room } from '../../core/models/room.model';
import { Card } from '../../components/card/card';
import { LoadingCard } from '../../components/loading-card/loading-card';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  imports: [Card, LoadingCard],
})
export class Home implements OnInit {

  private roomService = inject(RoomService);
  private router      = inject(Router);

  loading = true;
  skeletonItems = Array.from({ length: 5 });

  mejoresOfertas:    Room[] = [];
  motelesCercanos:   Room[] = [];
  destinosPopulares: Room[] = [];

  ngOnInit(): void {
    this.roomService.getRooms().subscribe({
      next: (data) => {
        this.mejoresOfertas    = data.slice(0, 5);
        this.motelesCercanos   = data.slice(5, 10);
        this.destinosPopulares = data.slice(10, 15);
      },
      error:    () => { this.loading = false; },
      complete: () => { this.loading = false; },
    });
  }

  goToExplore() {
    this.router.navigate(['/explore']);
  }

  scrollLeft(el: HTMLElement)  { el.scrollBy({ left: -320, behavior: 'smooth' }); }
  scrollRight(el: HTMLElement) { el.scrollBy({ left:  320, behavior: 'smooth' }); }
}