import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CanNavigateToAdminGuard } from './can-navigate-to-admin.guard';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'books',   // Lazy Loading
    loadChildren: './books/books.module#BooksModule'
  },
  {
    path: 'admin',   // Lazy Loading
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [CanNavigateToAdminGuard]  // Setzt den Guard auf den "admin"-Pfad
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { preloadingStrategy: PreloadAllModules }  // Sorgt für den Preload
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
