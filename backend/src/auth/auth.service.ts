import { Injectable } from '@nestjs/common';
import { UserService } from '../api/user/user.service';
import { User } from 'src/interfaces/User';
import { JwtService } from '@nestjs/jwt';
import * as moment from 'moment';

@Injectable()
export class AuthService {

    constructor(private userSvc: UserService, private jwtSvc: JwtService){}

    async validateIssuer(email: string, pass: string): Promise<any> {

        return this.userSvc.findOne(email).then( (res) => {
            // TODO: use bcrypt to enxcrypt user passwords: https://github.com/kelektiv/node.bcrypt.js#readme
            if( res.password === pass ){
                res.password = "";
                return res;
            };
        })
        .catch(err =>{
            return null;
        });
    }

    async login(user: any){
        const payload = {
            sub: user._id,
            email: user.email
        }

        return this.jwtSvc.sign(payload);
    }

}
