import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { UserActivityService } from './user-activity.service';
import { VisitorsAnalyticsService } from './visitors-analytics.service';
import { QuizService } from './quiz.services';
import { AssessmentListService } from './assessment-list.services';

const SERVICES = [
  UserService,
  UserActivityService,
  VisitorsAnalyticsService,
  QuizService,
  AssessmentListService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: MockDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
