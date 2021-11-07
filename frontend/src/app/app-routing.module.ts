import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaiementComponent } from './paiement/paiement.component';
import { PaiementDetailsComponent } from './paiement-details/paiement-details.component';
import {EntrepriseComponent} from './entreprise/entreprise.component'

const routes: Routes = [
  { path: 'detail/:id', component: PaiementDetailsComponent },
  { path: 'paiement', component: PaiementComponent },
  {path: 'entreprise',component: EntrepriseComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}