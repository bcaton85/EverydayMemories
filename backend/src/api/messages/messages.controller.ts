import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Message } from '../../interfaces/Message';
import { MessagesService } from './messages.service';
import { SimpleResponse } from 'src/shared/SimpleResponse';
import { GetAllMessagesRes } from 'src/interfaces/GetAllMessagesResponse';

@Controller('messages')
export class MessagesController {

    constructor(private messageSvc: MessagesService){}

    @Post('/create')
    async submit( @Body() message: Message ): Promise<any> {
        let responseBody: SimpleResponse = { success: true }

        return this.messageSvc.create(message).then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
            responseBody.success = false;
            return responseBody.success;
        });
    }

    @Get('/:id')
    async getAllMessages(@Param('id') userId: string): Promise<any> {
        let responseBody: GetAllMessagesRes = { success: true, messages: [] }

        return this.messageSvc.findAll(userId).then( res => {
            console.log(res);
            responseBody.messages = res;
            return responseBody;
        })
        .catch( err => {
            console.log(err);
            responseBody.success = false;
            return responseBody;
        });
    }

}
