import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cours } from '../services/programmeService/programme';
import { ProgrammeService } from '../services/programmeService/programme.service';

@Component({
  selector: 'app-edit-cours',
  templateUrl: './edit-cours.component.html',
  styleUrls: ['./edit-cours.component.css']
})
export class EditCoursComponent implements OnInit {

  cours: Cours;
  showLoading: Boolean = true;

  constructor(
    private route: ActivatedRoute,
    private programmeService: ProgrammeService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('coursID') as String;
    this.getCours(id);
  }

  getCours(id: String): void {
    this.programmeService.getCours(id).subscribe(cours => {
      this.cours = cours;
      this.showLoading = false;
    });
  }

  updateCours(name: String, ECTSCredit: String, ECTSCode: String, oldCode: String, semestre: String, duration: String): void {
    this.programmeService.updateCours(this.cours._id, name, ECTSCredit, ECTSCode, oldCode, semestre, duration).subscribe(cours => {
      this.cours = cours;
    });
  }

  deleteCours(id: String) {
    this.programmeService.deleteCours(id).subscribe(cours => {
        this.cours = cours;
    });
  }

}
