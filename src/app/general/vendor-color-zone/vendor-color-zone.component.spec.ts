import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorColorZoneComponent } from './vendor-color-zone.component';

describe('VendorColorZoneComponent', () => {
  let component: VendorColorZoneComponent;
  let fixture: ComponentFixture<VendorColorZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorColorZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorColorZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
