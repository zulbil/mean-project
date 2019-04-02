import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  constructor (private auth: AuthService ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = this.auth.getUserToken();
    if ( userToken ) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + userToken )
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
