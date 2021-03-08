import { Component, Input, OnInit } from '@angular/core';
import { Vertrag } from 'src/app/shared/vertrag';

@Component({
  selector: 'sd-vertrag-liste-item',
  templateUrl: './vertrag-liste-item.component.html',
  styleUrls: ['./vertrag-liste-item.component.css']
})
export class VertragListeItemComponent implements OnInit {

  @Input()
  vertrag: Vertrag;
  constructor() { }

  ngOnInit(): void {
  }

}
