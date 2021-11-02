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

  addPaiement(name: string): void {
    this.paiementService.addPaiement(name).subscribe(paiement => this.paiements.push(paiement));
  }

  deletePaiement(paiement: Paiement) {
    this.paiementService.deletePaiement(paiement).subscribe();
  }

  updatePaiement(newName: string, id: string) {
    this.paiementService.updatePaiement(newName, id).subscribe();
  }

  addPaie():void{
    this.paiementService.addPaiement("null").subscribe(paiement => this.paiements.push(paiement));
    console.log("addPaie")
  }

}
