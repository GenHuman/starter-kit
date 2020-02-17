import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [CommonModule, TranslateModule, WelcomeRoutingModule],
  declarations: [WelcomeComponent]
})
export class WelcomeModule {}
