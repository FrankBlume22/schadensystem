import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Suche } from 'src/app/gev/suche';
import { Schaden } from 'src/app/shared/schaden';
import { SchadenStoreService } from 'src/app/shared/schaden-store.service';
import { EingabeObgrValidator } from '../../shared/eingabe-obgr-validator';
import { SdnrExistService } from '../sdnr-exist.service';

@Component({
  selector: 'sd-suche-start',
  templateUrl: './suche-start.component.html',
  styleUrls: ['./suche-start.component.css']
})
export class SucheStartComponent implements OnInit, OnChanges {
  sucheForm: FormGroup;
  suche: Suche;

  // Den/die Scha(e)den lesen wir asynchron ein
  schaden$: Observable<Schaden>;  // Ein Schaden zu einer SDNR
  schaeden$: Observable<Schaden[]>;  // Alle Schäden

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
    private ss: SchadenStoreService,
    private sdnrExistService: SdnrExistService
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
      }
    else{
      this.vnrGesperrt = false;
    }
    if (vnr.length > 0){
      this.sdnrGesperrt = true;
    }
    else{
      this.sdnrGesperrt = false;
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
    this.sucheForm = this.fb.group({
       sdnr: [{ value: '', disabled: this.sdnrGesperrt }, [
         EingabeObgrValidator.sdnrNum,
         EingabeObgrValidator.sdnrFormat
         ],
           [this.sdnrExistService]
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
    this.sdnrGesperrt = false;
    this.vnrGesperrt = false;

    this.sucheForm.reset();
    this.initFormBuilder();

    this.sdnr = formValue.sdnr;
    this.vnr  = formValue.vnr;

    if (this.sdnr.length === 9)
    {
      this.schadenHolen();
      // Eventuelles VNR-Objekt löschen
      this.schaeden$ = null;
    }
    else
    {
      if (this.vnr.length === 14)
      {
         this.vnrHolen();
         // Eventuelles SDNR-Objekt löschen
         this.schaden$ = null;
      }
    }
  }
  // tslint:disable-next-line: typedef
  schadenHolen()
  {
    this.schaden$ = this.ss.getSingleObservable(this.sdnr);
  }
  // tslint:disable-next-line: typedef
  vnrHolen()
  {
    this.schaeden$ = this.ss.getAll();
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




