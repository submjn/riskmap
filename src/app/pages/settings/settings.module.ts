import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { NbCardModule, NbDialogModule } from '@nebular/theme';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbDialogModule.forChild(),
  ],
})
export class SettingsModule { }
