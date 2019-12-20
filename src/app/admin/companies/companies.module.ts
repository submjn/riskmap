import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NbCardModule,
  NbSelectModule,
  NbListModule,
  NbBadgeModule,
  NbIconModule,
  NbTooltipModule } from '@nebular/theme';
import { CompaniesPageComponent } from './companies-page.component';
import { CompaniesListComponent } from './companies-list.component';
import { CompaniesCreateComponent } from './companies-create.component';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [CompaniesPageComponent, CompaniesListComponent, CompaniesCreateComponent, ConfirmDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbCardModule,
    NbSelectModule,
    NbListModule,
    NbBadgeModule,
    NbIconModule,
    NbEvaIconsModule,
    NbTooltipModule,
  ],
})
export class CompaniesModule { }
