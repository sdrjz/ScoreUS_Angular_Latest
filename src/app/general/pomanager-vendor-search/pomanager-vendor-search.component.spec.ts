import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomanagerVendorSearchComponent } from './pomanager-vendor-search.component';

describe('PomanagerVendorSearchComponent', () => {
  let component: PomanagerVendorSearchComponent;
  let fixture: ComponentFixture<PomanagerVendorSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PomanagerVendorSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PomanagerVendorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
