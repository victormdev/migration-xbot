import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule } from '@angular/router';
import { FuncsComponent } from './funcs/funcs.component';
import { AdministrationComponent } from './administration/administration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './administration/user/user.component';
import { PaperComponent } from './administration/paper/paper.component';
import { ActionComponent } from './administration/action/action.component';
import { AdmFuncsComponent } from './administration/admfuncs/admfuncs.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ProjectsComponent,
    FuncsComponent,
    AdministrationComponent,
    DashboardComponent,
    LoginComponent,
    UserComponent,
    PaperComponent,
    ActionComponent,
    AdmFuncsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'funcs', component: FuncsComponent },
      { path: 'administration', component: AdministrationComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
