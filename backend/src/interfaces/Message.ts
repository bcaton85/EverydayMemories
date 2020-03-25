import { Document } from 'mongoose';

export class Message extends Document {
    messageText: string;
    userId: string;
    submissionDate: string;
}