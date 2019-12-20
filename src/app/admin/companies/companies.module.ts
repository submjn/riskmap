import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NbCardModule, NbSelectModule } from '@nebular/theme';
import { CompaniesPageComponent } from './companies-page.component';
import { CompaniesListComponent } from './companies-list.component';
import { CompaniesCreateComponent } from './companies-create.component';

@NgModule({
  declarations: [CompaniesPageComponent, CompaniesListComponent, CompaniesCreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbCardModule,
    NbSelectModule,
  ],
})
export class CompaniesModule { }
