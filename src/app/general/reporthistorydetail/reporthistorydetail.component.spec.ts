import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporthistorydetailComponent } from './reporthistorydetail.component';

describe('ReporthistorydetailComponent', () => {
  let component: ReporthistorydetailComponent;
  let fixture: ComponentFixture<ReporthistorydetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporthistorydetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporthistorydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
