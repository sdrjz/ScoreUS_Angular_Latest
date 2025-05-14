import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoOpenOrderReportComponent } from './po-open-order-report.component';

describe('PoOpenOrderReportComponent', () => {
  let component: PoOpenOrderReportComponent;
  let fixture: ComponentFixture<PoOpenOrderReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoOpenOrderReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoOpenOrderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
