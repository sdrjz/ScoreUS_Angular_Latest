import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtadetailComponent } from './ltadetail.component';

describe('LtadetailComponent', () => {
  let component: LtadetailComponent;
  let fixture: ComponentFixture<LtadetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtadetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LtadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
