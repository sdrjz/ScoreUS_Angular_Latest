import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreusPlantScorecardComponent } from './scoreus-plant-scorecard.component';

describe('ScoreusPlantScorecardComponent', () => {
  let component: ScoreusPlantScorecardComponent;
  let fixture: ComponentFixture<ScoreusPlantScorecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreusPlantScorecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreusPlantScorecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
