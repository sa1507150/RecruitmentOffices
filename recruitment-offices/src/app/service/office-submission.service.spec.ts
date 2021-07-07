import { TestBed, inject } from '@angular/core/testing';

import { OfficeSubmissionService } from './office-submission.service';

describe('OfficeSubmissionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfficeSubmissionService]
    });
  });

  it('should be created', inject([OfficeSubmissionService], (service: OfficeSubmissionService) => {
    expect(service).toBeTruthy();
  }));
});
