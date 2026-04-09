import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { UsersService } from '../../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StreakService } from '../../../core/services/streak.service';
import { ReservationService } from '../../../core/services/reservation.service';
import { StreakResponse } from '../../../core/models/streak.model';
import { Reservation } from '../../../core/models/reservation.model';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Dialog } from '@angular/cdk/dialog';
import { ReservationDetailModal } from '../../../components/reservation-detail-modal/reservation-detail-modal';



@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './user-profile.html',
})
export class UserProfile implements OnInit {
  private usersService = inject(UsersService);
  private streakService = inject(StreakService);
  private reservationService = inject(ReservationService);
  private dialog = inject(Dialog);


  profile$ = this.usersService.profile$;
  streak: StreakResponse | null = null;
  reservations = signal<Reservation[]>([]);
  activeFilter = signal<'ALL' | 'PENDIENTE' | 'CANCELADO' | 'PAGADO'>('ALL');
  loading = signal(true);

  filteredReservations = computed(() => {
    const all = this.reservations();
    const filter = this.activeFilter();
    if (filter === 'ALL') return all;
    if (filter === 'PAGADO') return all.filter(r => r.status === 'PAGADO' || r.status === 'CHECKED_IN' || r.status === 'INGRESO');
    return all.filter(r => r.status === filter);
  });


  ngOnInit() {
    this.usersService.loadProfile().pipe(
      switchMap(profile => {
        if (profile?.id) {
          return this.reservationService.getUserReservations(profile.id);
        }
        return of([]);
      }),
      catchError(() => of([]))
    ).subscribe({
      next: (res) => {
        this.reservations.set(res);
        this.loading.set(false);
      },
      error: () => (this.loading.set(false)),
    });

    this.streakService.getMyStreak().pipe(
      catchError(() => of(null))
    ).subscribe(s => this.streak = s);
  }


  openReservationDetail(res: Reservation) {
    this.dialog.open(ReservationDetailModal, {
      data: {
        reservation: res,
        isOwner: false
      },
      // Centramos usando clases de Tailwind y aseguramos que el contenedor se comporte bien
      panelClass: [
        '!rounded-[2.5rem]', 
        'max-w-lg', 
        'w-full', 
        'mx-auto', 
        '!block', 
        'animate-in', 
        'zoom-in', 
        'duration-200'
      ]
    });
  }

}
