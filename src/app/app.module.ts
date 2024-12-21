import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { TeamsComponent } from './componentes/teams/teams.component';
import { FormTeamComponent } from './componentes/form-team/form-team.component';
import { MyTeamsComponent } from './componentes/my-teams/my-teams.component';
import { ParticipantsComponent } from './componentes/participants/participants.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    TeamsComponent,
    FormTeamComponent,
    MyTeamsComponent,
    ParticipantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
