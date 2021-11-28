import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { ProgrammesPageComponent } from './components/programmes-page/programmes-page.component';
import { EditProgrammeComponent } from './edit-programme/edit-programme.component';
import { CreateProgrammeComponent } from './create-programme/create-programme.component';
import { EditGroupeComponent } from './edit-groupe/edit-groupe.component';
import { CreateGroupeComponent } from './create-groupe/create-groupe.component';
import { CreateDomaineComponent } from './create-domaine/create-domaine.component';
import { EditDomaineComponent } from './edit-domaine/edit-domaine.component';
import { EditCoursComponent } from './edit-cours/edit-cours.component';
import { CreateCoursComponent } from './create-cours/create-cours.component';

const routes: Routes = [
  { path: '', component: ProgrammesPageComponent },
  { path: 'edit-programme/:programmeID', component: EditProgrammeComponent },
  { path: 'create-programme', component: CreateProgrammeComponent },
  { path: 'edit-groupe/:groupeID', component: EditGroupeComponent },
  { path: 'create-groupe', component: CreateGroupeComponent },
  { path: 'create-domaine', component: CreateDomaineComponent },
  { path: 'edit-domaine/:domaineID', component: EditDomaineComponent },
  { path: 'edit-cours/:coursID', component: EditCoursComponent },
  { path: 'create-cours/:domaineID', component: CreateCoursComponent },
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
