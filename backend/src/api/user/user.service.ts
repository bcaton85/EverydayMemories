import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../interfaces/User';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private userModel: Model<User>){}

    async login(user: User): Promise<User[]> {
        return this.userModel.find({ enail:user.email, password:user.password }).exec();
    }

    async create(user: User): Promise<User> {
        return this.userModel.create(user);
    }

}
