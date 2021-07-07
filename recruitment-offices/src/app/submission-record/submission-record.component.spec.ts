import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionRecordComponent } from './submission-record.component';

describe('SubmissionRecordComponent', () => {
  let component: SubmissionRecordComponent;
  let fixture: ComponentFixture<SubmissionRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
