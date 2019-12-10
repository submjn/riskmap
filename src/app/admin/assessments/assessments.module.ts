import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NbCardModule } from '@nebular/theme';
import { AssessmentsPageComponent } from './assessments-page.component';
import { AssessmentsListComponent } from './assessments-list.component';
import { AssessmentsFormComponent } from './assessments-create.component';


@NgModule({
  declarations: [AssessmentsPageComponent, AssessmentsListComponent, AssessmentsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbCardModule,
  ],
})
export class AssessmentsModule { }
