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

    let accessToken: string = await this.authSvc.login(req.user);

    // Setting secure to false since http connection only exists inside the cluster
    // https connectioned is proxied through the angular service
    // May change in future
    res.status(HttpStatus.OK)
      .cookie("SESSIONID", accessToken, {httpOnly:true, secure: false})
      .json({success:true});
  }

  @UseGuards(JwtAuthGuard)
  @Get('auth/isLoggedIn')
  isLoggedIn( @Response() res){
    res.status(HttpStatus.OK).send({success:true});
  }

  @UseGuards(JwtAuthGuard)
  @Get('auth/logout')
  logout( @Request() req, @Response() res): any {
    res.clearCookie("SESSIONID");
    res.status(HttpStatus.OK).send({success:true});
  }

}
