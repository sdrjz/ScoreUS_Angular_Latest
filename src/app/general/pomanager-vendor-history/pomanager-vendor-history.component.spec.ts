import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomanagerVendorHistoryComponent } from './pomanager-vendor-history.component';

describe('PomanagerVendorHistoryComponent', () => {
  let component: PomanagerVendorHistoryComponent;
  let fixture: ComponentFixture<PomanagerVendorHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PomanagerVendorHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PomanagerVendorHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
