import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ProjectComponent, ProjectViewComponent, ProjectsListComponent } from './components/project';
import { HomeComponent } from './pages/home/home.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled'
};

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'Home' } },
  {
    path: 'projects', component: ProjectComponent, children: [
      { path: '', component: ProjectsListComponent, data: { animation: 'Projects' } },
      { path: ':name', component: ProjectViewComponent, data: { animation: 'ProjectsView' }, pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
