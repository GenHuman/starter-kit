import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { GuideComponent } from './guide/guide.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, GuideComponent],
  exports: [LoaderComponent, GuideComponent]
})
export class SharedModule {}
