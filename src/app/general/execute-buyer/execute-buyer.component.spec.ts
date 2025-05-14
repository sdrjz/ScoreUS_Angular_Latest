import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteBuyerComponent } from './execute-buyer.component';

describe('ExecuteBuyerComponent', () => {
  let component: ExecuteBuyerComponent;
  let fixture: ComponentFixture<ExecuteBuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecuteBuyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
