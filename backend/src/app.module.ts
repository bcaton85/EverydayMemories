import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/user/user.module';
import { MessagesModule } from './api/messages/messages.module';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { AppUserModel } from 'src/models/AppUser.model';
import { MessageModel } from 'src/models/Message.model';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ 
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService): Promise<SequelizeModuleOptions> => ({
          dialect: 'postgres',
          host: configService.get<string>('DB_HOST'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB_NAME'),
          models: [AppUserModel, MessageModel]
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    MessagesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}