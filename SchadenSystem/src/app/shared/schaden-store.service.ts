import { Injectable } from '@angular/core';
import { Schaden } from './schaden';
import { SchadenRohdaten } from './schaden-rohdaten';
import { SchadenFactory } from './schaden-factory';
import { HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { throwError,Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SchadenStoreService {
  private schadenAPI = 'http://localhost:3000';

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
  getSingle(sdnrEingang: string): Observable<Schaden>{
    let sdnrParameter = new HttpParams().set('sdnr', sdnrEingang);
    console.log(sdnrParameter);
    return this.schadenHttp.get<SchadenRohdaten>(
      `${this.schadenAPI}/schaden`, {params:sdnrParameter}
      ).pipe(
        retry(3),
        map(sd => SchadenFactory.vonDenRohdaten(sd)),
        catchError(this.errorHandler)
      );
 }

  private errorHandler(error: HttpErrorResponse): Observable<any>{
    console.error('Fehler aufgetreten im SchadenStoreService');
    return throwError(error);
  }
}
