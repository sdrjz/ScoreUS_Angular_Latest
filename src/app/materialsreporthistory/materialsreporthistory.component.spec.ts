import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsreporthistoryComponent } from './materialsreporthistory.component';

describe('MaterialsreporthistoryComponent', () => {
  let component: MaterialsreporthistoryComponent;
  let fixture: ComponentFixture<MaterialsreporthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialsreporthistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsreporthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
