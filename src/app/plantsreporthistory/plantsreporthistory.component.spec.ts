import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsreporthistoryComponent } from './plantsreporthistory.component';

describe('PlantsreporthistoryComponent', () => {
  let component: PlantsreporthistoryComponent;
  let fixture: ComponentFixture<PlantsreporthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantsreporthistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsreporthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
