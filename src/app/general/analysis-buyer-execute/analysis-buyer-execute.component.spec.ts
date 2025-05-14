import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisBuyerExecuteComponent } from './analysis-buyer-execute.component';

describe('AnalysisBuyerExecuteComponent', () => {
  let component: AnalysisBuyerExecuteComponent;
  let fixture: ComponentFixture<AnalysisBuyerExecuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisBuyerExecuteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisBuyerExecuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
