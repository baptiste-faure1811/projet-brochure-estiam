import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';

import { map } from "rxjs/operators";
import { Entreprise } from "./entreprise";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  private entreprises: Entreprise[] = [];
  private entreprises$ = new Subject<Entreprise[]>();
  readonly url = "http://localhost:3000/entreprises";

  constructor(private http: HttpClient) {}

  getEntreprises() : Observable<Entreprise[]>{
    return this.http.get<Entreprise[]>(this.url)
  }

  addEntreprise(name: string) : Observable<Entreprise> {
    const newEntreprise = { name: name } as Entreprise;
    return this.http.post<Entreprise>(this.url, newEntreprise)
  }

  deleteEntreprise(entreprise: Entreprise): Observable<Entreprise> {
    const newURl = "http://localhost:3000/entreprises/" + entreprise._id;
    return this.http.delete<Entreprise>(newURl);
  }

}