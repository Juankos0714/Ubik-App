import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { isPlatformBrowser, CommonModule } from '@angular/common'; // Agregamos CommonModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHouse,
  faCompass,
  faCircleUser,
  faRightFromBracket,
  faBars,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

// Definimos las rutas como constantes para evitar "Magic Strings"
const ROUTES = {
  HOME: '/',
  EXPLORE: '/explore',
  LOGIN: '/login',
  REGISTER: '/select-register',
  PROFILE: '/userProfile'
};

@Component({
  selector: 'app-nav-bar-bottom',
  templateUrl: './nav-bar-bottom.html',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule]
})
export class NavBarBottomComponent implements OnInit, OnDestroy {

  // Estado
  isLogged = false;
  menuOpen = false;

  // Iconos (Tipados)
  readonly icons: Record<
    'house' | 'compass' | 'user' | 'logout' | 'menu',
    IconDefinition
  > = {
    house: faHouse,
    compass: faCompass,
    user: faCircleUser,
    logout: faRightFromBracket,
    menu: faBars
  };

  // Suscripción para limpieza de memoria
  private routerSubscription: Subscription | undefined;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.checkLogin();

    // Asignamos la suscripción a una variable
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkLogin();
        // Opcional: Cerrar menú automáticamente al cambiar de ruta
        this.menuOpen = false; 
      });
  }

  ngOnDestroy(): void {
    // IMPORTANTE: Evita fugas de memoria al destruir el componente
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  // --- LÓGICA DE UI ---

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  /**
   * Método centralizado de navegación.
   * Cierra el menú y navega, evitando repetir lógica.
   */
  navigateTo(path: string): void {
    this.closeMenu();
    this.router.navigate([path]);
  }

  /**
   * Lógica inteligente para el botón de perfil
   */
  handleProfileClick(): void {
    const target = this.isLogged ? ROUTES.PROFILE : ROUTES.LOGIN;
    this.navigateTo(target);
  }

  logout(): void {
    // Idealmente esto debería estar en un AuthService
    this.removeAuthToken();
    this.isLogged = false;
    this.navigateTo(ROUTES.LOGIN);
  }

  // --- MÉTODOS PRIVADOS / HELPERS ---

  private checkLogin(): void {
    // Encapsulamos la lógica de localStorage
    this.isLogged = !!this.getAuthToken();
  }

  private getAuthToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  private removeAuthToken(): void {
    localStorage.removeItem('auth_token');
    sessionStorage.removeItem('auth_token');
  }

  // Exponemos las rutas al template para usarlas allí si es necesario
  public readonly AppRoutes = ROUTES;
}