import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendlinesPomanagerAverageLinechartComponent } from './trendlines-pomanager-average-linechart.component';

describe('TrendlinesPomanagerAverageLinechartComponent', () => {
  let component: TrendlinesPomanagerAverageLinechartComponent;
  let fixture: ComponentFixture<TrendlinesPomanagerAverageLinechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendlinesPomanagerAverageLinechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendlinesPomanagerAverageLinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
