import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

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

    return this.http.post(`${this.API_URL}/auth/register`, data);
  }

}
