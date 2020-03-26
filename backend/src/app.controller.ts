import { AppService } from './app.service';
import { Controller, Get, Request, Post, Body, UseGuards } from '@nestjs/common';
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

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login( @Request() req): Promise<any> {
      return this.authSvc.login(req.user);
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
