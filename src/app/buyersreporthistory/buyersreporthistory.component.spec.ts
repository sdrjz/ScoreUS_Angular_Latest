import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyersreporthistoryComponent } from './buyersreporthistory.component';

describe('BuyersreporthistoryComponent', () => {
  let component: BuyersreporthistoryComponent;
  let fixture: ComponentFixture<BuyersreporthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyersreporthistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyersreporthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
