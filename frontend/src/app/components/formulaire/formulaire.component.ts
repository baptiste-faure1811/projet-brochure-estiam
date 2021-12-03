import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampusService } from '../../services/campusService/campus.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  constructor(private campusService: CampusService,
    private location: Location, private route: ActivatedRoute
    
    ) { }

  ngOnInit(): void {
  }
   

  addCampus(name: string, image:string, infos: string, adresse: string): void {
    this.campusService.addCampus(name,image,infos,adresse).subscribe();
    
  }

}
