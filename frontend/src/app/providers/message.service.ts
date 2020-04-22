import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../pages/interfaces/message';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  backendApi: String = environment.backendApi;

  constructor(private http: HttpClient) { }

  submit(message: FormData): Promise<any> {
    return this.http.post<any>(`${this.backendApi}/messages/create`,message)
    .toPromise();
  }

  getMessages(): Promise<any> {
    return this.http.get<any>(`${this.backendApi}/messages`)
    .toPromise();
  }

}
