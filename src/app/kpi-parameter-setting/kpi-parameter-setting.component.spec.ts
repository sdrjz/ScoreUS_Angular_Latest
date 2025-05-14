import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiParameterSettingComponent } from './kpi-parameter-setting.component';

describe('KpiParameterSettingComponent', () => {
  let component: KpiParameterSettingComponent;
  let fixture: ComponentFixture<KpiParameterSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpiParameterSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiParameterSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
