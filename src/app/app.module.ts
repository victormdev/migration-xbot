import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdministrationComponent } from './administration/administration.component';
import { AdministrationModule } from './administration/administration.module';
import { FuncsComponent } from './funcs/funcs.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsModule } from './projects/projects.module';
import { FuncsModule } from './funcs/funcs.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ProjectsComponent,
    FuncsComponent,
    AdministrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsModule,
    FuncsModule,
    AdministrationModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
