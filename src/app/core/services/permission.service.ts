import { Injectable, computed } from '@angular/core';
import { AuthService } from './auth.service';

export type Permission =
  | 'view_dashboard'
  | 'edit_users'
  | 'create_room'
  | 'delete_room'
  | 'view_reports';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {

  constructor(private authService: AuthService) {}

  // Mapa rol → permisos
  private readonly ROLE_PERMISSIONS: Record<number, Permission[]> = {
    7392841056473829: [ // admin
      'view_dashboard',
      'edit_users',
      'create_room',
      'delete_room',
      'view_reports',
    ],
    3847261094857362: [ // owner
      'view_dashboard',
      'create_room',
      'view_reports',
    ],
    9182736450192837: [], // client
  };

  //  Permisos actuales del usuario
  private currentPermissions = computed<Permission[]>(() => {
    const roleId = this.authService.role();
    if (!roleId) return [];
    return this.ROLE_PERMISSIONS[roleId] ?? [];
  });

  //  Método principal
  hasPermission(permission: Permission): boolean {
    return this.currentPermissions().includes(permission);
  }

  hasAnyPermission(permissions: Permission[]): boolean {
    return permissions.some(p => this.currentPermissions().includes(p));
  }

  hasAllPermissions(permissions: Permission[]): boolean {
    return permissions.every(p => this.currentPermissions().includes(p));
  }
}