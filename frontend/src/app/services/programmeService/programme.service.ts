import { Injectable } from '@angular/core';
import { Cours, Domaine, Groupe, Programme } from "./programme";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProgrammeService {

  private programmes: Programme[] = [];

  constructor(private http: HttpClient) {}

  // Pogrammes
  getAllProgrammes() : Observable<Programme[]>{
    return this.http.get<Programme[]>("http://localhost:3000/programmes?showDetails=true");
  }

  getProgramme(id: String) : Observable<Programme> {
    return this.http.get<Programme>("http://localhost:3000/programmes/" + id + "?showDetails=true");
  }

  updateProgramme(id: String, name: String, totalDuration: String, year: String): Observable<Programme> {
    const updatedProgramme = { name: name, _id: id, year: year, totalDuration: totalDuration };
    const url = "http://localhost:3000/programmes/" + id;
    return this.http.put<Programme>(url, updatedProgramme);
  }

  createProgramme(name: String, totalDuration: String, year: String): Observable<Programme> {
    const createdProgramme = { name: name, year: year, totalDuration: totalDuration };
    const url = "http://localhost:3000/programmes";
    return this.http.post<Programme>(url, createdProgramme);
  }

  deleteProgramme(id: String): Observable<Programme> {
    const url = "http://localhost:3000/programmes/" + id + "?cascadeDelete=true";
    return this.http.delete<Programme>(url);
  }

  // Groupes
  getGroupe(id: String) : Observable<Groupe> {
    return this.http.get<Groupe>("http://localhost:3000/groupes/" + id + "?showDetails=true");
  }

  getAllGroupes() : Observable<Groupe[]> {
    return this.http.get<Groupe[]>("http://localhost:3000/groupes");
  }

  getGroupesByProgramme(programmeID: String) : Observable<Groupe[]> {
    return this.http.get<Groupe[]>("http://localhost:3000/groupes/programmeID/" + programmeID);
  }

  updateGroupe(id: String, name: String, totalDuration: String, totalECTS: String, programme: String): Observable<Groupe> {
    const updatedGroupe = { name: name, _id: id, totalDuration: totalDuration, totalECTS: totalECTS,  programme: programme};
    const url = "http://localhost:3000/groupes/" + id;
    return this.http.put<Groupe>(url, updatedGroupe);
  }

  deleteGroupe(id: String): Observable<Groupe> {
    const url = "http://localhost:3000/groupes/" + id + "?cascadeDelete=true";
    return this.http.delete<Groupe>(url);
  }

  createGroupe(name: String, totalDuration: String, totalECTS: String, programme: String): Observable<Groupe> {
    const createdGroupe = { name: name, totalDuration: totalDuration, totalECTS: totalECTS,  programme: programme};
    const url = "http://localhost:3000/groupes";
    return this.http.post<Groupe>(url, createdGroupe);
  }

  // Domaine
  getDomaine(id: String) : Observable<Domaine> {
    return this.http.get<Domaine>("http://localhost:3000/domaines/" + id + "?showDetails=true");
  }

  createDomaine(name: String, groupe: String): Observable<Domaine> {
    const createdDomaine = { name: name, groupe: groupe};
    const url = "http://localhost:3000/domaines";
    return this.http.post<Domaine>(url, createdDomaine);
  }

  updateDomaine(id: String, name: String, groupe: String): Observable<Domaine> {
    const updatedGroupe = { name: name, _id: id, groupe: groupe};
    const url = "http://localhost:3000/domaines/" + id;
    return this.http.put<Domaine>(url, updatedGroupe);
  }

  deleteDomaine(id: String): Observable<Domaine> {
    const url = "http://localhost:3000/domaines/" + id + "?cascadeDelete=true";
    return this.http.delete<Domaine>(url);
  }

  // Cours 
  getCours(id: String) : Observable<Cours> {
    return this.http.get<Cours>("http://localhost:3000/cours/" + id);
  }

  updateCours(id: String, name: String, ECTSCredit: String, ECTSCode: String, oldCode: String, semestre: String, duration: String): Observable<Cours> {
    const updatedCours = { name: name, _id: id, ECTSCredit: ECTSCredit, ECTSCode: ECTSCode, oldCode: oldCode, semestre: semestre, duration: duration};
    const url = "http://localhost:3000/cours/" + id;
    return this.http.put<Cours>(url, updatedCours);
  }

  createCours(name: String, ECTSCredit: String, ECTSCode: String, oldCode: String, semestre: String, duration: String, domaine: String): Observable<Cours> {
    const createdCours = { name: name, ECTSCredit: ECTSCredit, ECTSCode: ECTSCode, oldCode: oldCode, semestre: semestre, duration: duration, domaine: domaine};
    const url = "http://localhost:3000/cours/";
    return this.http.post<Cours>(url, createdCours);
  }

  deleteCours(id: String): Observable<Cours> {
    const url = "http://localhost:3000/cours/" + id;
    return this.http.delete<Cours>(url);
  }

}
