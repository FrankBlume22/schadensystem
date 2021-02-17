import { Component, OnInit } from '@angular/core';
import { Schaden } from 'src/app/shared/schaden';
import { SchadenStoreService } from 'src/app/shared/schaden-store.service';

@Component({
  selector: 'sd-schaden-liste',
  templateUrl: './schaden-liste.component.html',
  styleUrls: ['./schaden-liste.component.css']
})
export class SchadenListeComponent implements OnInit {

  schaeden: Schaden[] = [];

  constructor(private ss: SchadenStoreService){}

  ngOnInit() {
     this.ss.getAll().subscribe(res => this.schaeden = res);
   }

}
