import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../services/auth.service';

const PUBLIC_ENDPOINTS = ['/auth/login', '/auth/register'];

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  // 0) Ignorar OPTIONS
  if (req.method === 'OPTIONS') {
    return next(req);
  }

  const platformId = inject(PLATFORM_ID);

  // 1) SSR protection
  if (!isPlatformBrowser(platformId)) {
    return next(req);
  }

  // 2) No sobrescribir si ya existe Authorization
  if (req.headers.has('Authorization')) {
    return next(req);
  }

  // 3) Ignorar Cloudinary
  const isCloudinary =
    req.url.startsWith('https://api.cloudinary.com/') ||
    req.url.includes('api.cloudinary.com/v1_1/');

  if (isCloudinary) {
    return next(req);
  }

  // 4) Ignorar endpoints públicos
  if (PUBLIC_ENDPOINTS.some(url => req.url.includes(url))) {
    return next(req);
  }

  // 5) Solo para nuestra API
  const isOurApi =
    req.url.includes('ubik-back.duckdns.org') ||
    req.url.includes('localhost') ||
    !req.url.startsWith('http');

  if (!isOurApi) {
    return next(req);
  }

  // 6) Obtener token desde AuthService
  const authService = inject(AuthService);
  const token = authService.token();

  if (!token) {
    return next(req);
  }

  return next(
    req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    })
  );
};