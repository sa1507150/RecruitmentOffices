import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RecruitmentUserService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:9191/recruitmentUsers/';

  login(user: User) : Observable<User> {
    return this.http.post<User>('http://localhost:9191/recruitmentUsers/login', user);
  }

  logout(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:9191/recruitmentUsers/logout', user);
  }

  getUsers() : Observable<User> {
    return this.http.get<User>(this.baseUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.baseUrl + id);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.baseUrl + user.id, user);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(this.baseUrl + id);
  }

}
