import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

export const routes: Routes = [
  {
    path: 'admin',              // Neu mit Iteration 4
    redirectTo: 'admin/create', // Neu mit Iteration 4
    pathMatch: 'full'           // Neu mit Iteration 4
  },
  {
    path: 'admin/create',          // Neu mit Iteration 4
    component: CreateBookComponent // Neu mit Iteration 4
  },
  {
    path: 'admin/edit/:isbn',      // Neu mit Iteration 4b
    component: EditBookComponent   // Neu mit Iteration 4b
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
