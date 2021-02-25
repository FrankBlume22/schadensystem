import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SchadenStoreService } from 'src/app/shared/schaden-store.service';
import { SchadenKlasse } from 'src/app/shared/schaden.klasse';

@Component({
  selector: 'sd-schaden-details',
  templateUrl: './schaden-details.component.html',
  styleUrls: ['./schaden-details.component.css']
})
export class SchadenDetailsComponent implements OnInit {
  // Den Schaden lesen wir asynchron ein
  schaeden$: Observable<SchadenKlasse[]>;

  constructor(
    private ss: SchadenStoreService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    console.log(params.get('sdnr'));
    this.schaeden$ = this.ss.getSingleObservable(params.get('sdnr'));
   /* this.ss.getSingleKlasse(params.get('sdnr'))
      .subscribe(b => this.schaden = b);*/
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
