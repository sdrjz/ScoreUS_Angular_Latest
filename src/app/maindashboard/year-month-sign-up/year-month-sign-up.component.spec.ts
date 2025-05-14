import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearMonthSignUpComponent } from './year-month-sign-up.component';

describe('YearMonthSignUpComponent', () => {
  let component: YearMonthSignUpComponent;
  let fixture: ComponentFixture<YearMonthSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearMonthSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearMonthSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
