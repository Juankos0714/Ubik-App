import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { Logo01 } from '../../components/logo-01/logo-01';
import { Button01 } from '../../components/button-01/button-01';

import { AuthService } from '../../core/auth.service';
import { routes } from '../../app.routes';  
import { RoomsOfferts } from '../../views/rooms-offerts/rooms-offerts';

const ROUTES = {
  HOME: '/',
  EXPLORE: '/explore',
  LOGIN: '/login',
  REGISTER: '/select-register',
  PROFILE: '/userProfile', 
  OWNER: '/', 
  ADMIN: '/' ,
  OFFERTS: '/'
};

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Logo01, Button01],
  templateUrl: './header.html',
})
export class Header {

  // ===== Inject =====
  private router = inject(Router);
  private auth = inject(AuthService);

  ROUTES = ROUTES;

  // ===== Logo =====
  logo: string =
    'https://res.cloudinary.com/du4tcug9q/image/upload/v1763473322/Logo_Ubik_jxgzqi.png';

  // ===== Signals del Auth =====
  isLogged = this.auth.isLogged;
  role = this.auth.role;

  // ===== Navegación =====
  AppRoutes = routes;

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  // ===== Logout =====
  logout() {
    this.auth.logout();
    this.router.navigate([ROUTES.HOME]);
  }
}

