import { HttpErrorResponse, HttpInterceptorFn, HttpParams, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const WATCHED_PATHS = [
  '/rooms/',
  '/availability',
  '/reservations',
  '/payments/create-intent',
];

const getRequestLabel = (url: string): string => {
  if (url.includes('/availability')) return 'Disponibilidad';
  if (url.includes('/rooms/') && url.includes('/reservations')) return 'Reservas de habitación';
  if (url.includes('/reservations')) return 'Crear reserva';
  if (url.includes('/payments/create-intent')) return 'Intento de pago';
  return 'API';
};

const isApiRequest = (url: string): boolean =>
  url.startsWith(environment.apiUrl) || url.startsWith(environment.authUrl);

const shouldTraceRequest = (url: string): boolean =>
  isApiRequest(url) && WATCHED_PATHS.some((path) => url.includes(path));

const paramsToObject = (params: HttpParams): Record<string, string | string[]> => {
  const parsed: Record<string, string | string[]> = {};
  for (const key of params.keys()) {
    const values = params.getAll(key) ?? [];
    parsed[key] = values.length > 1 ? values : (values[0] ?? '');
  }
  return parsed;
};

const sanitizeHeaders = (headers: Record<string, unknown>): Record<string, unknown> => {
  const copy: Record<string, unknown> = { ...headers };
  if ('Authorization' in copy) copy['Authorization'] = '[hidden]';
  if ('authorization' in copy) copy['authorization'] = '[hidden]';
  return copy;
};

export const debugInterceptor: HttpInterceptorFn = (req, next) => {
  if (environment.production) return next(req);

  const traceRequest = shouldTraceRequest(req.urlWithParams);
  const startedAt = Date.now();

  if (traceRequest) {
    console.groupCollapsed(
      `%c[HTTP Request] ${getRequestLabel(req.urlWithParams)} ${req.method} ${req.urlWithParams}`,
      'color:#60a5fa',
    );
    console.log('Headers:', sanitizeHeaders(req.headers.keys().reduce<Record<string, unknown>>((acc, key) => {
      acc[key] = req.headers.get(key);
      return acc;
    }, {})));
    console.log('Query params:', paramsToObject(req.params));
    console.log('Body:', req.body ?? null);
    console.groupEnd();
  }

  return next(req).pipe(
    tap({
      next: (event) => {
        if (!(event instanceof HttpResponse)) return;

        const elapsedMs = Date.now() - startedAt;
        if (traceRequest) {
          console.groupCollapsed(
            `%c[HTTP Response] ${getRequestLabel(req.urlWithParams)} ${req.method} ${req.urlWithParams} (${event.status}) ${elapsedMs}ms`,
            'color:#22c55e',
          );
          console.log('Status:', event.status, event.statusText);
          console.log('Body:', event.body ?? null);
          console.groupEnd();
        }
      },
      error: (err: HttpErrorResponse) => {
        if (!isApiRequest(req.urlWithParams)) return;

        const elapsedMs = Date.now() - startedAt;
        console.groupCollapsed(
          `%c[HTTP Error] ${getRequestLabel(req.urlWithParams)} ${req.method} ${req.urlWithParams} (${err.status}) ${elapsedMs}ms`,
          'color:#ef4444',
        );
        console.error('Status:', err.status, err.statusText);
        console.error('Message:', err.message);
        console.error('Error body:', err.error ?? null);
        console.error('Request body:', req.body ?? null);
        console.groupEnd();
      },
    }),
  );
};
