import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor ( private authService: AuthService, private router: Router ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if ( state.url == '/login' || state.url == '/signup') {
      if (this.authService.isAuthenticated()) {
        this.router.navigate(['/feed']);     
        console.log('Authenticated...');  
        return false;
      } else {
        return true;
      }
    } else {
      if (this.authService.isAuthenticated()) {
        // this.router.navigate(['/feed']);     
        console.log('Authenticated...');  
        return true;
      }  else {
        this.router.navigate(['/login']);
        console.log('Not authenticated...');
        return false;
      }
    }
  } 

}
