import { Request, Response, Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { Message } from '../../interfaces/Message';
import { MessagesService } from './messages.service';
import { SimpleResponse } from 'src/shared/SimpleResponse';
import { GetAllMessagesRes } from 'src/interfaces/GetAllMessagesResponse';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('messages')
export class MessagesController {

    constructor(private messageSvc: MessagesService){}

    @UseGuards(JwtAuthGuard)
    @Post('/create')
    async create( @Request() req, @Response() res, @Body() message: Message ): Promise<any> {
        let responseBody: SimpleResponse = { success: true }
        console.log(req.user);

        message.user_id = req.user.user_id;
        return this.messageSvc.create(message).then(dbRes => {
            console.log(dbRes);
            res.send({success:true});
        })
        .catch(err => {
            console.log(err);
            responseBody.success = false;
            return responseBody.success;
        });
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAllMessages(@Request() req, @Response() res): Promise<any> {
        let responseBody: GetAllMessagesRes = { success: true, messages: [] }

        return this.messageSvc.findAll(req.user.user_id).then( dbRes => {
            console.log(dbRes);
            responseBody.messages = dbRes;
            res.send(responseBody);
        })
        .catch( err => {
            console.log(err);
            responseBody.success = false;
            res.send(responseBody);
        });
    }

}
