import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { HttpClientModule } from '@angular/common/http';
import { EntrepriseService } from './entreprise.service';
import { PaiementComponent } from './paiement/paiement.component';
import { PaiementDetailsComponent } from './paiement-details/paiement-details.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EntrepriseComponent,
    PaiementComponent,
    PaiementDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [EntrepriseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
