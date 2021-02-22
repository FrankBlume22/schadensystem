import { Injectable } from '@angular/core';

// Muss als Provider in der app.module.ts eingetragen werden !!
@Injectable()
export class DataStore {
    public data: any;
    public constructor() { }
}
