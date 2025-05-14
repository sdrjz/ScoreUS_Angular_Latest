import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiparametersettingComponent } from './kpiparametersetting.component';

describe('KpiparametersettingComponent', () => {
  let component: KpiparametersettingComponent;
  let fixture: ComponentFixture<KpiparametersettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpiparametersettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiparametersettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
