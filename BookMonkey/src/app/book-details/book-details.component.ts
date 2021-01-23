import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input() book!: Book;
  @Output() showListEvent = new EventEmitter<any>();  // Eigenschaft showListEvent
     // Wird der Button angeklickt, soll ein Event nach oben in die
     // Hauptkomponente geschickt werden.
     // Der name des Propertys ist automatisch der Name des Events.
     // Um das Event auszulösen erzeugen wir einen EventEmitter (OHNE echten Parameter).

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  getRating(num: number){     // Für die Bewertung des Buchs sollen im Template Sterne angezeigt werden.
    return new Array(num);    // Die Methode gibt dazu ein Array mit leeren Elementen zurück.
  }                           // Es wird als Basis genutzt, um die Sterne mit *ngFor mehrfach anzuzeigen

  // tslint:disable-next-line: typedef
  showBookList(){
    this.showListEvent.emit(); // Die Methode löst das Event für die Elternkomponente aus,
  }                            // dass die Ansicht gewechselt werden soll

}
