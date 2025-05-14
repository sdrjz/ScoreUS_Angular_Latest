import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomanagerVendorDeliveryoptionComponent } from './pomanager-vendor-deliveryoption.component';

describe('PomanagerVendorDeliveryoptionComponent', () => {
  let component: PomanagerVendorDeliveryoptionComponent;
  let fixture: ComponentFixture<PomanagerVendorDeliveryoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PomanagerVendorDeliveryoptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PomanagerVendorDeliveryoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
