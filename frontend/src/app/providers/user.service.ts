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

  

  register(email: String, password: String): Promise<any> {
    return this.http.post<any>(`${this.backendApi}/auth/register`,{email: email, password: password})
    .toPromise();
  }
}
