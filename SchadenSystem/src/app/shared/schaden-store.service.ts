import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Schaden } from './schaden';
import { throwError,Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SchadenStoreService {
  private schadenAPI = 'http://localhost:3000/Schaden';

  constructor(private schadenHttp: HttpClient) { }

  getAll(){
       return this.schadenHttp.get<Schaden[]>(this.schadenAPI)
       .pipe(
         retry(3),
         catchError(this.errorHandler)
         );
  }
  private errorHandler(error: HttpErrorResponse): Observable<any>{
    console.error('Fehler aufgetreten im SchadenStoreService');
    return throwError(error);
  }
}
