import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../core/services/user.service';
import { Users } from '../../core/models/users.model';
import { Button01 } from "../../components/button-01/button-01";


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ Button01 ],
  templateUrl: './user-profile.html',
})
export class UserProfile implements OnInit {

  profile!: Users;

  constructor(private userProfileService: UsersService) {}

  ngOnInit(): void {
    this.userProfileService.getProfile().subscribe({
      next: (profile) => (this.profile = profile),
      error: (err) => console.error('Error cargando perfil', err),
    });
  }

}
