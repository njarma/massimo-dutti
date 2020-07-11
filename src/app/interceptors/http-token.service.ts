import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpTokenService implements HttpInterceptor {
  constructor(private authService: AuthenticationService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone({
      setHeaders: {
        Authorization: `none`
      }
    });

    return next.handle(req);

  }

}
