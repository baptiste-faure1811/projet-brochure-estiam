import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Groupe, Programme } from '../services/programmeService/programme';
import { ProgrammeService } from '../services/programmeService/programme.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-groupe',
  templateUrl: './edit-groupe.component.html',
  styleUrls: ['./edit-groupe.component.css']
})
export class EditGroupeComponent implements OnInit {

  groupe: Groupe;
  programmes: Programme[] = [];
  showLoading: Boolean = true;
  editGroupeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private programmeService: ProgrammeService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('groupeID') as String;
    this.getGroupe(id);
  }

  getGroupe(id: String): void {
    this.programmeService.getGroupe(id).subscribe(groupe => {
      this.groupe = groupe;
      this.getAllProgrammes();
    });
  }

  getAllProgrammes(): void {
    this.programmeService.getAllProgrammes().subscribe(programmes => {
      this.programmes = programmes;
      this.editGroupeForm = this.fb.group({
        programmeSelect: programmes.find(x => x._id === this.groupe.programme)!._id
      });
      this.showLoading = false;
    });
  }

  updateGroupe(name: String, totalDuration: String, totalECTS: String, programme: String): void {
    this.programmeService.updateGroupe(this.groupe._id, name, totalDuration, totalECTS, programme).subscribe(groupe => {
      this.groupe = groupe;
    });
  }

  deleteGroupe(id: String) {
    this.programmeService.deleteGroupe(id).subscribe(groupe => {
        this.groupe = groupe
    });
  }

}
