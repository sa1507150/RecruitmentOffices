import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeSubmissionsComponent } from './office-submissions.component';

describe('OfficeSubmissionsComponent', () => {
  let component: OfficeSubmissionsComponent;
  let fixture: ComponentFixture<OfficeSubmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeSubmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
