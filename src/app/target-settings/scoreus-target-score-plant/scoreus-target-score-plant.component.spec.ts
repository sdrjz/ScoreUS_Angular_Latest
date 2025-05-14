import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreusTargetScorePlantComponent } from './scoreus-target-score-plant.component';

describe('ScoreusTargetScorePlantComponent', () => {
  let component: ScoreusTargetScorePlantComponent;
  let fixture: ComponentFixture<ScoreusTargetScorePlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreusTargetScorePlantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreusTargetScorePlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
