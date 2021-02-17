import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchadenRoutingModule } from './schaden-routing.module';
import { SchadenListeComponent } from './schaden-liste/schaden-liste.component';
import { SchadenListeItemComponent } from './schaden-liste-item/schaden-liste-item.component';


@NgModule({
  imports: [
    CommonModule,
    SchadenRoutingModule
  ],
  declarations: [
    SchadenListeComponent,
    SchadenListeItemComponent
  ]
})
export class SchadenModule { }
