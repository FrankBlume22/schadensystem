import { TestBed } from '@angular/core/testing';

import { SdnrExistValidatorService } from './sdnr-exist-validator.service';

describe('SdnrExistValidatorService', () => {
  let service: SdnrExistValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdnrExistValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
