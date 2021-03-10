import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SchadenStoreService } from '../shared/schaden-store.service';
import { Schaden } from '../shared/schaden';

@Injectable({
  providedIn: 'root'
})
export class VnrExistService {
  validationError: any;
  schaeden$: Observable<Schaden[]>

  constructor(
    private ss: SchadenStoreService,
    private http: HttpClient
  ) { }

  validate(
    control: FormControl
    ): Observable<ValidationErrors | null> {
    const vnr = control.value;
    let treffer = 0;
    return this.http.get<Schaden[]>(`${this.ss.getSingleURL()}`).pipe(
        map(response => {
         // this.schaeden$ = response;
          for(let i = 0; i < response.length ; i++) {
             if (response[i].vnr === vnr)
             {
                treffer++;
             }
          }
          if (treffer > 0) {
            return (null);
          }
          else{
            this.validationError = { vnrVorhanden: { valid: false } };
            return (this.validationError);
          }
      }),
      // Wir reagieren auf den HTTP-Fehler 404 (Not found).
      // Dann setzen wir unseren eigenen Validation-Fehler
      // und geben ihn zurück
      // Ist der HTTP-Fehler UNGLEICH 404 geben wir "null" zurück
      catchError((e: HttpErrorResponse) => {
        if (e.status === 404){
           this.validationError = { vnrVorhanden: { valid: false } };
           console.log('404-durchlaufen');

           return of(this.validationError);
        }
        else
          {
            return of(null);
          }
        }
      )
    );
  }
}
