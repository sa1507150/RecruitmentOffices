import { TestBed, inject } from '@angular/core/testing';

import { RecruitmentUserService } from './recruitment-user.service';

describe('RecruitmentUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecruitmentUserService]
    });
  });

  it('should be created', inject([RecruitmentUserService], (service: RecruitmentUserService) => {
    expect(service).toBeTruthy();
  }));
});
