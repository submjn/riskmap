import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbTabsetModule, NbListModule, NbButtonModule } from '@nebular/theme';
import { ChartsModule } from 'ng2-charts';

import { ThemeModule } from '../../../@theme/theme.module';

import { ChartComponent } from './chart.component';
import { ListComponent } from './list.component';
import { AssessmentComponent } from './assessment.component';

@NgModule({
  declarations: [ChartComponent, ListComponent, AssessmentComponent],
  imports: [
    CommonModule,
    ThemeModule,
    NbCardModule,
    NbTabsetModule,
    NbListModule,
    NbButtonModule,
    ChartsModule,
  ],
})
export class AssessmentModule { }
