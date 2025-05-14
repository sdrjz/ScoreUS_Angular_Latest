import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenpoanalysisBarchartComponent } from './openpoanalysis-barchart.component';

describe('OpenpoanalysisBarchartComponent', () => {
  let component: OpenpoanalysisBarchartComponent;
  let fixture: ComponentFixture<OpenpoanalysisBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenpoanalysisBarchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenpoanalysisBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
