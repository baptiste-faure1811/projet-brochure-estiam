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
import { AdminLogInComponent } from './components/admin-log-in/admin-log-in.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { PaiementCreationComponent } from './components/paiement-creation/paiement-creation.component';
import { PaiementDetailsComponent } from './components/paiement-details/paiement-details.component';
import { CudComponent } from './components/cud/cud.component';
import { CuddescComponent } from './components/cuddesc/cuddesc.component';
import { OffrealternanceComponent } from './components/offrealternance/offrealternance.component';
import { DescalternanceComponent } from './components/descalternance/descalternance.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { CampusComponent } from './components/campus/campus.component';
import { FormmodificationComponent } from './components/formmodification/formmodification.component';
import { HomeComponent } from './components/home/home.component';
import { CertificationComponent } from './components/certification/certification.component';
import { CertificationModifComponent } from './components/certification-modif/certification-modif.component';
import { CertificationCreationComponent } from './components/certification-creation/certification-creation.component';

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
  {path: 'alternance',component:DescalternanceComponent},
  {path: 'offres',component:OffrealternanceComponent},
  {path:'cud',component:CudComponent},
  {path: 'cuddesc',component: CuddescComponent},
  { path: 'campus', component: CampusComponent },
  { path: 'formulaire', component: FormulaireComponent},
  { path:'formmodification', component: FormmodificationComponent},
  { path:'', component: HomeComponent},
  {path:'certification',component: CertificationComponent},
  {path:'certification-modif', component: CertificationModifComponent},
  {path:'certification-creation', component: CertificationCreationComponent}
]


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
