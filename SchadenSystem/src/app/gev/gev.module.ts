import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GevRoutingModule } from './gev-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SucheStartComponent } from './suche-start/suche-start.component';
import { FehlermeldungenComponent } from './fehlermeldungen/fehlermeldungen.component';


@NgModule({
  imports: [
    CommonModule,
    GevRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    SucheStartComponent,
    FehlermeldungenComponent
  ]
})
export class GevModule { }
