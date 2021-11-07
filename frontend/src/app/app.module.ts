import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { HttpClientModule } from '@angular/common/http';
import { EntrepriseService } from './services/entrepriseService/entreprise.service';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ProgrammesPageComponent } from './components/programmes-page/programmes-page.component';
import { ProgrammeYearComponent } from './components/programme-year/programme-year.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrepriseComponent,
    NavigationBarComponent,
    ProgrammesPageComponent,
    ProgrammeYearComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EntrepriseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
