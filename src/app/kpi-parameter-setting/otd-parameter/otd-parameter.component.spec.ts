import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtdParameterComponent } from './otd-parameter.component';

describe('OtdParameterComponent', () => {
  let component: OtdParameterComponent;
  let fixture: ComponentFixture<OtdParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtdParameterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtdParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
