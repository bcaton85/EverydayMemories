import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  backendApi: String = environment.backendApi;
  private loggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  async login(email: String, password: String): Promise<boolean> {

    this.loggedIn = await this.http.post<any>(`${this.backendApi}/auth/login`,{email: email, password: password})
      .toPromise().then(res => {
        console.log(res);
        return res.success;
      })
      .catch(err => {console.log(err)});
    console.log(this.loggedIn);

    return this.loggedIn;
  }


}
