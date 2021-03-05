import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VertragRoutingModule } from './vertrag-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { VertragHomeComponent } from './vertrag-home/vertrag-home.component';
import { VertragKopfComponent } from './vertrag-kopf/vertrag-kopf.component';
import { VertragFehlermeldungenComponent } from './vertrag-fehlermeldungen/vertrag-fehlermeldungen.component';


@NgModule({
  imports: [
    CommonModule,
    VertragRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    VertragHomeComponent,
    VertragKopfComponent,
    VertragFehlermeldungenComponent
  ]
})
export class VertragModule { }
