import { TestBed } from '@angular/core/testing';

import { VnrExistService } from './vnr-exist.service';

describe('VnrExistService', () => {
  let service: VnrExistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VnrExistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
