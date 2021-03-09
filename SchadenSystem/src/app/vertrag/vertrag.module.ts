import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VertragRoutingModule } from './vertrag-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { VertragHomeComponent } from './vertrag-home/vertrag-home.component';
import { VertragKopfComponent } from './vertrag-kopf/vertrag-kopf.component';
import { VertragFehlermeldungenComponent } from './vertrag-fehlermeldungen/vertrag-fehlermeldungen.component';
import { VertragListeItemComponent } from './vertrag-liste-item/vertrag-liste-item.component';
import { VertragDetailsComponent } from './vertrag-details/vertrag-details.component';


@NgModule({
  imports: [
    CommonModule,
    VertragRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    VertragHomeComponent,
    VertragKopfComponent,
    VertragFehlermeldungenComponent,
    VertragListeItemComponent,
    VertragDetailsComponent
  ]
})
export class VertragModule { }
