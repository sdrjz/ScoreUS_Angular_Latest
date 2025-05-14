import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VnedortableComponent } from './vnedortable.component';

describe('VnedortableComponent', () => {
  let component: VnedortableComponent;
  let fixture: ComponentFixture<VnedortableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VnedortableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VnedortableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
