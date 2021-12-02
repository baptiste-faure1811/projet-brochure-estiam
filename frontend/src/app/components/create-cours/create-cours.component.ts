import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cours, Domaine, Groupe, Programme } from '../../services/programmeService/programme';
import { ProgrammeService } from '../../services/programmeService/programme.service';

@Component({
  selector: 'app-create-cours',
  templateUrl: './create-cours.component.html',
  styleUrls: ['./create-cours.component.css']
})
export class CreateCoursComponent implements OnInit {

  domaine: Domaine;
  groupe: Groupe;
  programme: Programme;
  showLoading: Boolean = true;

  constructor(
    private route: ActivatedRoute,
    private programmeService: ProgrammeService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('domaineID') as String;
    this.getDomaine(id);
  }

  getDomaine(id: String): void {
    this.programmeService.getDomaine(id).subscribe(domaine => {
      this.domaine = domaine;
      this.getGroupe(domaine.groupe);
    });
  }

  getGroupe(id: String): void {
    this.programmeService.getGroupe(id).subscribe(groupe => {
      this.groupe = groupe;
      this.getProgramme(groupe.programme);
    });
  }

  getProgramme(id: String): void {
    this.programmeService.getProgramme(id).subscribe(programme => {
      this.programme = programme;
      this.showLoading = false;
    });
  }

  createCours(name: String, ECTSCredit: String, ECTSCode: String, oldCode: String, semestre: String, duration: String): void {
    this.programmeService.createCours(name, ECTSCredit, ECTSCode, oldCode, semestre, duration, this.domaine._id).subscribe(cours => { });
  }

}
