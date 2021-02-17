import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Schaden } from './shared/schaden';
import { SchadenStoreService } from './shared/schaden-store.service';

@Component({
  selector: 'sd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SchadenSystem';

  schaden: Schaden[] = [];

  constructor(private ss: SchadenStoreService){}

  ngOnInit() {
     this.ss.getAll().subscribe(res => this.schaden = res);
     console.log(this.schaden);
   }
}
