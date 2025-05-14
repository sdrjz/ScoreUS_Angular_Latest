import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreusTargetScoreCommodityComponent } from './scoreus-target-score-commodity.component';

describe('ScoreusTargetScoreCommodityComponent', () => {
  let component: ScoreusTargetScoreCommodityComponent;
  let fixture: ComponentFixture<ScoreusTargetScoreCommodityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreusTargetScoreCommodityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreusTargetScoreCommodityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
