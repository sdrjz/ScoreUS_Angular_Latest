import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapoutVendorFiledComponent } from './mapout-vendor-filed.component';

describe('MapoutVendorFiledComponent', () => {
  let component: MapoutVendorFiledComponent;
  let fixture: ComponentFixture<MapoutVendorFiledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapoutVendorFiledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapoutVendorFiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
