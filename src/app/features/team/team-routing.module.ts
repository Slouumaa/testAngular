import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTeamComponent } from 'src/app/componentes/form-team/form-team.component';
import { MyTeamsComponent } from 'src/app/componentes/my-teams/my-teams.component';
import { TeamsComponent } from 'src/app/componentes/teams/teams.component';

const routes: Routes = [
  { path: 'add-team', component: FormTeamComponent },
  { path: 'show-teams', component: TeamsComponent },
  { path: 'show-my-teams', component: MyTeamsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
