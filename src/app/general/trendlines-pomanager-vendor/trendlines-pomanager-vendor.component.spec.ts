import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendlinesPomanagerVendorComponent } from './trendlines-pomanager-vendor.component';

describe('TrendlinesPomanagerVendorComponent', () => {
  let component: TrendlinesPomanagerVendorComponent;
  let fixture: ComponentFixture<TrendlinesPomanagerVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendlinesPomanagerVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendlinesPomanagerVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
