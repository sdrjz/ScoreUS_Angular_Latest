import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenpotrendlinesuseradminComponent } from './openpotrendlinesuseradmin.component';

describe('OpenpotrendlinesuseradminComponent', () => {
  let component: OpenpotrendlinesuseradminComponent;
  let fixture: ComponentFixture<OpenpotrendlinesuseradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenpotrendlinesuseradminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenpotrendlinesuseradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
