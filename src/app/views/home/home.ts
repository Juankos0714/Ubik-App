import { ChangeDetectorRef, Component, OnInit, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { ConfirmModal } from '../../components/confirm-modal/confirm-modal';
import { DriverService } from '../../core/services/driver.service';
import { forkJoin } from 'rxjs';
import { RoomService } from '../../core/services/room.service';
import { MotelService } from '../../core/services/motel.service';
import { Room } from '../../core/models/room.model';
import { Motel } from '../../core/models/motel.model';
import { Card } from '../../components/card/card';
import { LoadingCard } from '../../components/loading-card/loading-card';
import { CardMotel } from '../../components/card-motel/card-motel';
import { CarouselArrowLeft } from "../../components/carousel-arrow-left/carousel-arrow-left";
import { CarouselArrowRight } from "../../components/carousel-arrow-right/carousel-arrow-right";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  imports: [Card, LoadingCard, CardMotel, CarouselArrowLeft, CarouselArrowRight],
})
export class Home implements OnInit, AfterViewInit {
  private roomService = inject(RoomService);
  private motelService = inject(MotelService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private dialog = inject(Dialog);
  private driverService = inject(DriverService);
  private platformId = inject(PLATFORM_ID);

  loading = true;
  skeletonItems = Array.from({ length: 5 });

  mejoresOfertas: Room[] = [];
  motelesCercanos: Motel[] = [];
  destinosPopulares: Room[] = [];

  ngOnInit(): void {
    this.loadHomeData();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const seen = localStorage.getItem('tour_seen');
        if (!seen) {
          const dialogRef = this.dialog.open(ConfirmModal, {
            data: {
              title: 'Bienvenido a Ubik',
              message: '¿Te gustaría realizar un recorrido rápido guiado para conocer cómo utilizar la plataforma?',
              confirmText: 'Sí, iniciar tour',
              cancelText: 'No, gracias'
            }
          });
          dialogRef.closed.subscribe(result => {
            if (result) {
              this.driverService.startTour();
            }
            localStorage.setItem('tour_seen', 'true');
          });
        }
      }, 1000); // Dar suficiente tiempo para que la vista cargue por completo
    }
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
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error cargando datos del home:', err);
        this.loading = false;
        this.cdr.markForCheck();
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