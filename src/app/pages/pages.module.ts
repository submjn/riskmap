import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { CompaniesModule } from './companies/companies.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { QuizModule } from './quiz/quiz.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    CompaniesModule,
    QuizModule,
    AnalyticsModule,
    SettingsModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
