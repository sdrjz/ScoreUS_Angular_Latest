import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentpaynowDialogComponent } from './paymentpaynow-dialog.component';

describe('PaymentpaynowDialogComponent', () => {
  let component: PaymentpaynowDialogComponent;
  let fixture: ComponentFixture<PaymentpaynowDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentpaynowDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentpaynowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
