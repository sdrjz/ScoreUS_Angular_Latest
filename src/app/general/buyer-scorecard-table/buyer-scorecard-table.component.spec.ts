import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerScorecardTableComponent } from './buyer-scorecard-table.component';

describe('BuyerScorecardTableComponent', () => {
  let component: BuyerScorecardTableComponent;
  let fixture: ComponentFixture<BuyerScorecardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerScorecardTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerScorecardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
