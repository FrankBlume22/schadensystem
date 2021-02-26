import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Schaden } from 'src/app/shared/schaden';
import { SchadenStoreService } from 'src/app/shared/schaden-store.service';
import { SchadenKlasse } from 'src/app/shared/schaden.klasse';

@Component({
  selector: 'sd-edit-schaden',
  templateUrl: './edit-schaden.component.html',
  styleUrls: ['./edit-schaden.component.css']
})
export class EditSchadenComponent implements OnInit {
  schaden: Schaden;
  // Den Schaden lesen wir asynchron ein
  schaeden$: Observable<SchadenKlasse[]>;

  constructor(
    private ss: SchadenStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  updateSchaden(schaden: Schaden) {
    /*this.bs.update(book).subscribe(() => {
      this.router.navigate(
        ['../../..', 'books', book.isbn],
        { relativeTo: this.route }
      );
    });*/

    // Wir kommen von diesem Pfad: GEV/EDIT/123456789 (Beispiel)
    // Wir wollen zu diesem Pfad: GEV/123456789
    // Also: "zwei hoch" (zu GEV/) und eine SDNR "runter"
    this.router.navigate(
      ['../..', schaden.sdnr],
      { relativeTo: this.route }
    );
    console.log('Update-Durchlauf');
    console.log(schaden);
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('sdnr')),
      switchMap((sdnr: string) => this.ss.getSingleInterface(sdnr))
    )
    .subscribe(response => this.schaden = response);

    const params = this.route.snapshot.paramMap;
    const sdnrEdit = params.get('sdnr');

    this.schaeden$ = this.ss.getSingleObservable(sdnrEdit);
  }
}
