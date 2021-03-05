import { TestBed } from '@angular/core/testing';

import { VertragStoreService } from './vertrag-store.service';

describe('VertragStoreService', () => {
  let service: VertragStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VertragStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
