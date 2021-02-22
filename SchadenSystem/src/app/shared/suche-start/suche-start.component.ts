import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DataStore } from '../data-store';

@Component({
  selector: 'sd-suche-start',
  templateUrl: './suche-start.component.html',
  styleUrls: ['./suche-start.component.css']
})
export class SucheStartComponent implements OnInit {
  titel: string;
  url: string;
  href = '';
  umgebung: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataStorage: DataStore
  ) { }

  ngOnInit(): void {
     this.umgebungSetzen();
  }

  // tslint:disable-next-line: typedef
  umgebungSetzen() {
    this.href = this.router.url;
    if (this.href === '/gev') {
      this.umgebung = 'generali';
      this.titel = 'Schadensystem der Generali';
      this.url = './../../../assets/imgages/gev_logo.jpg';
    }
    if (this.href === '/div') {
      this.umgebung = 'dialog';
      this.titel = 'Schadensystem der Dialog';
      this.url = './../../../assets/imgages/div_logo.jpg';
    }
  }
  // tslint:disable-next-line: typedef
  navigate()
  {
    this.dataStorage.data = {
      umgebung: this.umgebung
    };
    this.router.navigate(['../schaden']);
  }
}



