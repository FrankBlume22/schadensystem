import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient, HttpClientModule } from '@angular/common/http';  // Neu mit Iteration 3
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'    // Sorgt für die automatische Registrierung im Root-Modul
})
export class BookStoreService {
  private api = 'https://api3.angular-buch.com';

  constructor(private http: HttpClient){}

  getAll(): Observable<Book[]> {
    return this.http.get<any[]>(`${this.api}/books`);  // Gibt die Tabelle mit allen Büchern zurück
  }

  getSingle(isbnEingang: string): Observable<Book> {
    return this.http.get<any>(`${this.api}/book/${isbnEingang}`);   // Gibt genau EIN Buch zurück
  }

  remove(isbnLoeschen: string): Observable<any> {
    return this.http.delete(`${this.api}/book/${isbnLoeschen}`, { responseType: 'text'});
  }
}
