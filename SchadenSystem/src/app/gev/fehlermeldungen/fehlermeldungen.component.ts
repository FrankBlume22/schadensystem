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
      sdnrFormat: 'Die SDNR muss aus 9 Zeichen bestehen'
    },
    vnr: {
      vnrFormat: 'Die VNR muss aus 14 Zeichen bestehen.'
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
