import { TestBed, inject } from '@angular/core/testing';

import { AdlsaUserService } from './adlsa-user.service';

describe('AdlsaUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdlsaUserService]
    });
  });

  it('should be created', inject([AdlsaUserService], (service: AdlsaUserService) => {
    expect(service).toBeTruthy();
  }));
});
