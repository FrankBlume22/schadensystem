import { Injectable } from '@angular/core';
import { Schaden } from './schaden';
import { SchadenRohdaten } from './schaden-rohdaten';
import { SchadenFactory } from './schaden-factory';
import { HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';
import { SchadenKlasse } from './schaden.klasse';
import { Lfdnr } from '../gev/lfdnr';
import { LfdnrRaw } from '../gev/lfdnr-raw';

@Injectable({
  providedIn: 'root'
})
export class SchadenStoreService {
  private schadenAPI = 'http://localhost:3000';
  // private schadenAPI = 'https://my-json-server.typicode.com/FrankBlume22/api'

  constructor(private schadenHttp: HttpClient) { }


  getAll(): Observable<Schaden[]>{
       return this.schadenHttp.get<Schaden[]>(`${this.schadenAPI}/schaden`)
       .pipe(
         retry(3),
         catchError(this.errorHandler)
         );
  }

  getSingleKlasse(sdnrEingang: string): Observable<SchadenKlasse>{
  return this.schadenHttp.get<SchadenRohdaten>(
    `${this.schadenAPI}/schaden/${sdnrEingang}`
    ).pipe(
      retry(3),
      map(sd => SchadenFactory.vonDenRohdaten(sd)),
      catchError(this.errorHandler)
    );
 }

 // Wir lesen einen Schaden mit seiner SDNR
 getSingleObservable(sdnrEingang: string): Observable<Schaden>{
  return this.schadenHttp.get<Schaden>(
    `${this.schadenAPI}/schaden/${sdnrEingang}`
    ).pipe(
      retry(3),
        catchError(this.errorHandler)
    );
 }

 // URL der Schaden-URL
 getSingleURL(): string{
  const urlString = `${this.schadenAPI}/schaden`;
  return urlString;
 }

 // String der Schaden-API
 getSingleApiPfad(): string{
  const apiString = `${this.schadenAPI}`;
  return apiString;
 }

 // Wir löschen einen Schaden
 remove(sdnrLoeschen: string): Observable<any> {
  const url = `${this.schadenAPI}/schaden/${sdnrLoeschen}`;
  return this.schadenHttp.delete(url , { responseType: 'text'});

 }

 // Update auf einen Schaden
 update(schaden: Schaden, sdnr: string): Observable<any>{
  return this.schadenHttp.put(
    `${this.schadenAPI}/schaden/${sdnr}`, schaden,
    { responseType: 'text' }
  ).pipe(
    catchError(this.errorHandler)
  );
 }

 // Neuen Schaden anlegen
 create(schaden: Schaden): Observable<any> {
  return this.schadenHttp.post(
    `${this.schadenAPI}/schaden`, schaden,
    { responseType: 'text' }
  ).pipe(
    catchError(this.errorHandler)
  );
 }
  // ------------------- VERARBEITUNG: SCHADENLFDNR ----------------------
  // Update auf einen Schaden
  updateLfdnr(lfdnr: Lfdnr): Observable<any>{
  return this.schadenHttp.put(
    `${this.schadenAPI}/schadenlfdnr/1`, lfdnr,
    { responseType: 'text' }
  ).pipe(
    catchError(this.errorHandler)
  );
 }

  // Wir lesen die aktuelle LFDNR für einen neuen Schaden
  // tslint:disable-next-line: typedef
  getLfdnrAll(): Observable<Lfdnr>{
    return this.schadenHttp.get<LfdnrRaw>(`${this.schadenAPI}/schadenlfdnr`)
    .pipe(
      retry(3),
      catchError(this.errorHandler)
      );
  }

  // ------------------- VERARBEITUNG: VALIDATOREN------------------------
  // Für Validator, ob SDNR bekannt ist
  check(sdnr: string): Observable<any> {
    console.log('sdnr-in-check');
    console.log(sdnr);
    return this.schadenHttp.get(
      `${this.schadenAPI}/schaden/${sdnr}`
    ).pipe(
      catchError(this.errorHandler)
    );
  }
  private errorHandler(error: HttpErrorResponse): Observable<any>{
    console.error('Fehler aufgetreten im SchadenStoreService');
    return throwError(error);
  }
}
