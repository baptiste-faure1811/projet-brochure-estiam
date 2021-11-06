import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../entreprise';
import { EntrepriseService } from '../entreprise.service';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {

  entreprises: Entreprise[] = [];

  constructor(private entrepriseService: EntrepriseService) { }

  ngOnInit(): void {
    this.getEntreprises();
  }

  getEntreprises(): void {
    this.entrepriseService.getEntreprises().subscribe(entreprises => this.entreprises = entreprises);
  }

  addEntreprise(name: string): void {
    this.entrepriseService.addEntreprise(name).subscribe(entreprise => {
        this.entreprises.push(entreprise);
        console.log("added");
    });
  }

  deleteEntreprise(entreprise: Entreprise) {
    console.log("deleted " + entreprise.name);
    // this.entrepriseService.deleteEntreprise(entreprise).subscribe(entreprise => {
    //     console.log("deleted, before: " + this.entreprises.length);
    //     const index = this.entreprises.indexOf(entreprise)
    //     if (index > -1) {
    //       this.entreprises.splice(index, 1);
    //     }
    //     console.log("deleted, after: " + this.entreprises.length);
        
    // });
  }

  updateEntreprise(newName: string, id: string) {
    this.entrepriseService.updateEntreprise(newName, id).subscribe(entreprise => {
      this.entreprises.push(entreprise);
      console.log("updated");
  });
  }
  

}
