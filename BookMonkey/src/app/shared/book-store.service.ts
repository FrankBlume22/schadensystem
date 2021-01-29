import { Injectable } from '@angular/core';
import { Book } from './book';
import { BookRaw } from './book-raw';                                 // Neu mit ITeration 3b
import { BookFactory } from './book-factory';                         // Neu mit ITeration 3b
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';  // Neu mit Iteration 3
import { throwError, Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';                                 // Neu mit ITeration 3b

@Injectable({
  providedIn: 'root'    // Sorgt für die automatische Registrierung im Root-Modul
})
export class BookStoreService {
  private api = 'https://api3.angular-buch.com/secure';

  constructor(private http: HttpClient){}

  create(book: Book): Observable<any> {
    return this.http.post(
      `${this.api}/book`,
      book,
      { responseType: 'text'}
    ).pipe(
      catchError(this.errorHandler)
    );
  }

  getAll(): Observable<Book[]> {
//  return this.http.get<any[]>(`${this.api}/books`);               // ALT mit any
    return this.http.get<BookRaw[]>(`${this.api}/books`)
      .pipe(
        retry(3),
        map(booksRaw =>
          booksRaw.map(b => BookFactory.fromRaw(b)),    // Gibt die Tabelle mit allen Büchern zurück
          catchError(this.errorHandler)
      )
    );
  }

  getSingle(isbnEingang: string): Observable<Book> {
//  return this.http.get<any>(`${this.api}/book/${isbnEingang}`);   // ALT mit any
    return this.http.get<BookRaw>(
      `${this.api}/book/${isbnEingang}`
      ).pipe(
        retry(3),                                        // Versuche im Fehlerfall
        map(b => BookFactory.fromRaw(b)),                // Gibt genau EIN Buch zurück
        catchError(this.errorHandler)
        );
  }

  getAllSearch(searchTerm: string): Observable<Book[]> {
        return this.http.get<BookRaw[]>(
          `${this.api}/books/search/${searchTerm}`
          ).pipe(
            retry(3),
            map(booksRaw =>
              booksRaw.map(b => BookFactory.fromRaw(b)),    // Gibt die Tabelle mit allen Büchern zurück
              catchError(this.errorHandler)
          )
        );
      }

  remove(isbnLoeschen: string): Observable<any> {
    return this.http.delete(`${this.api}/book/${isbnLoeschen}`, { responseType: 'text'});
  }

  private errorHandler(error: HttpErrorResponse): Observable<any>{
    console.error('Fehleraufgetreten');
    return throwError(error);
  }
}
