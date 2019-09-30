import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { AdministrationModule } from './layout/administration/administration.module';
import { FuncsModule } from './layout/funcs/funcs.module';
import { ProjectsModule } from './layout/projects/projects.module';
import { DashboardModule } from './layout/dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
