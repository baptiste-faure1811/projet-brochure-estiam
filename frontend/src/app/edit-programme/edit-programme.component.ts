import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Programme } from '../services/programmeService/programme';
import { ProgrammeService } from '../services/programmeService/programme.service';
import { Location } from '@angular/common';

@Component({
  selector: 'edit-programme',
  templateUrl: './edit-programme.component.html',
  styleUrls: ['./edit-programme.component.css']
})
export class EditProgrammeComponent implements OnInit {

  programme: Programme;
  showLoading: Boolean = true;

  constructor(
    private route: ActivatedRoute,
    private programmeService: ProgrammeService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('programmeID') as String;
    this.getProgramme(id);
  }

  getProgramme(id: String): void {
    this.programmeService.getProgramme(id).subscribe(programme => {
      this.programme = programme;
      this.showLoading = false;
    });
  }

  updateProgramme(name: String, totalDuration: String, year: String): void {
    this.programmeService.updateProgramme(this.programme._id, name, totalDuration, year).subscribe(programme => {
      this.programme = programme;
    });
  }

  deleteProgramme(id: String) {
    this.programmeService.deleteProgramme(id).subscribe(programme => {
        this.programme = programme
    });
  }


}
