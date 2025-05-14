import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenordersreporthistoryComponent } from './openordersreporthistory.component';

describe('OpenordersreporthistoryComponent', () => {
  let component: OpenordersreporthistoryComponent;
  let fixture: ComponentFixture<OpenordersreporthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenordersreporthistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenordersreporthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
