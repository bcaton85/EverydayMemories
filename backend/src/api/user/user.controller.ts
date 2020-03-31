import { Request, Controller, UseGuards, Post, Body } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/interfaces/User';
import { SimpleResponse } from 'src/shared/SimpleResponse';
import { UserService } from './user.service';


@Controller('user')
export class UserController {

    constructor(private userSvc: UserService){}

    @UseGuards(JwtAuthGuard)
    @Post('register')
    async register(@Request() req, @Body() user: User): Promise<any> {
        console.log(req);
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
