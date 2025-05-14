import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PouserdashboardLinechartComponent } from './pouserdashboard-linechart.component';

describe('PouserdashboardLinechartComponent', () => {
  let component: PouserdashboardLinechartComponent;
  let fixture: ComponentFixture<PouserdashboardLinechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PouserdashboardLinechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PouserdashboardLinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
