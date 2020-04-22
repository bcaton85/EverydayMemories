import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import * as jwt from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  backendApi: String = environment.backendApi;

  constructor(private http: HttpClient) { }

  async isLoggedIn(): Promise<boolean> {
    return await this.http.get<any>(`${this.backendApi}/auth/isLoggedIn`)
    .toPromise().then(res => {
      console.log(res);
      return res.success;
    })
    .catch(err => {
      if(err.status == 401){
        return false;
      }
      console.log(err)
    });
  }

  async login(email: String, password: String): Promise<string> {

    return await this.http.post<any>(`${this.backendApi}/auth/login`,{email: email, password: password})
      .toPromise().then(res => {
        console.log(res);
        return res.success;
      })
      .catch(err => {
        console.log(err);
      });

  }

  async logout(){
    return await this.http.get<any>(`${this.backendApi}/auth/logout`)
      .toPromise().then(res => {
        console.log(res);
        return res.success;
      })
      .catch(err => {console.log(err)});
  }

  decode(token: string): any {
    try {
      return jwt(token);
    }
    catch(Error){
      return null;
    }
  }


}
