import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisBuyerTableComponent } from './analysis-buyer-table.component';

describe('AnalysisBuyerTableComponent', () => {
  let component: AnalysisBuyerTableComponent;
  let fixture: ComponentFixture<AnalysisBuyerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisBuyerTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisBuyerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
