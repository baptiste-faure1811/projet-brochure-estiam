import { Injectable } from '@angular/core';
import { User } from "./user";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  // Pogrammes
  checkUser(email: String, password: String): Observable<Response> {
    var userData = { email: email, password: password};
    return this.http.post<Response>("http://localhost:3000/user", userData);
  }

}

class Response {
  authentification: boolean;
  constructor() {}
}
