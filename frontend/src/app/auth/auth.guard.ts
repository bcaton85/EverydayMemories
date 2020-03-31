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

  async canActivateChild( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>  {
    let isLoggedIn: boolean = await this.authSvc.isLoggedIn();
    if( !isLoggedIn ){
      this.router.navigateByUrl('/login');
      return false;
    }

    return true;
  }
    
}
