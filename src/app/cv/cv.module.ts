import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './cv.component';

@NgModule({
  imports: [CommonModule, TranslateModule, CvRoutingModule, NgbModule],
  declarations: [CvComponent]
})
export class CvModule {}
