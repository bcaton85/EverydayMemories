import { Request, Response, Controller, Get, Post, Body, Param, UseGuards, HttpStatus } from '@nestjs/common';
import { MessageModel } from 'src/models/Message.model';
import { MessagesService } from './messages.service';
import { SimpleResponse } from 'src/shared/SimpleResponse';
import { GetAllMessagesRes } from 'src/shared/GetAllMessagesResponse';
import { JwtAuthGuard } from 'src/auth/strategies/jwt-auth.guard';
import { Message } from 'src/shared/Message';

@Controller('messages')
export class MessagesController {

    constructor(private messageSvc: MessagesService){}

    @UseGuards(JwtAuthGuard)
    @Post('/create')
    async create( @Request() req, @Response() res, @Body() message: Message ): Promise<any> {
        let responseBody: SimpleResponse = { success: true }
        console.log(req.user);

        //TODO: error checking for message model
        console.log(req.user);
        message.userID = req.user.userID;
        return this.messageSvc.create(message).then(dbRes => {
            res.status(HttpStatus.OK).send(responseBody);
        })
        .catch(err => {
            console.log(err);
            responseBody.success = false;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(responseBody);;
        });
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAllMessages(@Request() req, @Response() res): Promise<any> {
        let responseBody: GetAllMessagesRes = { success: true, messages: [] }

        return this.messageSvc.findAll(req.user.userID).then( dbRes => {
             
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
