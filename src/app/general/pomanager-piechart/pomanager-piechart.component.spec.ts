import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomanagerPiechartComponent } from './pomanager-piechart.component';

describe('PomanagerPiechartComponent', () => {
  let component: PomanagerPiechartComponent;
  let fixture: ComponentFixture<PomanagerPiechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PomanagerPiechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PomanagerPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
