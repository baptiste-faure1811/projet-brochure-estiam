import { Injectable } from '@angular/core';
import { User } from "./user";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject } from "rxjs";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  // Pogrammes
  checkUser(email: String, password: String): Observable<Response> {
    var userData = { email: email, password: password};
    return this.http.post<Response>(environment.host + "/user", userData);
  }

}

class Response {
  authentification: boolean;
  constructor() {}
}
