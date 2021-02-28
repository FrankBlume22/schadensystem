import { Injectable } from '@angular/core';
import { Schaden } from './schaden';
import { SchadenRohdaten } from './schaden-rohdaten';
import { SchadenFactory } from './schaden-factory';
import { HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { throwError,Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';
import { SchadenKlasse } from './schaden.klasse';

@Injectable({
  providedIn: 'root'
})
export class SchadenStoreService {
  // private schadenAPI = 'http://localhost:3000';
  private schadenAPI = 'https://my-json-server.typicode.com/FrankBlume22/api'

  constructor(private schadenHttp: HttpClient) { }

  getAll(): Observable<Schaden[]>{
       return this.schadenHttp.get<Schaden[]>(`${this.schadenAPI}/schaden`)
       .pipe(
         retry(3),
         catchError(this.errorHandler)
         );
  }

// Wir erzeugen zuerst den (Suchparameter), den wir an die API senden.
// Dann bauen wir die URL zusammen und hängen den Suchparameter an.
// Wir empfangen ROH-Daten und transformieren in das Schaden-Interface
  getSingleInterface(sdnrEingang: string): Observable<Schaden>{
    let sdnrParameter = new HttpParams().set('sdnr', sdnrEingang);
    return this.schadenHttp.get<SchadenRohdaten>(
      `${this.schadenAPI}/schaden`, {params: sdnrParameter}
      ).pipe(
        retry(3),
        map(sd => SchadenFactory.vonDenRohdaten(sd)),
        catchError(this.errorHandler)
      );
 }

// Wir erzeugen zuerst den (Suchparameter), den wir an die API senden.
// Dann bauen wir die URL zusammen und hängen den Suchparameter an.
// Wir empfangen ROH-Daten und trasnformieren in das Schaden-Interface
getSingleKlasse(sdnrEingang: string): Observable<SchadenKlasse>{
  const sdnrParameter = new HttpParams().set('sdnr', sdnrEingang);
  return this.schadenHttp.get<SchadenRohdaten>(
    `${this.schadenAPI}/schaden`, {params: sdnrParameter}
    ).pipe(
      retry(3),
      map(sd => SchadenFactory.vonDenRohdaten(sd)),
      catchError(this.errorHandler)
    );
}

// Wir erzeugen zuerst den (Suchparameter), den wir an die API senden.
// Dann bauen wir die URL zusammen und hängen den Suchparameter an.
// Wir empfangen ROH-Daten und trasnformieren in das Schaden-Interface
getSingleObservable(sdnrEingang: string): Observable<SchadenKlasse[]>{
  const sdnrParameter = new HttpParams().set('sdnr', sdnrEingang);
  return this.schadenHttp.get<SchadenRohdaten[]>(
    `${this.schadenAPI}/schaden`, {params: sdnrParameter}
    ).pipe(
      retry(3),
      map(vonDenRohdaten =>
        vonDenRohdaten.map(sd => SchadenFactory.vonDenRohdaten(sd)),
        catchError(this.errorHandler)
      )
    );
}

// Wir erzeugen zuerst den (Suchparameter), den wir an die API senden.
// Dann bauen wir die URL zusammen und hängen den Suchparameter an.
// Wir empfangen ROH-Daten und transformieren in das Schaden-Interface
getAllGEV(gesKzEingang: string): Observable<SchadenKlasse[]> {
  console.log(gesKzEingang) ;
  const gesKzParameter = new HttpParams().set('geskz', gesKzEingang);
  return this.schadenHttp.get<SchadenRohdaten[]>(
    `${this.schadenAPI}/schaden`, {params: gesKzParameter}
    ).pipe(
      retry(3),
      map(vonDenRohdaten =>
      vonDenRohdaten.map(sd => SchadenFactory.vonDenRohdaten(sd)),
      catchError(this.errorHandler)
       )
    );
}

// URL der Schaden-Objekte
getSingleURL(): string{
  const urlString = `${this.schadenAPI}/schaden`;
  return urlString;
}

/*remove(sdnrLoeschen: string): Observable<any> {
//  const url = `${this.schadenAPI}/schaden/${sdnrLoeschen}`;
  // const url = `${this.schadenAPI}/schaden/sdnr/${sdnrLoeschen}`;
  return this.schadenHttp.delete(`${this.schadenAPI}/schaden/sdnr/${sdnrLoeschen}`, { responseType: 'text'});
  // return this.schadenHttp.delete(url, {
   // headers: new HttpHeaders({ 'Content-Type': 'application/json' })//
}*/

remove(sdnrLoeschen: string): Observable<any> {
  const url = `${this.schadenAPI}/schaden?sdnr=${sdnrLoeschen}`;
//  return this.schadenHttp.delete(url , { responseType: 'text'});
  return this.schadenHttp.delete(url , { responseType: 'text'});

}

update(schaden: Schaden): Observable<any>{
  const sdnrParameter = new HttpParams().set('?sdnr', schaden.sdnr);
  return this.schadenHttp.put(
    `${this.schadenAPI}/schaden${sdnrParameter}`, schaden,
    { responseType: 'text' }
  ).pipe(
    catchError(this.errorHandler)
  );
}
private errorHandler(error: HttpErrorResponse): Observable<any>{
    console.error('Fehler aufgetreten im SchadenStoreService');
    return throwError(error);
  }
}
