import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { MessageModel } from 'src/models/Message.model';

@Module({
  imports: [ SequelizeModule.forFeature([MessageModel]) ],
  controllers: [MessagesController],
  providers: [MessagesService]
})
export class MessagesModule {}
