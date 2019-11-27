import { NgModule } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbProgressBarModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics.component';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComparisionComponent } from './comparision/comparision.component';

@NgModule({
  declarations: [AnalyticsComponent, DashboardComponent, ComparisionComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    NbProgressBarModule,
  ],
})
export class AnalyticsModule { }
