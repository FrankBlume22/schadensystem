import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book!: Book;
  isbnUebergabe = ' ';

  constructor(
    private bs: BookStoreService,
    private route: ActivatedRoute,
    private router: Router          // Neu mit Iteration 3
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    this.isbnUebergabe = '';
    this.isbnUebergabe = params.get('isbn');
    this.bs.getSingle(this.isbnUebergabe).subscribe(b => this.book = b);
  }

  /*// tslint:disable-next-line: typedef
  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    this.bs.getSingle(params.get('isbn'))
      .subscribe(b => this.book = b);
  }*/

  // tslint:disable-next-line: typedef
  getRating(num: number) {
    return new Array(num);
  }

  // tslint:disable-next-line: typedef
  removeBook(){
    if (confirm('Buch wirklich löschen?')){
      this.bs.remove(this.book.isbn).subscribe( res => this.router.navigate(
        ['../'],
        { relativeTo: this.route}
        )
      );
    }
  }
}
