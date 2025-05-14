import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablewithpaginationComponent } from './datatablewithpagination.component';

describe('DatatablewithpaginationComponent', () => {
  let component: DatatablewithpaginationComponent;
  let fixture: ComponentFixture<DatatablewithpaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatablewithpaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatablewithpaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
