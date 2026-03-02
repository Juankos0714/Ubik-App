import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PermissionService, Permission } from '../services/permission.service';

export const permissionGuard =
  (requiredPermission: Permission): CanActivateFn =>
  () => {

    const permissionService = inject(PermissionService);
    const router = inject(Router);

    const allowed = permissionService.hasPermission(requiredPermission);

    if (!allowed) {
      router.navigate(['/unauthorized']);
      return false;
    }

    return true;
  };