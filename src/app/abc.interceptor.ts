import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthGuardServiceService } from './services/auth-guard-service.service';

@Injectable()
export class AbcInterceptor implements HttpInterceptor {

  constructor(private authService: AuthGuardServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    const token = this.authService.getToken();
    const newRequest = request.clone({
      setHeaders:{
        Authorization: 'Bearer '+ token
      }
    });

    return next.handle(newRequest);
  }
}   
