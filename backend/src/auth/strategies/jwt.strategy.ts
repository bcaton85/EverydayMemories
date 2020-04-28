import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { ConfigService } from '@nestjs/config';
import { config } from 'rxjs';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([ function(req) { return req && req.cookies ? req.cookies['SESSIONID'] : null} ]),
            ignoreExpiration: false,
            secretOrKey: fs.readFileSync(configService.get<string>('P_KEY_PATH'))
        });

        
    }
    
    async validate(payload: any){
        return { userID: payload.sub, email: payload.email }
    }

}

