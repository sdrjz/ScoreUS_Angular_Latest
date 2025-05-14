import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtaParameterComponent } from './lta-parameter.component';

describe('LtaParameterComponent', () => {
  let component: LtaParameterComponent;
  let fixture: ComponentFixture<LtaParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtaParameterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LtaParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
