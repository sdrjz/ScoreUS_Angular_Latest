import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpvParameterComponent } from './ppv-parameter.component';

describe('PpvParameterComponent', () => {
  let component: PpvParameterComponent;
  let fixture: ComponentFixture<PpvParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpvParameterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PpvParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
