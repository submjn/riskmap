import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbCheckboxModule, NbRadioModule, NbStepperModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuizComponent } from './quiz.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { IdentifyComponent } from './identify/identify.component';
import { ProtectComponent } from './protect/protect.component';
import { DetectComponent } from './detect/detect.component';
import { RespondComponent } from './respond/respond.component';
import { RecoverComponent } from './recover/recover.component';

@NgModule({
  declarations: [
    QuizComponent,
    WelcomeComponent,
    IdentifyComponent,
    ProtectComponent,
    DetectComponent,
    RespondComponent,
    RecoverComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    ThemeModule,
    NbCheckboxModule,
    NbRadioModule,
    NbStepperModule,
  ],
})
export class QuizModule { }
