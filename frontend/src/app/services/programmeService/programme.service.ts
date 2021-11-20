import { Injectable } from '@angular/core';
import { Programme } from "./programme";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProgrammeService {

  private programmes: Programme[] = [];
  readonly url = "http://localhost:3000/programmes?showDetails=true";

  constructor(private http: HttpClient) {}

  getAllProgrammes() : Observable<Programme[]>{
    return this.http.get<Programme[]>(this.url);
  }

}
