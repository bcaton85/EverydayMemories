import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MessageModel } from 'src/models/Message.model';
import { Message } from 'src/shared/Message';

@Injectable()
export class MessagesService {
    constructor(@InjectModel(MessageModel) private messageModel: typeof MessageModel){}

    async create(message: Message): Promise<MessageModel> {
        return this.messageModel.create(message);
    }

    async findAll(userID: string): Promise<MessageModel[]>{
        return this.messageModel.findAll( { where:{ userID: userID} } );
    }

}
