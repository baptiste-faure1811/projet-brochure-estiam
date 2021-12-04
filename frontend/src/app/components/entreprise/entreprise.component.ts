import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Entreprise } from '../../services/entrepriseService/entreprise';
import { EntrepriseService } from '../../services/entrepriseService/entreprise.service';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {

  entreprises: Entreprise[] = [];
  isAdmin = this.cookieService.get('isAdmin');
  constructor(private entrepriseService: EntrepriseService,private cookieService: CookieService) { }

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
