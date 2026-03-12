import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const getResourceName = (url: string): string => {
  const filename = url.split('/').pop()?.split('?')[0] ?? url;
  const nameMap: Record<string, string> = {
    'colombia.json': 'Departamentos y ciudades',
    'users': 'Usuarios',
    'products': 'Productos',
  };
  return nameMap[filename] ?? filename;
};

export const debugInterceptor: HttpInterceptorFn = (req, next) => {
  if (environment.production) return next(req);

  return next(req).pipe(
    tap({
      next: (event) => {
        if (event instanceof HttpResponse) {
          const resource = getResourceName(req.urlWithParams);
          console.log(`${resource} — ${req.method} ${req.urlWithParams} (${event.status})`);
        }
      },
      error: (err) => {
        const resource = getResourceName(req.urlWithParams);
        console.error(
          `❌ ${resource} — ${req.method} ${req.urlWithParams}\n` +
          `   Status: ${err.status} ${err.statusText}\n` +
          `   Message: ${err.error?.message ?? err.message ?? 'Unknown error'}`
        );
      },
    }),
  );
};