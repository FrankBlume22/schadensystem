import { Component, OnInit, Output } from '@angular/core';
import { equal, strictEqual } from 'assert';
import { DataStore } from 'src/app/shared/data-store';
import { Schaden } from 'src/app/shared/schaden';
import { SchadenStoreService } from 'src/app/shared/schaden-store.service';

@Component({
  selector: 'sd-schaden-liste',
  templateUrl: './schaden-liste.component.html',
  styleUrls: ['./schaden-liste.component.css']
})
export class SchadenListeComponent implements OnInit {
umgebung = '';
gesKz = '';
generali = 'generali';
gesellschaft = '';
umgebungTab: string[] = [];

  @Output()
  schaeden: Schaden[] = [];

  public constructor(
      private ss: SchadenStoreService,
      private dataStore: DataStore
      ) {
      // console.log(JSON.stringify(this.dataStore.data));
      this.umgebung = JSON.stringify(this.dataStore.data);
      // Ausgabe ist z.B.: {"umgebung":"generali"}
      console.log(this.umgebung);
      }
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.gesKz = this.gesKzSetzen();
    this.ss.getAllGEV(this.gesKz).subscribe(res => this.schaeden = res);
  }
  gesKzSetzen() {
    let kz = '';
    // Erzeugt: ["{", "umgebung", ":", "generali"]
    this.umgebungTab = this.umgebung.split('"', 4);

    // Wir benötigen den 4. Eintrag (Index 3)
    this.gesellschaft = this.umgebungTab[3];

    if (this.gesellschaft.valueOf() === this.generali.valueOf() )
    {
      kz = '00';
      console.log('Compare-Treffer Generali');
      }
    else{
      console.log('Compare-Daneben Generali');
    }
    return kz;
  }
}

