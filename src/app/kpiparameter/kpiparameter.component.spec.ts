import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiparameterComponent } from './kpiparameter.component';

describe('KpiparameterComponent', () => {
  let component: KpiparameterComponent;
  let fixture: ComponentFixture<KpiparameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpiparameterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiparameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
