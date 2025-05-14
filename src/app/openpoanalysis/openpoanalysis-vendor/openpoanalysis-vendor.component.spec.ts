import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenpoanalysisVendorComponent } from './openpoanalysis-vendor.component';

describe('OpenpoanalysisVendorComponent', () => {
  let component: OpenpoanalysisVendorComponent;
  let fixture: ComponentFixture<OpenpoanalysisVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenpoanalysisVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenpoanalysisVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
