import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
    user_id: String,
    messageText: String,
    submissionDate: String
});