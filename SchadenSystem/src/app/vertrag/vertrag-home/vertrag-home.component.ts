import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vertrag } from 'src/app/shared/vertrag';
import { SucheVertrag } from '../suche-vertrag';
import { VertragStoreService } from '../vertrag-store.service';

@Component({
  selector: 'sd-vertrag-home',
  templateUrl: './vertrag-home.component.html',
  styleUrls: ['./vertrag-home.component.css']
})
export class VertragHomeComponent implements OnInit {
  sucheForm: FormGroup;
  suche: SucheVertrag;

  // Den/die Scha(e)den lesen wir asynchron ein
  vertrag$: Observable<Vertrag>;  // Ein Schaden zu einer SDNR
  vertraege$: Observable<Vertrag[]>;  // Alle Schäden

  vnr: string;
  bearbGs: string;

  vnrGesperrt = false;
  bearbGsGesperrt = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private vs: VertragStoreService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(): void {
    this.initForm();
    this.setFormValues(this.suche);
  }

  // Jede Änderung wird in die suche-Klasse umgeschrieben
  // tslint:disable-next-line: typedef
  private setFormValues(suche: SucheVertrag) {
    this.sucheForm.patchValue(suche);
  }

  // tslint:disable-next-line: typedef
  taste(keyEvent: KeyboardEvent){
    const formValue = this.sucheForm.value;
    const vnr = formValue.vnr;
    const bearbGs = formValue.bearbGs;
    if (bearbGs.length > 0){
        this.vnrGesperrt = true;
      }
    else{
      this.vnrGesperrt = false;
    }
    if (vnr.length > 0){
      this.bearbGsGesperrt = true;
    }
    else{
      this.bearbGsGesperrt = false;
    }
 }

 // tslint:disable-next-line: typedef
 initForm(){
  if (this.sucheForm){return; }
  this.initFormBuilder();
  }

    // tslint:disable-next-line: typedef
  initFormBuilder(){
      this.sucheForm = this.fb.group({
         vnr: [{ value: '', disabled: this.vnrGesperrt }, [
           ],
           //
         ],
         bearbGs: [{ value: '', disabled: this.bearbGsGesperrt }, [
           ],
         ]
    });
  }

  // tslint:disable-next-line: typedef
  suchenObgr() {
    const formValue = this.sucheForm.value;
    this.vnrGesperrt = false;
    this.bearbGsGesperrt = false;

    this.sucheForm.reset();
    this.initFormBuilder();

    this.vnr  = formValue.vnr;
    this.bearbGs = formValue.bearbGs;

    if (this.bearbGs.length === 3)
    {
      this.bearbGsHolen();
    }
    else
    {
      if (this.vnr.length === 14)
      {
         this.vnrHolen();
      }
    }
  }
  // tslint:disable-next-line: typedef
  bearbGsHolen()
  {
    this.vertrag$ = this.vs.getSingle(this.vnr);
  }
  // tslint:disable-next-line: typedef
  vnrHolen()
  {
    this.vertrag$ = this.vs.getSingle(this.vnr);
  }

}
