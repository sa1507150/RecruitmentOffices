import { TestBed, inject } from '@angular/core/testing';

import { OfficeServiceService } from './office-service.service';

describe('OfficeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfficeServiceService]
    });
  });

  it('should be created', inject([OfficeServiceService], (service: OfficeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
