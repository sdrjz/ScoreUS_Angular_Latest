import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcrParameterComponent } from './ncr-parameter.component';

describe('NcrParameterComponent', () => {
  let component: NcrParameterComponent;
  let fixture: ComponentFixture<NcrParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcrParameterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NcrParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
