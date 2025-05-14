import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendlinesPomanagerBuyerComponent } from './trendlines-pomanager-buyer.component';

describe('TrendlinesPomanagerBuyerComponent', () => {
  let component: TrendlinesPomanagerBuyerComponent;
  let fixture: ComponentFixture<TrendlinesPomanagerBuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendlinesPomanagerBuyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendlinesPomanagerBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
