import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgrammeService } from '../services/programmeService/programme.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-programme',
  templateUrl: './create-programme.component.html',
  styleUrls: ['./create-programme.component.css']
})
export class CreateProgrammeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private programmeService: ProgrammeService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  createProgramme(name: String, totalDuration: String, year: String): void {
    this.programmeService.createProgramme(name, totalDuration, year).subscribe(programme => { });
    this.location.go("/");
  }

}
