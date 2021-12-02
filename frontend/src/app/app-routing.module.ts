import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { ProgrammesPageComponent } from './components/programmes-page/programmes-page.component';
import { EditProgrammeComponent } from './components/edit-programme/edit-programme.component';
import { CreateProgrammeComponent } from './components/create-programme/create-programme.component';
import { EditGroupeComponent } from './components/edit-groupe/edit-groupe.component';
import { CreateGroupeComponent } from './components/create-groupe/create-groupe.component';
import { CreateDomaineComponent } from './components/create-domaine/create-domaine.component';
import { EditDomaineComponent } from './components/edit-domaine/edit-domaine.component';
import { EditCoursComponent } from './components/edit-cours/edit-cours.component';
import { CreateCoursComponent } from './components/create-cours/create-cours.component';
import { AdminLogInComponent } from './admin-log-in/admin-log-in.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { PaiementCreationComponent } from './components/paiement-creation/paiement-creation.component';
import { PaiementDetailsComponent } from './components/paiement-details/paiement-details.component';

const routes: Routes = [
  { path: 'programmes', component: ProgrammesPageComponent },
  { path: 'edit-programme/:programmeID', component: EditProgrammeComponent },
  { path: 'create-programme', component: CreateProgrammeComponent },
  { path: 'edit-groupe/:groupeID', component: EditGroupeComponent },
  { path: 'create-groupe', component: CreateGroupeComponent },
  { path: 'create-domaine', component: CreateDomaineComponent },
  { path: 'edit-domaine/:domaineID', component: EditDomaineComponent },
  { path: 'edit-cours/:coursID', component: EditCoursComponent },
  { path: 'create-cours/:domaineID', component: CreateCoursComponent },
  { path: 'admin-log-in', component: AdminLogInComponent },
  { path: 'admin-log-in/:errorID', component: AdminLogInComponent },
  { path: 'paiement', component: PaiementComponent },
  { path: 'paiement-detail/:id', component: PaiementDetailsComponent },
  { path: 'paiement-creation', component: PaiementCreationComponent },
  { path: 'entreprises', component: EntrepriseComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
