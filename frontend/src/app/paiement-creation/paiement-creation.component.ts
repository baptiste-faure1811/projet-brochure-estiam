import { Component, OnInit } from '@angular/core';
import { Paiement } from '../paiement';
import { PaiementService } from '../paiement.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-paiement-creation',
  templateUrl: './paiement-creation.component.html',
  styleUrls: ['./paiement-creation.component.css']
})
export class PaiementCreationComponent implements OnInit {

  paiement = {
    exemple: {
      nom: "",
      info: ""
    },
    prixAnnuel: {
      titre: "",
      prix: null,
      details: ""
    },
    fraisMobilite: {
      titre: "",
      prix: null,
      details: ""
    },
    paiementEchelonne: {
      titre: "",
      prix: null,
      details: ""
    }
  } as unknown as Paiement;

  constructor(
    private paiementService: PaiementService,
    private location: Location
  ) {}

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  create(): void {
    this.paiementService.addPaiement(this.paiement).subscribe();
    this.location.back();
  }
}
