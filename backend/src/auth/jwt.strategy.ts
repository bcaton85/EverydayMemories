import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([ function(req) { return req && req.cookies ? req.cookies['SESSIONID'] : null} ]),
            ignoreExpiration: false,
            secretOrKey: fs.readFileSync('src/secrets/jwt/private.key')
        });
    }
    
    async validate(payload: any){
        return { user_id: payload.sub, email: payload.email }
    }

}

