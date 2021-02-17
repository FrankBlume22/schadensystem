import { TestBed } from '@angular/core/testing';

import { SchadenStoreService } from './schaden-store.service';

describe('SchadenStoreService', () => {
  let service: SchadenStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchadenStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
