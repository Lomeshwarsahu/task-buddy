import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent, HttpErrorResponse } 
from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
// export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };

export const tokenInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn):
 Observable<HttpEvent<any>> => {
  // debugger;
  const AuthService = inject(AuthServiceService);
  const router = inject(Router);

  if (req.headers.get('No-Auth') === 'True') {
    return next(req.clone());
  }

  const token = AuthService.getToken();
  console.log('token=',token);

  if (token) {
    req = addToken(req, token);
    alert('hi');
  }

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      console.log(err.status);
      if (err.status === 401) {
        router.navigate(['/login']);
      } else if (err.status === 403) {
        router.navigate(['/forbidden']);
      }
      return throwError(() => new Error('Something went wrong'));
    })
  );
};

function addToken(request: HttpRequest<any>, token: string) {
  return request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
}
// user=
// admin=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJTbmVoYSIsImV4cCI6MTc0MzY5NjEzMiwiaWF0IjoxNzQzNjc4MTMyfQ.eHLULKK9uR5OtOE91LbXMeck8oe612enOD57jjNA7mx3i5jRatinIWJBxk3-Y3SzL_KnmDR4wAA5nmeYU1e4Cg