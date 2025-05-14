import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastdueordersreporthistoryComponent } from './pastdueordersreporthistory.component';

describe('PastdueordersreporthistoryComponent', () => {
  let component: PastdueordersreporthistoryComponent;
  let fixture: ComponentFixture<PastdueordersreporthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastdueordersreporthistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastdueordersreporthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
