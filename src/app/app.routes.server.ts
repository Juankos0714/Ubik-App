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
    // Loads dynamic API data — must be client-rendered to avoid empty prerender
    path: 'explore',
    renderMode: RenderMode.Client,
  },
  {
    // Home loads dynamic data — Client to avoid blank prerender in Vercel
    path: '',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];