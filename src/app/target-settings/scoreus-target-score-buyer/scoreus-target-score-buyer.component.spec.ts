import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreusTargetScoreBuyerComponent } from './scoreus-target-score-buyer.component';

describe('ScoreusTargetScoreBuyerComponent', () => {
  let component: ScoreusTargetScoreBuyerComponent;
  let fixture: ComponentFixture<ScoreusTargetScoreBuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreusTargetScoreBuyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreusTargetScoreBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
