import { Component, OnInit} from '@angular/core';
import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';  // Neu hinzu gekommen
import { Observable } from 'rxjs'; // Neu mit Iteration 5

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  //books: Book[] = [];        // ALT: Bis Iteration 4b
  books$: Observable<Book[]>;  // NEU: Ab Iteration 5

  constructor(private bs: BookStoreService){}
  // Wir nutzen den Zugriffsmodifier "private", und das Property "bs" wird
  // automatisch deklariert UND initialisert (Constructor Injection)

  // tslint:disable-next-line: typedef
  ngOnInit() {
   //this.bs.getAll().subscribe(res => this.books = res); // ALT: Bis Iteration 4b
    this.books$ = this.bs.getAll(); // NEU: Ab Iteration 5 -> Async-Pipe
  }
}
