import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorexecutiveComponent } from './vendorexecutive.component';

describe('VendorexecutiveComponent', () => {
  let component: VendorexecutiveComponent;
  let fixture: ComponentFixture<VendorexecutiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorexecutiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorexecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
