import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupchartComponent } from './popupchart.component';

describe('PopupchartComponent', () => {
  let component: PopupchartComponent;
  let fixture: ComponentFixture<PopupchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
