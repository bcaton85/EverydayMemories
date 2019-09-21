import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL: string;

  constructor(
    private http: HttpClient
  ) { 
    this.API_URL = environment.API_URL;

  }

  login(): void {

  }

  logout(): void {
    
  }

  isLoggedIn(): boolean {
    return false;
  }

  register(name: string, email: string, password: string): any {
    const data = {
      name: name,
      email: email,
      password: password
    }

    console.log("[INFO]: Calling backend");
    var temp = this.http.post(`${this.API_URL}/auth/register`, data).pipe(
      tap(_ => console.log("user created")),
      catchError(err => of(console.log(`Error: ${err}`)))
    );

    console.log("request submitted");
    console.log(temp);

    return temp;
  }

}
