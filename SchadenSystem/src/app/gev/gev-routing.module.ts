import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSchadenComponent } from './create-schaden/create-schaden.component';
import { EditSchadenComponent } from './edit-schaden/edit-schaden.component';
import { SchadenDetailsComponent } from './schaden-details/schaden-details.component';
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
    path: 'edit/:sdnr',
    component: EditSchadenComponent
  },
  {
    path: 'create/:sdnr',
    component: CreateSchadenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GevRoutingModule { }
