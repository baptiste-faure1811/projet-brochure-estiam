import { Component, OnInit } from '@angular/core';
import { Paiement } from '../../services/paiementService/paiement';
import { PaiementService } from '../../services/paiementService/paiement.service';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

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
    accompte: {
      titre: "",
      prix: null,
      details: ""
    },
    fraisMobiliteInternational: {
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
    private router: Router,
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
    this.router.navigateByUrl('/paiement');
  }



}
