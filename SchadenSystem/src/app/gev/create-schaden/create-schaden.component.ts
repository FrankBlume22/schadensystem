import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Schaden } from 'src/app/shared/schaden';
import { SchadenKlasse } from 'src/app/shared/schaden.klasse';

@Component({
  selector: 'sd-create-schaden',
  templateUrl: './create-schaden.component.html',
  styleUrls: ['./create-schaden.component.css']
})
export class CreateSchadenComponent implements OnInit {
  // tslint:disable-next-line: new-parens
  schaden = new SchadenKlasse('', '', '', '', '', '', '');

  constructor(
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
    this.schaden.sdnr = '999888721';
    this.schaden.id = '998888721';
  }
  // tslint:disable-next-line: typedef
  createSchaden(schaden: Schaden) {
    console.log('Create-Durchlauf');
    console.log(schaden);

    this.router.navigate(
      ['../../..'],
      { relativeTo: this.route }
    );
  }
}
