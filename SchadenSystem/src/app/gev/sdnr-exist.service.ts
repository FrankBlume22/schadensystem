import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SchadenStoreService } from '../shared/schaden-store.service';

@Injectable({
  providedIn: 'root'
})
export class SdnrExistService {
  validationError: any;

  constructor(
    private ss: SchadenStoreService,
    private http: HttpClient
  ) { }

  // tslint:disable-next-line: typedef
  sucheSchaden(sdnr: string) {
    const url = this.ss.getSingleURL();
    // Verzögern
    return timer(100)
      .pipe(
        switchMap(() => {
          // Suche nach der Schadennummer
          return this.http.get<any>(`${url}/${sdnr}`);
        })
      );
  }
  validate(
    control: FormControl
  ): Observable<ValidationErrors | null> {
    const sdnr = control.value;
    // Wenn wir einen Schaden finden, dann ist
    // "schadenExists" = true und wir geben "null" zurück
    return this.sucheSchaden(sdnr).pipe(
        map((schadenExists: boolean) => {
          if (schadenExists) {
            return null ;
          }
      }),
      // Wir reagieren auf den HTTP-Fehler 404 (Not found).
      // Dann setzen wir unseren eigenen Validation-Fehler
      // und geben ihn zurück
      // Ist der HTTP-Fehler UNGLEICH 404 geben wir "null" zurück
      catchError((e: HttpErrorResponse) => {
        if (e.status === 404){
           this.validationError = { sdnrVorhanden: { valid: false } };

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
