import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../../services/entrepriseService/entreprise';
import { EntrepriseService } from '../../services/entrepriseService/entreprise.service';

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
    this.entrepriseService.addEntreprise(name).subscribe(entreprise => this.entreprises.push(entreprise));
  }

  deleteEntreprise(entreprise: Entreprise) {
    this.entrepriseService.deleteEntreprise(entreprise).subscribe();
    window.location.reload();
  }

  updateEntreprise(newName: string, id: string) {
    this.entrepriseService.updateEntreprise(newName, id).subscribe();
    window.location.reload();
  }

}
