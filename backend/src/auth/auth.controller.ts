import { Request, Response, Body, Controller, UseGuards, Post, HttpStatus, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './strategies/local-auth.guard';
import { SimpleResponse } from 'src/shared/SimpleResponse';
import { AppUser } from 'src/shared/AppUser';
import { JwtAuthGuard } from './strategies/jwt-auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private authSvc: AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login( @Request() req, @Response() res): Promise<any> {

        if(!req.user){
            res.status(HttpStatus.OK).send({success: false, message:"user_not_found"});
            return;
        }

        console.log(req.user);

        let accessToken: string = await this.authSvc.login(req.user);

        // Setting secure to false since http connection only exists inside the cluster
        // https connectioned is proxied through the angular service
        // May change in future
        res.status(HttpStatus.OK)
            .cookie("SESSIONID", accessToken, {httpOnly:true, secure: false})
            .json({success:true});
    }

    @UseGuards(LocalAuthGuard)
    @Post('register')
    async register(@Request() req, @Response() res, @Body() user: AppUser): Promise<any> {
        let responseBody: SimpleResponse = { success: true }

        let accessToken: string = await this.authSvc.login(req.user);

        // Setting secure to false since http connection only exists inside the cluster
        // https connectioned is proxied through the angular service
        // May change in future
        res.status(HttpStatus.OK)
            .cookie("SESSIONID", accessToken, {httpOnly:true, secure: false})
            .json(responseBody);

    }

    @UseGuards(JwtAuthGuard)
    @Get('isLoggedIn')
    isLoggedIn( @Response() res){
        res.status(HttpStatus.OK).send({success:true});
    }

    @UseGuards(JwtAuthGuard)
    @Get('logout')
    logout( @Request() req, @Response() res): any {
        res.clearCookie("SESSIONID");
        res.status(HttpStatus.OK).send({success:true});
    }
}
