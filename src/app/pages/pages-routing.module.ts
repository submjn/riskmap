import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { QuizComponent } from './quiz/quiz.component';
import { CompaniesComponent } from './companies/companies.component';
import { AssessmentListComponent } from './companies/assessment-list/assessment-list.component';
import { AssessmentComponent } from './companies/assessment/assessment.component';
import { WelcomeComponent } from './quiz/welcome/welcome.component';
import { IdentifyComponent } from './quiz/identify/identify.component';
import { ProtectComponent } from './quiz/protect/protect.component';
import { DetectComponent } from './quiz/detect/detect.component';
import { RespondComponent } from './quiz/respond/respond.component';
import { RecoverComponent } from './quiz/recover/recover.component';
import { DashboardComponent } from './analytics/dashboard/dashboard.component';
import { ComparisionComponent } from './analytics/comparision/comparision.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'companies',
      component: CompaniesComponent,
    },
    {
      path: 'companies/:id',
      component: AssessmentListComponent,
    },
    {
      path: 'companies/:id/assessment/:aid',
      component: AssessmentComponent,
    },
    {
      path: 'analytics/dashboard',
      component: DashboardComponent,
    },
    {
      path: 'analytics/comparision',
      component: ComparisionComponent,
    },
    {
      path: 'settings',
      component: SettingsComponent,
    },
    {
      path: 'assessment',
      component: QuizComponent,
    },
    {
      path: 'assessment/welcome',
      component: WelcomeComponent,
    },
    {
      path: 'assessment/identify',
      component: IdentifyComponent,
    },
    {
      path: 'assessment/protect',
      component: ProtectComponent,
    },
    {
      path: 'assessment/detect',
      component: DetectComponent,
    },
    {
      path: 'assessment/respond',
      component: RespondComponent,
    },
    {
      path: 'assessment/recover',
      component: RecoverComponent,
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    { path: '', redirectTo: 'companies', pathMatch: 'full' },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
