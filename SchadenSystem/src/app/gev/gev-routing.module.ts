import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchadenDetailsComponent } from '../schaden/schaden-details/schaden-details.component';
import { SucheStartComponent } from './suche-start/suche-start.component';

const routes: Routes = [
  {
    path: '',
    component: SucheStartComponent
  },
  {
    path: ':sdnr',
    component: SchadenDetailsComponent
  },
  {
    path: '/edit/:sdnr',
    component: SchadenDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GevRoutingModule { }
