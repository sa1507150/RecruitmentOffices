import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdlsaUserComponent } from './adlsa-user.component';

describe('AdlsaUserComponent', () => {
  let component: AdlsaUserComponent;
  let fixture: ComponentFixture<AdlsaUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdlsaUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdlsaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
