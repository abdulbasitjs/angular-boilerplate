import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { LoaderService } from '@core/services/loader.service';
import { environment } from '@environment/environment';
import { finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderInterceptor implements HttpInterceptor {
  constructor() {}

  private isSvgRequest(request: HttpRequest<any>): boolean {
    return request.url.endsWith('.svg');
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const current = environment.endpoints.find(
      (endpoint) => endpoint.name === request.url
    );

    if (current?.hideLoader || this.isSvgRequest(request)) {
      return next.handle(request);
    }

    // this.loader.setLoading(true, request.url);
    return next.handle(request).pipe(finalize(() => false));
  }
}
