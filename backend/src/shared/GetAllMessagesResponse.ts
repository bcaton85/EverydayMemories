import { MessageModel } from "src/models/Message.model";

export class GetAllMessagesRes {
    success: boolean;
    messages: MessageModel[];
}