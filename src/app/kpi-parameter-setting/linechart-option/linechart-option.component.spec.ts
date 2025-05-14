import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinechartOptionComponent } from './linechart-option.component';

describe('LinechartOptionComponent', () => {
  let component: LinechartOptionComponent;
  let fixture: ComponentFixture<LinechartOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinechartOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinechartOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
