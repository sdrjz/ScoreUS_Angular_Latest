import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupwizardstepfourComponent } from './signupwizardstepfour.component';

describe('SignupwizardstepfourComponent', () => {
  let component: SignupwizardstepfourComponent;
  let fixture: ComponentFixture<SignupwizardstepfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupwizardstepfourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupwizardstepfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
