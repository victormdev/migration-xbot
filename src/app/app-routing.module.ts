import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AdministrationComponent } from './layout/administration/administration.component';
import { FuncsComponent } from './layout/funcs/funcs.component';
import { ProjectsComponent } from './layout/projects/projects.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './layout/login/login.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
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