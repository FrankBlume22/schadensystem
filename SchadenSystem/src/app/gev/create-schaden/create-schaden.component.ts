import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  lfdnr: Lfdnr;

  constructor(
    private schadenHttp: HttpClient,
    private ss: SchadenStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initLeerschaden();
  }

  // Wir brauchen den aktuellen INIT, da diese Felder
  // im Formular nicht gesetzt werden
  // tslint:disable-next-line: typedef
  initLeerschaden(){
    this.schaden.geskz = '00';
    this.schaden.sdnr = '999999999';
    this.schaden.id =   '999999999';
  }
  // tslint:disable-next-line: typedef
  createSchaden(schaden: Schaden) {
    console.log('Create-Durchlauf');
    console.log(schaden);

    // this.lfdnr$ = this.ss.getLfdnr();
    this.ss.getLfdnrAll().subscribe(response => {
      this.lfdnr = response;
      console.log('Lfdnr-innen:');
      console.log(this.lfdnr);
      this.sdnrLfdnr = this.machWas(this.lfdnr);
      });

    console.log('Lfdnr-aussen:');
    console.log(this.lfdnr);
    console.log('sdnrLfdnr-aussen:');
    console.log(this.sdnrLfdnr);

    /*this.router.navigate(
      ['../../..'],
      { relativeTo: this.route }
    );*/
  }

  // tslint:disable-next-line: typedef
  machWas(lfdnr: Lfdnr): string {
    console.log('machWas-1:');
    console.log(lfdnr);
    console.log(lfdnr[0].id);

    const newLfdnr: Lfdnr = {
      id: '',
      sdnrLfdnr: ''
    };
    newLfdnr.id = lfdnr[0].id;
    newLfdnr.sdnrLfdnr = lfdnr[0].id;
    this.sdnrLfdnr = lfdnr[0].id;

    this.lfdnr = {...newLfdnr};

    console.log('machWas-2:');
    console.log(this.lfdnr);
    console.log(lfdnr.id);
    console.log(lfdnr.sdnrLfdnr);
    return this.sdnrLfdnr;
  }
}
