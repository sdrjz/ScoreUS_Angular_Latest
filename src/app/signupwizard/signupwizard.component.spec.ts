import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupwizardComponent } from './signupwizard.component';

describe('SignupwizardComponent', () => {
  let component: SignupwizardComponent;
  let fixture: ComponentFixture<SignupwizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupwizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupwizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
