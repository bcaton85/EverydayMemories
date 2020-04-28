import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MessageModel } from 'src/models/Message.model';
import { Message } from 'src/shared/Message';
import { Op } from 'sequelize';
import * as moment from 'moment';

@Injectable()
export class MessagesService {
    constructor(@InjectModel(MessageModel) private messageModel: typeof MessageModel){}

    async create(message: Message): Promise<MessageModel> {
        return this.messageModel.create(message);
    }

    async findAll(userID: string): Promise<MessageModel[]>{
        return this.messageModel.findAll( { where:{ userID: userID} } );
    }


    async findAllBeforeCurrMonth(userID: string): Promise<MessageModel[]>{
        // todo: not the exact date, should be revised to account for timezones
        let currDate = moment().startOf('month').add(3, 'day').format('YYYY-MM-DD');
        console.log(currDate);
        return this.messageModel.findAll( { where:{ userID: userID} } );
        // return this.messageModel.findAll( { where:{ userID: userID, submissionDate: { [Op.lt]: currDate } } } );
    }

}
