import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { AssessmentsPageComponent } from './assessments/assessments-page.component';
import { CompaniesPageComponent } from './companies/companies-page.component';
import { OptionsPageComponent } from './options/options-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'assessments',
        component: AssessmentsPageComponent,
      },
      {
        path: 'companies',
        component: CompaniesPageComponent,
      },
      {
        path: 'options',
        component: OptionsPageComponent,
      },
      { path: '', redirectTo: 'companies', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
