import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { SchadenStoreService } from 'src/app/shared/schaden-store.service';
import { SchadenKlasse } from 'src/app/shared/schaden.klasse';

@Component({
  selector: 'sd-edit-schaden',
  templateUrl: './edit-schaden.component.html',
  styleUrls: ['./edit-schaden.component.css']
})
export class EditSchadenComponent implements OnInit {
  schaden: SchadenKlasse;

  constructor(
    private ss: SchadenStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('Kann editieren');
    this.route.paramMap.pipe(
      map(params => params.get('isbn')),
      switchMap((sdnr: string) => this.ss.getSingleKlasse(sdnr))
    )
    .subscribe(response => this.schaden = response);
  }

}
