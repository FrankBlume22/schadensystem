import { ThrowStmt } from '@angular/compiler';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Suche } from 'src/app/schaden/suche';
import { DataStore } from '../../shared/data-store';
import { EingabeObgrValidator } from '../eingabe-obgr-validator';

@Component({
  selector: 'sd-suche-start',
  templateUrl: './suche-start.component.html',
  styleUrls: ['./suche-start.component.css']
})
export class SucheStartComponent implements OnInit, OnChanges {
  sucheForm: FormGroup;
  suche: Suche;

  sdnrEingabe = false;
  sdnrGesperrt = false;
  vnrEingabe = false;
  vnrGesperrt = false;

  titel: string;
  url: string;
  href = '';
  umgebung: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dataStorage: DataStore
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
    /*console.log(formValue.sdnr);
    console.log(formValue.vnr);
    console.log(sdnr.length);
    console.log(vnr.length);*/
  }
  // tslint:disable-next-line: typedef
  initForm(){
     if (this.sucheForm){return; }
  /*     Einzeln ohne FormBuilder
         this.sucheForm = new FormGroup({
         sdnr: new FormControl(' '),
         vnr: new FormControl(' ')
      });  */
     this.initFormBuilder();
  }
  // tslint:disable-next-line: typedef
  initFormBuilder(){
    console.log('Init-Durchlauf');
    this.sucheForm = this.fb.group({
       sdnr: [{ value: '', disabled: this.sdnrGesperrt }, [
         EingabeObgrValidator.sdnrFormat
         ],
         //
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
  }
  // tslint:disable-next-line: typedef
  schadenHolen()
  {
    this.dataStorage.data = {
      umgebung: this.umgebung
    };
    this.router.navigate(['../schaden']);
    console.log('SDNR Button');
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




