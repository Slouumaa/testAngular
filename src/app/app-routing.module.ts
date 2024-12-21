import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './componentes/not-found/not-found.component';

const routes: Routes = [
  
    { path: '', redirectTo: '/show-teams', pathMatch: 'full' },
    { path: 'team', loadChildren: () => import('./features/team/team.module').then(m => m.TeamModule) },
    { path: '**', component: NotFoundComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
