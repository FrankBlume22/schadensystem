import { Lfdnr } from '../gev/lfdnr';
import { LfdnrRaw } from '../gev/lfdnr-raw';
import { Schaden } from './schaden';
import { SchadenRohdaten } from './schaden-rohdaten';

export class SchadenFactory {
  static empty(): Schaden{
    return {
      id: '',
      geskz: '',
      sdnr: '',
      sdTyp: '',
      sdUrsache: '',
      sparte: '',
      vnr: ''
    };
  }

  // Wir lesen den Client und speichern in den Rohdaten, damit wir transformieren können.
  // Die Rohdaten kopieren wir in ein neues leeres (Schaden)-Objekt
  static vonDenRohdaten(sd: SchadenRohdaten): Schaden{
      return{
      ...sd
    };
  }
  static fromLfdnrRaw(l: LfdnrRaw): Lfdnr{
    return {
      ...l
    };
  }
}
