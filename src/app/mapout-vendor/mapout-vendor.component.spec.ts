import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapoutVendorComponent } from './mapout-vendor.component';

describe('MapoutVendorComponent', () => {
  let component: MapoutVendorComponent;
  let fixture: ComponentFixture<MapoutVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapoutVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapoutVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
