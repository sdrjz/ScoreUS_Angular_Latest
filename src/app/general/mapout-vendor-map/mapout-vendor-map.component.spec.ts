import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapoutVendorMapComponent } from './mapout-vendor-map.component';

describe('MapoutVendorMapComponent', () => {
  let component: MapoutVendorMapComponent;
  let fixture: ComponentFixture<MapoutVendorMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapoutVendorMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapoutVendorMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
