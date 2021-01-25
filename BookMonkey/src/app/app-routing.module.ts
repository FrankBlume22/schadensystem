import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

export const routes: Routes = [
  {
    // Beim Start der Anwendung ist für "/" (das root-Verzeichnis) keine Route vorhanden.
    // Wir legen deshalb fest, das der Root-Pfad auf die URL /home weiterleiten soll,
    // damit der User sofort auf die Startseite gelangt. Die Angabe pathMatch. "full",
    // sorget dafür, das die Route auch wirklich greift und nicht als Präfix einer anderen
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
