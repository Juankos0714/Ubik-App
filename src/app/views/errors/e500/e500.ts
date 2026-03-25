import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e500',
  standalone: true,
  imports: [],
  templateUrl: './e500.html',
})
export class E500 implements OnInit {
  errorCode: number = 500;
  private previousUrl: string = '/';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // El interceptor puede pasar el código real y la URL de origen via navigation state
    const state = this.router.getCurrentNavigation()?.extras?.state
      ?? history.state;

    if (state?.code) this.errorCode = state.code;
    if (state?.returnUrl) this.previousUrl = state.returnUrl;
  }

  retry(): void {
    this.router.navigateByUrl(this.previousUrl);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}