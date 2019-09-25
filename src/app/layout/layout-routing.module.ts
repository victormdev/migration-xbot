import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
            { path: 'projects', loadChildren: () => import('./projects/projects.component').then(m => m.ProjectsComponent) },
            { path: 'funcs', loadChildren: () => import('./funcs/funcs.component').then(m => m.FuncsComponent) }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
