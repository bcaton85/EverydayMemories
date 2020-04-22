import { Request, Response, Controller, Get, Post, Body, Param, UseGuards, HttpStatus, UseInterceptors, UploadedFile } from '@nestjs/common';
import { MessageModel } from 'src/models/Message.model';
import { MessagesService } from './messages.service';
import { SimpleResponse } from 'src/shared/SimpleResponse';
import { GetAllMessagesRes } from 'src/shared/GetAllMessagesResponse';
import { JwtAuthGuard } from 'src/auth/strategies/jwt-auth.guard';
import { Message } from 'src/shared/Message';
import {FileInterceptor} from '@nestjs/platform-express';
import { promises as fs } from 'fs';
import * as randomstring from 'randomstring';
import { Readable } from 'stream';

@Controller('messages')
export class MessagesController {

    constructor(private messageSvc: MessagesService){}

    @UseGuards(JwtAuthGuard)
    @UseInterceptors(FileInterceptor('image'))
    @Post('/create')
    async create(@UploadedFile() file, @Request() req, @Response() res, @Body() body: any ): Promise<any> {
        let responseBody: SimpleResponse = { success: true }

        await fs.stat(`images/${req.user.userID}`).catch( async err => {
            if(err.code == "ENOENT"){
                await fs.mkdir(`images/${req.user.userID}`);
            }
        });
        
        var imageName: string = randomstring.generate(14);
        await fs.writeFile(`images/${req.user.userID}/${imageName}.jpeg`,file.buffer);


        var message: Message = JSON.parse(body.message);

        //TODO: error checking for message model

        message.userID = req.user.userID;
        message.photoPath = imageName;
        return this.messageSvc.create(message).then(dbRes => {
            res.status(HttpStatus.OK).send(responseBody);
        })
        .catch(err => {
            console.log(err);
            responseBody.success = false;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(responseBody);;
        });
    }

    @Get('image/:id')
    @UseGuards(JwtAuthGuard)
    async getImage(@Param('id') id, @Request() req, @Response() res){
     
        res.set({'Content-Type': 'image/jpeg' });
        console.log(req.user.userID);
        console.log(id);

        // TODO: temporary absolute path, remove with webpack
        res.sendFile(`/Users/brandoncaton/projects/Memories/backend/images/${req.user.userID}/${id}.jpeg`);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAllMessages(@Request() req, @Response() res): Promise<any> {
        let responseBody: GetAllMessagesRes = { success: true, messages: [] }

        return this.messageSvc.findAllBeforeCurrMonth(req.user.userID).then( dbRes => {
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
