import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutePlantComponent } from './execute-plant.component';

describe('ExecutePlantComponent', () => {
  let component: ExecutePlantComponent;
  let fixture: ComponentFixture<ExecutePlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutePlantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutePlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
