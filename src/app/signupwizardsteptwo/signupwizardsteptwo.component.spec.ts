import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupwizardsteptwoComponent } from './signupwizardsteptwo.component';

describe('SignupwizardsteptwoComponent', () => {
  let component: SignupwizardsteptwoComponent;
  let fixture: ComponentFixture<SignupwizardsteptwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupwizardsteptwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupwizardsteptwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
