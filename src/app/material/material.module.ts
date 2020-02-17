import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatCardModule,
  MatCheckboxModule,
  MatListModule,
  MatSidenavModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatCardModule, MatCheckboxModule],
  exports: [MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatCardModule, MatCheckboxModule]
})
export class MaterialModule {}
