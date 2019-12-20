import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CompaniesModule } from './companies/companies.module';
import { AssessmentsModule } from './assessments/assessments.module';
import { QuestionsModule } from './questions/questions.module';
import { OptionsModule } from './options/options.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AdminRoutingModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    NbMenuModule,
    AssessmentsModule,
    CompaniesModule,
    QuestionsModule,
    OptionsModule,
  ],
  declarations: [
    AdminComponent,
  ],
})
export class AdminModule {
}
