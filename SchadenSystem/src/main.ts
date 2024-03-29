import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { API_URL } from './token';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([
  {
    provide: API_URL,
    useValue: environment.schadenAPI
  }
]).bootstrapModule(AppModule)
  .catch(err => console.error(err));
