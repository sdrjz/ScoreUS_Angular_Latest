import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsreporthistoryComponent } from './vendorsreporthistory.component';

describe('VendorsreporthistoryComponent', () => {
  let component: VendorsreporthistoryComponent;
  let fixture: ComponentFixture<VendorsreporthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorsreporthistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsreporthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
