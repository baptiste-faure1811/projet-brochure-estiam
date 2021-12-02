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
    this.entrepriseService.addEntreprise(name).subscribe();
  }

  deleteEntreprise(entreprise: Entreprise) {
    this.entrepriseService.deleteEntreprise(entreprise).subscribe();
  }

  updateEntreprise(newName: string, id: string) {
    this.entrepriseService.updateEntreprise(newName, id).subscribe();
  }
  

}
