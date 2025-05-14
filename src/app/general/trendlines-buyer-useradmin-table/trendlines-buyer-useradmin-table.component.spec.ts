import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendlinesBuyerUseradminTableComponent } from './trendlines-buyer-useradmin-table.component';

describe('TrendlinesBuyerUseradminTableComponent', () => {
  let component: TrendlinesBuyerUseradminTableComponent;
  let fixture: ComponentFixture<TrendlinesBuyerUseradminTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendlinesBuyerUseradminTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendlinesBuyerUseradminTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
