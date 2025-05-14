import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommoditiesreporthistoryComponent } from './commoditiesreporthistory.component';

describe('CommoditiesreporthistoryComponent', () => {
  let component: CommoditiesreporthistoryComponent;
  let fixture: ComponentFixture<CommoditiesreporthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommoditiesreporthistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommoditiesreporthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
