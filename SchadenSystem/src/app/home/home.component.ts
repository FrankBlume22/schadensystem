import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url = './../images/generali.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
