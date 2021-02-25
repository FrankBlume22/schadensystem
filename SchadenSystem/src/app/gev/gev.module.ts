import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GevRoutingModule } from './gev-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SucheStartComponent } from './suche-start/suche-start.component';
import { FehlermeldungenComponent } from './fehlermeldungen/fehlermeldungen.component';
import { SchadenListeItemComponent } from './schaden-liste-item/schaden-liste-item.component';
import { SchadenListeComponent } from './schaden-liste/schaden-liste.component';
import { SchadenDetailsComponent } from './schaden-details/schaden-details.component';
import { SchadenKopfComponent } from './schaden-kopf/schaden-kopf.component';
import { EditSchadenComponent } from './edit-schaden/edit-schaden.component';


@NgModule({
  imports: [
    CommonModule,
    GevRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    SucheStartComponent,
    SchadenListeItemComponent,
    SchadenListeComponent,
    SchadenDetailsComponent,
    SchadenKopfComponent,
    FehlermeldungenComponent,
    SchadenKopfComponent,
    EditSchadenComponent
  ]
})
export class GevModule { }
