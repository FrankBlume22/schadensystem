import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Zustaendig } from './zustaendig';

@Injectable({
  providedIn: 'root'
})
export class ZustaendigStoreService {
  private zustaendigAPI = 'http://localhost:3000';

  constructor(
    private schadenHttp: HttpClient
  ) { }

  getSingle(idEingang: string): Observable<Zustaendig>{
    return this.schadenHttp.get<Zustaendig>(
      `${this.zustaendigAPI}/zustaendig/${idEingang}`
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
