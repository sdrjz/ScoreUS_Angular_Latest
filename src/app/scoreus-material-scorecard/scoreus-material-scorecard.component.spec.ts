import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreusMaterialScorecardComponent } from './scoreus-material-scorecard.component';

describe('ScoreusMaterialScorecardComponent', () => {
  let component: ScoreusMaterialScorecardComponent;
  let fixture: ComponentFixture<ScoreusMaterialScorecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreusMaterialScorecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreusMaterialScorecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
