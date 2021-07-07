import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordRecordStatusComponent } from './record-record-status.component';

describe('RecordRecordStatusComponent', () => {
  let component: RecordRecordStatusComponent;
  let fixture: ComponentFixture<RecordRecordStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordRecordStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordRecordStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
