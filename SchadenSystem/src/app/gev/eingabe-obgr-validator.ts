import { HttpClient } from '@angular/common/http';
import { FormControl, ValidationErrors } from '@angular/forms';
import { SchadenStoreService } from '../shared/schaden-store.service';

export class EingabeObgrValidator {

  static sdnrFormat(control: FormControl): ValidationErrors | null {
    if (!control.value) { return null; }

    const numbers = control.value.replace(/-/g, '');
    const sdnrPattern = /(^\d{9}$)/;

    if (sdnrPattern.test(numbers)) {
      return null;
    }
    else
    {
      return {sdnrFormat: { valid: false } };
    }
  }
  static vnrFormat(control: FormControl): ValidationErrors | null {
    if (!control.value) { return null; }

    const numbers = control.value.replace(/-/g, '');
    const vnrPattern = /(^\d{14}$)/;

    if (vnrPattern.test(numbers)) {
      return null;
    }
    else
    {
      return { vnrFormat: { valid: false } };
    }
  }
  static sdnrNum(control: FormControl): ValidationErrors | null {
    if (!control.value) { return null; }

    const eingabe = control.value;

    if (!eingabe.toString().match(/^[0-9]+(\.?[0-9]+)?$/))
     { return { sdnrNum: true }; }

    return null;
  }
}
