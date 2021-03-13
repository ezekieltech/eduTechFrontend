import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem("id_token");

    if (idToken) {
      const cloned = httpRequest.clone({
          headers: httpRequest.headers.set("Authorization",
              "JWT " + idToken)
      });

        return next.handle(cloned);
    }
    else {
        return next.handle(httpRequest);
    }
  }
}
