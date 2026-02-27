import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const PUBLIC_ENDPOINTS = ['/auth/login', '/auth/register'];

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // ✅ 0) Ignorar OPTIONS preflights
  if (req.method === 'OPTIONS') {
    return next(req);
  }

  const platformId = inject(PLATFORM_ID);

  // ✅ En SSR no tenemos storage ni token (evita intentar)
  if (!isPlatformBrowser(platformId)) {
    return next(req);
  }

  // ✅ Si ya viene Authorization, no lo sobreescribas
  if (req.headers.has('Authorization')) {
    return next(req);
  }

  // ✅ 1) Cloudinary: JAMÁS agregar Authorization
  const isCloudinary =
    req.url.startsWith('https://api.cloudinary.com/') ||
    req.url.includes('api.cloudinary.com/v1_1/');

  if (isCloudinary) {
    return next(req);
  }

  // ✅ 2) Endpoints públicos de tu API (Login, Registro, etc.)
  if (PUBLIC_ENDPOINTS.some(url => req.url.includes(url))) {
    return next(req);
  }

  // ✅ 3) Obtener token de storage
  let token =
  sessionStorage.getItem('auth_token') ||
  localStorage.getItem('auth_token');

  if (!token) {
    return next(req);
  }

  // ✅ 4) Normalizar token (quitar comillas y "Bearer " si quedó guardado así)
  token = token
    .replace(/"/g, '')
    .replace(/^Bearer\s+/i, '')
    .trim();

  if (!token) {
    return next(req);
  }

  // ✅ 5) Solo agregar a nuestro dominio de API (o si es relativo)
  const isOurApi = req.url.includes('ubik-back.duckdns.org') || !req.url.startsWith('http');

  if (!isOurApi) {
    return next(req);
  }

  return next(
    req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    })
  );
};