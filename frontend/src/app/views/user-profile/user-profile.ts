import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button01 } from '../../components/button-01/button-01';
import { UserMock, UserProfile as UserProfileData } from '../../services/user/user-mock';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [Button01, CommonModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile implements OnInit {
  private userService = inject(UserMock);

  profile!: UserProfileData;

  ngOnInit(): void {
    this.userService.getProfile().subscribe((data) => {
      this.profile = data;
    });
  }
}