import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { FuncsComponent } from './funcs/funcs.component';
import { AdministrationComponent } from './administration/administration.component';
import { ActionComponent } from './administration/action/action.component';
import { AdmFuncsComponent } from './administration/admfuncs/admfuncs.component';
import { PaperComponent } from './administration/paper/paper.component';
import { UserComponent } from './administration/user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'funcs', component: FuncsComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'administration/action', component: ActionComponent },
  { path: 'administration/funcs', component: AdmFuncsComponent },
  { path: 'administration/paper', component: PaperComponent },
  { path: 'administration/user', component: UserComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  private route: ActivatedRoute;
// tslint:disable-next-line:eofline
}