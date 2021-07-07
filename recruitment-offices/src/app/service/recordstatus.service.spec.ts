import { TestBed, inject } from '@angular/core/testing';

import { RecordstatusService } from './recordstatus.service';

describe('RecordStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecordStatusService]
    });
  });

  it('should be created', inject([RecordStatusService], (service: RecordStatusService) => {
    expect(service).toBeTruthy();
  }));
});
