import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardcheckmailDialogComponent } from './wizardcheckmail-dialog.component';

describe('WizardcheckmailDialogComponent', () => {
  let component: WizardcheckmailDialogComponent;
  let fixture: ComponentFixture<WizardcheckmailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardcheckmailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardcheckmailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
