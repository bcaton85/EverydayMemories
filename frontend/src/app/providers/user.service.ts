import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isLoggedIn(): boolean {
    // TODO: implement backend login call
    
    return true;
  }
}
