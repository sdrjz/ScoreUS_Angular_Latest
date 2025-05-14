import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomanagerTablechartTwoComponent } from './pomanager-tablechart-two.component';

describe('PomanagerTablechartTwoComponent', () => {
  let component: PomanagerTablechartTwoComponent;
  let fixture: ComponentFixture<PomanagerTablechartTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PomanagerTablechartTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PomanagerTablechartTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
