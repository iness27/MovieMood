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
export class UserService {
 
  constructor(private http: HttpClient) { }
 
  getPublicContent(): Observable<any> {
    return this.http.get(constants.USER_GET_ALL, { responseType: 'text' });
  }
 
  getUserBoard(): Observable<any> {
    return this.http.get(constants.USER_BOARD, { responseType: 'text' });
  }
 
  getModeratorBoard(): Observable<any> {
    return this.http.get(constants.MODERATOR_BOARD, { responseType: 'text' });
  }
 
  getAdminBoard(): Observable<any> {
    return this.http.get(constants.ADMIN_BOARD, { responseType: 'text' });
  }
 
  getCurrentUser(): Observable<any> {
    return this.http.get(constants.CURRENT_USER, httpOptions);
  }
}