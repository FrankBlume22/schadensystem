import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VertragDetailsComponent } from './vertrag-details/vertrag-details.component';
import { VertragHomeComponent } from './vertrag-home/vertrag-home.component';

const routes: Routes = [
  {
    path: '',
    component: VertragHomeComponent
  },
  {
    path: ':vnr',
    component: VertragDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VertragRoutingModule { }
