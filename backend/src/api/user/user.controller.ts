import { Controller, Get, Post, Body } from '@nestjs/common';
import { SimpleResponse } from '../../shared/SimpleResponse';
import { UserService } from './user.service';
import { User } from '../../interfaces/User';
import { isRegExp } from 'util';

@Controller('user')
export class UserController {

    constructor(private userSvc: UserService){}

    @Post('/login')
    async login( @Body() user: User): Promise<any> {

        // TODO: input validation with joi

        let responseBody: SimpleResponse = { success: true }

        return this.userSvc.login(user).then( res => {
            console.log(res);
            responseBody.success = res.length == 1;
            return responseBody;
        })
        .catch( err => {
            console.log(err);
            responseBody.success = false;
            return responseBody;
        });

    }

    @Post('/register')
    async register( @Body() user: User): Promise<any> {
        let responseBody: SimpleResponse = { success: true }

        return this.userSvc.create(user).then( res => {
            console.log(res);
            return responseBody;
        })
        .catch( err => {
            console.log(err);
            responseBody.success = false;
            return responseBody;
        });
    }

}
