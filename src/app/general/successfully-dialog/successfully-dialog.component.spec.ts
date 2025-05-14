import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullyDialogComponent } from './successfully-dialog.component';

describe('SuccessfullyDialogComponent', () => {
  let component: SuccessfullyDialogComponent;
  let fixture: ComponentFixture<SuccessfullyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfullyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfullyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
