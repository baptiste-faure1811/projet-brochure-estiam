
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Certification } from './certification';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {
  private certifications$ = new Subject<Certification[]>();
  private certifications : Certification [] = [];
  readonly url = environment.host+"/certifications";



  constructor(private http: HttpClient) { }

  getCertifications() : Observable<Certification[]>{
    return this.http.get<Certification[]>(this.url)
  }

  addCertification(name: string) : Observable<Certification> {
    const newCertification = { name: name } as Certification;
    return this.http.post<Certification>(this.url, newCertification)
  }

  deleteCertification(certification: Certification): Observable<Certification> {
    const newURl = this.url + "/" + certification._id;
    return this.http.delete<Certification>(newURl);
  }

  
  updateCertification(newName: string, id: string): Observable<Certification> {
    console.log("NEW NAME : " + newName);
    console.log("ID TO EDIT : " + id);

    const updatedCertification = { name: newName, _id: id } as Certification;
    return this.http.put<Certification>(this.url, updatedCertification);
  }
  
}
