import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'welcome', component: WelcomeComponent, data: { title: extract('Welcome') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WelcomeRoutingModule {}
