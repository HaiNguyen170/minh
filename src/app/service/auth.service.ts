import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../environment";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl + 'api/login/', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string, role: string, faculty: string): Observable<any> {
    return this.http.post(this.baseUrl + 'api/signup/', {
      username,
      email,
      password,
      role,
      faculty
    }, httpOptions);
  }
}