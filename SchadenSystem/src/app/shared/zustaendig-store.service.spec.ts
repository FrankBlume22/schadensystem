import { TestBed } from '@angular/core/testing';

import { ZustaendigStoreService } from './zustaendig-store.service';

describe('ZustaendigStoreService', () => {
  let service: ZustaendigStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZustaendigStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
