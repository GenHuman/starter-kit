import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'projects', component: ProjectsComponent, data: { title: extract('Projects') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProjectsRoutingModule {}
