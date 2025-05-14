import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenpoanalysisBuyerComponent } from './openpoanalysis-buyer.component';

describe('OpenpoanalysisBuyerComponent', () => {
  let component: OpenpoanalysisBuyerComponent;
  let fixture: ComponentFixture<OpenpoanalysisBuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenpoanalysisBuyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenpoanalysisBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
