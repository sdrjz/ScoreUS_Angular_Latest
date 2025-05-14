import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorCommodityComponent } from './vendor-commodity.component';

describe('VendorCommodityComponent', () => {
  let component: VendorCommodityComponent;
  let fixture: ComponentFixture<VendorCommodityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorCommodityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorCommodityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
