import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e404',
  imports: [],
  standalone: true,
  templateUrl: './e404.html',
})
export class E404 {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

  goToExplore() {
    this.router.navigate(['/explore']);
  }
}
