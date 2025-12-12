import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-01',
  imports: [CommonModule, RouterLink],
  templateUrl: './button-01.html',
  styleUrl: './button-01.css',
})
export class Button01 {
  @Input() text!: string;
  @Input() routerLink?: string;
  @Input() iconLeft?: string;
  @Input() iconRight?: string;

  // si es true el botón ocupará el 100%
  @Input() fullWidth: boolean = false;

  constructor(private router: Router) {}

  navigate() {
    if (this.routerLink) {
      this.router.navigate([this.routerLink]);
    }
  }
}
