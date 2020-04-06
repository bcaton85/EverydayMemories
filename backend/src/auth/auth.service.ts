import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from '../api/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as moment from 'moment';
import { AppUserModel } from 'src/models/AppUser.model';
import {AppUser} from 'src/shared/AppUser';

@Injectable()
export class AuthService {

    constructor(private userSvc: UserService, private jwtSvc: JwtService){}

    async validateIssuer(email: string, pass: string, register: boolean): Promise<any> {

        return this.userSvc.findOne(email).then( async (user) => {
            console.log(`DB response: ${user}`);
            console.log("success");

            if(!user && register){
                console.log(`email: ${email}`);
                console.log(`pass: ${pass}`);
                var newUser: AppUserModel = await this.createUser( new AppUser(email,pass));
                console.log(newUser);
                return this.userToJson(newUser);
            }

            if(!user){
                throw new HttpException('User not found', HttpStatus.NOT_FOUND);
            }

            // TODO: use bcrypt to enxcrypt user passwords: https://github.com/kelektiv/node.bcrypt.js#readme
            if( user && pass == user.getDataValue("password") ){
                return this.userToJson(user);
            }

            if( user && pass != user.getDataValue("password") ){
                throw new HttpException('User login failed',HttpStatus.UNAUTHORIZED);
            }
        })
        .catch(err =>{
            console.log("error");
            console.log(err);
            return null;
        });
    }

    async login(user: any){
        const payload = {
            sub: user.userID,
            email: user.email
        }

        return this.jwtSvc.sign(payload);
    }

    async createUser(user: AppUser): Promise<AppUserModel> {
        return this.userSvc.create(user).then( res => {
            return res;
        })
        .catch( err => {
            console.log(err);
            throw new HttpException('Internal error', HttpStatus.INTERNAL_SERVER_ERROR);
        });
    }

    userToJson(user: AppUserModel): any {
        let userJson: any = user.toJSON();
        delete userJson.password;
        return userJson;
    }

}
