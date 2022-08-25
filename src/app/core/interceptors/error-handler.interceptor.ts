import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(catchError((error) => this.handleError(error)));
  }

  private handleError(response: any): Observable<HttpEvent<any>> {
    // LoggerService.error('Request Error: ' + JSON.stringify(response));
    switch (response['status']) {
      case HttpStatusCode.BadRequest:
        // this.toaster.error(response.error.message, response.statusText);
        break;

      case HttpStatusCode.Unauthorized:
        if (response.url.includes('login')) throw new Error('Unauthorized');
        // this.toaster.error(response.error.message, response.statusText);
        break;

      case HttpStatusCode.Forbidden:
        this.router.navigateByUrl('/403');
        break;

      case HttpStatusCode.BadRequest:
        break;

      case HttpStatusCode.InternalServerError:
        // this.toaster.error(response.message, response.statusText);
        break;

      default:
        // this.toaster.error(response.message, response.statusText);
        break;
    }
    throw response;
  }
}
