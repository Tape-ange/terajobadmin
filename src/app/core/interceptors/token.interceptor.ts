import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private token: any;
  getToken: any;

  constructor(private _authsService: AuthService,
    private _route: Router) { }

  intercept(
    request: HttpRequest<unknown>,

    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.getToken = localStorage.getItem('accesToken');
    console.log('getToken', this.getToken);

    if (this.getToken !== null) {
      console.log('<mon tokrn est bon');
      
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${this.getToken}` },
      });
    } else {
      console.log('Mon token est null');
      
      request = request.clone({ headers: request.headers.delete(' Authorization: `Bearer ${this.getToken}` ') });
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    // const getRefreshToken = localStorage.getItem('refreshToke');
    const refreshToken = {
      refresh_token: localStorage.getItem('refreshToke')
    }

    return next.handle(request)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status === 403 && err.error === 'invalid_grant') {
            console.log("je suis dan erreur 403 token");

            refreshToken.refresh_token = refreshToken.refresh_token;
            request = request.clone({ headers: request.headers.delete(' Authorization: `Bearer ${this.getToken}` ') });
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });

            // this.refreshToken(refreshToken);
            return next.handle(request);
          } else if (err.status === 403 && err.error === '') {
            console.log('error vide');
            this._route.navigateByUrl('auth/login')
          }
          return throwError(() => new Error)
        })
      )

  }


  refreshToken(data: any) {
    this._route
    this._authsService.refreshToken(JSON.stringify(data)).subscribe({
      next: res => {
        console.log("refreshToken token inter", res);
        localStorage.setItem('accesToken', JSON.stringify(res.data));

      },
      error: err => {

        if (err.status === 401) {
          localStorage.clear()

          this._route.navigateByUrl('auth/login');
        }
      }
    }

    );
  }
}
