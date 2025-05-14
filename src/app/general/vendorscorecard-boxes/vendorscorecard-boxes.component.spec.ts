import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorscorecardBoxesComponent } from './vendorscorecard-boxes.component';

describe('VendorscorecardBoxesComponent', () => {
  let component: VendorscorecardBoxesComponent;
  let fixture: ComponentFixture<VendorscorecardBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorscorecardBoxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorscorecardBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
