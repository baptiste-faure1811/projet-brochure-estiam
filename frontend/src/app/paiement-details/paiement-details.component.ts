import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Paiement } from '../paiement';
import { PaiementService } from '../paiement.service';


@Component({
  selector: 'app-paiement-details',
  templateUrl: './paiement-details.component.html',
  styleUrls: ['./paiement-details.component.css']
})
export class PaiementDetailsComponent implements OnInit {
  paiement: Paiement | undefined;

  constructor(
    private route: ActivatedRoute,
    private paiementService: PaiementService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPaiement();
  }

  getPaiement(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.paiementService.getPaiement(id).subscribe(paiement => this.paiement = paiement);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.paiement) {
      console.log(this.paiement.exemple.nom);
      this.paiementService.updatePaiement(this.paiement)
        .subscribe();
        this.location.back();
    }
  }
}