import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StreakService } from '../../../core/services/streak.service';
import { StreakResponse } from '../../../core/models/streak.model';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './user-profile.html',
})
export class UserProfile implements OnInit {
  private usersService = inject(UsersService);
  private streakService = inject(StreakService);

  profile$ = this.usersService.profile$;
  streak: StreakResponse | null = null;
  loading = true;

  ngOnInit() {
    this.usersService.loadProfile().subscribe({
      next: () => (this.loading = false),
      error: () => (this.loading = false),
    });

    this.streakService.getMyStreak().pipe(
      catchError(() => of(null))
    ).subscribe(s => this.streak = s);
  }

}
