import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorTotalScoreComponent } from './vendor-total-score.component';

describe('VendorTotalScoreComponent', () => {
  let component: VendorTotalScoreComponent;
  let fixture: ComponentFixture<VendorTotalScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorTotalScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorTotalScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
