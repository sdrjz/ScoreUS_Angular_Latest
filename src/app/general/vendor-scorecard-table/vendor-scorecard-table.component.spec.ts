import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorScorecardTableComponent } from './vendor-scorecard-table.component';

describe('VendorScorecardTableComponent', () => {
  let component: VendorScorecardTableComponent;
  let fixture: ComponentFixture<VendorScorecardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorScorecardTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorScorecardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
