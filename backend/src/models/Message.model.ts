import { Column, Model, Table, PrimaryKey, ForeignKey, AutoIncrement, NotNull} from 'sequelize-typescript';
import { AppUserModel } from './AppUser.model';

//TODO: enable timestamps at a later date
@Table({
    timestamps: true,
    tableName: "Messages"
  })
export class MessageModel extends Model<MessageModel> {
    @PrimaryKey
    @AutoIncrement
    @Column
    messageID: number
    
    @ForeignKey(() => AppUserModel)
    @Column
    userID: number;

    @Column
    messageText: string;

    @Column
    submissionDate: Date;

}