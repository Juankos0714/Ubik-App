import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PermissionService, Permission } from '../services/permission.service';
import { AuthService } from '../services/auth.service';

export const permissionGuard =
  (requiredPermission: Permission): CanActivateFn =>
  async () => {
    const authService = inject(AuthService);
    const permissionService = inject(PermissionService);
    const router = inject(Router);

    // Esperar inicialización del auth service
    if (!authService.initialized()) {
      await authService.restoreSession();
    }

    const allowed = permissionService.hasPermission(requiredPermission);

    if (!allowed) {
      return router.parseUrl('/');
    }

    return true;
  };
