import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CreateBookComponent } from './create-book/create-book.component';  // Neu mit Iteration 4
import { EditBookComponent } from './edit-book/edit-book.component';        // Neu mit Iteration 4b

export const routes: Routes = [
  {
    // Beim Start der Anwendung ist für "/" (das root-Verzeichnis) keine Route vorhanden.
    // Wir legen deshalb fest, dass der Root-Pfad auf die URL /home weiterleiten soll,
    // damit der User sofort auf die Startseite gelangt. Die Angabe pathMatch. "full",
    // sorgt dafür, dass die Route auch wirklich greift und nicht als Präfix einer anderen
    // interpretiert wird.
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'books/:isbn',
    component: BookDetailsComponent
  },
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
    component: EditBookComponent   // Neu mit Iteration 4
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
