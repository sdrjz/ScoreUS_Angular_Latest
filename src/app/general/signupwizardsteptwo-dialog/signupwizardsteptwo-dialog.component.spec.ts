import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupwizardsteptwoDialogComponent } from './signupwizardsteptwo-dialog.component';

describe('SignupwizardsteptwoDialogComponent', () => {
  let component: SignupwizardsteptwoDialogComponent;
  let fixture: ComponentFixture<SignupwizardsteptwoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupwizardsteptwoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupwizardsteptwoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
