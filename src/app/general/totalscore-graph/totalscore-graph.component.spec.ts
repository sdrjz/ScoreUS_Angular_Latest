import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalscoreGraphComponent } from './totalscore-graph.component';

describe('TotalscoreGraphComponent', () => {
  let component: TotalscoreGraphComponent;
  let fixture: ComponentFixture<TotalscoreGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalscoreGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalscoreGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
