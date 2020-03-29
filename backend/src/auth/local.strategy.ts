import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/interfaces/User';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authSvc: AuthService){
        super({
            usernameField: 'email'
        });
    }

    async validate(email: string, password: string): Promise<any> {
        const user: User = await this.authSvc.validateIssuer(email, password);

        if(!user){
            throw new UnauthorizedException();
        }

        return user;
    }

}