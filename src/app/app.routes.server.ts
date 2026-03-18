import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    // Use Server rendering for routes with dynamic parameters
    path: 'motelProfile/:id',
    renderMode: RenderMode.Server,
  },
  {
    // edit-room has a dynamic :id param — must be Server rendered, not prerendered
    path: 'edit-room/:id',
    renderMode: RenderMode.Server,
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