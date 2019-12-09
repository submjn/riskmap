import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { OptionsPageComponent } from './options-page.component';
import { OptionsListComponent } from './options-list.component';
import { OptionsFormComponent } from './options-create.component';


@NgModule({
  declarations: [OptionsPageComponent, OptionsListComponent, OptionsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class OptionsModule { }
