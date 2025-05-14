import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoVendorManagerComponent } from './po-vendor-manager.component';

describe('PoVendorManagerComponent', () => {
  let component: PoVendorManagerComponent;
  let fixture: ComponentFixture<PoVendorManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoVendorManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoVendorManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
