import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './layout/projects/projects.component';


const routes: Routes = [
  { path: 'projects', loadChildren: () => import('./layout/projects/projects.component').then(m => m.ProjectsComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
