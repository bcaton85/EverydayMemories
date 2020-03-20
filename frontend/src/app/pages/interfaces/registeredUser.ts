import { User } from '../interfaces/user';

export interface RegisterUser extends User {
    passwordConfirm: String
}