import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendlinesBuyerExecuteComponent } from './trendlines-buyer-execute.component';

describe('TrendlinesBuyerExecuteComponent', () => {
  let component: TrendlinesBuyerExecuteComponent;
  let fixture: ComponentFixture<TrendlinesBuyerExecuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendlinesBuyerExecuteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendlinesBuyerExecuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
