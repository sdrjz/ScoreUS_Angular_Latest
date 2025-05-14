import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreusTargetScoreMaterialsComponent } from './scoreus-target-score-materials.component';

describe('ScoreusTargetScoreMaterialsComponent', () => {
  let component: ScoreusTargetScoreMaterialsComponent;
  let fixture: ComponentFixture<ScoreusTargetScoreMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreusTargetScoreMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreusTargetScoreMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
