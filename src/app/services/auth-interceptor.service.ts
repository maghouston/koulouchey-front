import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';


const TOKEN_HEADER_KEY = 'Authorization';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenStorageService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    const token = this.tokenService.getToken();
    if (token != null && !this.tokenService.isTokenExpired()) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Barear ' + token) });
    }else{
        this.router.navigate(['/login']);
    }
    return next.handle(authReq);
  }

  

}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];