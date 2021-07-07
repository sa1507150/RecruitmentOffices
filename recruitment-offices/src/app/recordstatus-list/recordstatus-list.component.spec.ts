import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordStatusListComponent } from './recordstatus-list.component';

describe('RecordStatusListComponent', () => {
  let component: RecordStatusListComponent;
  let fixture: ComponentFixture<RecordStatusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordStatusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
