import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { SucheStartComponent } from './shared/suche-start/suche-start.component';
import { DataStore } from './shared/data-store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SucheStartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeDe);
  }
 }
