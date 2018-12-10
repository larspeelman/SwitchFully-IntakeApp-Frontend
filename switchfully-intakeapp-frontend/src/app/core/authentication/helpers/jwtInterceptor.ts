import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../service/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUserToken = this.authenticationService.currentUserTokenValue;
        if (currentUserToken && currentUserToken.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUserToken.token}`
                }
            });
        }

        return next.handle(request);
    }
}