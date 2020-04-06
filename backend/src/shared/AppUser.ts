export class AppUser {
    userID: string;
    email: string;
    password: string;

    constructor(email: string, password: string, userID?: string){
        this.userID = userID;
        this.email = email;
        this.password = password;
    }
}