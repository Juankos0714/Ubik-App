import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e-offline',
  standalone: true,
  imports: [],
  templateUrl: './e-offline.html',
})
export class EOffline {
  retrying = false;
  private previousUrl: string = '/';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const state = history.state;
    if (state?.returnUrl) this.previousUrl = state.returnUrl;
  }

  retry(): void {
    this.retrying = true;
    // Espera 1s y verifica si hay conexión antes de redirigir
    setTimeout(() => {
      if (navigator.onLine) {
        this.router.navigateByUrl(this.previousUrl);
      } else {
        this.retrying = false;
      }
    }, 1000);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}