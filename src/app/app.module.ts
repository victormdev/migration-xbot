import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { AdministrationComponent } from './layout/administration/administration.component';
import { FuncsComponent } from './layout/funcs/funcs.component';
import { ProjectsComponent } from './layout/projects/projects.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsComponent,
    FuncsComponent,
    AdministrationComponent,
    DashboardComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
