import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenpoanalysisPiechartComponent } from './openpoanalysis-piechart.component';

describe('OpenpoanalysisPiechartComponent', () => {
  let component: OpenpoanalysisPiechartComponent;
  let fixture: ComponentFixture<OpenpoanalysisPiechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenpoanalysisPiechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenpoanalysisPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
