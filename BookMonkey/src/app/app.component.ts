import { Component } from '@angular/core';
import { Book } from './shared/book'; // Import des Interfaces Book

type ViewState = 'list' | 'details'; // Property mit den möglichen beiden Zuständen

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  book!: Book;   // ACHTUNG: Abweichung vom Buch --> book: Book;
                 // Die Methode showDetails empfängt ein Book-Objekt als  Event-Payload
                 // Für den Aufbau der Detailseite brauchen wir ein Book-Objekt,
                 // welches später über ein Property-Binding an die Detailkomponente übergeben wird.
  viewState: ViewState = 'list'; // Da beim ersten Laden der Komponente noch keine Aktion durchgeführt wurde,
                                 // setzen wir initial den Wert der Liste
  // Um zwischen den Zuständen 'list' und 'details' zu wechseln, sollen die beiden Kindkomponenten (Liste oder Details)
  // später ein Event werfen. Um auf diese Events zu reagieren, führen wir zwei neue Methoden ein.
  // Sie sollen den Wert im viewState ändern, um die passende Komponente anzuzeigen
  // tslint:disable-next-line: typedef
  showList(){
    this.viewState = 'list';
  }
  // tslint:disable-next-line: typedef
  showDetails(book: Book){
    this.book = book;
    this.viewState = 'details';
  }
}
