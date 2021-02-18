import { SchadenDetailsComponent } from "../schaden/schaden-details/schaden-details.component";
import { Schaden } from "./schaden";
import { SchadenRohdaten } from "./schaden-rohdaten";

export class SchadenFactory {
  static empty(): Schaden{
    return {
      sdnr: '',
      sdTyp: '',
      sdUrsache: '',
      sparte: '',
    };
  }

  // Wir lesen den Client und speichern in den Rohdaten, damit wir transformieren können.
  // Die Rohdaten kopieren wir in ein neues leeres (Schaden)-Objekt
  static vonDenRohdaten(sd: SchadenRohdaten): Schaden{
      return{
      ...sd
    };
  }
}
