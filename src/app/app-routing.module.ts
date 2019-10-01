import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdministrationComponent } from './administration/administration.component';
import { FuncsComponent } from './funcs/funcs.component';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'funcs', component: FuncsComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// tslint:disable-next-line:eofline
export class AppRoutingModule { }