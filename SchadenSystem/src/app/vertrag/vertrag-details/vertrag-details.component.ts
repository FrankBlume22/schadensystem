import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vertrag } from 'src/app/shared/vertrag';
import { VertragStoreService } from '../vertrag-store.service';

@Component({
  selector: 'sd-vertrag-details',
  templateUrl: './vertrag-details.component.html',
  styleUrls: ['./vertrag-details.component.css']
})
export class VertragDetailsComponent implements OnInit {
  vertrag$: Observable<Vertrag>;
  constructor(
    private vs: VertragStoreService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.vertrag$ = this.vs.getSingle(params.get('vnr'));
  }
}
