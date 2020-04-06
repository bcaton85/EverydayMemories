import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/user/user.module';
import { MessagesModule } from './api/messages/messages.module';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppUserModel } from 'src/models/AppUser.model';
import { MessageModel } from 'src/models/Message.model';

@Module({
  imports: [ 
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'everyday_memories',
      models: [AppUserModel, MessageModel]
    }),
    AuthModule,
    MessagesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
