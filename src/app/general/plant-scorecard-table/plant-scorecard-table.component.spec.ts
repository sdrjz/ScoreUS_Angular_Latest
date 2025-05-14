import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantScorecardTableComponent } from './plant-scorecard-table.component';

describe('PlantScorecardTableComponent', () => {
  let component: PlantScorecardTableComponent;
  let fixture: ComponentFixture<PlantScorecardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantScorecardTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantScorecardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
