import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { HttpClientModule } from '@angular/common/http';
import { EntrepriseService } from './services/entrepriseService/entreprise.service';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ProgrammesPageComponent } from './components/programmes-page/programmes-page.component';
import { EditProgrammeComponent } from './components/edit-programme/edit-programme.component';
import { CreateProgrammeComponent } from './components/create-programme/create-programme.component';
import { EditGroupeComponent } from './components/edit-groupe/edit-groupe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateGroupeComponent } from './components/create-groupe/create-groupe.component';
import { CreateDomaineComponent } from './components/create-domaine/create-domaine.component';
import { EditDomaineComponent } from './components/edit-domaine/edit-domaine.component';
import { EditCoursComponent } from './components/edit-cours/edit-cours.component';
import { CreateCoursComponent } from './components/create-cours/create-cours.component';
import { AdminLogInComponent } from './components/admin-log-in/admin-log-in.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { PaiementDetailsComponent } from './components/paiement-details/paiement-details.component';
import { PaiementCreationComponent } from './components/paiement-creation/paiement-creation.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrepriseComponent,
    NavigationBarComponent,
    ProgrammesPageComponent,
    EditProgrammeComponent,
    CreateProgrammeComponent,
    EditGroupeComponent,
    CreateGroupeComponent,
    CreateDomaineComponent,
    EditDomaineComponent,
    EditCoursComponent,
    CreateCoursComponent,
    AdminLogInComponent,
    PaiementComponent,
    PaiementDetailsComponent,
    PaiementCreationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EntrepriseService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
