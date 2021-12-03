import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Campus } from './campus';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampusService {
  private lescampus$ = new Subject<Campus[]>();
  private lescampus: Campus[] = [];
  readonly url =  environment.host + "/lescampus";

  constructor(private http: HttpClient) { }

  
  getLescampus() : Observable<Campus[]>{
    return this.http.get<Campus[]>(this.url)
  }

  addCampus(name: string, image: string, infos: string, adresse: string) : Observable<Campus> {
    const newCampus = { name: name, image: image, infos: infos, adresse: adresse} as Campus;
    return this.http.post<Campus>(this.url, newCampus)
  }

  deleteCampus(campus: Campus): Observable<Campus> {
    const newURl = this.url + "/" + campus._id;
    return this.http.delete<Campus>(newURl);
  }

  updateCampus(newName: string, newImage: string, newInfos: string, newAdresse: string, id: string): Observable<Campus> {
    console.log("NEW NAME : " + newName);
    console.log("NEW IMAGE : " + newImage);
    console.log("NEW INFOS : " + newInfos);
    console.log("NEW ADRESSE : " + newAdresse);
    console.log("ID TO EDIT : " + id);

    const updatedCampus = { name: newName, image: newImage, infos: newInfos, adresse: newAdresse, _id: id } as Campus;
    return this.http.put<Campus>(this.url, updatedCampus);
  }

}
