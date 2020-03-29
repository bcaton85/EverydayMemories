import { AppService } from './app.service';
import { Controller, Get, Request, Response, Post, Body, UseGuards, HttpStatus } from '@nestjs/common';
import { SimpleResponse } from 'src/shared/SimpleResponse';
import { UserService } from './api/user/user.service';
import { User } from 'src/interfaces/User';
import { isRegExp } from 'util';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthService } from 'src/auth/auth.service';

@Controller()
export class AppController {

  constructor(private userSvc: UserService, private authSvc: AuthService){}

  @Get('test')
  test(){
    return 'success';
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login( @Request() req, @Response() res): Promise<any> {

    //TODO: replace with this option after switching over https
    res.status(HttpStatus.OK).cookie("SESSIONID",this.authSvc.login(req.user),{httpOnly:true, secure: true}).json({success:true});
    // res.status(HttpStatus.OK).cookie("SESSIONID",this.authSvc.login(req.user), {secure: false} ).json({success:true});
  }

  @UseGuards(JwtAuthGuard)
  @Post('auth/register')
  async register(@Body() user: User): Promise<any> {
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
