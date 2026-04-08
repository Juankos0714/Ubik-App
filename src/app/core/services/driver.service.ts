import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class DriverService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private authService: AuthService
  ) {}

  startTour() {
    // Si no estamos en el navegador o la pantalla es de móvil, abortamos el tour.
    if (!isPlatformBrowser(this.platformId) || window.innerWidth < 1024) return;

    if (this.authService.isOwner() || this.authService.isAdmin()) {
      // Recorrido exclusivo para Administradores o Propietarios
      this.router.navigate(['/dashboard/owner']).then(() => {
        // Retrasar para que la vista renderice
        setTimeout(() => {
          const ownerDriver = driver({
            showProgress: true,
            nextBtnText: 'Siguiente',
            prevBtnText: 'Atrás',
            doneBtnText: 'Finalizar',
            progressText: '{{current}} de {{total}}',
            steps: [
              {
                popover: {
                  title: 'Panel de Propietario',
                  description: 'Bienvenido. Aquí tendrás el control absoluto de tus establecimientos.',
                }
              },
              {
                popover: {
                  title: 'Gestor Detallado',
                  description: 'Desde este panel podrás analizar las métricas semanales, reservas activas, y modificar la información de tus cuartos fácilmente.',
                }
              }
            ]
          });
          ownerDriver.drive();
        }, 500);
      });
    } else {
      // Recorrido para Usuarios No Logueados o Clientes Regulares
      this.router.navigate(['/explore']).then(() => {
        setTimeout(() => {
          const exploreDriver = driver({
            showProgress: true,
            nextBtnText: 'Siguiente',
            prevBtnText: 'Atrás',
            doneBtnText: '¡Todo listo!',
            steps: [
              {
                popover: {
                  title: 'Explorador Universal',
                  description: 'En esta sección podrás observar todos los moteles y habitaciones a tu alrededor listos para reservar.',
                  side: "top", align: "start"
                }
              },
              {
                element: 'app-explore',
                popover: {
                  title: 'Filtros Flexibles',
                  description: 'Usa el panel lateral y el mapa interactivo para ajustar precios, servicios, y ubicaciones de tu preferencia.',
                  side: "top", align: "start"
                }
              }
            ]
          });
          exploreDriver.drive();
        }, 800);
      });
    }
  }
}
