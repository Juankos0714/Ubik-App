import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e403',
  standalone: true,
  imports: [],
  templateUrl: './e403.html',
})
export class E403 {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}