import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivateChild {

  constructor(private router: Router, private authSvc: AuthService){}

  async canActivateChild( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>  {
    let isLoggedIn: boolean = await this.authSvc.isLoggedIn();
    if(isLoggedIn){
      this.router.navigateByUrl('/layout/submit');
      return false;
    }
    return true;
  }
  
}
