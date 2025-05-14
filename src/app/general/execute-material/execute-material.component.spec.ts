import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteMaterialComponent } from './execute-material.component';

describe('ExecuteMaterialComponent', () => {
  let component: ExecuteMaterialComponent;
  let fixture: ComponentFixture<ExecuteMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecuteMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
