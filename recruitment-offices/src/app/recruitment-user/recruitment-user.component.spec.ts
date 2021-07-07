import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentUserComponent } from './recruitment-user.component';

describe('RecruitmentUserComponent', () => {
  let component: RecruitmentUserComponent;
  let fixture: ComponentFixture<RecruitmentUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitmentUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
