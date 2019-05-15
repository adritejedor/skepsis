import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  path: import ('@angular/router').ActivatedRouteSnapshot[];
  route: import ('@angular/router').ActivatedRouteSnapshot;

  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate() {
    // añadir en el auth service un metodo que retorne bool si el usuario esta logueado
    if (true) {
      return true;
    } else {
      this.router.navigate(['/portfolio']);
    }
  }

}
