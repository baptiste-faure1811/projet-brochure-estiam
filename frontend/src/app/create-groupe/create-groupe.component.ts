import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgrammeService } from '../services/programmeService/programme.service';
import { Location } from '@angular/common';
import { Programme } from '../services/programmeService/programme';

@Component({
  selector: 'app-create-groupe',
  templateUrl: './create-groupe.component.html',
  styleUrls: ['./create-groupe.component.css']
})
export class CreateGroupeComponent implements OnInit {

  programmes: Programme[] = [];
  showLoading: Boolean = true;

  constructor(
    private route: ActivatedRoute,
    private programmeService: ProgrammeService,
    private location: Location
  ) { }

  ngOnInit(): void {
      this.getAllProgrammes();
  }

  createGroupe(name: String, totalDuration: String, totalECTS: String, programme: String): void {
    this.programmeService.createGroupe(name, totalDuration, totalECTS, programme).subscribe(groupe => { });
  }

  getAllProgrammes(): void {
    this.programmeService.getAllProgrammes().subscribe(programmes => {
      this.programmes = programmes;
      this.showLoading = false;
    });
  }

}
