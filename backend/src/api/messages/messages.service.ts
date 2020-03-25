import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from 'src/interfaces/Message';
import { User } from 'src/interfaces/User';

@Injectable()
export class MessagesService {
    constructor(@InjectModel('Message') private messageModel: Model<Message>){}

    async create(message: Message): Promise<Message> {
        return this.messageModel.create(message);
    }

    async findAll(userId: string): Promise<Message[]>{
        return this.messageModel.find( {userId: userId }).exec();
    }

}