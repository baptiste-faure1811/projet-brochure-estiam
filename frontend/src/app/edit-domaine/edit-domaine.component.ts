import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Domaine, Groupe, Programme } from '../services/programmeService/programme';
import { ProgrammeService } from '../services/programmeService/programme.service';

@Component({
  selector: 'app-edit-domaine',
  templateUrl: './edit-domaine.component.html',
  styleUrls: ['./edit-domaine.component.css']
})
export class EditDomaineComponent implements OnInit {

  // Domaine properties
  domaine: Domaine;
  initialGroupe: Groupe;
  initialProgramme: Programme;

  programmes: Programme[] = [];
  groupes: Groupe[] = [];
  showLoading: Boolean = true;
  editDomaineForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private programmeService: ProgrammeService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('domaineID') as String;
    // 1. get domaine
    this.getDomaine(id);
  }

  getDomaine(id: String): void {
    this.programmeService.getDomaine(id).subscribe(domaine => {
      this.domaine = domaine;
      // 2. get groupe
      this.getGroupe(domaine.groupe);
    });
  }

  getGroupe(id: String): void {
    this.programmeService.getGroupe(id).subscribe(groupe => {
      this.initialGroupe = groupe
      // 3. get programme
      this.getProgramme(groupe.programme);
    });
  }

  getProgramme(id: String): void {
    this.programmeService.getProgramme(id).subscribe(programme => {
      this.initialProgramme = programme
      this.getAllProgrammes();
    });
  }

  getAllProgrammes(): void {
    this.programmeService.getAllProgrammes().subscribe(programmes => {
      this.programmes = programmes;
      this.getAllGroupes(this.initialProgramme._id, true);
    });
  }

  getAllGroupes(id: String, initial: Boolean): void {
    this.programmeService.getGroupesByProgramme(id).subscribe(groupes => {
        this.groupes = groupes;
        if (initial) {
            this.editDomaineForm = this.fb.group({
              programmeSelect: this.initialProgramme._id,
              groupeSelect: this.initialGroupe._id
            });
            this.showLoading = false;
        } else {
          this.editDomaineForm = this.fb.group({
            programmeSelect: id,
            groupeSelect: ""
          });
        }
    });
  }

  updateDomaine(name: String, groupe: String): void {
    this.programmeService.updateDomaine(this.domaine._id, name, groupe).subscribe(domaine => {
        this.domaine = domaine;
    });
  }

  deleteGroupe(id: String) {
    this.programmeService.deleteDomaine(id).subscribe(domaine => {
        this.domaine = domaine
    });
  }

}
