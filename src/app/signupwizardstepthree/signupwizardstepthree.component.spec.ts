import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupwizardstepthreeComponent } from './signupwizardstepthree.component';

describe('SignupwizardstepthreeComponent', () => {
  let component: SignupwizardstepthreeComponent;
  let fixture: ComponentFixture<SignupwizardstepthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupwizardstepthreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupwizardstepthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
