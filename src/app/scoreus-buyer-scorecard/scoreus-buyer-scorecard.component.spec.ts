import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreusBuyerScorecardComponent } from './scoreus-buyer-scorecard.component';

describe('ScoreusBuyerScorecardComponent', () => {
  let component: ScoreusBuyerScorecardComponent;
  let fixture: ComponentFixture<ScoreusBuyerScorecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreusBuyerScorecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreusBuyerScorecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
