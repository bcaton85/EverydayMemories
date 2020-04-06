import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { AppUserModel } from 'src/models/AppUser.model';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authSvc: AuthService){
        super({
            usernameField: 'email',
            passReqToCallback: true
        });
    }

    async validate(request: Request, email: string, password: string): Promise<any> {
        let isRegisterPath: boolean = this.isRegisterPath(request.url);
        return await this.authSvc.validateIssuer(email, password, isRegisterPath);
    }

    isRegisterPath(url: string): boolean {
        return url.substring(url.lastIndexOf('/') + 1) == "register";
    }

}