import { Component, OnInit } from '@angular/core';
import { Programme } from '../../services/programmeService/programme';
import { ProgrammeService } from '../../services/programmeService/programme.service';

@Component({
  selector: 'app-programmes-page',
  templateUrl: './programmes-page.component.html',
  styleUrls: ['./programmes-page.component.css']
})
export class ProgrammesPageComponent implements OnInit {

  programmes: Programme[] = [];

  constructor(private programmeService: ProgrammeService) { }

  ngOnInit(): void {
    this.getAllProgrammes();
  }

  getAllProgrammes(): void {
    this.programmeService.getAllProgrammes().subscribe(programmes => this.programmes = programmes);
  }

}
