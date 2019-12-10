import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { OptionsPageComponent } from './options-page.component';
import { OptionsListComponent } from './options-list.component';
import { OptionsFormComponent } from './options-create.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [OptionsPageComponent, OptionsListComponent, OptionsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbCardModule,
  ],
})
export class OptionsModule { }
