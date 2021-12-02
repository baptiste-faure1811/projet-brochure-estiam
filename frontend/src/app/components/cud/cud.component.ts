import { Component, OnInit } from '@angular/core';
import { Alternanceservice } from '../../services/alternanceService/alternance.service';
import { Ioffrealternance } from '../../services/alternanceService/offrealternance';


@Component({
  selector: 'app-cud',
  templateUrl: './cud.component.html',
  styleUrls: ['./cud.component.css']
})
export class CudComponent implements OnInit {

  simlpeuser:boolean=true
  public offrealternances: Ioffrealternance[]=[]
 
  desc: string[]=[]
  constructor(private offrealternanceservice: Alternanceservice) { }
  
  ngOnInit(): void {
   this.onget()
  }
  
Onaddoffrealternance(nom_entreprise:string,desc_offre:string,poste:string, 
    profil_recherche:string,lien_cand:string){
    this.offrealternanceservice.addoffrealternance(nom_entreprise,desc_offre,
    poste,profil_recherche,lien_cand).subscribe()
    //console.log("succes creation")                             
}

onget(){
    this.offrealternanceservice.getoffrealternance().subscribe(
    ( Offre_alternance)=>this.offrealternances=Offre_alternance);
}


Onupdateoffrealternance(nom_recherche:string,nom_entreprise:string,desc_offre:string,poste:string, 
    profil_recherche:string,lien_cand:string){
    this.offrealternanceservice.updateoffrealternance(nom_recherche,nom_entreprise,desc_offre,

    poste,profil_recherche,lien_cand).subscribe()
    console.log(nom_recherche)
}
Ondeleteoffrealternance(offrealternance:Ioffrealternance){
    this.offrealternanceservice.deleteoffrealternance(offrealternance).subscribe()
}

}
