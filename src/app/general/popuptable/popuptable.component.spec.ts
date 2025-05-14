import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopuptableComponent } from './popuptable.component';

describe('PopuptableComponent', () => {
  let component: PopuptableComponent;
  let fixture: ComponentFixture<PopuptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopuptableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopuptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
