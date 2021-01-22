import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../shared/book'; // Import des Interfaces Book

@Component({
  selector: 'bm-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {

  @Input()
  book!: Book; // ACHTUNG: Abweichung vom Buch --> book: Book;

  ngOnInit(): void {
  }
}
// Im DOM-Property "book" (aus book-list-component) liegt jetzt über PropertyBindings jeweils ein Buch-Objekt vor
