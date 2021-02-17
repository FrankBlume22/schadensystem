import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
    path: 'schaden',   // Lazy Loading
    loadChildren: () => import('./schaden/schaden.module').then(m => m.SchadenModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { preloadingStrategy: PreloadAllModules }  // Sorgt für den Preload
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
