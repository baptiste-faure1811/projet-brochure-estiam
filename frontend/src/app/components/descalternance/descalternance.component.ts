import { Component, OnInit } from '@angular/core';
import { Idescalternance } from '../../services/alternanceService/descalternance';
import { Alternanceservice } from '../../services/alternanceService/alternance.service';
@Component({
  selector: 'app-descalternance',
  templateUrl: './descalternance.component.html',
  styleUrls: ['./descalternance.component.css']
})
export class DescalternanceComponent implements OnInit {
  simlpeuser:boolean=false
  constructor(private descalternance: Alternanceservice) { }

  descalternances: Idescalternance[]=[]

  ngOnInit(): void {
    this.ongetdescalternance()
  }

  Onadddescalternance(image:string,texte:string){
    this.descalternance.adddescalternance(image,texte).subscribe()
  }
  ongetdescalternance(){
    this.descalternance.getdescalternance().subscribe(
      (response)=>this.descalternances=response
    )
  }

  Ondeletedescalternance(Descalternance: Idescalternance){
       this.descalternance.deletedescalternance(Descalternance).subscribe()
  }
  Onupdatedescalternance(image:string,text:string){
    this.descalternance.updatedescalternance(image,text).subscribe()
  }
}
