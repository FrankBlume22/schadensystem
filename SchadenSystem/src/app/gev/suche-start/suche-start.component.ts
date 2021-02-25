import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Suche } from 'src/app/gev/suche';
import { SchadenStoreService } from 'src/app/shared/schaden-store.service';
import { SchadenKlasse } from 'src/app/shared/schaden.klasse';
import { EingabeObgrValidator } from '../eingabe-obgr-validator';

@Component({
  selector: 'sd-suche-start',
  templateUrl: './suche-start.component.html',
  styleUrls: ['./suche-start.component.css']
})
export class SucheStartComponent implements OnInit, OnChanges {
  sucheForm: FormGroup;
  suche: Suche;

  // Den Schaden lesen wir asynchron ein
  schaden$: Observable<SchadenKlasse[]>;

  sdnr: string;
  vnr: string;

  sdnrGesperrt = false;
  vnrGesperrt = false;

  titel: string;
  url: string;
  href = '';
  umgebung: string;
  sdnrVorhanden: boolean;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private ss: SchadenStoreService

    // private sdnrExistsValidator: SdnrExistValidatorService,
    // private dataStorage: DataStore
  ) { }

  ngOnInit(): void {
     this.umgebungSetzen();
     this.initForm();
  }
  ngOnChanges(): void {
    this.initForm();
    this.setFormValues(this.suche);
  }

  // Jede Änderung wird in die suche-Klasse umgeschrieben
  // tslint:disable-next-line: typedef
  private setFormValues(suche: Suche) {
     this.sucheForm.patchValue(suche);
  }

  // tslint:disable-next-line: typedef
  taste(keyEvent: KeyboardEvent){
    const formValue = this.sucheForm.value;
    const sdnr = formValue.sdnr;
    const vnr = formValue.vnr;
    if (sdnr.length > 0){
       this.vnrGesperrt = true;
       console.log('vnr gesperrt');
      }
    else{
      this.vnrGesperrt = false;
      console.log('vnr geoeffnet');
    }
    if (vnr.length > 0){
      this.sdnrGesperrt = true;
      console.log('sdnr gesperrt');
    }
    else{
      this.sdnrGesperrt = false;
      console.log('sdnr geoffnet');
    }
  }
  // tslint:disable-next-line: typedef
  initForm(){
     if (this.sucheForm){return; }
  /*     Einzeln ohne FormBuilder
         this.sucheForm = new FormGroup({
         sdnr: new FormControl(''),
         vnr: new FormControl('')
      });  */
     this.initFormBuilder();
  }
  // tslint:disable-next-line: typedef
  initFormBuilder(){
    console.log('Init-Durchlauf');
    this.sucheForm = this.fb.group({
       sdnr: [{ value: '', disabled: this.sdnrGesperrt }, [
         EingabeObgrValidator.sdnrNum,
         EingabeObgrValidator.sdnrFormat
         ],
         // this.sdnrVorhanden ? null : [this.sdnrExistsValidator]
       ],
       vnr: [{ value: '', disabled: this.vnrGesperrt }, [
         EingabeObgrValidator.vnrFormat
         ],
         //
       ],
     });
  }

  // Wir schreiben die aktuellen Inhalte des Formulars in eine
  // lokale Variable um.
  // tslint:disable-next-line: typedef
  suchenObgr() {
    const formValue = this.sucheForm.value;
    console.log('Suchen Button');
    console.log(formValue.sdnr);
    console.log(formValue.vnr);
    this.sdnrGesperrt = false;
    this.vnrGesperrt = false;

    this.sucheForm.reset();
    this.initFormBuilder();

    this.sdnr = formValue.sdnr;
    this.vnr  = formValue.vnr;

    if (this.sdnr.length === 9)
    {this.schadenHolen(); }
    else
    {this.vnrHolen(); }
  }
  // tslint:disable-next-line: typedef
  schadenHolen()
  {
    /*this.dataStorage.data = {
      umgebung: this.umgebung
    };*/
    this.schaden$ = this.ss.getSingleObservable(this.sdnr);
  }
  // tslint:disable-next-line: typedef
  vnrHolen()
  {
    console.log('VNR Button');
  }
  // tslint:disable-next-line: typedef
  umgebungSetzen() {
    this.href = this.router.url;
    if (this.href === '/gev') {
      this.umgebung = 'generali';
      this.titel = 'Schadensystem der Generali';
      this.url = './../../../assets/imgages/gev_logo.jpg';
    }
    if (this.href === '/div') {
      this.umgebung = 'dialog';
      this.titel = 'Schadensystem der Dialog';
      this.url = './../../../assets/imgages/div_logo.jpg';
    }
  }
}




