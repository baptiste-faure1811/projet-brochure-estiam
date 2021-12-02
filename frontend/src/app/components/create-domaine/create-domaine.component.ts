import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgrammeService } from '../../services/programmeService/programme.service';
import { Groupe, Programme } from '../../services/programmeService/programme';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-domaine',
  templateUrl: './create-domaine.component.html',
  styleUrls: ['./create-domaine.component.css']
})
export class CreateDomaineComponent implements OnInit {

  programmes: Programme[] = [];
  groupes: Groupe[] = [];
  showLoading: Boolean = true;
  isInitial: Boolean = true;

  constructor(
    private route: ActivatedRoute,
    private programmeService: ProgrammeService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
      this.getAllProgrammes();
  }

  createDomaine(name: String, groupe: String): void {
    this.programmeService.createDomaine(name, groupe).subscribe(domaine => { });
  }

  getAllProgrammes(): void {
    this.programmeService.getAllProgrammes().subscribe(programmes => {
      this.programmes = programmes;
      this.showLoading = false;
    });
  }

  getCorrespondingGroupes(programmeID: String): void {
    this.programmeService.getGroupesByProgramme(programmeID).subscribe(groupes => {
      this.groupes = groupes;
      this.isInitial = false
    });
  }
}
