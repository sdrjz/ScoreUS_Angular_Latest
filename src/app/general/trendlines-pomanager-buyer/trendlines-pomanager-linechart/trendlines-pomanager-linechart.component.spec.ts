import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendlinesPomanagerLinechartComponent } from './trendlines-pomanager-linechart.component';

describe('TrendlinesPomanagerLinechartComponent', () => {
  let component: TrendlinesPomanagerLinechartComponent;
  let fixture: ComponentFixture<TrendlinesPomanagerLinechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendlinesPomanagerLinechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendlinesPomanagerLinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
