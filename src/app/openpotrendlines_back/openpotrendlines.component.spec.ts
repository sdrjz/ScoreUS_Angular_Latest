import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenpotrendlinesComponent } from './openpotrendlines.component';

describe('OpenpotrendlinesComponent', () => {
  let component: OpenpotrendlinesComponent;
  let fixture: ComponentFixture<OpenpotrendlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenpotrendlinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenpotrendlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
