import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Schaden } from 'src/app/shared/schaden';

import { SchadenStoreService } from 'src/app/shared/schaden-store.service';

@Component({
  selector: 'sd-schaden-details',
  templateUrl: './schaden-details.component.html',
  styleUrls: ['./schaden-details.component.css']
})
export class SchadenDetailsComponent implements OnInit {
  // Den Schaden lesen wir asynchron ein
  schaeden$: Observable<Schaden>;

  constructor(
    private ss: SchadenStoreService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    this.schaeden$ = this.ss.getSingleObservable(params.get('sdnr'));
   /* this.ss.getSingleKlasse(params.get('sdnr'))
      .subscribe(b => this.schaden = b);*/
  }

  ngOnChanges() {
    const params = this.route.snapshot.paramMap;
    this.schaeden$ = this.ss.getSingleObservable(params.get('sdnr'));
   /* this.ss.getSingleKlasse(params.get('sdnr'))
      .subscribe(b => this.schaden = b);*/
  }

  // tslint:disable-next-line: typedef
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
