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
    const entrepriseData = new FormData();
    entrepriseData.append("name", name);
   

    return this.http.post<Entreprise>(this.url, entrepriseData)


      // .subscribe((entrepriseData) => {
      //   const entreprise: Entreprise = {
      //     _id: entrepriseData.entreprise._id,
      //     name: name,
      //   };
      //   this.entreprises.push(entreprise);
      //   this.entreprises$.next(this.entreprises);
      // });
  }

}