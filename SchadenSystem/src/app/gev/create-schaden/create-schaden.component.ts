import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Schaden } from 'src/app/shared/schaden';
import { SchadenStoreService } from 'src/app/shared/schaden-store.service';
import { SchadenKlasse } from 'src/app/shared/schaden.klasse';
import { Lfdnr } from '../lfdnr';

@Component({
  selector: 'sd-create-schaden',
  templateUrl: './create-schaden.component.html',
  styleUrls: ['./create-schaden.component.css']
})
export class CreateSchadenComponent implements OnInit {
  // tslint:disable-next-line: new-parens
  schaden = new SchadenKlasse('', '', '', '', '', '', '');
  sdnrLfdnr = '' ;
  sdnrLfdnrNumerisch = 0;
  lfdnr: Lfdnr;
  vnr = '';

  constructor(
    private ss: SchadenStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.vnr =  params['vnr'];
        this.initLeerschaden();
      })
  }

  // Wir brauchen den aktuellen INIT, da diese Felder
  // im Formular nicht gesetzt werden
  // tslint:disable-next-line: typedef
  initLeerschaden(){
    this.schaden.geskz = '00';
    this.schaden.sdnr = '999999999';
    this.schaden.id =   '999999999';
    this.schaden.vnr = this.vnr;
  }
  // tslint:disable-next-line: typedef
  createSchaden(schaden: Schaden) {
    // Hier wird es "tricky".
    // 1.) Wir ermitteln zuerst die neue lfdnr für den
    // neuen Schaden.
    // 2.) Dann legen wir den neuen Schaden an.
    // 3.) Abschließend erhöhen wir die aktuelle
    // "sdnrLfdnr" um +1 und machen dann mit dem neuen Wert
    // ein Update.
    // Es folgt ein 3-facher SUBSCRIBE !!

    // Durch das asynchrone Lesen geht IMMER nur IM subscribe !!
    // START: 1. SUBSCRIBE
    this.ss.getLfdnrAll().subscribe(response => {
      this.lfdnr = response;
      // Das Interface wurde asynchron !! geladen.
      // Dieses geben wir nun in die Methode zum Auslesen.
      this.sdnrLfdnr = this.ermittleLfdnr(this.lfdnr);
      this.sdnrSetzen(this.sdnrLfdnr, schaden);
      // Wir legen den neuen Schaden an
      this.ss.create(schaden)
      // START: 2. SUBSCRIBE
        .subscribe( () => {
        // Wir schreiben das neu aufgebaute Objekt (Schaden) in
        // das globale Schaden-Objekt
        this.schaden = schaden;
        // Wir wandeln die aktuelle lfdnr (String -> number (dezimal))
        this.sdnrLfdnrNumerisch = parseInt(this.sdnrLfdnr, 10);
        // Wir generieren die neue lfdnr
        this.sdnrLfdnrNumerisch = this.sdnrLfdnrNumerisch + 100;
        // Wir legen ein neues Interface mit der neuen LFDNR an.
        // Die Id ändert sich nie!
        const newLfdnr: Lfdnr = {
          id: '1',
          sdnr: this.sdnrLfdnrNumerisch.toString(),
        };
        // Wir überschreiben die aktuellen Werte der lfdnr in der JSON
        this.ss.updateLfdnr(newLfdnr)
          // START: 3. SUBSCRIBE
          .subscribe( () => {
          this.router.navigate(
            ['../..', this.schaden.sdnr],
            { relativeTo: this.route }
          );
        });
      });
    });
  }

  // Id und lfdnr sind immer identisch.
  // tslint:disable-next-line: typedef
  ermittleLfdnr(lfdnr: Lfdnr): string {
    this.sdnrLfdnr = lfdnr[0].sdnr;
    return this.sdnrLfdnr;
  }

  // Wir überschreiben die Init-Werte: "999999999" nun
  // mit den echten Werten.
  // tslint:disable-next-line: typedef
  sdnrSetzen(sdnrLfdnr: string, schaden: Schaden){
    schaden.sdnr = sdnrLfdnr;
    schaden.id   = sdnrLfdnr;
  }
}
