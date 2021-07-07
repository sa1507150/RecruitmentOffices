import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdlsaComponent } from './adlsa.component';

describe('AdlsaComponent', () => {
  let component: AdlsaComponent;
  let fixture: ComponentFixture<AdlsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdlsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdlsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
