import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { AngularMaterialCheckboxComponent } from '../angular-material-checkbox/angular-material-checkbox.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [CommonModule, TranslateModule, NgbModule, RouterModule, MaterialModule, FormsModule],
  declarations: [HeaderComponent, ShellComponent]
})
export class ShellModule {}
