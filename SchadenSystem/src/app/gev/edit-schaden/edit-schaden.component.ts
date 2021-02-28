import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Schaden } from 'src/app/shared/schaden';
import { SchadenStoreService } from 'src/app/shared/schaden-store.service';

@Component({
  selector: 'sd-edit-schaden',
  templateUrl: './edit-schaden.component.html',
  styleUrls: ['./edit-schaden.component.css']
})
export class EditSchadenComponent implements OnInit {
  schaden: Schaden;
  sdnr: string;
  sdnrVorn: string;
  sdnrHinten: string;

  // Den Schaden lesen wir asynchron ein
  schaeden$: Observable<Schaden>;

  constructor(
    private ss: SchadenStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // tslint:disable-next-line: typedef
  updateSchaden(schaden: Schaden, sdnr: string) {
    console.log('Update-Durchlauf');
    console.log(schaden);

     this.ss.update(schaden, this.sdnr).subscribe(() => {  });

    // Wir kommen von diesem Pfad: GEV/EDIT/123456789 (Beispiel)
    // Wir wollen zu diesem Pfad: GEV/123456789
    // Also: "zwei hoch" (zu GEV/) und eine SDNR "runter"
    this.router.navigate(
      ['../..', schaden.sdnr],
      { relativeTo: this.route }
    );
  }

  ngOnInit(): void {
   /* this.route.paramMap.pipe(
      tslint:disable-next-line: no-shadowed-variable
      map(params => params.get('sdnr')),
      switchMap((sdnr: string) => this.ss.getSingleObservable(sdnr))
    )
    .subscribe(response => this.schaden = response);
    */
    const params = this.route.snapshot.paramMap;
    const sdnrEdit = params.get('sdnr');
    this.sdnr =  params.get('sdnr');
    this.schaeden$ = this.ss.getSingleObservable(sdnrEdit);
  }
}
