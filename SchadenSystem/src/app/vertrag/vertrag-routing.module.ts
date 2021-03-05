import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VertragHomeComponent } from './vertrag-home/vertrag-home.component';

const routes: Routes = [
  {
    path: '',
    component: VertragHomeComponent
  },
  {
    path: 'create/:vnr',
    component: VertragHomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VertragRoutingModule { }
