import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OptionsPageComponent } from './options-page.component';

const routes: Routes = [
  { path: 'admin/options', component: OptionsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsRoutingModule { }
