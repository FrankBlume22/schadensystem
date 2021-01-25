import { Component, OnInit} from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';  // Neu hinzu gekommen

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];   // ACHTUNG : Abweichung von der Vorlage im Buch = books: Book[];

  constructor(private bs: BookStoreService){}
  // Wir nutzen den Zugriffsmodifier "private", und das Property "bs" wird
  // automatisch deklariert UND initialisert (Constructor Injection)

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.books = this.bs.getAll();
    // Der Konstruktor hat bereits das Objekt "bs" des Service BookStoreService aufgebaut.
    // Jetzt holen wir die Tabelle der Bücher aus dem Service und speichern sie in unserer Komponente
  }
}
