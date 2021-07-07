import { TestBed, inject } from '@angular/core/testing';

import { SubmissionRecordService } from './submission-record.service';

describe('SubmissionRecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubmissionRecordService]
    });
  });

  it('should be created', inject([SubmissionRecordService], (service: SubmissionRecordService) => {
    expect(service).toBeTruthy();
  }));
});
