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
import { EditProgrammeComponent } from './edit-programme/edit-programme.component';
import { CreateProgrammeComponent } from './create-programme/create-programme.component';
import { EditGroupeComponent } from './edit-groupe/edit-groupe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateGroupeComponent } from './create-groupe/create-groupe.component';
import { CreateDomaineComponent } from './create-domaine/create-domaine.component';
import { EditDomaineComponent } from './edit-domaine/edit-domaine.component';
import { EditCoursComponent } from './edit-cours/edit-cours.component';
import { CreateCoursComponent } from './create-cours/create-cours.component';
import { AdminLogInComponent } from './admin-log-in/admin-log-in.component';

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
