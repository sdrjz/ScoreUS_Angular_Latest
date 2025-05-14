import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialScorecardTableComponent } from './material-scorecard-table.component';

describe('MaterialScorecardTableComponent', () => {
  let component: MaterialScorecardTableComponent;
  let fixture: ComponentFixture<MaterialScorecardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialScorecardTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialScorecardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
