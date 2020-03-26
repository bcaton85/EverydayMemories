import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './api/user/user.module';
import { MessagesModule } from './api/messages/messages.module';
import { AuthModule } from './auth/auth.module';
import { UserService } from './api/user/user.service';
import { AuthService } from './auth/auth.service';
import { Controller, Get, Request, Post, Body, UseGuards } from '@nestjs/common';
import { SimpleResponse } from 'src/shared/SimpleResponse';
import { User } from 'src/interfaces/User';
import { isRegExp } from 'util';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost:27017/nocontext'), UserModule, MessagesModule, AuthModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
