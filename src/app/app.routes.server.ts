import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    // Use Server rendering for routes with dynamic parameters
    path: 'motelProfile/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'edit-room/:id',
    renderMode: RenderMode.Client,
  },
  {
    // Reset password uses query params (token) — must be client-rendered
    path: 'reset-password',
    renderMode: RenderMode.Client,
  },
  {
    path: 'forgot-password',
    renderMode: RenderMode.Client,
  },
  {
    path: 'roominfo',
    renderMode: RenderMode.Server,
  },
  {
    // Prerender only for static routes
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];