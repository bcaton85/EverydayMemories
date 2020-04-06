import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AppUserModel } from 'src/models/AppUser.model';
import { AppUser } from 'src/shared/AppUser';



@Injectable()
export class UserService {

    constructor(@InjectModel(AppUserModel) private userModel: typeof AppUserModel){}

    async findOne(email: string): Promise<AppUserModel> {
        return this.userModel.findOne({
            where: {
                email: email
            }
        });
    }

    async create(user: AppUser): Promise<AppUserModel> {
        console.log(user);
        return this.userModel.create(user);
    }

}
