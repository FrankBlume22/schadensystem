import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'sd-fehlermeldungen',
  templateUrl: './fehlermeldungen.component.html',
  styleUrls: ['./fehlermeldungen.component.css']
})
export class FehlermeldungenComponent implements OnInit {

  @Input() control: AbstractControl;
  @Input() controlName: string;

  private allMessages = {
    sdnr: {
      sdnrFormat: 'Die SDNR muss aus 9 Zeichen bestehen',
      sdnrNum: 'Die SDNR muss numerisch sein',
      sdnrVorhanden: 'Die SDNR ist unbekannt'
    },
    vnr: {
      vnrFormat: 'Die VNR muss aus 14 Zeichen bestehen.',
      required: 'Die VNR muss vorhanden sein'
    },
    sdTyp: {
      required: 'Der Schadentyp muss vorhanden sein'
    },
    sdUrsache: {
      required: 'Die Schadenursache muss vorhanden sein'
    },
    sparte: {
      required: 'Die Sparte muss vorhanden sein'
    }
  };
  constructor() { }

  ngOnInit(): void {
  }
  errorsForControl(): string[] {
    const messages = this.allMessages[this.controlName];

    if (
      !this.control ||
      !this.control.errors ||
      !messages ||
      !this.control.dirty
    ) { return null; }

    return Object.keys(this.control.errors)
      .map(err => messages[err]);
  }
}
