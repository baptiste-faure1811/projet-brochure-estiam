import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campus } from '../../services/campusService/campus';
import { CampusService } from '../../services/campusService/campus.service';

@Component({
  selector: 'app-formmodification',
  templateUrl: './formmodification.component.html',
  styleUrls: ['./formmodification.component.css']
})
export class FormmodificationComponent implements OnInit {

  lescampus: Campus[] = [];
  

  constructor(private campusService: CampusService,
     private route: ActivatedRoute
    
    ) { }

  
    ngOnInit(): void {
      this.getLescampus();
      }
     
    
      getLescampus(): void {
        this.campusService.getLescampus().subscribe(lesCampus => this.lescampus = lesCampus
          
          )
      }
      
  
  updateCampus(newName: string, newImage: string, newInfos: string, newAdresse: string, id: string) {

    console.log("NEW NAME : " + newName);
    console.log("NEW IMAGE : " + newImage);
    console.log("NEW INFOS : " + newInfos);
    console.log("NEW ADRESSE : " + newAdresse);
    console.log("ID TO EDIT : " + id);
    this.campusService.updateCampus(newName, newImage, newInfos,newAdresse, id).subscribe();  
  }
  
}
