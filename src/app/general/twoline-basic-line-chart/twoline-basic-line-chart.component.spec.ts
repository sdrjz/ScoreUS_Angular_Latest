import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwolineBasicLineChartComponent } from './twoline-basic-line-chart.component';

describe('TwolineBasicLineChartComponent', () => {
  let component: TwolineBasicLineChartComponent;
  let fixture: ComponentFixture<TwolineBasicLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwolineBasicLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwolineBasicLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
