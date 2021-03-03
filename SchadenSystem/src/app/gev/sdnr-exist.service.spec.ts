import { TestBed } from '@angular/core/testing';

import { SdnrExistService } from './sdnr-exist.service';

describe('SdnrExistService', () => {
  let service: SdnrExistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdnrExistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
