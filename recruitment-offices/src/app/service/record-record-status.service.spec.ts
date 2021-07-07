import { TestBed, inject } from '@angular/core/testing';

import { RecordRecordStatusService } from './record-record-status.service';

describe('RecordRecordStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecordRecordStatusService]
    });
  });

  it('should be created', inject([RecordRecordStatusService], (service: RecordRecordStatusService) => {
    expect(service).toBeTruthy();
  }));
});
