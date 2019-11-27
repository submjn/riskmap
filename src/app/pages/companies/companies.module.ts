import { NgModule } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbProgressBarModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { CompaniesComponent } from './companies.component';
import { CustomRenderComponent } from './custom-render.component';
import { AssessmentListComponent } from './assessment-list/assessment-list.component';
import { AssessmentModule } from './assessment/assessment.module';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    NbProgressBarModule,
    AssessmentModule,
  ],
  declarations: [
    CompaniesComponent,
    CustomRenderComponent,
    AssessmentListComponent,
  ],
  entryComponents: [CustomRenderComponent],
})
export class CompaniesModule { }

