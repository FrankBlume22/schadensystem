import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SchadenListeComponent } from './schaden-liste/schaden-liste.component';
import { SchadenDetailsComponent } from './schaden-details/schaden-details.component';

const routes: Routes = [
  {
    path: '',
    component: SchadenListeComponent
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
export class SchadenRoutingModule { }
