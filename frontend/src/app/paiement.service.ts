import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Paiement } from "./paiement";
import { Observable, Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  private Paiements: Paiement[] = [];
  private paiements$ = new Subject<Paiement[]>();
  readonly url = "http://localhost:3000/paiements";

  constructor(private http: HttpClient) {}

  getPaiements() : Observable<Paiement[]>{
    return this.http.get<Paiement[]>(this.url)
  }

  addPaiement(name: string) : Observable<Paiement> {
    const newPaiement = {
      exemple: {
        nom: "ExempleNom",
        info: "ExempleInfo"
      },
      prixAnnuel: {
        titre: "prixAnnuelTitre",
        prix: 10000,
        details: "prixAnnuelDetails"
      },
      fraisMobilite: {
        titre: "fraisMobiliteTitre",
        prix: 20000,
        details: "fraisMobiliteDetails"
      },
      paiementEchelonne: {
        titre: "paiementEchelonneTitre",
        prix: 30000,
        details: "paiementEchelonneDetails"
      }
    } as unknown as Paiement;
    // return this.http.post<Paiement>(this.url, newPaiement)

    return this.http.post<Paiement>(this.url, newPaiement);
  }

  deletePaiement(paiement: Paiement): Observable<Paiement> {
    const newURl = this.url + "/" + paiement._id;
    return this.http.delete<Paiement>(newURl);
  }

  updatePaiement(newName: string, id: string): Observable<Paiement> {
    // console.log("NEW NAME : " + newName);
    // console.log("ID TO EDIT : " + id);

    // const updatedPaiement = { name: newName, _id: id } as Paiement;
    // return this.http.put<Paiement>(this.url, updatedPaiement);
    return this.http.put<Paiement>(this.url, null);
  }
}
