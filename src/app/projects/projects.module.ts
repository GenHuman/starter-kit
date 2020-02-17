import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

@NgModule({
  imports: [CommonModule, TranslateModule, ProjectsRoutingModule],
  declarations: [ProjectsComponent]
})
export class ProjectsModule {}
