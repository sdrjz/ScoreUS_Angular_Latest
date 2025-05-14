import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByDropdownTwoComponent } from './filter-by-dropdown-two.component';

describe('FilterByDropdownTwoComponent', () => {
  let component: FilterByDropdownTwoComponent;
  let fixture: ComponentFixture<FilterByDropdownTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByDropdownTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByDropdownTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
