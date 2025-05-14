import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsWeightComponent } from './metrics-weight.component';

describe('MetricsWeightComponent', () => {
  let component: MetricsWeightComponent;
  let fixture: ComponentFixture<MetricsWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetricsWeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricsWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
