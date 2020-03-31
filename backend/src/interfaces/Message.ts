import { Document } from 'mongoose';

export class Message extends Document {
    messageText: string;
    user_id: string;
    submissionDate: string;
}