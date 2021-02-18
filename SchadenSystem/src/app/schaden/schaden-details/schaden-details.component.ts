import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Schaden } from 'src/app/shared/schaden';
import { SchadenStoreService } from 'src/app/shared/schaden-store.service';

@Component({
  selector: 'sd-schaden-details',
  templateUrl: './schaden-details.component.html',
  styleUrls: ['./schaden-details.component.css']
})
export class SchadenDetailsComponent implements OnInit {
  schaden: Schaden;
  schadennummer = '' ;

  constructor(
    private ss: SchadenStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getSingleSchaden();
  }

  public getSingleSchaden(){
    const params = this.route.snapshot.paramMap;
    this.ss.getSingle(params.get('sdnr'))
      .subscribe(
        sd => {this.schaden = sd;
          console.log(this.schaden);
          });
  }
}
