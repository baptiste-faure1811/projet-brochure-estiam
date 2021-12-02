import { Component, OnInit } from '@angular/core';
import { Idescalternance } from '../../services/alternanceService/descalternance';
import { Alternanceservice } from '../../services/alternanceService/alternance.service';

@Component({
  selector: 'app-cuddesc',
  templateUrl: './cuddesc.component.html',
  styleUrls: ['./cuddesc.component.css']
})
export class CuddescComponent implements OnInit {

  simlpeuser:boolean=false
  constructor(private descalternance: Alternanceservice) { }

  descalternances: Idescalternance[]=[]

  ngOnInit(): void {
    this.onget()
  }

  Onadddescalternance(image:string,texte:string){
    this.descalternance.adddescalternance(image,texte).subscribe()
  }
  onget(){
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
