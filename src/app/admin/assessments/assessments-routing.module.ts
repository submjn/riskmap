import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssessmentsPageComponent } from './assessments-page.component';


const routes: Routes = [
  { path: 'admin/assessments', component: AssessmentsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssessmentsRoutingModule { }
