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
    path: 'gev',   // Lazy Loading
    loadChildren: () => import('./gev/gev.module').then(m => m.GevModule)
  },
  {
    path: 'vertrag',   // Lazy Loading
    loadChildren: () => import('./vertrag/vertrag.module').then(m => m.VertragModule)
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
