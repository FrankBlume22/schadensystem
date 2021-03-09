import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Schaden } from 'src/app/shared/schaden';
import { SchadenKlasse } from 'src/app/shared/schaden.klasse';

@Component({
  selector: 'sd-schaden-form',
  templateUrl: './schaden-form.component.html',
  styleUrls: ['./schaden-form.component.css']
})
export class SchadenFormComponent implements OnInit, OnChanges {
  schadenForm: FormGroup;

  @Input() schadenKlasse: SchadenKlasse;
  @Output() submitSchaden = new EventEmitter<Schaden>();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(): void {
    this.initForm();
    this.setFormValues(this.schadenKlasse);
  }

  // tslint:disable-next-line: typedef
  private setFormValues(schaden: SchadenKlasse) {
    this.schadenForm.setValue({
      sdTyp: schaden.sdTyp,
      sdUrsache: schaden.sdUrsache,
      sparte: schaden.sparte,
      vnr: schaden.vnr
    });
  }

  // Liegt bereits ein initialisiertes Formular vor,
  // dann verlassen wir die Initialisierung sofort
  // tslint:disable-next-line: typedef
  initForm(){
    if (this.schadenForm) {
      return;
    }
    else
    {
      this.initFormBuilder();
    }
 }

  // tslint:disable-next-line: typedef
  initFormBuilder(){
    this.schadenForm = this.fb.group({
       sdTyp: [{ value: '', disabled: false }, [
         Validators.required
         ],
         // asynchrone Validatoren
       ],
       sdUrsache: [{ value: '', disabled: false }, [
         Validators.required
         ],
         // asynchrone Validatoren
       ],
       sparte: [{ value: '', disabled: false }, [
        Validators.required
        ],
        // asynchrone Validatoren
      ],
      vnr: [{ value: this.schadenKlasse.vnr, disabled: false }, [
        Validators.required
        ],
        // asynchrone Validatoren
      ],
   });
  }

  // tslint:disable-next-line: typedef
  submitForm() {
    const formValue = this.schadenForm.value;

    // Das Interface "Schaden" muss einmal initialisiert werden !!
    const newSchaden: Schaden = {
      id: '',
      geskz: '',
      sdnr: '',
      sdTyp: '',
      sdUrsache: '',
      sparte: '',
      vnr: ''
    };

    // Wir bauen es aus den Formulardaten und der Schadenklasse
    // (die uns übergeben wurde) zusammen, da gesKz und SDNR
    // keine Formulardaten sind (bleiben konstant !!)
    newSchaden.sdTyp = formValue.sdTyp;
    newSchaden.sdUrsache = formValue.sdUrsache;
    newSchaden.sparte = formValue.sparte;
    newSchaden.vnr = formValue.vnr;
    newSchaden.geskz = this.schadenKlasse.geskz;
    newSchaden.sdnr = this.schadenKlasse.sdnr;
    newSchaden.id = this.schadenKlasse.id;

    this.submitSchaden.emit(newSchaden);
    this.schadenForm.reset();
  }
}
