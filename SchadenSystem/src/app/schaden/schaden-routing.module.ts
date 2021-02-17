import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchadenListeComponent } from './schaden-liste/schaden-liste.component';

const routes: Routes = [
  {
    path: '',
    component: SchadenListeComponent
  },
  {
    path: ':sdnr',
    component: SchadenListeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchadenRoutingModule { }
