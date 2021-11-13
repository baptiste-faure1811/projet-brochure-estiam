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

  addPaiement(paiement: Paiement) : Observable<Paiement> {
    console.log(`paiement : ${paiement.exemple.nom}`)
    const newPaiement = {
      exemple: {
        nom: paiement.exemple.nom,
        info: paiement.exemple.info
      },
      prixAnnuel: {
        titre: paiement.prixAnnuel.titre,
        prix: paiement.prixAnnuel.prix,
        details: paiement.prixAnnuel.details
      },
      fraisMobilite: {
        titre: paiement.fraisMobilite.titre,
        prix: paiement.fraisMobilite.prix,
        details: paiement.fraisMobilite.details
      },
      paiementEchelonne: {
        titre: paiement.paiementEchelonne.titre,
        prix: paiement.paiementEchelonne.prix,
        details: paiement.paiementEchelonne.details
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
      _id:newPaiement._id,
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
