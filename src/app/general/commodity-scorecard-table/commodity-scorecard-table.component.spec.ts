import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityScorecardTableComponent } from './commodity-scorecard-table.component';

describe('CommodityScorecardTableComponent', () => {
  let component: CommodityScorecardTableComponent;
  let fixture: ComponentFixture<CommodityScorecardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommodityScorecardTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityScorecardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
