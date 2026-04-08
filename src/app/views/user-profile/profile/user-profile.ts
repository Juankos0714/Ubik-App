import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StreakService } from '../../../core/services/streak.service';
import { ReservationService } from '../../../core/services/reservation.service';
import { StreakResponse } from '../../../core/models/streak.model';
import { Reservation } from '../../../core/models/reservation.model';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';


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

  profile$ = this.usersService.profile$;
  streak: StreakResponse | null = null;
  reservations: Reservation[] = [];
  loading = true;

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
        this.reservations = res;
        this.loading = false;
      },
      error: () => (this.loading = false),
    });

    this.streakService.getMyStreak().pipe(
      catchError(() => of(null))
    ).subscribe(s => this.streak = s);
  }

}
