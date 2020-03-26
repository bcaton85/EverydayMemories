import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../interfaces/User';



@Injectable()
export class UserService {

    constructor(@InjectModel('User') private userModel: Model<User>){}

    async findOne(email: string): Promise<User> {
        return this.userModel.findOne({ email: email }).exec();
    }

    async create(user: User): Promise<User> {
        return this.userModel.create(user);
    }

}
