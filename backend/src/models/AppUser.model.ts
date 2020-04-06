import { Column, Model, Table, PrimaryKey, HasMany, AutoIncrement, CreatedAt } from 'sequelize-typescript';
import {MessageModel} from './Message.model';

//TODO: enable timestamps at a later date
@Table({
    timestamps: true,
    tableName: "AppUsers"
  })
export class AppUserModel extends Model<AppUserModel> {

    @PrimaryKey
    @AutoIncrement
    @Column
    userID: number;

    @Column
    email: string;

    @Column
    password: string;

    
}
