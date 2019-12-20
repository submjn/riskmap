import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  NbCardModule,
  NbListModule,
  NbBadgeModule,
  NbIconModule,
  NbTooltipModule,
  NbSelectModule,
} from '@nebular/theme';
import { QuestionsPageComponent } from './questions-page.component';
import { QuestionsListComponent } from './questions-list.component';
import { QuestionsFormComponent } from './questions-create.component';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [QuestionsPageComponent, QuestionsListComponent, QuestionsFormComponent, ConfirmDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbCardModule,
    NbListModule,
    NbBadgeModule,
    NbIconModule,
    NbEvaIconsModule,
    NbTooltipModule,
    NbSelectModule,
  ],
})
export class QuestionsModule { }
