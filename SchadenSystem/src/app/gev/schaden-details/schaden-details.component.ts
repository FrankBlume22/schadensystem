import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Schaden } from 'src/app/shared/schaden';

import { SchadenStoreService } from 'src/app/shared/schaden-store.service';
import { Zustaendig } from 'src/app/shared/zustaendig';
import { ZustaendigStoreService } from 'src/app/shared/zustaendig-store.service';

@Component({
  selector: 'sd-schaden-details',
  templateUrl: './schaden-details.component.html',
  styleUrls: ['./schaden-details.component.css']
})
export class SchadenDetailsComponent implements OnInit {
  // Den Schaden lesen wir asynchron ein
  schaden$: Observable<Schaden>;
  schaden: Schaden;
  zustaendig$: Observable<Zustaendig>;

  constructor(
    private ss: SchadenStoreService,
    private zs: ZustaendigStoreService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    this.schaden$ = this.ss.getSingleObservable(params.get('sdnr'));
    this.schaden$.subscribe(result => {
      this.schaden = result;
      this.zustaendig$ = this.zs.getSingle(this.ermittleId(this.schaden.sparte));
    });
   /* this.ss.getSingleKlasse(params.get('sdnr'))
      .subscribe(b => this.schaden = b);*/
  }

  ngOnChanges() {
    const params = this.route.snapshot.paramMap;
    this.schaden$ = this.ss.getSingleObservable(params.get('sdnr'));
    this.schaden$.subscribe(result => {
      this.schaden = result;
      this.zustaendig$ = this.zs.getSingle(this.ermittleId(this.schaden.sparte));
    });
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

  ermittleId(sparte: string): string{
    let id = '';
    if (sparte === 'KS') {id = '1'; }
    if (sparte === 'HS') {id = '2'; }
    if (sparte === 'SS') {id = '3'; }
    return id;
  }
}
