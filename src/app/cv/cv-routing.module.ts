import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { CvComponent } from './cv.component';

const routes: Routes = [Shell.childRoutes([{ path: 'cv', component: CvComponent, data: { title: extract('CV') } }])];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CvRoutingModule {}
