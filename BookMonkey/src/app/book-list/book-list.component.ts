import { Component, OnInit, Output, DebugEventListener, EventEmitter } from '@angular/core';
                           // Output, DebugEventListener sind NEU
import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];   // ACHTUNG : Abweichung von der Vorlage im Buch = books: Book[];
  @Output() showDetailsEvent = new EventEmitter<Book>(); // Eigenschaft showDetailsEvent
     // Wird ein Buch in der Liste angeklickt, soll ein Event nach oben in die
     // Hauptkomponente geschickt werden.
     // Der name des Propertys ist automatisch der Name des Events.
     // Um das Event auszulösen erzeugen wir einen EventEmitter.
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.books = [
      {
        isbn: '9783864906466',
        title: 'Angular',
        authors: ['Ferdinand Malcher', 'Johannes Hoppe', 'Danny Koppenhagen'],
        published: new Date(2019, 4, 30),
        subtitle: 'Grundlagen, fortgeschrittene Themen und Best Practices - mit NativeScript und NgRx',
        rating: 5,
        thumbnails: [{
          url: 'https://ng-buch.de/buch1.jpg',
          title: 'Buchcover'
        }],
        description: 'Die Autoren führen Sie mit einem anspruchsvollen Beispielprojekt durch die Welt von Angular...'
      },
      {
        isbn: '9783864903274',
        title: 'React',
        authors: ['Oliver Zeigermann', 'Nils Hartmann'],
        published: new Date(2016, 6, 17),
        subtitle: 'Die praktische Einführung in React, React Router und Redux',
        rating: 3,
        thumbnails: [{
          url: 'https://ng-buch.de/buch2.jpg',
          title: 'Buchcover'
        }],
        description: 'React ist ein JavaScript-Framework zur Entwicklung von Benutzeroberflächen...'
      }
    ];
  }
     // Die Methode showDetails sorgt schließlich dafür, das ein konkretes Buch-Objekt auf die
     // Reise geschickt wird.
     // tslint:disable-next-line: typedef
     showDetails(book: Book){
    this.showDetailsEvent.emit(book);
  }
}
