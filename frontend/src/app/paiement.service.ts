import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Paiement } from "./paiement";
import { Observable, Subject, of} from "rxjs";
import { catchError, tap } from 'rxjs/operators';

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

  getPaiement(id: string): Observable<Paiement> {
    const url = `${this.url}/detail/${id}`;
    return this.http.get<Paiement>(url);
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

  updatePaiement(newPaiement: Paiement): Observable<Paiement> {
    const updatedPaiement = {
      exemple: {
        nom: newPaiement.exemple.nom,
        info: newPaiement.exemple.info
      },
      prixAnnuel: {
        titre: newPaiement.prixAnnuel.titre,
        prix: newPaiement.prixAnnuel.prix,
        details: newPaiement.prixAnnuel.details
      },
      fraisMobilite: {
        titre: newPaiement.fraisMobilite.titre,
        prix: newPaiement.fraisMobilite.prix,
        details: newPaiement.fraisMobilite.details
      },
      paiementEchelonne: {
        titre: newPaiement.paiementEchelonne.titre,
        prix: newPaiement.paiementEchelonne.prix,
        details: newPaiement.paiementEchelonne.details
      }
    } as unknown as Paiement;
    return this.http.put<Paiement>(this.url, updatedPaiement);
  }
}
