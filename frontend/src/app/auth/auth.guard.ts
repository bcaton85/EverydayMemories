import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(private router: Router, private authSvc: AuthService){}

  canActivateChild( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {

    if( !this.authSvc.isLoggedIn() ){
      this.router.navigateByUrl('/login');
      return false;
    }

    return true;
  }
    
}
