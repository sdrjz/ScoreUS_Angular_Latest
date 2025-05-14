import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomanagerTablechartComponent } from './pomanager-tablechart.component';

describe('PomanagerTablechartComponent', () => {
  let component: PomanagerTablechartComponent;
  let fixture: ComponentFixture<PomanagerTablechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PomanagerTablechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PomanagerTablechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
