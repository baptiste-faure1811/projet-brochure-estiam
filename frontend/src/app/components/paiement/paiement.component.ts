import { Component, OnInit } from '@angular/core';
import { Paiement } from '../../services/paiementService/paiement';
import { PaiementService } from '../../services/paiementService/paiement.service';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  paiements: Paiement[] = [];
  isAdmin = this.cookieService.get('isAdmin');

  constructor(private paiementService: PaiementService,
              private router: Router, private cookieService: CookieService) { }



  ngOnInit(): void {
    this.getPaiements();
  }

  getPaiements(): void {
    this.paiementService.getPaiements().subscribe(paiements => this.paiements = paiements);
  }

  deletePaiement(paiement: Paiement) {
    this.paiementService.deletePaiement(paiement).subscribe();
    window.location.reload();
  }

}

