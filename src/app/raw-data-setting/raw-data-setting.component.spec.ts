import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawDataSettingComponent } from './raw-data-setting.component';

describe('RawDataSettingComponent', () => {
  let component: RawDataSettingComponent;
  let fixture: ComponentFixture<RawDataSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RawDataSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RawDataSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
