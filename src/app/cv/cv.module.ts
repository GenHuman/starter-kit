import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './cv.component';

@NgModule({
  imports: [CommonModule, TranslateModule, CvRoutingModule],
  declarations: [CvComponent]
})
export class CvModule {}
