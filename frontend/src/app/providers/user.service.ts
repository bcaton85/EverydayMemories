import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {environment} from '../../environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  backendApi: String = environment.backendApi;

  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    // TODO: implement backend login call
    
    return true;
  }

  login(email: String, password: String): boolean {

    this.http.post(`${this.backendApi}/auth/login`,{email: email, password: password})
      .pipe()
      .subscribe( (response)=> {
          console.log(response)
        });

    return true;
  }
}
