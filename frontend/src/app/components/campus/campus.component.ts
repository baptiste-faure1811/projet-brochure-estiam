import { Component, OnInit } from '@angular/core';
import { Campus } from '../../services/campusService/campus';
import { CampusService } from '../../services/campusService/campus.service';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css']
})
export class CampusComponent implements OnInit {

  
  lescampus: Campus[] = [];

  constructor(private campusService: CampusService) { }

  ngOnInit(): void {
  this.getLescampus();
  }
 

  getLescampus(): void {
    this.campusService.getLescampus().subscribe(lesCampus => this.lescampus = lesCampus
      
      )
  }
  


  deleteCampus(campus: Campus) {
    this.campusService.deleteCampus(campus).subscribe();
  }


}
