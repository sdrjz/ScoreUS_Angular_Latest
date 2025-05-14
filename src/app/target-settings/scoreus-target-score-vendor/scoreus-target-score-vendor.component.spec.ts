import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreusTargetScoreVendorComponent } from './scoreus-target-score-vendor.component';

describe('ScoreusTargetScoreVendorComponent', () => {
  let component: ScoreusTargetScoreVendorComponent;
  let fixture: ComponentFixture<ScoreusTargetScoreVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreusTargetScoreVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreusTargetScoreVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
