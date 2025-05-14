import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreusCommodityScorecardComponent } from './scoreus-commodity-scorecard.component';

describe('ScoreusCommodityScorecardComponent', () => {
  let component: ScoreusCommodityScorecardComponent;
  let fixture: ComponentFixture<ScoreusCommodityScorecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreusCommodityScorecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreusCommodityScorecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
