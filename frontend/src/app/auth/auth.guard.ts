import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../providers/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userSvc: UserService){}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {

    if(!this.userSvc.isLoggedIn){
      this.router.navigateByUrl('/login');
      return false;
    }

    return true;
  }
    
}
