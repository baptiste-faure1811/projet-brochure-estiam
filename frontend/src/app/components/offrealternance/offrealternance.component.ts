import { Component, OnInit } from '@angular/core';
import { Alternanceservice } from '../../services/alternanceService/alternance.service';
import { Ioffrealternance } from '../../services/alternanceService/offrealternance';

@Component({
  selector: 'app-offrealternance',
  templateUrl: './offrealternance.component.html',
  styleUrls: ['./offrealternance.component.css']
})
export class OffrealternanceComponent implements OnInit {
  desactive:boolean=true
  simlpeuser:boolean=false
  public offrealternances: Ioffrealternance[]=[];
  desc: string[]=[]
  constructor(private offrealternanceservice: Alternanceservice) { }
  
  ngOnInit(): void {
    this.Ongetoffrealternance();
  }
  
  

  Ongetoffrealternance(){
            this.offrealternanceservice.getoffrealternance().subscribe(
            ( Offre_alternance)=>this.offrealternances=Offre_alternance);
           // console.log(this.offrealternances)
            
  }
 
  
  

   

   /* Onupdateoffrealternance(nom_recherche:string,nom_entreprise:string,desc_offre:string,poste:string, 
          profil_recherche:string,lien_cand:string){
          this.offrealternanceservice.updateoffrealternance(nom_recherche,nom_entreprise,desc_offre,

          poste,profil_recherche,lien_cand).subscribe()
          console.log(nom_recherche)
    }
*/
   


  
}
