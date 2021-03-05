import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Vertrag } from '../shared/vertrag';

@Injectable({
  providedIn: 'root'
})
export class VertragStoreService {
  private zustaendigAPI = 'http://localhost:3000';

  constructor(
    private schadenHttp: HttpClient
  ) { }

  getSingle(vnr: string): Observable<Vertrag>{
    return this.schadenHttp.get<Vertrag>(
      `${this.zustaendigAPI}/vertrag/${vnr}`
      ).pipe(
        retry(3),
        catchError(this.errorHandler)
      );
   }

   private errorHandler(error: HttpErrorResponse): Observable<any>{
    console.error('Fehler aufgetreten im SchadenStoreService');
    return throwError(error);
  }
}
