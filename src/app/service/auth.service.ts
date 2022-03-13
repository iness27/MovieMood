import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { constants } from '../util/constants';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
 
  login(credentials: { username: any; password: any; }): Observable<any> {
    return this.http.post(constants.SIGN_IN, {
      email: credentials.username,
      password: credentials.password
    }, httpOptions);
  }
 
  register(user: { displayName: any; email: any; password: any; matchingPassword: any; }): Observable<any> {
    return this.http.post(constants.SIGN_UP, {
      displayName: user.displayName,
      email: user.email,
      password: user.password,
      matchingPassword: user.matchingPassword,
      socialProvider: 'LOCAL'
    }, httpOptions);
  }
}