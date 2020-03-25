import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
    userId: String,
    messageText: String,
    submissionDate: String
});