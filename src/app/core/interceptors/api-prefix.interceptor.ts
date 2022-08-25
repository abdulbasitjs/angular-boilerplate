import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import {
  BehaviorSubject,
  catchError,
  filter,
  Observable,
  switchMap,
  take,
  throwError,
  of,
} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiPrefixInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.endsWith('.svg')) {
      return next.handle(req);
    }

    const current = environment.endpoints.find(
      (endpoint) => endpoint.alias === this._cleanUrl(req.url)
    );

    req = req.clone({
      url: this._buildUrl(current, current?.name),
      setHeaders: current?.noToken ? {} : {},
    });

    return next.handle(req).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          !req.url.includes('login') &&
          error.status === HttpStatusCode.Unauthorized
        ) {
          if (true) {
            return this.handleUnauthorized(req, next);
          } else {
            this.isRefreshing = false;
            return throwError(error);
          }
        }
        return throwError(error);
      })
    );
  }

  private _cleanUrl(url: string) {
    return url.substr(0, url.includes('?') ? url.indexOf('?') : url.length);
  }

  private _buildUrl(current: any, url: string | undefined): string {
    const baseUrl =
      environment[current?.baseUrl as keyof typeof undefined]['baseUrl'];
    const path =
      environment[current?.baseUrl as keyof typeof undefined]['path'];
    const apiVersion =
      environment[current?.baseUrl as keyof typeof undefined]['apiVersion'];

    if (current) {
      return `${baseUrl}${path}${apiVersion}${current.path}${url}`;
    }

    return '';
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  private handleUnauthorized(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      const token = 'something';
      if (token)
        return of([]).pipe(
          switchMap((res) => {
            const newToken = 'New tokeng';
            this.isRefreshing = false;
            this.refreshTokenSubject.next(newToken);
            return next.handle(this.addTokenHeader(request, newToken));
          }),
          catchError((err) => {
            this.isRefreshing = false;
            return throwError(() => {
              new Error(err);
            });
          })
        );
    }
    return this.refreshTokenSubject.pipe(
      filter((token) => token !== null),
      take(1),
      switchMap((token) => next.handle(this.addTokenHeader(request, token)))
    );
  }
}
