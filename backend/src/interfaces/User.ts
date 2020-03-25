import { Document } from 'mongoose';

export class User extends Document {
    userId: string;
    email: string;
    password: string;
}