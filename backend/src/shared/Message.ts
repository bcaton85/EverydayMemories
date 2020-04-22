import { Document } from 'mongoose';

export class Message {
    messageText: string;
    userID: string;
    submissionDate: string;
    photoPath: string;
}