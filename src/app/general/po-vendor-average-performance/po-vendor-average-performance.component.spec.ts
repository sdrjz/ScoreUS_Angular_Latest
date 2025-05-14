import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoVendorAveragePerformanceComponent } from './po-vendor-average-performance.component';

describe('PoVendorAveragePerformanceComponent', () => {
  let component: PoVendorAveragePerformanceComponent;
  let fixture: ComponentFixture<PoVendorAveragePerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoVendorAveragePerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoVendorAveragePerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
