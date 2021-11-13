import { Component, OnInit } from '@angular/core';
import { Programme } from '../../services/programmeService/programme';
import { ProgrammeService } from '../../services/programmeService/programme.service';


@Component({
  selector: 'app-programme-year',
  templateUrl: './programme-year.component.html',
  styleUrls: ['./programme-year.component.css']
})
export class ProgrammeYearComponent implements OnInit {

  programmes: Programme[] = [];

  constructor(private programmeService: ProgrammeService) { }

  ngOnInit(): void {
    this.getAllProgrammes();
  }

  getAllProgrammes(): void {
    this.programmeService.getAllProgrammes().subscribe(programmes => this.programmes = programmes);
  }

}
