import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SchadenStoreService } from '../shared/schaden-store.service';

@Injectable({
  providedIn: 'root'
})
export class SdnrExistValidatorService {

  constructor(private bs: SchadenStoreService) { }

  validate(
    control: FormControl
  ): Observable<ValidationErrors | null> {
    return this.bs.check(control.value).pipe(
      map(exists => (exists === false) ? null : {
          sdnrExists: { valid: true }
      }),
      catchError(() => of(null))
    );
  }}
