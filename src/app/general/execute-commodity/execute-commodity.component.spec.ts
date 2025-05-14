import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteCommodityComponent } from './execute-commodity.component';

describe('ExecuteCommodityComponent', () => {
  let component: ExecuteCommodityComponent;
  let fixture: ComponentFixture<ExecuteCommodityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecuteCommodityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteCommodityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
