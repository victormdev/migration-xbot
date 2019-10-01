import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdministrationComponent } from './administration/administration.component';
import { FuncsComponent } from './funcs/funcs.component';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent
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
