import {Injectable} from '@angular/core';
import {Router, CanActivate, CanActivateChild} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
    constructor(public authService: AuthService, public router: Router){}

    canActivate(): boolean {
        if(!this.authService.isAuthenticated()){
            this.router.navigate(['login']);
            return false;
        }

        return true;
    }

    canActivateChild(): boolean {
        if(!this.authService.isAuthenticated()){
            this.router.navigate(['login']);
            return false;
        }

        return true;
    }

}

