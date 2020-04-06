import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppUserModel } from 'src/models/AppUser.model';

@Module({
  imports: [ SequelizeModule.forFeature([AppUserModel]) ],
  exports: [ UserService ],
  controllers: [ UserController],
  providers: [UserService]
})
export class UserModule {}
