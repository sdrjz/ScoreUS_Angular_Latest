import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorScoreComponentComponent } from './vendor-score-component.component';

describe('VendorScoreComponentComponent', () => {
  let component: VendorScoreComponentComponent;
  let fixture: ComponentFixture<VendorScoreComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorScoreComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorScoreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
