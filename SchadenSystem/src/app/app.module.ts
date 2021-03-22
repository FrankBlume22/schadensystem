import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { DataStore } from './shared/data-store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataStore,
    {provide: 'StringInjectBeispiel', useValue: 'meinStringAusDemProvider'},
    {provide: 'NumberInjectBeispiel', useValue: 42},
    {provide: 'BooleanInjectBeispiel', useValue: false}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeDe);
  }
 }
