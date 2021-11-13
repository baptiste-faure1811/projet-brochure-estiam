import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaiementComponent } from './paiement/paiement.component';
import { PaiementCreationComponent } from './paiement-creation/paiement-creation.component';
import { PaiementDetailsComponent } from './paiement-details/paiement-details.component';
import {EntrepriseComponent} from './entreprise/entreprise.component'
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'paiement', component: PaiementComponent },
  { path: 'detail/:id', component: PaiementDetailsComponent },
  { path: 'creation', component: PaiementCreationComponent },
  {path: 'entreprise',component: EntrepriseComponent}
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes),
    RouterModule,
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}