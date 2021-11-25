import { Component, OnInit } from '@angular/core';
import { Paiement } from '../paiement';
import { PaiementService } from '../paiement.service';




@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  paiements: Paiement[] = [];


  constructor(private paiementService: PaiementService) { }



  ngOnInit(): void {
    this.getPaiements();
  }

  getPaiements(): void {
    this.paiementService.getPaiements().subscribe(paiements => this.paiements = paiements);
  }

  addPaiement(paiement: Paiement): void {
    this.paiementService.addPaiement(paiement).subscribe(paiement => this.paiements.push(paiement));
  }

  deletePaiement(paiement: Paiement) {
    this.paiementService.deletePaiement(paiement).subscribe();
  }

  updatePaiement(newPaiement: Paiement) {
    this.paiementService.updatePaiement(newPaiement).subscribe();
  }


}

