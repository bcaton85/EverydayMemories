import { Message } from "./Message";

export class GetAllMessagesRes {
    success: boolean;
    messages: Message[];
}