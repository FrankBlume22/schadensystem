import { Component, Input, OnInit } from '@angular/core';
import { Schaden } from 'src/app/shared/schaden';

@Component({
  selector: 'sd-schaden-liste-item',
  templateUrl: './schaden-liste-item.component.html',
  styleUrls: ['./schaden-liste-item.component.css']
})
export class SchadenListeItemComponent implements OnInit {

  @Input()
  schaden!: Schaden;

  ngOnInit(): void {
  }

}
