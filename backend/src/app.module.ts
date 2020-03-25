import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './api/user/user.module';
import { MessagesModule } from './api/messages/messages.module';

@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost:27017/nocontext'), UserModule, MessagesModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
