import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Schaden } from 'src/app/shared/schaden';
import { SchadenStoreService } from 'src/app/shared/schaden-store.service';
import { SchadenKlasse } from 'src/app/shared/schaden.klasse';

@Component({
  selector: 'sd-schaden-details',
  templateUrl: './schaden-details.component.html',
  styleUrls: ['./schaden-details.component.css']
})
export class SchadenDetailsComponent implements OnInit {
  private schadenAPI = 'http://localhost:3000';
  schaden!: Schaden;
  schadennummer = '' ;
  schadenKlasse: SchadenKlasse;
  sdnrEingang: string;

  constructor(
    private ss: SchadenStoreService,
    private route: ActivatedRoute,
    private router: Router,
    private schadenHttp: HttpClient
  ) { }

  ngOnInit() {
    //this.getSingleSchadenViaKlasse();
    //this.getSingleSchadenViaInterface();
    this.getSingleSchadenIntern();
  }

  // GET-Aufruf MIT Zugriff auf die Schaden-Factory.
  // Zusätzlich nutzen wir nun das Schaden-Interface (mit Transformation)
  // Dann funktioniert das Template nicht !!
  public getSingleSchadenViaInterface(){
    const params = this.route.snapshot.paramMap;
    this.ss.getSingleInterface(params.get('sdnr'))
      .subscribe(
        sd => {this.schaden = sd;
               console.log(this.schaden);
      });
  }

  // GET-Aufruf MIT Zugriff auf die Schaden-Factory.
  // Zusätzlich nutzen wir nun die Schaden-Klasse (mit Transformation)
  // Funktioniert auch nicht !!
  public getSingleSchadenViaKlasse(){
    const params = this.route.snapshot.paramMap;
    this.ss.getSingleKlasse(params.get('sdnr'))
      .subscribe(
        sd => {this.schadenKlasse = sd;
               console.log(this.schadenKlasse);
      });
  }

  // GET-Aufruf OHNE Zugriff auf die Schaden-Factory mit
  // Nutzung der ECHTEN Schaden-Klasse
  private getSingleSchadenIntern(){
  const params = this.route.snapshot.paramMap;
  this.sdnrEingang = params.get('sdnr');
  const sdnrParameter = new HttpParams().set('sdnr', this.sdnrEingang);

  this.schadenHttp.get<SchadenKlasse>(this.ss.getSingleURL(), {params: sdnrParameter})
     .subscribe(
          response => {
          console.log(response);
          this.schadenKlasse = response;
       }
     );
  }
  removeSchaden(){
    if (confirm('Schaden wirklich löschen?')){
      const params = this.route.snapshot.paramMap;
      const sdnrLoeschen = params.get('sdnr');
      this.ss.remove(sdnrLoeschen).subscribe( res => this.router.navigate(
        ['../'],
        { relativeTo: this.route}
        )
      );
    }
  }
}
