import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'sd-vertrag-fehlermeldungen',
  templateUrl: './vertrag-fehlermeldungen.component.html',
  styleUrls: ['./vertrag-fehlermeldungen.component.css']
})
export class VertragFehlermeldungenComponent implements OnInit {

  @Input() control: AbstractControl;
  @Input() controlName: string;

  private allMessages = {
    vnr: {
      vnrFormat: 'Die VNR muss aus 14 Zeichen bestehen.',
      vnrNum: 'Die VNR muss numerisch sein',
      required: 'Die VNR muss vorhanden sein'
    },
    bearbGs: {
      bearbGsFormat: 'Die bearbeitende Gesellschaft muss aus 3 Zeichen bestehen.',
      bearbGsNum: 'Die bearbeitende Gesellschaft muss numerisch sein',
      required: 'Die bearbeitende Gesellschaft muss vorhanden sein'
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
