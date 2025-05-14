import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelplanDialogComponent } from './cancelplan-dialog.component';

describe('CancelplanDialogComponent', () => {
  let component: CancelplanDialogComponent;
  let fixture: ComponentFixture<CancelplanDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelplanDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelplanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
