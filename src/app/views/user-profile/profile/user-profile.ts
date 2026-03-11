import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './user-profile.html',
})
export class UserProfile implements OnInit {
  private usersService = inject(UsersService);

  profile$ = this.usersService.profile$;
  loading = true;

  ngOnInit() {
    this.usersService.loadProfile().subscribe({
      next: () => (this.loading = false),
      error: () => (this.loading = false),
    });
  }

}
