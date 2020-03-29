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

  submit(message: Message): Promise<any> {
    return this.http.post<any>(`${this.backendApi}/messages/create`,message)
    .toPromise();
  }

  getMessages(userId: String): Promise<any> {
    return this.http.post<any>(`${this.backendApi}/messages`,{userId:userId} )
    .toPromise();
  }

}
