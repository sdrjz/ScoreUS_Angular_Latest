import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterbyDropdownComponent } from './filterby-dropdown.component';

describe('FilterbyDropdownComponent', () => {
  let component: FilterbyDropdownComponent;
  let fixture: ComponentFixture<FilterbyDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterbyDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterbyDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
