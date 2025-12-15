import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-02',
  imports: [],
  templateUrl: './button-02.html',
  styleUrl: './button-02.css',
})
export class Button02 {
  @Input() text!: string;
  @Input() routerLink?: string | (string | number)[];
  @Input() iconLeft?: string;
  @Input() iconRight?: string;

  // si es true el botón ocupará el 100%
  @Input() fullWidth: boolean = false;

    constructor(private router: Router) {}

  navigate() {
  if (!this.routerLink) return;

    if (Array.isArray(this.routerLink)) {
      this.router.navigate(this.routerLink);
    } else {
      this.router.navigate([this.routerLink]);
    }
  }
}